function getNasaData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=6uVY6M6eeTAaYNEAfmeSqJdICOnUeL4XdfZC6s4g",
            success: function(response) {
                resolve(response);
            },
            error: function(err) {
                console.log("Error", err);
            },
        });
        return null;
    });
}
async function setNasaData() {
    var APIdata = await getNasaData();
    console.log(APIdata.explanation);
    console.log(APIdata.hdurl);
    console.log(APIdata.title);
    console.log(APIdata.date);
    $("#welcome-text").text(APIdata.explanation);
    $("#nasa-pic").attr("src", APIdata.hdurl);
    $("#title").text(APIdata.title);
    $("#date").text(APIdata.date);
}
$("#button").click(function() {
    setNasaData();
});
$("#remove-button").click(function() {
    $("#welcome-text").text("Welcome to the NASA Api!");
    $("#title").text("Title");
    $("#date").text("Date");
    $("#nasa-pic").attr("src", "");
});