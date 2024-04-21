/**
 * 标题
 下划线命名转驼峰

题目描述
实现一个方法,将apple_pie_menu形式的命名转为驼峰命名applePieMenu
 */
function dashToCamel(str) {
    return str.replace(/_([a-z])/g, (_, $1) => $1.toUpperCase());
}

console.log(dashToCamel('apple_pie_menu'));
