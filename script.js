let compteur = 0
let timer, elements, slides, slideWidth;

window.onload = () => {
    const diapo = document.querySelector(".diapo")

    elements = document.querySelector(".elements")

    // je clone la première image
    let firstImage = elements.firstElementChild.cloneNode(true)


    // je le met la première image cloné en fin de diapo
    elements.appendChild(firstImage)

    slides = Array.from(elements.children)

    // je récupère la largeur d'un slide
    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    // automatisation du défilement
    timer = setInterval(slideNext, 3000)

    // arret et reprise du défilement
    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

}

function slideNext() {
    compteur++;
    elements.style.transition = `1s linear`

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px`

    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0
            elements.style.transition = `unset`
            elements.style.transform = `translateX(0)`
        }
    }, 1000)
}

function slidePrev() {
    compteur--;
    elements.style.transition = `1s linear`

    if(compteur < 0) {
        compteur= slides.length - 1
        let decal = -slideWidth * compteur
        elements.style.transition = `unset`
        elements.style.transform = `translateX(${decal}px`
        setTimeout(slidePrev,  1)
    }

    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px`
}

function stopTimer() {
    clearInterval(timer)
}

function startTimer() {
    timer = setInterval(slideNext, 4000)
}

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    const logoBack = document.querySelector(".logo-back");
    const logoFront = document.querySelector(".logo-front");
    let clickCount = 0;
    
    if (clickCount != 0) {
        alert("error")
    } else {
        logo.addEventListener("click", () => {
            clickCount++;
            console.log(clickCount);
        
            if (clickCount === 5) {
                logo.style.transform = `rotateY(180deg)`;
                clickCount = 0
                setTimeout(function(){
                    logoBack.style.display = `block`
                }, 360)
            }
            setTimeout(function(){
                if (clickCount === 0) {
                    logo.style.transform = `rotateY(0deg)`;
                    console.log("oui")
                    setTimeout(function(){
                        logoBack.style.display = `none`
                    }, 360)
                }
            }, 4000)
        });
    }
});