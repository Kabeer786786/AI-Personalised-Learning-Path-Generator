from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variables
api_key = os.getenv("OPENAI_API_KEY")

# Initialize the model with the API key
llm = ChatOpenAI(model="o1-mini", api_key=api_key)

# Read the content from output.txt
with open('output.txt', 'r') as file:
    input_text = file.read()

# Invoke the model with the read content
response = llm.invoke(input_text)

# Overwrite response.ejs with the response content
with open('views/response.ejs', 'w') as response_file:
    response_file.write(response.content)
