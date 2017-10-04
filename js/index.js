/**
 * Created by Administrator on 2017/10/2.
 */
var arrJson = [
    {   //  0
        opacity:100,
        z:9
    },
    {  // 1
        opacity:0,
        z:8
    },
    {   // 2
        opacity:0,
        z:7
    },
    {  // 3
        opacity:0,
        z:6
    },
    {   //5
        opacity:0,
        z:5
    },
    {   //6
        opacity:0,
        z:4
    },
    {   //7
        opacity:0,
        z:3
    }
];
var timer = null;
var aLi = $('li',$('#lbtt'));
var aList = $('li',$('#list'));
var oArrow = $("#arrow");
var oPrev  = $("div",oArrow)[0];
var oNext  = $("div",oArrow)[1];
var k =0;
//

oNext.onclick = function() {
    autoPlay(true);
};
oPrev.onclick = function() {
    autoPlay(false)
};
timer = setInterval(function() {
    autoPlay(true);
},2000);
//
autoPlay();
function autoPlay(onOff) {
    if(onOff != undefined) {
        if(onOff) {
            // ÍùÓÒ×ßµÄ
            arrJson.push(arrJson.shift());
            k++;
            if(k > 7){
                k = 0;
            }
            for (var i = 0; i < aList.length; i++) {
                aList[i].className = '';
            }
            aList[k].className = 'current';
        }else {
            // Íù×ó×ß
            arrJson.unshift(arrJson.pop());
            k--;
            if(k <0){
                k = 7
            }
            for (var i = 0; i < aList.length; i++) {
                aList[i].className = '';
            }
            aList[k].className = 'current';
        }
    }
    for(var i = 0; i < aLi.length; i++) {
        startMove(aLi[i],arrJson[i],10);
    }
}
$('#lbt').onmouseover = function() {
    clearInterval(timer);
    oArrow.style.display = 'block';
}
$('#lbt').onmouseout = function() {
    oArrow.style.display = 'none';
    timer = setInterval(function() {
        autoPlay(false);
    },2000);
}
//
aList[k].className = 'current';
for (var i = 0; i < aList.length; i++) {
    aList[i].index = i;
    aList[i].onmouseover = function () {
        for (var i = 0; i < aList.length; i++) {
            aList[i].className = '';
            startMove(aLi[i],{opacity:0},10)
        }
        this.className = 'current';
        startMove(aLi[this.index],{opacity:100},10)
    }
}
//=======================
var oFw = $('#fw');
var oFuwu = $('#fuwu');
//
oFw.onmouseover = function (ev) {
    ev = ev || event;
    ev.cancelBubble = false;
    move(oFuwu,'top',10,69);
}
oFw.onmouseout = function (ev) {
    ev = ev || event;
    ev.cancelBubble = false;
    move(oFuwu,'top',10,209);
}