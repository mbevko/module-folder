let left = document.querySelector(".left");
let right = document.querySelector(".right");

window.addEventListener('scroll', () => {
    if(scrollY >= 123){
        left.style.cssText = "transform: translateX(0); opacity: 1;"
        right.style.cssText = "transform: translateX(0); opacity: 1;" 
    }
    console.log(scrollY);
})