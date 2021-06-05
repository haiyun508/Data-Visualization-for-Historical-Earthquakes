import pandas as pd
import psycopg2

# Read sqlite query results into a pandas DataFrame
con = psycopg2.connect(
    host = "127.0.0.1",
    database = "earthquakes",
    user = "postgres",
    password = "2544",
    port="5432"
)

df = pd.read_sql_query("SELECT * from earthquake", con)

# Verify that result of SQL query is stored in the dataframe
print(df.head())


con.close()