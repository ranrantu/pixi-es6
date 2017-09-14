const container = document.createElement('div');
document.body.appendChild(container);

const commonFunction = () => {
    return 'hello pixijs2';
}

container.innerHTML = commonFunction();