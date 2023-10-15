from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from web3 import Web3
import os
from solcx import compile_standard, install_solc
import json
import mysql.connector

import uvicorn

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'quangminh6624',
    'db': 'cos30049',
}

# Create a connection to the database
conn = mysql.connector.connect(**db_config)

class Product(BaseModel):
    product_name: str
    product_description: str
    product_price: str
    image_link: str

@app.get("/products/")
def get_items():
    try:
        connection = mysql.connector.connect(**db_config)# Establish a database connection        
        cursor = connection.cursor()# Create a cursor to execute SQL queries
        query = "SELECT * FROM Products"# Define the SQL query to retrieve data (e.g., all students)
        cursor.execute(query)# Execute the SQL query
        
        result = cursor.fetchall()# Fetch all the rows
        
        products = [dict(zip(cursor.column_names, row)) for row in result]# Convert the result to a list of dictionaries
        # Close the cursor and the database connection
        cursor.close()
        connection.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    else:
        return products


@app.get("/getTransactions/")
def get_transaction():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        query = "SELECT * FROM Transaction"
        
        cursor.execute(query)
        result = cursor.fetchall()

        transactions = [dict(zip(cursor.column_names, row)) for row in result]
        
        cursor.close()
        connection.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    else:
        return transactions
    
@app.get("/getTransactionItem/{Trans_ID}")
def get_Transaction_Item(Trans_ID : int):
    try:

        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()


        query = f"SELECT * FROM TransactionItem where Trans_ID = {Trans_ID}"
        
        cursor.execute(query)
        result = cursor.fetchall()

        transactionsItem = [dict(zip(cursor.column_names, row)) for row in result]
        
        cursor.close()
        connection.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    else:
        return transactionsItem
    
@app.post("/createtransactions/{trans_id}")
def create_transaction():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        query = "SELECT * FROM transaction"#
        cursor.execute(query)
        
        result = cursor.fetchall()
        
        products = [dict(zip(cursor.column_names, row)) for row in result]

        cursor.close()
        connection.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    else:
        return products

@app.get("/chainData")
async def getData():

    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))

    #Reads content of file
    with open("../contracts/Escrow.sol", "r") as file:
        escrow_file = file.read()

    install_solc('0.8.0')
    compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"../contracts/Escrow.sol": {"content": escrow_file}},
        "settings": {
            "outputSelection": {
                "*": {
                    "*": ["abi", "metadata", "evm.bytecode", "evm.bytecode.sourceMap"] # output needed to interact with and deploy contract 
                }
            }
        },
    },
    solc_version="0.8.0",
    )

    #write the compiled result to a json file
    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)

    #get the bytecode and abi
    bytecode = compiled_sol["contracts"]["ContactList.sol"]["ContactList"]["evm"]["bytecode"]["object"]
    abi = json.loads(compiled_sol["contracts"]["ContactList.sol"]["ContactList"]["metadata"])["output"]["abi"]

    #Ganache connection configurations
    w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:7545"))
    chain_id = 1337
    address = "0x1e8cB93636E8C2557247a947255CA48203ED7FC9"
    private_key = "0x3be77116cc3c61f14978343339c9901b1813af0339584e10db826a3cd352ede5" 
    # Create the contract in Python
    Escrow = w3.eth.contract(abi=abi, bytecode=bytecode)
    # Get the number of latest transaction
    nonce = w3.eth.get_transaction_count(address)

    # build transaction
    transaction = Escrow.constructor().build_transaction(
    {
        "chainId": chain_id,
        "gasPrice": w3.eth.gas_price,
        "from": address,
        "nonce": nonce,
    }
    )

    # Sign the transaction
    sign_transaction = w3.eth.account.sign_transaction(transaction, private_key=private_key)

    #Send the transaction
    transaction_hash = w3.eth.send_raw_transaction(sign_transaction.rawTransaction)

    # Wait for the transaction to be mined, and get the transaction receipt
    print("Waiting for transaction to finish...")
    transaction_receipt = w3.eth.wait_for_transaction_receipt(transaction_hash)
    print(f"Done! Contract deployed to {transaction_receipt.contractAddress}")
