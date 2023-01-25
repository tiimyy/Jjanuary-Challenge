"use strict";
const propertyBtn = document.querySelector(".property-btn");
const tabs = document.querySelectorAll(".property-tab");
const tabContent = document.querySelectorAll(".featured-center");
const featured = document.querySelector("#featured");


// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// TABBED COMPONENT
propertyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".property-tab");
console.log(clicked)

 
  if (!clicked) return;
  console.log('tab')
  tabs.forEach((t) => {
    t.classList.remove("property-tab-active");
    t.style.transition = "ease-in .2s";
  });
  featured.scrollIntoView({ behavior: "smooth" });
  clicked.classList.add("property-tab-active");
  tabContent.forEach((c) => c.classList.remove("active"));

console.log(clicked.dataset.tab)
  document
    .querySelector(`.featured-center-${clicked.dataset.tab}`)
    .classList.add("active");

});
let x=1;
document.querySelector(".nextt").addEventListener('click',function(){
  
  if(x<3&&x>=1){
    x++
  tabContent.forEach((c) => c.classList.remove("active"))
   document
   .querySelector(`.featured-center-${x}`).classList.add("active");
   console.log(x)
   console.log('done') }
   else{
    console.log(x)
   }
    
})

  
//   if(x>1)
//   {x--;
//   tabContent.forEach((c) => c.classList.remove("active"))
//    document
//    .querySelector(`.featured-center-${x}`).classList.add("active");
//    console.log(x)
//     }
//     else{
//       console.log(x)
//      }
    
// })
   
     

//REVEAL SECTION ON SCROLL
const Allsections = document.querySelectorAll(".animate");
const revealSection = function (entries, obeserver) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  obeserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
Allsections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
