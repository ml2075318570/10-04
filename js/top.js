//��ȡ���Ԫ��
var oHeader = $('header')[0];
var oHt = $('#header-top');
var oCha = $('#cha');
oCha.onclick = function () {
    //oHeader.style.display = 'none';
    startMove(oHt,{height:-80,opacity:0},50);

};
// ���ŵ� ������ ��ʾ�����˵�
var oCity = $('#city');
var oMap = $('#map');
var oMul = $('#map-ul');
var aMuLi = $('li',oMul);
var aMulSpan = $('span',oMul);
aMuLi[0].style.backgroundColor = 'red';
aMulSpan[0].style.color = '#fff';
//������� ��ʾ
oCity.onmouseover = function () {
    oCity.style.backgroundColor = '#fff';
    oMap.style.display = 'block';
};
//������� ����
oCity.onmouseout = function () {
    oCity.style.backgroundColor = '';
    oMap.style.display = 'none';
};
//������� �ص���ӱ���ɫ
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
//����뿪 ��ԭ
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
//��굥���ص� ����ַ
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
//������� �ҵľ��� ��ʾdiv
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
//����Ƶ� ���� ���
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