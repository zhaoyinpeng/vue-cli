/**
 * es6
 * 
 * @author zyp
 * @created 2019/04/28 16:40:00
 */
<template>
    <div class="es6">
        <p>es6</p>
        <es6-class></es6-class>
    </div>
</template>
<script>
import es6Class from './class.vue';
export default {
    components: {
        es6Class: es6Class
    },
    data() {
        return {

        };
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    //方法集合
    methods: {

    },
    //监控data中的数据变化
    watch: {},
    destroyed() { }, //生命周期 - 销毁完成
}
</script>
<style lang='less' scoped>
</style>