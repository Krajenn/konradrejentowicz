const slider = document.querySelector('.slider-container'),
    slides = [...document.querySelectorAll('.slide')]

let isDragging = false,
    start = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

console.log(slides)

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

window.oncontextmenu = function (event) {
    event.preventDefault()
    // event.stopPropagation()
    return false
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX
}

//Currying
function touchStart(index) {
    return function (event) {
        isDragging = true
        currentIndex = index
        startPosition = getPositionX(event)

        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
    }
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPosition
    }
}

function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 && currentIndex < slides.length - 1) {
        currentIndex += 1
    }

    if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1
    }

    setPositionByIndex()

    slider.classList.remove('grabbing')
}

function animation() {
    setSliderPosition()
    if (isDragging) {
        requestAnimationFrame(animation)
    }
}

function setSliderPosition() {
    slider.style.transform = "translateX(" + currentTranslate + "px)"
    console.log("translateX(" + currentTranslate + "px)")
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
}