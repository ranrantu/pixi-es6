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

        this.stage = new PIXI.Container();
        renderer.render(this.stage);
    }
}

export default GAME;