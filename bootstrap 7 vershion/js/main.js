
var onload=function() {
	document.getElementById('toggler').onclick = function() {
		openbox('box', this);
		return false;
	};
};
function openbox(id, toggler) {
	var div = document.getElementById(id);
		if(div.style.display == 'block') {
			div.style.display = 'none';
			/*toggler.innerHTML = '5555';*/
		}
		else {
			div.style.display = 'block';
			/*toggler.innerHTML = 'Закрыть';*/
	}
}

/*function showHide(element_id) {
	var obj = document.getElementById(element_id); 
	//Если css-свойство display не block, то: 
	if (obj.style.display != "block") { 
	    obj.style.display = "block"; //Показываем элемент
	}
	else obj.style.display = "none"; //Скрываем элемент
	}
}   */
/*
function hide(element) {
    // создадим элементу свойство, в которое запишем текущий дисплей
    element.realDisplay = element.currentStyle ? element.currentStyle["display"]
    : getComputedStyle(element, null)["display"];
    // и скроем
    element.style.display = "none";
}
function show(element) {
    // берём записанный в realDisplay дисплей и устанавливаем
    // либо, ставим по умолчанию для данного элемента (сбрасываем)
    element.style.display = element.realDisplay || "";
}
function toggle(element) {
    // если элемент отображается
    if(!(element.offsetHeight == 0 && element.offsetWidth == 0)) {
        // скроем
        hide(element);
    } else {
        // если скрыт, покажем
        show(element);
    }
}
toggle(document.getElementById("test"));*/
