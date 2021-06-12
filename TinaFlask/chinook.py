import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///../Resources/chinook.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Invoices = Base.classes.invoices

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/invoices/<country><br/>"
    )


@app.route("/api/v1.0/invoices/<country>/<country2>")
def invoices(country, country2):
    # Create our session (link) from Python to the DB
    session = Session(engine)

    country = country.replace("_", " ").title()
    country2 = country2.replace("_", " ").title()

    results = session.query(Invoices.BillingCountry, func.sum(Invoices.Total)).\
        filter(Invoices.BillingCountry.in_((country, country2))).\
        group_by(Invoices.BillingCountry).all()

    session.close()

    # Convert list of tuples into normal list
    return jsonify(float(results[0][0]))


if __name__ == '__main__':
    app.run(debug=True)
