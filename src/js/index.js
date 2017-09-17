const container = document.createElement('div');
document.body.appendChild(container);

const commonFunction = () => {
    return 'hello pixijs23';
}

container.innerHTML = commonFunction();
