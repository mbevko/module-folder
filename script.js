let left = document.querySelector(".left");
let right = document.querySelector(".right");
let hamburgerMenu = document.querySelector(".secondary_menu")

window.addEventListener('scroll', () => {
    
    if(scrollY >= 125){
        left.style.cssText = "transform: translateX(0); opacity: 1;"
        right.style.cssText = "transform: translateX(0); opacity: 1;" 
        hamburgerMenu.style.cssText = "opacity: 1; pointer-events: all"
    } else if(scrollY < 125){
        hamburgerMenu.style.cssText = "opacity: 0; pointer-events: none"
    }
    console.log(scrollY);
})