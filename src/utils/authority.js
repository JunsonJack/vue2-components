// 自定义权限鉴定指令
import Vue from "vue";
// 权限指令
// const remove = (el) => el.parentNode.removeChild(el);
const auth = Vue.directive('auth', {
    inserted: function (el, binding, vnode) {
        // 获取页面按钮权限
        let btnPermissionsArr = [];
        if (binding.value) {
            // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。         
            btnPermissionsArr = Array.of(binding.value);
        } else {
            // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
            btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
        }

        if (!Vue.prototype.$_auth(btnPermissionsArr)) {
            console.log("🚀 ~ file: authority.js ~ line 18 ~ !Vue.prototype.$_auth(btnPermissionsArr)", !Vue.prototype.$_auth(btnPermissionsArr))
            el.parentNode.removeChild(el);
            // console.log(el.parentNode)

            // el.style.display = 'none'
        }

    }
});

// 权限检查方法
Vue.prototype.$_auth = function (value) {
    console.log("🚀 ~ file: authority.js ~ line 26 ~ value", value)
    let isExist = false;
    // 获取用户按钮权限
    let btnPermissionsStr = sessionStorage.getItem("btnPermissions");
    
    console.log("🚀 ~ file: authority.js ~ line 33 ~ btnPermissionsStr", btnPermissionsStr)
    console.log(value.indexOf(btnPermissionsStr))
    if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
        return false;
    } else {
        if (value.indexOf(btnPermissionsStr) > -1) {
            isExist = true;
        }
    }

    return isExist;
};
export { auth }