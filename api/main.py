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
    'host': '127.0.0.1',
    'user': 'root',
    'passwd': 'root',
    'db': 'marketplace',
    'port': 8001,
}

# Create a connection to the database
conn = mysql.connector.connect(**db_config)

class Product(BaseModel):
    product_name: str
    product_description: str
    product_price: str
    image_link: str

@app.get("/product/")
def read_item():
    cursor = conn.cursor()
    query = "SELECT * FROM product"
    cursor.execute(query)
    rows = cursor.fetchall()
    result = []
    for row in rows:
        d = {}
    for i, col in enumerate(cursor.description):
        d[col[0]] = row[i]
    result.append(d)
    cursor.close()
    product = json.dumps(result)
    return product



@app.get("/chainData")
async def getData():

    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))

    #Reads content of file
    with open("../contracts/Escrow.sol", "r") as file:
        simple_storage_file = file.read()

uvicorn.run(app, host="localhost", port=8000)