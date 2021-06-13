var images = {
        freq_vs_time:
        "/project-2/tinahtmlpushto/static/img/freq_vs_time.png",
        mag_vs_time:
        "/project-2/tinahtmlpushto/static/img/mag_vs_time.png",
        depth_vs_time:
        "/project-2/tinahtmlpushto/static/img/depth_vs_time.png",
        Mag_5p5_6_vs_time:
        "/project-2/tinahtmlpushto/static/img/5.5-6_vs_time.png",
        Mag_6_6p5_vs_time:
        "/project-2/tinahtmlpushto/static/img/6-6.5_vs_time.png",
        Mag_6p5_7_vs_time:
        "/project-2/tinahtmlpushto/static/img/6.5-7_vs_time.png",
        Mag_7_8_vs_time:
        "/project-2/tinahtmlpushto/static/img/7-8_vs_time.png",
        Mag_8_9p5_vs_time:
        "/project-2/tinahtmlpushto/static/img/8-9.5_vs_time.png",
    default:
        "https://wanna-joke.com/wp-content/uploads/2014/10/funny-Arnold-Schwarzenegger-protein.jpg"
};
var changeImg = function() {
    const value = this.options[this.selectedIndex].value;
    var imageURL = images[value];
    document.getElementById("image").src = imageURL;
};

var cList = document.getElementById("compList");
cList.addEventListener("change", changeImg, false);

document.getElementById("image").src = images["default"];