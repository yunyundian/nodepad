if (window.attachEvent) {
	window.attachEvent("onload", index)

} else {
	window.addEventListener("load", index)

}

function index() {
	var Body = document.getElementsByTagName('body')
	var oList = document.getElementById('list');
	var oListLi = oList.getElementsByTagName('li');
	var oMenu = document.getElementById('menu');
	var oMenuDiv = oMenu.getElementsByTagName('div');
	var oMenuLi = oMenu.getElementsByTagName('li');
	var oMain = document.getElementById('main');
	var oMainP = oMain.getElementsByTagName('p');
	var oAbout = document.getElementById('about');
	var oAboutTxt = document.getElementById('aboutTxt');
	var oClose1 = document.getElementById('close1');
	var oTypeface = document.getElementById('typeface');
	var oFont = document.getElementById('font');
	var oClose2 = document.getElementById('close2');
	var oClose3 = document.getElementById('close3');
	var oClose4 = document.getElementById('close4');
	var oClose5 = document.getElementById('close5');
	var oClose6 = document.getElementById('close6');
	var oFamily = document.getElementById('family');
	var oFamilyP = oFamily.getElementsByTagName('p');
	var oFamilyTxt = document.getElementById('famliyTxt');
	var oShape = document.getElementById('shape');
	var oShapeP = oShape.getElementsByTagName('p');
	var oShapeTxt = document.getElementById('shapeTxt');
	var oSize = document.getElementById('size');
	var oSizeP = oSize.getElementsByTagName('p');
	var oSizeTxt = document.getElementById('sizeTxt');
	var oConfirm = document.getElementById('confirm');
	var oAbolish = document.getElementById('abolish');
	var oXian = document.getElementById('xian');
	var oWrap = document.getElementById('wrap');
	var oCheckbox1 = document.getElementById('checkbox1');
	var oCheckbox2 = document.getElementById('checkbox2');
	var oCancel = document.getElementById('cancel');
	var oShear = document.getElementById('shear');
	var oCopy = document.getElementById('copy');
	var oDelete = document.getElementById('delete');
	var oLookup = document.getElementById('lookup');
	var oFindNext = document.getElementById('findNext');
	var oEmenu = document.getElementById('E_menu');
	var oLookUp = document.getElementById('lookup');
	var oLookUpBox = document.getElementById('lookupBox');
	var oGoTo = document.getElementById('goTo');
	var oGoToBox = document.getElementById('goToBox');
	var oReplace = document.getElementById('replace');
	var oReplaceBox = document.getElementById('replaceBox');
	var oFindNex = document.getElementById('findNext');
	var oSelect = document.getElementById('select');
	var oPaste = document.getElementById('paste');
	var oBtn1 = document.getElementById('copybtn');
	var oBtn2 = document.getElementById('pastebtn');
	var oBtn3 = document.getElementById('DelBtn');
	var oBtn4 = document.getElementById('selectbtn');
	var oBtn5 = document.getElementById('cutbtn');
	var oTime = document.getElementById('time');
	var oHang = document.getElementById('hang');
	var oNumber = document.getElementById('number');
	var oFooter = document.getElementById('footer');
	var oMainAuto = document.getElementById('mainAuto');
	var oPageSetup = document.getElementById('PageSetup');
	var oPage = document.getElementById('page');
	var oCover = document.getElementById('cover');
	var oPreview = document.getElementById('preview');
	var oLf = document.getElementById('lf');
	var oLine = document.getElementById('line');
	var oTransverse = document.getElementById('transverse');
	var oPmargin = document.getElementById('pagemargin');
	var oTop = document.getElementById('top');
	var oLeft = document.getElementById('left');
	var oRight = document.getElementById('right');
	var oBottom = document.getElementById('bottom');
	var oSure = document.getElementById('sure');
	var oRemove = document.getElementById('remove');
	var oSave = document.getElementById('save');
	var S;
	var Si;
	var newW;
	var newF;
	var newS;
	var newSi;
	var i = 0;
	var j = 0;
	var l = 0;
	//菜单
	for (i = 0; i < oListLi.length; i++) {
		oListLi[i].index = i;

		oListLi[i].onmouseover = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#00B7EE";
			oMenuDiv[this.index].style.display = "block";
			oMenu.style.display = "block";
		}
		oListLi[i].onmouseout = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#FFFFFF";
			oMenuDiv[this.index].style.display = "none";
		}
	}
	for (i = 0; i < oMenuDiv.length; i++) {
		oMenuDiv[i].index = i;
		oMenuDiv[i].onmouseover = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#00B7EE";
			oMenuDiv[this.index].style.display = "block";
		}
		oMenuDiv[i].onmouseout = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#FFFFFF";
			oMenuDiv[this.index].style.display = "none";

			document.onclick = function() {
				oMenu.style.display = "none";
			}
		}
	}



	for (j = 0; j < oMenuLi.length; j++) {
		oMenuLi[j].index = j;
		oMenuLi[j].onmouseover = function() {
			oMenuLi[this.index].style.background = "#00B7EE";
		}
		oMenuLi[j].onmouseout = function() {
			oMenuLi[this.index].style.background = "#f5f6f7";
		}
	}
	oClose1.onmouseover = function() {

		oClose1.style.background = "#FF0000";
	}
	oClose1.onmouseout = function() {

		oClose1.style.background = "#FFFFFF";
	}
	oAbout.onclick = function(ev) {
		var oEven = ev || event;
		oEven.cancelBubble = true;
		oAboutTxt.style.display = "block";
		oAboutTxt.style.left = document.body.clientWidth / 3 + 'px';
		oAboutTxt.style.top = oMain.offsetHeight / 5 + 'px';
		Body.disable = "disable"
		oCover.style.display = "block";

	}
	oClose1.onclick = function() {
		oAboutTxt.style.display = "none";
		oCover.style.display = "none";
	}




	//关于文档
	oAboutTxt.onmousedown = function(ev) {
		move(ev, oAboutTxt);
	}


	//字体
	for (i = 0; i < oFamilyP.length; i++) {
		oFamilyP[i].index = i;
		oFamilyP[i].onclick = function() {
			oFamilyTxt.value = oFamilyP[this.index].innerHTML;
			newF = oFamilyTxt.value
			oXian.style.fontFamily = oFamilyP[this.index].innerHTML;
		}
		oFamilyP[i].onmouseover = function() {
			oFamilyP[this.index].style.background = "#00B7EE"
		}
		oFamilyP[i].onmouseout = function() {
			oFamilyP[this.index].style.background = "#FFFFFF"
		}
	}
	for (i = 0; i < oShapeP.length; i++) {
		oShapeP[i].index = i;
		oShapeP[i].onmouseover = function() {
			oShapeP[this.index].style.background = "#00B7EE"
		}
		oShapeP[i].onmouseout = function() {
			oShapeP[this.index].style.background = "#FFFFFF"
		}
		oShapeP[0].onclick = function() {
			oShapeTxt.value = oShapeP[0].innerHTML;
			newS = "normal";
			newW = "normal";
			oXian.style.fontWeight = "normal"
			oXian.style.fontStyle = "normal"
		}
		oShapeP[1].onclick = function() {
			oShapeTxt.value = oShapeP[1].innerHTML;
			newS = "italic";
			newW = "normal";
			oXian.style.fontWeight = "normal"
			oXian.style.fontStyle = "italic";
		}
		oShapeP[2].onclick = function() {
			oShapeTxt.value = oShapeP[2].innerHTML;
			newS = "bold";
			newW = "bold";
			oXian.style.fontStyle = "normal"
			oXian.style.fontWeight = "bold"
		}
		oShapeP[3].onclick = function() {
			newS = "italic";
			newW = "bold";
			oXian.style.fontStyle = "italic"
			oXian.style.fontWeight = "bold"
		}
	}
	for (i = 0; i < oSizeP.length; i++) {
		oSizeP[i].index = i;
		oSizeP[i].onclick = function() {
			oSizeTxt.value = oSizeP[this.index].innerHTML;
			newSi = oSizeTxt.value;
			oXian.style.fontSize = oSizeP[this.index].innerHTML + 'px';
		}
		oSizeP[i].onmouseover = function() {
			oSizeP[this.index].style.background = "#00B7EE"
		}
		oSizeP[i].onmouseout = function() {
			oSizeP[this.index].style.background = "#FFFFFF"
		}
	}

	oConfirm.onclick = function(ev) {
		var oEven = ev || event;
		oEven.cancelBubble = true;
		oMain.style.fontFamily = newF;
		oMain.style.fontSize = newSi + 'px';
		oMain.style.fontStyle = newS;
		oMain.style.fontWeight = newW;
		oFont.style.display = "none";
		oCover.style.display = "none";
	}
	oAbolish.onclick = function(ev) {
		var oEven = ev || event;
		oFamilyTxt.value = F;
		oShapeTxt.value = S;
		oSizeTxt.value = Si;
		oEven.cancelBubble = true;
		oMain.style.fontFamily = F;
		oMain.style.fontSize = Si + 'px';
		oMain.style.fontStyle = S;
		oFont.style.display = "none";
		oCover.style.display = "none";
	}
	oTypeface.onclick = function() {

		F = oFamilyTxt.value;
		S = oShapeTxt.value;
		Si = oSizeTxt.value;
		oFont.style.left = document.body.clientWidth / 3 + 'px';
		oFont.style.top = oMain.offsetHeight / 5 + 'px';
		oFont.style.display = "block";
		oCover.style.display = "block";
	}
	oClose2.onmouseover = function() {

		oClose2.style.background = "#FF0000";
	}
	oClose2.onmouseout = function() {

		oClose2.style.background = "#FFFFFF";
	}
	oClose2.onclick = function(ev) {
		var oEven = ev || event;
		oFamilyTxt.value = F;
		oShapeTxt.value = S;
		oSizeTxt.value = Si;
		oEven.cancelBubble = true;
		oMain.style.fontFamily = F;
		oMain.style.fontSize = Si + 'px';
		oMain.style.fontStyle = S;
		oFont.style.display = "none";
		oCover.style.display = "none";
	}

	oFont.onmousedown = function(ev) {
			move(ev, oFont);
		}
		//编辑


	//编辑
	var U = oMain.innerHTML;;
	var newU;
	oCancel.onclick = function() {
		newU = oMain.innerHTML;
		oMain.innerHTML = U;
		U = newU;
	}

	//document.execCommand("Copy");

	//开关
	oClose3.onmouseover = function() {

		oClose3.style.background = "#FF0000";

	}
	oClose3.onmouseout = function() {

		oClose3.style.background = "#FFFFFF";
	}
	oClose3.onclick = function(ev) {
		var oEven = ev || event;
		oLookUpBox.style.display = "none";
		oCover.style.display = "none";
	}
	oClose4.onmouseover = function() {

		oClose4.style.background = "#FF0000";

	}
	oClose4.onmouseout = function() {

		oClose4.style.background = "#FFFFFF";
	}
	oClose4.onclick = function(ev) {
		var oEven = ev || event;
		oReplaceBox.style.display = "none";
		oCover.style.display = "none";
	}
	oClose5.onmouseover = function() {

		oClose5.style.background = "#FF0000";
	}
	oClose5.onmouseout = function() {

		oClose5.style.background = "#FFFFFF";
	}
	oClose5.onclick = function(ev) {
		var oEven = ev || event;
		oGoToBox.style.display = "none";
		oCover.style.display = "none";
	}

	oClose6.onmouseover = function() {

		oClose6.style.background = "#FF0000";
	}
	oClose6.onmouseout = function() {

		oClose6.style.background = "#FFFFFF";
	}
	oClose6.onclick = function(ev) {
		var oEven = ev || event;
		PageSetup.style.display = "none";
		oCover.style.display = "none";
	}
	oLookUp.onclick = function() {
		oLookUpBox.style.display = "block";
		oCover.style.display = "block";
	}
	oReplace.onclick = function() {
		oReplaceBox.style.display = "block";
		oCover.style.display = "block";
	}
	oGoTo.onclick = function() {
		oGoToBox.style.display = "block";
		oCover.style.display = "block";
	}
	oFindNex.onclick = function() {
		oLookUpBox.style.display = "block";
		oCover.style.display = "block";
	}
	oLookUpBox.onmousedown = function(ev) {
		move(ev, oLookUpBox);
	}
	oReplaceBox.onmousedown = function(ev) {
		move(ev, oReplaceBox);
	}
	oGoToBox.onmousedown = function(ev) {
			move(ev, oGoToBox);
		}
		//全选

	oBtn1.onmouseover = function() {
		oBtn1.style.background = "#00B7EE";
	}
	oBtn1.onmouseout = function() {
		oBtn1.style.background = "#f5f6f7"
	}
	oBtn2.onmouseover = function() {
		oBtn2.style.background = "#00B7EE";
	}
	oBtn2.onmouseout = function() {
		oBtn2.style.background = "#f5f6f7"
	}
	oBtn3.onmouseover = function() {
		oBtn3.style.background = "#00B7EE";
	}
	oBtn3.onmouseout = function() {
		oBtn3.style.background = "#f5f6f7"
	}
	oBtn4.onmouseover = function() {
		oBtn4.style.background = "#00B7EE";
	}
	oBtn4.onmouseout = function() {
		oBtn4.style.background = "#f5f6f7"
	}
	oBtn5.onmouseover = function() {
		oBtn5.style.background = "#00B7EE";
	}
	oBtn5.onmouseout = function() {
			oBtn5.style.background = "#f5f6f7"
		}
		//时间
	oTime.onclick = function() {
			var time = document.createElement("span");
			time.innerHTML = getNowFormatDate();
			oMain.appendChild(time);
			time.focus()

		}
		//状态栏 统计字数
	oMain.onkeyup = function() {
		var oMSpan = oMain.getElementsByTagName('span');
		var oMDiv = oMain.getElementsByTagName('div');
		var oMBr = oMain.getElementsByTagName('br');
		var oMB = oMain.getElementsByTagName('b');
		var ptn = /&nbsp;/ig;
		var Num = oMSpan.length * 13 + oMDiv.length * 11 + oMBr.length * 4 + oMB.length * 4;
		var L = oMain.innerHTML.replace(ptn, " ").length;
		var Sum = L - Num;
		oNumber.innerHTML = Sum + "字";
		var F = 0;
		oHang.innerHTML = parseInt((oMain.offsetHeight + oMain.scrollHeight) / 42) + "行";

	}
	oCheckbox2.onclick = function() {
		if (oCheckbox2.checked == true) {
			oFooter.style.display = 'block';
			oMainAuto.style.marginBottom = 30 + 'px'
		} else {
			oFooter.style.display = 'none';
			oMainAuto.style.marginBottom = 0;
		}
	}



	//换行

	oCheckbox1.onclick = function() {
		if (oCheckbox1.checked == true) {
			oMain.style.width = '100%';
		} else {
			oMain.style.width = '300%';
		}
	}

	//页面设置
	var oPageSize = document.getElementById('pageSize');
	oPageSize.onclick = function() {
		if (oPageSize.value == 'A3') {
			oPreview.style.height = 155 + 'px';
			oPreview.style.width = 106 + 'px';
		} else if (oPageSize.value == 'A4') {
			oPreview.style.height = 165 + 'px';
			oPreview.style.width = 116 + 'px';
			oPreview.style.marginTop = 60 + 'px';
		} else if (oPageSize.value == 'A5') {
			oPreview.style.height = 175 + 'px';
			oPreview.style.width = 126 + 'px';
			oPreview.style.marginTop = 50 + 'px';
		}
	}
	oPageSetup.onmousedown = function(ev) {
		move(ev, oPageSetup);
	}
	oPage.onclick = function() {
		oPageSetup.style.display = "block";
		oCover.style.display = "block";
		oPageSetup.style.left = document.body.clientWidth / 3 + 'px';
		oPageSetup.style.top = oMain.offsetHeight / 5 + 'px';
	}
	oSure.onclick = function() {
		oPageSetup.style.display = "none";
		oCover.style.display = "none";
	}
	oRemove.onclick = function() {
		oPageSetup.style.display = "none";
		oCover.style.display = "none";
	}
	var newHeight;
	var nerWidth;
	oLine.onclick = function() {
		if (oPreview.offsetWidth >= 150) {
			newHeight = oPreview.offsetWidth;
			nerWidth = oPreview.offsetHeight;
			oPreview.style.height = newHeight + 'px';
			oPreview.style.width = nerWidth + 'px';
			oPreview.style.marginTop = 50 + 'px';
		}
	}

	oTransverse.onclick = function() {
		if (oPreview.offsetHeight >= 150) {
			newHeight = oPreview.offsetWidth;
			nerWidth = oPreview.offsetHeight;
			oPreview.style.height = newHeight + 'px';
			oPreview.style.width = nerWidth + 'px';
			oPreview.style.marginTop = 85 + 'px';
		}
	}
	oPmargin.onkeyup = function() {
		oLf.style.top = oTop.value + 'px'
		oLf.style.left = oLeft.value + 'px'
		oLf.style.right = oRight.value + 'px'
		oLf.style.bottom = oBottom.value + 'px'
	}

	var oFnext = document.getElementById('Fnext');
	var oFindValue = document.getElementById('findValue');

	oFnext.onclick = function() {
		if (oFindValue.length == 0) {
			return;
		}
		oMain.innerHTML = oMain.innerHTML.replaceAll(oFindValue.value, "<b>" + oFindValue.value + "</b>");
	}

	String.prototype.replaceAll = function(s1, s2) {
		return this.replace(new RegExp(s1, "gm"), s2);
	}


}





