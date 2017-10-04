//获取相关元素
var oHeader = $('header')[0];
var oHt = $('#header-top');
var oCha = $('#cha');
oCha.onclick = function () {
    //oHeader.style.display = 'none';
    startMove(oHt,{height:-80,opacity:0},50);

};
// 鼠标放到 北京上 显示下拉菜单
var oCity = $('#city');
var oMap = $('#map');
var oMul = $('#map-ul');
var aMuLi = $('li',oMul);
var aMulSpan = $('span',oMul);
aMuLi[0].style.backgroundColor = 'red';
aMulSpan[0].style.color = '#fff';
//鼠标移上 显示
oCity.onmouseover = function () {
    oCity.style.backgroundColor = '#fff';
    oMap.style.display = 'block';
};
//鼠标移上 隐藏
oCity.onmouseout = function () {
    oCity.style.backgroundColor = '';
    oMap.style.display = 'none';
};
//鼠标以上 地点添加背景色
for (var i = 1; i < aMuLi.length; i++) {
    aMuLi[i].index = i;
    aMuLi[i].onmouseover = function () {
        for (var i = 1; i < aMuLi.length; i++) {
            aMuLi[i].style.backgroundColor= '#fff';
        }
        this.style.backgroundColor = '#e3e3e3';
        aMulSpan[this.index].style.color = '#f10215';
    }
}
//鼠标离开 还原
for (var i = 1; i < aMuLi.length; i++) {
    aMuLi[i].index = i;
    aMuLi[i].onmouseout = function () {
        for (var i = 1; i < aMuLi.length; i++) {
            aMuLi[i].style.backgroundColor= '#fff';
        }
        this.style.backgroundColor = '#fff';
        aMulSpan[this.index].style.color = '#999';
    }
}
//鼠标单击地点 换地址
var oDz = $('#dizhi');
for (var i = 0; i < aMuLi.length; i++) {
    aMuLi[i].index = i;
    aMuLi[i].onclick = function () {
        for (var i = 1; i < aMuLi.length; i++) {
            oDz.innerHTML = '';
        }
        oDz.innerHTML = this.innerText;
    }
}
//鼠标移上 我的京东 显示div
var oWodejd = $('#wodejd',oMul);
var oWdjd = $('#wdjd');
//
oWodejd.onmouseover = function () {
    oWdjd.style.display = 'block';
    oWodejd.style.backgroundColor = '#fff';
}
oWodejd.onmouseout = function () {
    oWdjd.style.display = 'none';
    oWodejd.style.backgroundColor = '';
}
//鼠标移到 字上 变红
var oWdjdT = $('#wdjd-t');
var oWdjdB = $('#wdjd-b');
var aWdjdTd = $('div',oWdjdT);
var aWdjdBd = $('div',oWdjdB);
for (var i = 0; i < aWdjdTd.length; i++) {
    aWdjdTd[i].index = i;
    aWdjdTd[i].onmouseover = function () {
        for (var i = 0; i < aWdjdTd.length; i++) {
            aWdjdTd[i].style.color = '#999';
        }
        this.style.color = '#f10215';
    }
}
oWdjdT.onmouseout = function () {
    for (var i = 0; i < aWdjdTd.length; i++) {
        aWdjdTd[i].style.color = '#999';
    }
}
for (var i = 0; i < aWdjdBd.length; i++) {
    aWdjdBd[i].index = i;
    aWdjdBd[i].onmouseover = function () {
        for (var i = 0; i < aWdjdBd.length; i++) {
            aWdjdBd[i].style.color = '#999';
        }
        this.style.color = '#f10215';
    }
}
oWdjdB.onmouseout = function () {
    for (var i = 0; i < aWdjdBd.length; i++) {
        aWdjdBd[i].style.color = '#999';
    }
}