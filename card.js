// carte

document.addEventListener("DOMContentLoaded", () => {

    const card = document.getElementById('card')
    
        card.addEventListener("mousemove", e => {
            const glow = card.children[0].children[1]
    
            let cardRect = card.getBoundingClientRect();
            let x = e.clientX - cardRect.x
            let y = e.clientY - cardRect.y
          
            let midCardWidth = cardRect.width / 2
            let midCardHeight = cardRect.height / 2
          
            let angleY = -(x - midCardWidth) / 8
            let angleX = -(y - midCardHeight) / 8
    
            let glowX = x / cardRect.width * 100
            let glowY = y / cardRect.height * 100
          
            if (!card.classList.contains("active")) {
                card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
                card.children[0].style.boxShadow = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
                
                glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255, 1), rgb(184, 196, 211, 0.1), transparent)`
            } else {
                card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
                card.children[0].style.boxShadow = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
                
                glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255, 1), rgb(184, 196, 211, 0.1),  transparent)`
            }
        })
    
        card.addEventListener("mouseleave", () => {
            const glow = card.children[0].children[1]
    
            card.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`
            glow.style.background = `none`
        })
    
        card.addEventListener("click", () => {
            
            if (card.classList.contains("active")) {
                card.classList.remove('active')
                card.style.transform = `rotateY(0deg)`
            } else {
                card.classList.add('active')
                card.style.transform = `rotateY(360deg) scale(1.7)`
            }
        })
    })