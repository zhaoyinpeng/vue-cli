/**
 * class学习
 * 
 * @author zyp
 * @created 2019/04/28 16:36:50
 */
<template>
    <div class="es6-class">
        <p>es6-class</p>
        <p>parent fun:{{parentSay}}</p>
        <p>child fun:{{childSay}}</p>
        <div id="dragDom">
            drag.js自由拖拽插件（运用class）仅可拖拽
        </div>
        <div id="adhereDragDom">
            拖拽加贴附插件
        </div>
    </div>
</template>
<script>
import Child from './Child-class.js';
import Drag from '../../../plugins/drag.js';
import AdhereDrag from '../../../plugins/adhereDrag.js';
export default {
    components: {},
    data() {
        return {
            parentSay: '',
            childSay: ''
        };
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        let child = new Child('tom', 18, '码农');
        child.name = 'jarry';
        this.parentSay = child.sayHello();
        this.childSay = child.ok();
        this.creatDragDom();
        this.creatAdhereDragDom();
    },
    //方法集合
    methods: {
        creatDragDom() {
            let drag = new Drag('dragDom');
            drag.init();
        },
        creatAdhereDragDom() {
            let adhereDrag = new AdhereDrag('adhereDragDom');
            adhereDrag.init();
        }
    },
    //监控data中的数据变化
    watch: {},
    destroyed() { }, //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
.es6-class {
    border: 1px solid #ccc;
    #dragDom{
        border: 1px solid saddlebrown;
    }
    #adhereDragDom{
        width: 100px;
        height: 100px;
        border: 1px solid goldenrod;
        text-align: center;
        border-radius: 50% 50%;
        line-height: 100px;
        left: 100px;
        top: 100px;
        word-break: keep-all;
        font-size: 12px;
        cursor: pointer;
        background-color: skyblue;
    }
}
</style>