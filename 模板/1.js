//------------------------------------------
//一些常用的JS函数
//------------------------------------------

//---- 为window.onload增加函数 ------
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function") {
      window.onload=func;
    } else {
      window.onload=function() {
        oldonload();
        func();
      }
    }
  }
  
  //---- 为某个元素添加类 ------
  function addClass(element,value) {
    if(!element.className) {
      element.className=value;
    } else {
      var classNames=element.className.split(" ");
      for(var i=0; i<classNames.length; i++) {
        if(classNames[i]==value) return null;
      }
      element.className+=" ";
      element.className+=value;
    }
  }
  
  //---- 为某个元素删除类 ------
  function removeClass(element,value) {
    if(!element.className||element.className==value) {
      element.className="";
    } else {
      var classNames=element.className.split(" ");
      for(var i=0; i<classNames.length; i++) {
        if(classNames[i]==value) classNames.splice(i,1);
      }
      element.className=classNames.join(" ");
    }
  }
  
  //------------------------------------------
  //bili网页交互用到的函数们
  //------------------------------------------
  
  //---- 搜索框 ------
  function searchBox() {
    var searchBox=document.getElementById("search-box"),
    input=searchBox.getElementsByTagName("input")[0],
    searchHistory=searchBox.getElementsByTagName("div")[0],
    delList=searchHistory.getElementsByTagName("i");
    //点击input时弹出搜索历史框
    input.onclick=function(ev){
      var ev=ev||event;
      ev.stopPropagation(); //阻止事件冒泡
      searchHistory.style.display="block";
    }
    searchHistory.onclick=function(ev){
      var ev=ev||event;
      ev.stopPropagation(); //阻止事件冒泡
    }
    //点击页面别的地方则搜索框消失
    document.body.onclick=function(){
      searchHistory.style.display="none";
    }
    //点击叉号则删除该项
    for (var i=0; i<delList.length; i++) {
      delList[i].onclick=function() {
        var item=this.parentNode.parentNode;
        item.parentNode.removeChild(item);
      }
    }
  }
  addLoadEvent(searchBox);
  
  //---- top-slideshow 左边轮播图 ------
  function slideshow1() {
    var slideshow=document.getElementById("top-slideshow").getElementsByTagName("div")[0],
      links=slideshow.getElementsByTagName("a"),
      pages=slideshow.getElementsByTagName("span"), //页码
      imgs=new Array(), //图片
      descrips=new Array(), //描述
      length=pages.length, //图片数量
      current=1; //current为当前活跃的图片、描述、页码的序号
    for(var i=0; i<length; i++) {
      imgs[i]=links[i]; //前五个链接为图片
    }
    for(var i=length; i<2*length; i++) {
      descrips[i-length]=links[i]; //后五个链接为描述
    }
    //切换图片的函数
    function changeSlide() {  
      for(var i=0; i<length; i++) {
        if(i==current) { //添加active类
          imgs[i].className="active";
          descrips[i].className="active";
          pages[i].className="active";        
        } else { //删除active类
          descrips[i].className="";
          pages[i].className="";
          if(i<current) { //让图片位于左侧
            imgs[i].className="left";
          } else { //让图片位于右侧
            imgs[i].className="";
          }
        }
      }
      current++; //current自增1
      if(current>=length) current=0;
    }
    //每4s调用一次changeSlide函数
    var slide_on=setInterval(changeSlide,4000);
    //鼠标移入时停止图片轮播
    slideshow.onmouseover=function (){
      clearInterval(slide_on);
    }
    //鼠标移出时重新开始图片轮播
    slideshow.onmouseout=function (){
      slide_on=setInterval(changeSlide,4000);
    }
    //页码被点击时切换图片
    for(var i=0; i<pages.length; i++) {  
      pages[i].onclick=function (){
        current=this.getAttribute("name"); //得到被点击的页码
        changeSlide(); //切换到被点击的页码所对应的图片
      }
    }
  }
  addLoadEvent(slideshow1);
  
  //---- top-slideshow 右边轮播图 ------
  function slideshow2() {
    var slideshow=document.getElementById("top-slideshow").getElementsByTagName("div")[1],
      slides=slideshow.getElementsByTagName("div"),
      length=slides.length, //页面数量
      spans=slideshow.getElementsByTagName("span"),
      leftspan=spans[0], //左按钮
      rightspan=spans[1], //右按钮
      leftspan_content=["一周","昨日","三日"], //按钮内的文本
      rightspan_content=["三日","一周","昨日"],
      current=1;
    leftspan.onclick=function () {
      removeClass(slides[current],"active");
      current--;
      if(current<0) current=length-1;
      addClass(slides[current],"active");
      leftspan.innerHTML=leftspan_content[current];
      rightspan.innerHTML=rightspan_content[current];
    }
    rightspan.onclick=function () {
      removeClass(slides[current],"active");
      current++;
      if(current>=length) current=0;
      addClass(slides[current],"active");
      leftspan.innerHTML=leftspan_content[current];
      rightspan.innerHTML=rightspan_content[current];
    }
  }
  addLoadEvent(slideshow2);
  