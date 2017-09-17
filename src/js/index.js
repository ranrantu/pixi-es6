import cf from './commonFunction';

const container = document.createElement('div');
document.body.appendChild(container);

const commonFunction = () => {
    return 'hello pixijs'+cf.sayHello();
}

class B {
    constructor(){
        this.aaa = 2;
    }
    static a = 2;
    hello = () => {

    }
}

class A extends B {
    constructor(...args){
        super(...args);
        console.log(...args,111,PIXI);
    }

    init = () => {
        return 123;
    }
}

const a = new A(()=>{},222,333);

container.innerHTML = a.init() + commonFunction();
