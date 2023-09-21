
// <----- OBJECT DATAS -----> //
var dealsArr = [{
    img: "../prac/images/image2.jpg"
},
{
    img: "../prac/images/slide4.jpg"
},
{
    img: "../prac/images/slide5.jpg"
},
{
    img: "../prac/images/slide6.jpg"
},
{
    img: "../prac/images/image1 (1).jpg"
},

{
    img: "../prac/images/slide7.jpg"
},
{
    img: "../prac/images/slide3.jpg"
}
];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});

var bestArr = [{
    img: "../prac/images/top1.jpg"
},
{
    img: "../prac/images/top2.jpg"
},
{
    img: "../prac/images/top3.jpg"
},
{
    img: "../prac/images/top4.jpg"
},
{
    img: "../prac/images/top5.jpg"
},
{
    img: "../prac/images/top6.jpg"
},
{
    img: "../prac/images/top7.jpg"
},
{
    img: "../prac/images/top8.jpg"
},
{
    img: "../prac/images/top9.jpg"
},
{
    img: "../prac/images/top10.jpg"
},
{
    img: "../prac/images/top11.jpg"
},
{
    img: "../prac/images/top12.jpg"
},
{
    img: "../prac/images/top13.jpg"
},
{
    img: "../prac/images/top14.jpg"
},
{
    img: "../prac/images/top15.jpg"
},
{
    img: "../prac/images/top16.jpg"
},
];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


var topArr = [{
    img: "./images1/topp1.JPG"
},
{
    img: "./images1/topp2.JPG"
},
{
    img: "./images1/topp3.JPG"
},
{
    img: "./images1/topp4.JPG"
},
{
    img: "./images1/topp5.JPG"
},
{
    img: "./images1/topp6.JPG"
},
{
    img: "./images1/top.JPG"
},
];

topArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#top").append(box);
});


var categoriesArr = [{
    img: "./images1/cat1.JPG"
},
{
    img: "./images1/cat2.JPG"
},
{
    img: "./images1/cat3.JPG"
},
{
    img: "./images1/cat4.JPG"
},
{
    img: "./images1/cat5.JPG"
},
{
    img: "./images1/cat6.JPG"
},
{
    img: "./images1/cat7.JPG"
},
{
    img: "./images1/cat8.JPG"
},
{
    img: "./images1/cat9.JPG"
},
{
    img: "./images1/cat10.JPG"
},
{
    img: "./images1/cat11.JPG"
},
{
    img: "./images1/cat12.JPG"
},
{
    img: "./images1/cat13.JPG"
},
{
    img: "./images1/cat14.JPG"
},
{
    img: "./images1/cat15.JPG"
},
{
    img: "./images1/cat16.JPG"
},
];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

var dealsTopArr = [{
    img: "./images1/d1.JPG"
},
{
    img: "./images1/d2.JPG"
},
{
    img: "./images1/d3.JPG"
},
{
    img: "./images1/d4.JPG"
},
{
    img: "./images1/d5.JPG"
},
{
    img: "./images1/d6.JPG"
},
{
    img: "./images1/d7.JPG"
},
{
    img: "./images1/d8.JPG"
},
{
    img: "./images1/d9.JPG"
},
{
    img: "./images1/d10.JPG"
},
{
    img: "./images1/d11.JPG"
},
{
    img: "./images1/d12.JPG"
},
{
    img: "./images1/d13.JPG"
},
{
    img: "./images1/d14.JPG"
},    
{
    img: "./images1/d15.JPG"
},
{
    img: "./images1/d16.JPG"
},
];

dealsTopArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#dealsTop").append(box);
});

var unmissableArr = [{
    img: "./images1/d17.WEBP"
},
{
    img: "./images1/d18.WEBP"
},
{
    img: "./images1/d19.WEBP"
},
{
    img: "./images1/d20.WEBP"
},
{
    img: "./images1/d21.WEBP"
},
{
    img: "./images1/d22.WEBP"
},
{
    img: "./images1/d23.WEBP"
},
{
    img: "./images1/d24.WEBP"
},
];

unmissableArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#unmissable").append(box);
});

var coloursArr = [{
    img: "./images1/d25.WEBP"
},
{
    img: "./images1/d26.WEBP"
},
{
    img: "./images1/d27.WEBP"
},
{
    img: "./images1/d28.JPG"
},
{
    img: "./images1/d29.WEBP"
},
{
    img: "./images1/d30.WEBP"
},
{
    img: "./images1/d31.WEBP"
},
{
    img: "./images1/d32.WEBP"
},

];

coloursArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#colours").append(box);
});

var topInfluencersArr = [{
    img: "./images1/d33.WEBP"
},
{
    img: "./images1/d34.WEBP"
},
{
    img: "./images1/d35.GIF"
},
{
    img: "./images1/d36.GIF"
},
{
    img: "./images1/d37.WEBP"
},
{
    img: "./images1/d38.WEBP"
},
];

topInfluencersArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#topInfluencers").append(box);
});

var budgetArr = [{
    img: "./images1/b1.JPEG"
},
{
    img: "./images1/b2.JPEG"
},
{
    img: "./images1/b3.WEBP"
},
{
    img: "./images1/b4.JPEG"
},
{
    img: "./images1/b5.JPEG"
},
{
    img: "./images1/b6.WEBP"
},
{
    img: "./images1/b7.JPEG"
},
{
    img: "./images1/b8.WEBP"
},
];

budgetArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#budget").append(box);
});

var trendingArr = [{
    img: "./images1/t1.JPG"
},
{
    img: "./images1/t2.WEBP"
},
{
    img: "./images1/t3.PNG"
},
{
    img: "./images1/t4.JPG"
},
{
    img: "./images1/t5.JPG"
},
{
    img: "./images1/t6.JPG"
},
{
    img: "./images1/t7.JPG"
},
{
    img: "./images1/t8.JPG"
},

];

trendingArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#trending").append(box);
});


//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "./index.html"
})