import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import numpy as np
# Database setup
engine=create_engine("sqlite:///output.sqlite")
# reflect an existing database into a new model
Base=automap_base()
#reflect the tables
Base.prepare(engine,reflect=True)
# save reference to the table
Measurement=Base.classes.measurement
Station=Base.classes.station
# flask set up
app = Flask(__name__)

#Flask routes
@app.route("/")
def welcome():
# list all available api route""
    return(
          f"Aavailable Routes:<br/>"
          f"/api/v1.0/precipitation <br/>"
          f"/api/v1.0/stations <br/>"
          f"/api/v1.0/tobs <br/>"
          f"/api/v1.0/<start> <br/>"
          f"/api/v1.0/<start>/<end>")

# Convert the query results to a dictionary using date as the key and prcp as the value
@app.route("/api/v1.0/precipitation")
def precipitation():
    session=Session(engine)
    results=session.query(Measurement.date,Measurement.prcp).all()
    session.close()
    all_prcp=[]
    for date, prcp in results:
        prcp_dict={}
        prcp_dict["date"]=date
        prcp_dict["prcp"]=prcp
        all_prcp.append(prcp_dict)
    return jsonify(all_prcp)

# Return a JSON list of stations from the dataset
@app.route("/api/v1.0/stations")
def stations():
    session=Session(engine)
    results=session.query(Station.station).all()
    session.close()
    stations=list(np.ravel(results))
    return jsonify(stations)

# Query the dates and temperature observations of the most active station for the last year of data
@app.route("/api/v1.0/tobs")
def tobs():
    session=Session(engine)
    results=session.query(Measurement.date,Measurement.tobs).\
                                            filter(Measurement.date>="2016-08-23").\
                                            filter(Measurement.date<="2017-08-23").\
                                            filter(Measurement.station=="USC00519281").all()
    session.close()
    tobs_data=[]
    for date, tobs in results:
        tob_dict={}
        tob_dict["date"]=date
        tob_dict["tob"]=tobs
        tobs_data.append(tob_dict)
    return jsonify(tobs_data)


# Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range.
# When given the start only, calculate TMIN, TAVG, and TMAX for all dates greater than and equal to the start date.
@app.route("/api/v1.0/<start>")
def TMIN_TAVG_TMAX(start):
    session=Session(engine)
    results=session.query(func.min(Measurement.tobs),func.avg(Measurement.tobs),func.max(Measurement.tobs)).\
                      filter(Measurement.date>=func.strftime("%Y%m%d",start)).all()
    data=list(np.ravel(results))
    return jsonify({"TMIN":data[0],"TAVG":data[1],"TMAX":data[2]})
    
# Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range.
# When given the start and the end date, calculate the TMIN, TAVG, and TMAX for dates between the start and end date inclusive.
@app.route("/api/v1.0/<start>/<end>")
def TMIN_TAVG_TMAX2(start,end):
    session=Session(engine)
    results=session.query(func.min(Measurement.tobs),func.avg(Measurement.tobs),func.max(Measurement.tobs)).\
                    filter(Measurement.date>=func.strftime("%Y-%m%d",start)).\
                    filter(Measurement.date<=func.strftime("%Y-%m-%d",end)).all()
    data=list(np.ravel(results))
    return jsonify({"TMIN":data[0],"TAVG":data[1],"TMAX":data[2]})


if __name__ == '__main__':
    app.run(debug=True)