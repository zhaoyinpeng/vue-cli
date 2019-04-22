let myMixin = {
    created: function () {
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('组件型，单个组件引入mixin');
        }
    }
}
export default myMixin