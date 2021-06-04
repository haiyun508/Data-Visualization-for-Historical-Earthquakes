DROP TABLE earthquake;

CREATE TABLE earthquake (
    date varchar NOT NULL,
    time varchar  NOT NULL,
    lat float,
    lon float,
    type varchar,
    depth float,
    d_err varchar,
    d_seis varchar,
    magnitude float,
    m_type varchar,
    m_2 varchar,
    m_3 varchar,
    azimuth varchar,
    horiz varchar,
	horiz2 varchar,
    rm varchar,
    id varchar,
    source varchar,
    location varchar,
    m_source varchar,
	status varchar
);

/* In descending order, list the frequency count of 
earthquakes by date*/
select date, count(*)
from earthquake
group by date
ORDER BY count desc;

