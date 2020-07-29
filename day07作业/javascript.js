window.onload = function(){
var index = 1 ;

var objcontainer = document.getElementsByClassName("container")[0];
var objimg = document.getElementsByClassName("banner_img")[0];
var objbanner = document.getElementsByClassName("banner")[0];
var objli = document.getElementsByClassName("banner_li");
var prev = document.getElementsByClassName("prevarrow")[0];
var next = document.getElementsByClassName("nextarrow")[0];
var buttonContainer = document.getElementsByClassName("button_container")[0];
var buttons = document.getElementsByClassName("button_container_circle");


var offset = objimg.offsetWidth; 
bindClickButton();

var timer;
stopAnimation();
startAnimation();
controlMouse();

//容器的长宽
objcontainer.style.height = objimg.offsetHeight + "px";
objcontainer.style.width = offset + "px";
objcontainer.style.overflow= "hidden";

//banner的长宽
objbanner.style.width = offset * objli.length + "px";
objbanner.style.height= objimg.offsetHeight + "px";

//箭头的定位
prev.style.top = objimg.offsetHeight/2 - prev.offsetHeight/2 + "px";
next.style.top = objimg.offsetHeight/2 - prev.offsetHeight/2 + "px";

//初始化button位置
buttonContainer.style.top = objimg.offsetHeight - 40 + "px";
buttonContainer.style.left = (offset - buttonContainer.offsetWidth) / 2 + 'px';



//箭头绑定事件
prev.onclick = function(){
    index--;
    animate();
}
next.onclick = function(){
    index++;
    animate();
}


function animate(){
    objbanner.style.transition = "0.3s";
    objbanner.style.left = -parseInt(offset) * index + "px";

    if(index === 0){

        index = 5 ;
        relocation();

    }
    else if (index === 6 ){

        index = 1;
        relocation();
    }
    controlPoint();


}
    function relocation(){

        setTimeout(function(){
            objbanner.style.transition="0s";
            objbanner.style.left = -parseInt(offset) * index + "px";

        },300)
    }

     //小圆圈的事件绑定

     function controlPoint(){

        var key ;

        if (index == 0){
            key = 5  ;
        }
        else if ( index == 6){
            key = 1 ;
        }
        else {
            key = index;
        }

        for(var i = 0 ; i < buttons.length; i ++){
            

            if(key==buttons[i].getAttribute('index')){
                buttons[i].className='button_container_circle on'
            }   
                 else {
                     buttons[i].className = 'button_container_circle'
                 }       
        }

     }




     //绑定button
     function bindClickButton(){

        for(var i = 0 ; i < buttons.length;i++){
            (function(i){
                buttons[i].onclick= function(){
                    index= buttons[i].getAttribute('index');
                    animate();

                }
            })(i)
        }
        
     }



    //定时自动轮播
    function startAnimation(){
        timer = setInterval(function(){
            next.onclick();
        },2000)
    }
    // 停止动画
    function stopAnimation(){
        if(timer){
            clearInterval(timer);
        }
    }

    function controlMouse(){
        objcontainer.onmouseover= function(){
            stopAnimation();
        }
        objcontainer.onmouseout = function(){
            startAnimation();
        }



    }





}