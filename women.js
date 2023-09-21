// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
    {image_url :'./womenjsimg/women1.WEBP'},
    {image_url :'./womenjsimg/women2.WEBP'},
    {image_url :'./womenjsimg/women3.WEBP'},
    {image_url :'./womenjsimg/women4.WEBP'},
    {image_url :'./womenjsimg/women5.WEBP'},
    {image_url :'./womenjsimg/women6.WEBP'},
  ]
  categoryBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('categoryBag_women').append(box)
  })
  
  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
    {image_url :'./womenjsimg/women7.WEBP'},
    {image_url :'./womenjsimg/women8.WEBP'},
    {image_url :'./womenjsimg/women9.WEBP'},
    {image_url :'./womenjsimg/women10.WEBP'},
    {image_url :'./womenjsimg/women11.WEBP'},
  ]
  brandsBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('explore_more_women').append(box)
  })
  
  
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "./womenjsimg/women12.WEBP"},
    {img_url : "./womenjsimg/women13.WEBP"},
    {img_url : "./womenjsimg/women14.WEBP"},
    {img_url : "./womenjsimg/women15.WEBP"},
    ],
  
    //FOR MOBILE VIEW
    [{img_url : "./womenjsimg/women16.WEBP"},
    {img_url: "./womenjsimg/women17.JPEG"},
    {img_url: "./womenjsimg/women18.WEBP"},
    {img_url: "./womenjsimg/women19.JPEG"},
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
  
  var images = document.querySelectorAll('img')
  for(let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){
      window.location.href = "./women.html"
    })
  }
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "./index.html"
  })