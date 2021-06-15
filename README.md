
---
__Project 2__  -=- Earthquake Mapping -=-

VISIT [THIS LINK](https://contourdesign.github.io/project-2/index.html) TO VIEW IN BROWSER INTERFACE

![image Earthquake](https://www.safetyandhealthmagazine.com/ext/resources/images/2021/03-mar/earthquakes.jpg?1613405082)

### Description:

- [index.html](https://contourdesign.github.io/project-2/index.html) contains a dropdown to view each Linear Regression analysis that was performed
- [DateSlider]() is a dynamic map with is user-controlled slider to view hot earthquake zones
- [HeatMap]() will take you to a heatmap view of Earthquake activity
- [Real-Time](https://contourdesign.github.io/project-2/1day.html) data of USGS-fed API earthquake data at 1, 7 and 30 days (*note: real-time maps require an API key in each of the html API calls to function)
- [FilterTable](https://contourdesign.github.io/project-2/tinahtmlpushto/index.html) link will take you to a filterable table of the data, which feeds a map.
- [JSON](https://contourdesign.github.io/project-2/output2.json) provides users the ability to access the data used in this project in JSON format

---

##Our group set out to take a closer look at earthquake data over the years (data ending in 2016). The data was downloaded as a .csv and imported into PgAdmin; then using PostgreSQL we queried said data and using several different methods, created displays for many different outlooks of the data. The main questions we wanted to answer were:
###1) if certain locations that were consistently hit with strong earthquakes
&nbsp;&nbsp;&nbsp;&nbsp;A: Yes, heatmap shows that some known fault zones have very consistent earthquakes. 
###2) if many earthquakes would depressurize others in the area
&nbsp;&nbsp;&nbsp;&nbsp;A: No, data does not show that correlation between smaller earthquakes meaning a smaller one is about to happen.
###3) If depth over time is getting deeper
&nbsp;&nbsp;&nbsp;&nbsp;A: Through exploratory analysis, this was inconclusive
###4) if earthquakes over time are getting stronger in magnitude
&nbsp;&nbsp;&nbsp;&nbsp;A: Yes, magnitudes of earthquakes are getting stronger over time.
###5) if certain “binned” magnitudes have higher frequencies
&nbsp;&nbsp;&nbsp;&nbsp;A: More technologically advanced equipment means that smaller magnitude earthquakes were easier to detect. Or that smaller earthquakes are decreasing in amount over time.
##RUN INSTRUCTIONS:
#*Note: you must add your own API key for mapbox to the config file.*
#Run live server and check menu for other views. 
#The slider bar will auto populate graphs for the page. 
#Filter table button will filter data upwards of given input.*  

***

