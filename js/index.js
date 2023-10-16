// 头部切换//
var navItems = document.querySelector('.head-nav').querySelectorAll('a');
var navbox = document.querySelector('.head-meu');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function() {
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].className = '';
        }
        this.className = 'active';
    }
    navItems[i].onmousemove = function() {
        navbox.style.left = (i + 1) * 30 + (navItems[i].offsetWidth - 30) * i + 'px';
    }
    navItems[i].onmouseleave = function() {
        navbox.style.left = document.querySelector('.head-nav').querySelector('.active').offsetLeft + 30 + 'px';
    }
}
// 音乐播放//
var musicBtn = document.querySelector('.head-music');
var bgm1 = document.querySelector('#bgm-w');
var bgm = document.querySelector('#bgm');
var flag = false;
musicBtn.addEventListener('click', function() {
    if (flag) {
        this.style.backgroundImage = 'url("./asset/music-close.png")';
        flag = false;
        bgm.pause();
        bgm1.pause();
    } else {
        this.style.backgroundImage = 'url("./asset/music.png")';
        flag = true;
        bgm1.play();
        bgm.play();
    }
});
// 轮播图//
var imgbox = document.querySelector('.new-lp-img');
var con = 0;
var tim = 1000;
var btn = document.querySelector('.new-lp-btn').querySelectorAll('span');
btn[0].className = 'active';
var timer;

function lp(a, b) {
    document.querySelector('.new-lp-btn').querySelector('.active').className = '';
    if ((b / -640) <= 3) {
        btn[b / -640].className = 'active';
    } else {
        btn[0].className = 'active';
    }
    imgbox.style.left = b + 'px';
    imgbox.style.transition = '1.2s';
    timer = setTimeout(function() {
        b -= 640;
        imgbox.style.left = b + 'px';
        if (b == -2560) {
            lp(tim / 4, b);
        } else {
            lp(tim, b);
        }
    }, a);
    if (b == -3200) {
        imgbox.style.transition = '0s';
        b = 0;
        imgbox.style.left = b + 'px';
    }
};
lp(tim, con);
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        clearTimeout(timer);
        lp(tim, i * -640);
    }
}
//新闻内容//
var ul = document.querySelector('.new-content-right').querySelectorAll('ul');
var item = document.querySelector('.new-content-nav').querySelectorAll('a');
ul[0].style.display = 'block';
for (let i = 0; i < item.length; i++) {
    item[i].onclick = function() {
        for (let i = 0; i < item.length; i++) {
            item[i].className = '';
            ul[i].style.display = 'none';
        }
        ul[i].style.display = 'block';
        item[i].className = 'active';
    }
}
// .foot-more//
var more = document.querySelector('.foot-more');
more.addEventListener('click', e => e.preventDefault());