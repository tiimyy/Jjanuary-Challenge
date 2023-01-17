'use strict'
const propertyBtn=document.querySelector('.property-btn')
const tabs=document.querySelectorAll('.property-tab')
const tabContent=document.querySelectorAll('.featured-center')
const featured=document.querySelector("#featured")
propertyBtn.addEventListener('click',function(e){
    e.preventDefault()
   const clicked=e.target.closest('.property-tab')
   if(!clicked) return;
    tabs.forEach(t=>{t.classList.remove('property-tab-active')
    t.style.transition='ease-in .2s'
})
    featured.scrollIntoView({behavior:'smooth'})
    clicked.classList.add('property-tab-active')
    tabContent.forEach(c=>c.classList.remove('active')
)

    document.querySelector(`.featured-center-${clicked.dataset.tab}`).classList.add('active')
   
    
})

//REVEAL SECTION
const Allsections=document.querySelectorAll('.animate')
const revealSection=function(entries,obeserver){
const [entry]=entries;
console.log(entry);
if(!entry.isIntersecting)return;
entry.target.classList.remove('section--hidden')
obeserver.unobserve(entry.target)
}
const sectionObserver=new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.15
})
Allsections.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
  
})