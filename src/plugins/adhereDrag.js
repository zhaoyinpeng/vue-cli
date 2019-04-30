/* 
*粘附拖拽插件
*继承与拖拽插件 
*/
import Drag from './drag'
import Tewwn from './Tewwn'
class AdhereDrag extends Drag {
    constructor(domId) {
        super(domId);
        this.timer = null;
        this.moveTimer = null;
        this.totalTime = 500;//动画总过度时间
        this.timeInterval = 16;//时间间隔

        //张鑫旭tewwn方法所含参数
        this.zxxStart = 0;//当前时间
        this.zxxBegin = 0;//初始值 本例中是left值
        this.zxxEnd = 0;//容器宽度
        this.zxxduring = 50;//持续时间
    }
    /* 
    * 重写domDragend方法
    */
    domDragend(e) {
        this.begin = false;
        this.top = this.newTop;
        this.left = this.newLeft;
        if (this.left !== 0) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                // 自己写的垃圾方法
                // this.moveTo(-this.left);
                //tewwn方法移动
                this.zxxEnd = this.left;
                this.step();
            }, 1000);
        }
    }
    /* 
    * dom 左右移动到某处
    * @params left number
    *  
    */
    leftGoto(left) {
        this.dom.style.left = left + 'px';
    }
    /* 
    * 动画方法
    * @params left number
    *  left 负值为向左移动
    */
    moveTo(left) {
        let speed = left / (this.totalTime / this.timeInterval);
        clearInterval(this.moveTimer);
        this.moveTimer = setInterval(() => {
            if (Math.abs(this.left) < Math.abs(speed)) {
                this.left = 0;
                this.leftGoto(this.left);
                clearInterval(this.moveTimer);
            } else {
                this.left += speed;
                this.leftGoto(this.left);
            }
        }, this.timeInterval);
    }
    /* 
    * tewwn动画方法
    *  zxxEnd 负值为向左移动
    */
    step() {
        // 当前的运动位置
        // let moveNum = Tewwn.Linear(this.zxxStart, this.zxxBegin, this.zxxEnd, this.zxxduring);//直线过度
        let moveNum = Tewwn.Bounce.easeOut(this.zxxStart, this.zxxBegin, this.zxxEnd, this.zxxduring);//弹球
        // 位移
        this.leftGoto(this.left - moveNum);
        // 时间递增
        this.zxxStart++;
        // 如果还没有运动到位，继续
        if (this.zxxStart <= this.zxxduring) {
            requestAnimationFrame(this.step.bind(this));
        } else {
            // 动画结束，这里可以插入回调...
            // callback()...
            this.zxxStart = 0;
            this.left = 0;
        }
    }
}
export default AdhereDrag;