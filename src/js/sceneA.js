import Model from '../common/model';
import { TweenMax,Bounce,Elastic } from 'gsap';
import disc from '../assets/disc.png';

class SceneA extends Model {
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
        console.log(Bounce);
        TweenMax.to(this.disc.position,1,
            {
                x:100,
                y:100,
                ease:Sine.SineInOut
            })
    }

    action = () => {
    }
}

export default SceneA;