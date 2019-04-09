export default {
    bind(el, binding, vnode) {
        console.log("bind");
        console.log('test', binding);
        console.log('arg', binding.arg);
        console.log('value', binding.value);
        console.log('modifiers', binding.modifiers);
        el.style.color = binding.value;
    },
    inserted(el, binding, vndoe) {
        console.log("inserted");
    },
    updated(el, binding, vnode) {
        console.log("updated");
    },
    componentUpdated(el, binding, vnode, oldVnode) {
        console.log("componentUpdated");
    }
}