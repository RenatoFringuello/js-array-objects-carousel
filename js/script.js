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

function changeCarouselImg(target){
   target.classList.toggle('active');
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
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentImg = 0;

// populate the carousel
images.forEach((image, i) => {
   const carImgAttributes = [
      {type : 'src', value : `./${image.image}`},
      {type : 'alt', value : `./${image.title}`}
   ];
   const carouselImg = createEle('img', '', [], carImgAttributes);
   let carItemClass = 'my_carousel-item active';
   if(i !== 0){
      carItemClass = 'my_carousel-item';
   }
   const carouselItem = createEle('div', carItemClass, [carouselImg], []);
   
   // append to the carousel
   carousel.append(carouselItem);
});

prevBtn.addEventListener('click', () => {
   // remove old active
   changeCarouselImg(carousel.childNodes[currentImg + 3]);
   currentImg = (currentImg > 0)? currentImg - 1 : 4;
   // add new active
   changeCarouselImg(carousel.childNodes[currentImg + 3]);
}, carousel);
nextBtn.addEventListener('click', () => {
   // remove old active
   changeCarouselImg(carousel.childNodes[currentImg + 3]);
   currentImg = (currentImg < 4)? currentImg + 1 : 0;
   // add new active
   changeCarouselImg(carousel.childNodes[currentImg + 3]);
}, carousel);
