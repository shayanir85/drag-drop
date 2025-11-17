let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.querySelector('.card')

card.addEventListener('mousedown',mousedown);

function mousedown(event){
    startX = event.clientX
    startY = event.clientY

    document.addEventListener('mousemove',mousemove)
    document.addEventListener('mouseup',mouseup)
}

function mousemove(event){
    newX = startX - event.clientX
    newY = startY - event.clientY
    
    startX = event.clientX
    startY = event.clientY

    card.style.top = `${(card.offsetTop - newY)}px`
    card.style.left = `${(card.offsetLeft - newX)}px`
}

function mouseup(event){
    document.removeEventListener('mousemove',mousemove)
}