/* myfocus 图片轮动效果 */
myFocus.set({
    id:'ad',
    pattern:'mF_fancy',//风格应用的名称
    width:1000,//设置图片区域宽度(像素)
    height:320//设置图片区域高度(像素)
});

var scrollArea = document.getElementById("news");
var con1 = document.getElementById("con1");
var speed = 10;
var liHeight = 37;
var myScroll;
con1.innerHTML += con1.innerHTML; //克隆数据

function startMove(){
scrollArea.scrollTop++;
myScroll = setInterval('scrollUp()',speed);
}

function scrollUp() {
if (scrollArea.scrollTop % liHeight == 0) {
clearInterval(myScroll);
setTimeout('startMove()',2000);
} else {
scrollArea.scrollTop++;
if (scrollArea.scrollTop >= scrollArea.scrollHeight/2) {
    scrollArea.scrollTop = 0;
}
}
}

setTimeout('startMove()',2000);




