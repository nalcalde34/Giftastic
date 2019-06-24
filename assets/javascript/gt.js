$(document).ready(function(){

var heroes = ["Batman", "batman","Superman","superman","Flash","flash", "Iron Man","iron man", "Captain America" ,"captain america","Spider Man","spider man"];
var moreHeroes = ["Hulk","hulk", "Thor","thor", "Wonder Woman","wonder woman","Green Lantern","green lantern","Hawkeye","hawkeye","Robin","robin","Wolverine",
                "wolverine","Deadpool","deadpool","Aquaman","aquaman"];
var input = $('#input');
var submit = $('#submit');
var apiKey = "c07moXRZaPUx0CtY3UsTyd8Q4Tev7Q7e";
var imgBody = $('.imgBody');
var button = $('#panel');

console.log(moreHeroes);

//There's probably a much less repetitive way to do this part, but...

$('#batman').on('click', function(){
    getGiphys("Batman");
});

$('#superman').on('click', function(){
    getGiphys("Superman");
});

$('#flash').on('click', function(){
    getGiphys("The Flash");
});

$('#ironMan').on('click', function(){
    getGiphys("Iron Man");
});

$('#captainAmerica').on('click', function(){
    getGiphys("Captain America");
});

$('#spiderMan').on('click', function(){
    getGiphys("Spider Man");
});


submit.on('click', function(event){
event.preventDefault();
var inputVal = input.val();

if(heroes.indexOf(inputVal) > -1) {
    alert("This hero has already joined the fight!");
    }

    
    else if (moreHeroes.indexOf(inputVal) > -1){
        document.getElementById("newBtn").innerHTML += "<button>" + inputVal + "</button>";
        $('#newBtn').on('click', function(){
            $(".imgBody").empty();
            getGiphys(inputVal);
            
    })
    }
    
    else{
        alert ("Either this is not a superhero, or the hero is not available!");
        }
    });


function getGiphys(inputVal) {
    $.get("http://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=" + apiKey + "&limit-5")
    .done(function(data){
        $(".imgBody").empty();
        for (var i = 0; i < 10; i++){

        var gifImg = (data.data[i].images.downsized.url);
        createBox(gifImg);
        }
    });
    
}

function createBox(gifImg) {
    var newImg = $('<img>');
        newImg.attr("src", gifImg);
        newImg.addClass('imgBox');

    imgBody.append(newImg)
}

});
