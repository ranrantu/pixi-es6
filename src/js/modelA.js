import Model from '../common/model';
import {Tween} from 'es6-tween';
import disc from '../assets/disc.png';

class ModelA extends Model {
    constructor(...args){
        super(...args);
    }

    createModel = (stage) => {
        this.disc = new PIXI.Sprite.fromImage(disc);
        this.disc.width = 200;
        this.disc.height = 200;
        this.disc.position.x = 0;
        this.disc.position.y = 0;

        const t = new Tween();
        t.start();

        stage.addChild(this.disc);
    }
}

export default ModelA;