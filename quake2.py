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

# cursor = con.cursor()
# #xecute query
# cursor.execute("select location, year, percentage_of_babies from birth_data")
# rows = cursor.fetchall()
# for r in rows:
#    print (f"location {r[0]} year {r[1]} percentage_of_babies {r[2]} ")


con.close()