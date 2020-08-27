function scrollHorizontally(e) { //включает горизонтальный скрол элемента колесом
    e = window.event || e;
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); //это шаг колеса для разных браузеров
    document.documentElement.scrollLeft -= (delta * 40); //прокручиваем всю страницу
		e.preventDefault();
	};
  
function addMouseWell(elem, callback) { //вешает кроссплатформенный обработчик на колесо мыши над элементом
	if (elem.addEventListener) {
		if ('onwheel' in document) {
			elem.addEventListener("wheel", callback);
		} else if ('onmousewheel' in document) {
			elem.addEventListener("mousewheel", callback);
		} else {
			elem.addEventListener("MozMousePixelScroll", callback);
		}
	} else {
		elem.attachEvent("onmousewheel", callback);
	}
}

addMouseWell(window, scrollHorizontally);

window.onload = () => {
let buttons = document.getElementsByClassName('btn-info'),
    modalsData = [
        'MODAL 1',
        'MODAL 2',
        'MODAL 3'
    ],
    openedModalId;

let passDataAndOpenModal = function (data) {
    let parentBlock =document.getElementsByTagName('body')[0],
        block = document.createElement('div');
    block.className = 'info-modal';
    block.innerHTML = data;
    parentBlock.appendChild(block);
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        if(document.getElementsByClassName('info-modal').length > 0){
            let modal = document.getElementsByClassName('info-modal')[0];
            document.getElementsByTagName('body')[0].removeChild(modal);
        }
        passDataAndOpenModal(modalsData[i]);
        openedModalId = i;
    }, false);
}
};