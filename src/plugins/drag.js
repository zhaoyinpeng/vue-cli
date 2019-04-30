//可拖拽插件
class Drag {
    constructor(domId) {
        if (!domId) {
            throw new Error("无参数");
        }
        this.domId = domId;
        this.dom = document.getElementById(domId);
        this.body = document.getElementsByTagName('body')[0];
        this.left = this.top = null;
        this.begin = false;
        //拖拽参数
        this.oldMouseLeft = this.oldMouseTop = this.newLeft = this.newTop;
    }
    //拖拽dom
    init() {
        console.log(this.dom);
        this.setStyle();
        this.addEvent();
    }
    /* 
    * dom移动到某处
    * @params top number
    * @params left number
    *  
    */
    goto(top, left) {
        this.dom.style.top = top + 'px';
        this.dom.style.left = left + 'px';
    }
    setStyle() {
        this.dom.setAttribute('draggable', true);
        this.dom.style.position = 'fixed';
        let bcr = this.dom.getBoundingClientRect();
        this.goto(bcr.top, bcr.left);
        this.top = bcr.top;
        this.left = bcr.left;
    }
    addEvent() {
        this.body.addEventListener('mouseover', (e) => {
            e.preventDefault();
        });
        this.body.addEventListener('dragover', this.bodyDragover.bind(this));
        this.dom.addEventListener('dragstart', this.domDragstart.bind(this));
        this.dom.addEventListener('dragend', this.domDragend.bind(this));
    }
    bodyDragover(e) {
        if (this.begin) {
            console.log('body dragover');
            this.newTop = this.top + (e.clientY - this.oldMouseTop);
            this.newLeft = this.left + (e.clientX - this.oldMouseLeft);
            this.goto(this.newTop, this.newLeft);
            e.preventDefault(); // 解决拖拽目标对象上出现的禁止符号
        }
    }
    domDragstart(e) {
        console.log('dom dragstart');
        this.begin = true;
        this.oldMouseLeft = e.clientX;
        this.oldMouseTop = e.clientY;
    }
    domDragend(e) {
        this.begin = false;
        this.top = this.newTop;
        this.left = this.newLeft;
    }
    destoryEvent() {
        this.body.addEventListener('dragover', this.bodyDragover);
        this.dom.addEventListener('dragstart', this.domDragstart);
        this.dom.addEventListener('dragend', this.domDragend);
    }
}
export default Drag;