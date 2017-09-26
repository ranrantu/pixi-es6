import SceneA from './sceneA';
import disc from '../assets/disc.png';

class GAME {
    constructor(...args){
        this.width = 640;
        this.height = window.innerHeight * 640 / window.innerWidth;
        this.ratio = 640 / window.innerWidth;
        this.stage = '';
    }

    static canvasId = 'pixi-canvas';

    init = () => {
        const canvas = document.createElement('canvas');
        canvas.id = GAME.canvasId;
        document.body.appendChild(canvas);

        const renderer = PIXI.autoDetectRenderer(this.width,this.height,{
            view:document.querySelector('#'+GAME.canvasId)
        },true);

        const sceneA = new SceneA();

        this.stage = new PIXI.Container();
        sceneA.createModel(this.stage);

        renderer.render(this.stage);

        const animation = () => {
            renderer.render(this.stage);

            sceneA.action();

            requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
    }

    start = () => {
        const loader = PIXI.loader;
        loader.add('disc',disc);
        loader.once('complete',this.init);
        loader.load();
    }
}

export default GAME;