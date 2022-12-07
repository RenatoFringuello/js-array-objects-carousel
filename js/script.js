/**
 * Return the element created using the params
 * 
 * @param {*} tag the tag of the element; mandatory
 * @param {*} className the whole class list in a string
 * @param {*} content a list of content to append at the end of the element
 * @param {*} attributes a list of literal object attributes; {type: 'string' ,value: 'string'}
 * @returns the element
 */
 function createEle(tag, className = '', content = [], attributes = []){
   const element = document.createElement(tag);
   element.className = className;
   for(let i = 0; i < content.length; i++){
       element.append(content[i]);
   }
   if(!attributes.includes({type : '', values : ''})){
       //if there are attributes to set 
       for(let i = 0; i < attributes.length; i++){
           element.setAttribute(attributes[i].type, attributes[i].value);
       }
   }
   return element;
}

/**
 * toggle the class .active at the old target 
 * and at the current target
 * 
 * @param {*} oldIndex the old index of the image in carousel
 * @param {*} currentImgIndex the current index of the image in carousel
 */
 function changeImage(oldIndex, currentImgIndex){
    //get all carousel items
   const carouselItems = document.querySelectorAll('.my_carousel-item');
   // remove old active
   carouselItems[oldIndex].classList.toggle('active');
   // add new active
   carouselItems[currentImgIndex].classList.toggle('active');
}

//init
const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];
const carousel = document.getElementById('carousel');
const thumbnailsContainer = document.getElementById('thumbnails-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
//the first at the index 4 beacuse prepend push him to the last position
let currentImg = 0;

// populate the carousel
images.forEach((image, i) => {
   //set img attrs
   const carImgAttributes = [
      {type : 'src', value : `./${image.image}`},
      {type : 'alt', value : `${image.title}`}
   ];
   //create img
   const carouselImg = createEle('img', '', [], carImgAttributes);
      //set the first to active
   let carItemClass = 'my_carousel-item active';
   if(i !== 0){
      carItemClass = 'my_carousel-item';
   }

   //create caption
   const carouselItemTitle = createEle('h2','',[image.title]);
   const carouselItemDesc = createEle('p','',[image.text]);
   const carouselCaption = createEle('div', 'caption position-absolute w-100 bottom-0 text-white text-end p-3', [carouselItemTitle, carouselItemDesc]);

   const carouselItem = createEle('div', carItemClass, [carouselImg, carouselCaption], []);

   carousel.append(carouselItem);
});

prevBtn.addEventListener('click', () => {
   let oldIndexImg = currentImg;
   currentImg = (currentImg > 0)? currentImg - 1 : images.length - 1;
   changeImage(oldIndexImg, currentImg);  
});

nextBtn.addEventListener('click', () => {
   let oldIndexImg = currentImg;
   currentImg = (currentImg < images.length - 1)? currentImg + 1 : 0;
   changeImage(oldIndexImg, currentImg);  
});