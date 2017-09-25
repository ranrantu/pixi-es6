import Model from '../common/model';
import {Tween} from 'es6-tween/src';
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

        // t.start();
        stage.addChild(this.disc);

        const t = new Tween(this.disc.position,{x:0})
            .to({x:100},1000).start();

        console.log(t);
    }

    action = () => {
    }
}

export default ModelA;