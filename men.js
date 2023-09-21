
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "./menjsimg/men.WEBP"},
    {img_url : "./menjsimg/men1.WEBP"},
    {img_url : "./menjsimg/men2.WEBP"},
    {img_url : "./menjsimg/men3.WEBP"},
    ],

    //FOR MOBILE VIEW
    [{img_url : "./menjsimg/men4.WEBP"},
    {img_url: "./menjsimg/men5.JPEG"},
    {img_url: "./menjsimg/men6.WEBP"},
    {img_url: "./menjsimg/men7.JPEG"},
    ]
  ]

  var z = null; 

    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }

  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })




    // <!-- CATEGORIES DISPALY 1 -->
    var categoryBag = [
      {image_url :'./menjsimg/men8.WEBP'},
      {image_url :'./menjsimg/men9.WEBP'},
      {image_url :'./menjsimg/men10.WEBP'},
      {image_url :'./menjsimg/men11.WEBP'},
      {image_url :'./menjsimg/men12.WEBP'},
      {image_url :'./menjsimg/men13.WEBP'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })


  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
      {image_url :'./menjsimg/men14.WEBP'},
      {image_url :'./menjsimg/men15.WEBP'},
      {image_url :'./menjsimg/men16.WEBP'},
      {image_url :'./menjsimg/men17.WEBP'},
      {image_url :'./menjsimg/men18.WEBP'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })


document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "./index.html"
})
var images = document.querySelectorAll('img')
for(let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(){
    window.location.href = "./mens.html"
  })
}

// LANDING PAGE
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = './index.html'
})