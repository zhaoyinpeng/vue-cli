import msgVue from '../components/msg.vue'
let $msgDom;
export default {
    duration: 3000, // 显示的时间 ms
    install(Vue) {
        //加入dom中
        if (!$msgDom) {
            let MsgPlugin = Vue.extend(msgVue);
            $msgDom = new MsgPlugin();
            document.body.appendChild($msgDom.$mount().$el);
        }
        $msgDom.show = false;
        $msgDom.timer = null;
        let _this = this;

        function msg(type, text, callBack) {
            $msgDom.show = true;
            $msgDom.type = type;
            $msgDom.text = text;
            if ($msgDom.timer) {
                clearTimeout($msgDom.timer);
            } 
            $msgDom.timer = setTimeout(() => {
                $msgDom.show = false;
                callBack && (typeof callBack === 'function') && callBack()
            }, _this.duration);
        }
        Vue.prototype.$message = {
            info(text, callBack) {
                if (!text) return
                msg('info', text, callBack)
            },
            success(text, callBack) {
                if (!text) return
                msg('success', text, callBack)
            },
            error(text, callBack) {
                if (!text) return
                msg('error', text, callBack)
            },
            warning(text, callBack) {
                if (!text) return
                msg('warning', text, callBack)
            }
        }
    }
}