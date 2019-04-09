export default function(el, binding, vnode) {
    console.log('test', binding);
    console.log('arg', binding.arg);
    console.log('value', binding.value);
    console.log('modifiers', binding.modifiers);
    el.style.position = 'fixed';
}