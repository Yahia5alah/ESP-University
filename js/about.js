


// Up Scroll
const upButton = document.getElementById("up-button");
function scrollUp(){
    if(window.scrollY >= 100){
        upButton.style.display="block";
    }
    else{
        upButton.style.display="none";
    }
}
function clickUp(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
window.addEventListener('scroll',scrollUp)
upButton.addEventListener('click',clickUp)
// Bars Button
const barsButton = document.getElementById("bars-button");
const navList= document.querySelector("nav ul")

let barsCount=0;
 function rotate(){ 
    if(barsCount%2==0){
    barsButton.classList.add("first-rotate")
    navList.classList.add("list")
    barsButton.classList.remove("second-rotate")
    barsCount++;
    }
    else{
    barsButton.classList.add("second-rotate")
    navList.classList.remove("list")
    barsButton.classList.remove("first-rotate")
    barsCount++;    
}
};
barsButton.addEventListener("click" , rotate);

// Daynamic Height
const landSection = document.getElementById("landing-section")
window.onresize = dHeight;
window.onload=dHeight;
function dHeight(){
    let width = window.innerWidth;
    landSection.style.width=`${width.toString()}px - 20px `
    landSection.style.height=`${width.toString() / 4}px `
}

//About List
const angleOne= document.getElementById("angle-one")
const angleTwo= document.getElementById("angle-two")
const diivIngle=document.getElementById("div-angle")
const aboutList= document.getElementById("about-list")
console.log(aboutList)
let arrowCount=0;
function down(){
    if(arrowCount % 2 === 0){
        angleOne.style.cssText="transform:rotate(45deg)";
        angleTwo.style.cssText="transform:rotate(-45deg)";
        aboutList.classList.add("go-down");
        aboutList.classList.remove("go-up");
        arrowCount++;
    }else{
        angleOne.style.cssText="transform:rotate(-45deg)";
        angleTwo.style.cssText="transform:rotate(45deg)";  
        aboutList.classList.remove("go-down");
        aboutList.classList.add("go-up");
        arrowCount++;
    }

}
diivIngle.addEventListener('click',down);
window.addEventListener('reload',down);