function getByClass(oParent, sClass) {
	var aEle = document.getElementsByTagName('*');
	var i = 0;
	var aResult = [];
	for (i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function move(ev, obj) {
	var oEven = ev || event;
	var x = 0;
	var y = 0;
	x = oEven.clientX - obj.offsetLeft;
	y = oEven.clientY - obj.offsetTop;
	document.onmousemove = function(ev) {
		var oEvent = ev || event;
		var out1 = oEvent.clientX - x;
		var out2 = oEvent.clientY - y;

		var oWidth = document.documentElement.clientWidth - obj.offsetWidth;
		var oHeight = document.documentElement.clientHeight - obj.offsetHeight;

		if (out1 < 0) {
			out1 = 0;
		} else if (out1 > oWidth) {
			out1 = oWidth;
		}

		if (out2 < 0) {
			out2 = 0;
		} else if (out2 > oHeight) {
			out2 = oHeight;
		}

		obj.style.left = out1 + 'px';
		obj.style.top = out2 + 'px';
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	}
	return false;
} //解决firefox低版本的bug问题

function getNowFormatDate() {

	var date = new Date();

	var seperator1 = "-";

	var seperator2 = ":";

	var month = date.getMonth() + 1;

	var strDate = date.getDate();

	if (month >= 1 && month <= 9) {

		month = "0" + month;

	}

	if (strDate >= 0 && strDate <= 9) {

		strDate = "0" + strDate;

	}

	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate

		+" " + date.getHours() + seperator2 + date.getMinutes()

	+seperator2 + date.getSeconds();

	return currentdate;

}

function handleFiles(files) {
	if (files.length) {
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function() {
			document.getElementById("main").innerHTML = this.result;
		};
		reader.readAsText(file);
	}
}