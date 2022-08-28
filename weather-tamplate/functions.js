function addNewElement(newConst, newElement, addClass,newAppend){
newConst = document.createElement(newElement);
newConst.classList.add(addClass);
newAppend.appendChild(newConst);
return newConst;
}


function addHeadingElement (newHeading, newElement,innerElement,newAppend) {
newHeading = document.createElement(newElement);
newHeading.innerHTML = innerElement;
newAppend.appendChild(newHeading);
return newHeading;
}

function addSpanElement(newSpan,newElement,addClass,tempTime,newAppend){
    newSpan = document.createElement(newElement);
    newSpan.classList.add(addClass)
    newSpan.innerHTML = tempTime + "°C";
    newAppend.appendChild(newSpan);
    return newSpan;
}

export {
    addNewElement,
    addHeadingElement,
    addSpanElement
}
