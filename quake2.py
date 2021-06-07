import pandas as pd
import psycopg2
import psycopg2.extras
from flask import Flask
from flask import render_template

# create instance of Flask app
app = Flask(__name__)

# @app.route("/")

# Read sqlite query results into a pandas DataFrame
con = psycopg2.connect(
    host = "127.0.0.1",
    database = "earthquakes",
    user = "postgres",
    password = "2544",
    port="5432"
)

db_cursor = con.cursor()


# ------------------
# method 1: query directly
# ------------------

# try:
#     db_cursor.execute("""SELECT * from earthquake LIMIT 10""")
# except:
#     print("I can't SELECT from bar")

# query_results = db_cursor.fetchall()
# print(query_results)


# ------------------
# method 2: query and store in dataframe
# ------------------

# def create_pandas_table(sql_query, database = con):
#     table = pd.read_sql_query(sql_query, database)
#     return table

# # Utilize the create_pandas_table function to create a Pandas data frame
# # Store the data as a variable
# quake_info = create_pandas_table("SELECT * from earthquake LIMIT 10")
# print(quake_info)



# WORKS!!!!!
# create route that renders index.html template
@app.route("/", methods=['post', 'get'])
def index():
    db_cursor.execute("select * from earthquake LIMIT 15")
    result = db_cursor.fetchall()
    return render_template("results.html", data=result)


if __name__ == "__main__":
    app.run(debug=True)


con.commit()

db_cursor.close()
con.close()