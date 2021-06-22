import pandas as pd
import numpy as np
import psycopg2
import psycopg2.extras
from flask import Flask
from flask import render_template

# create instance of Flask app
app = Flask(__name__)

# Connect to postgres DB
con = psycopg2.connect(
    host = "127.0.0.1",
    database = "earthquakes",
    user = "postgres",
    password = "PASSWORD-GOES-HERE",
    port="5432"
)

db_cursor = con.cursor()

# create route that renders results.html template
@app.route("/", methods=['post', 'get'])
def index():
    db_cursor.execute("select * from earthquake LIMIT 20")
    result = db_cursor.fetchall()
    return render_template("results.html", data=result)


if __name__ == "__main__":
    app.run(debug=True)


con.commit()

db_cursor.close()
con.close()