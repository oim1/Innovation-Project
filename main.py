from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector 

app = FastAPI()

origins = ["*"]

# MySQL database connection configuration
db_config = {
    "host": "localhost",
    "user": "minhphan",
    "password": "quangminh6624",
    "database": "mydb"
}


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/jsonData")
async def funcTest():
    jsonResult = {
        "name": "Your name",
        "Uni-year": 2,
        "isStudent": True,
        "hobbies": ["reading", "swimming"]
    }

    return jsonResult


@app.get("/students/")
def get_students():
    try:
        
        connection = mysql.connector.connect(**db_config)# Establish a database connection        
        cursor = connection.cursor()# Create a cursor to execute SQL queries
        query = "SELECT * FROM student"# Define the SQL query to retrieve data (e.g., all students)
        cursor.execute(query)# Execute the SQL query
        
        result = cursor.fetchall()# Fetch all the rows
        
        students = [dict(zip(cursor.column_names, row)) for row in result]# Convert the result to a list of dictionaries
        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return students

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
