function sendMessage(messData) {
    if(messData.timeBtw) {
        
        setTimeout( () => {
            showIsTypingDots();
        }, messData.timeBtw/5);

        setTimeout( () => {
            hideIsTypingDots();
            renderMessage(messData);
        }, messData.timeBtw);
    } else {
        renderMessage(messData);
    }
}
/* Message */
function renderMessage(messData) {

	let whoSendClass = '';
    let hideTickClass = 'hide';
	if(messData.whoSend === 'you') {
		whoSendClass = 'green';
        hideTickClass = '';
	}
	const convContainer = document.querySelector('.conversation-container .bubble');

    var d = new Date()
    minutes = d.getMinutes().toString().length == 1 ? '0' + d
        .getMinutes() : d.getMinutes()
    hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d
        .getHours()
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    time = (hours + ':' +
            minutes);

    //translation
    let messText = messData.text;
    if(messData.translateId) {
        const detected_language = document.querySelector('#det_lng').value;
        messText = translation[detected_language][messData.translateId];
        //messData.text.replace(translation["source"][messData.translateId], translation[detected_language][messData.translateId]);
    }
    
    //-/translation
    

    

	let htmlForInsert = `
<div class="message ${whoSendClass}">
	<span class="message__text">${messText}</span>`;
	if(Array.isArray(messData.buttons) && messData.buttons.length > 0) {
		hideIsTypingDots();
		htmlForInsert += `<div class="button-container">`;
		messData.buttons.forEach( (messButtonText) => {
			htmlForInsert += `<div class="message__button" data-messnumber="${messData.messNumber}" >${messButtonText}</div>`;
		});
		htmlForInsert += `</div>`;
	}
	htmlForInsert +=
        `<span class="message-time">
            <div class="message-time__text">
                <span class="metadata">
                    <span class="time">${time}</span>
                    <span class="tick tick-animation ${hideTickClass}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                            id="msg-dblcheck" x="2047" y="2061">
                            <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#92a58c" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                            id="msg-dblcheck-ack" x="2063" y="2076">
                            <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#4fc3f7" />
                        </svg>
                    </span>
                </span>
            </div>
        </span>
    </div>`;
    convContainer.insertAdjacentHTML('beforebegin', htmlForInsert);

    if(messData.whoSend === 'you') {
        const greenMsgs = document.querySelectorAll('.green');
        const newMsgContainer = greenMsgs[greenMsgs.length - 1];
        animateMessage(newMsgContainer);
    }

    if(messData.addFunction !== undefined) {
        messData.addFunction();
    }

    setTimeout( () => {scrollContainer.scrollTop = scrollContainer.scrollHeight + 1000;}, 100);

    if(messages[messData.messNumber] !== undefined 
        && messages[messData.messNumber].timeBtw !== undefined
        && !messages[messData.messNumber]['stopAutoSend']) {
        sendMessage(messages[messData.messNumber])
    } 

}

function showIsTypingDots() {
	document.querySelector('.bubble').classList.remove('hide-visibility');
}
function hideIsTypingDots() {
	document.querySelector('.bubble').classList.add('hide-visibility');
}
function sendMessageThroughTimeout(messData, timeout) {
	setTimeout( () => { sendMessage(messData) }, timeout);
}
//document.addEventListener('click', (evt) => { console.dir(evt.target) } );

document.querySelector('.conversation-container').addEventListener('click', catchBtnClick);
function catchBtnClick(evt) {
	if(!evt.target.classList.contains('message__button')) return false;
	const yourMessText = evt.target.innerText;
	evt.target.closest('.button-container').classList.add('hide');
	sendMessage({'text': yourMessText, 'whoSend': 'you'});
	setTimeout(showIsTypingDots, timeBtwMess*1.5);
	sendMessageThroughTimeout(messages[evt.target.dataset['messnumber']], timeBtwMess*3);
}

document.querySelector('.conversation-container').addEventListener('click', catchImgClick);
function catchImgClick(evt) {
    if( evt.target.tagName !== "IMG"
        && !evt.target.classList.contains('download_icon') ) 
        return false;
    if( evt.target.classList.contains('final') ) {
        console.dir('Клик на финальное изображение')
        //редиректим?
        return false;
    }
    const popup = document.querySelector('.popup');
    const imgMessWrap = evt.target.closest('.img_message');
    popup.querySelector('.popup-img').src = imgMessWrap.querySelector('.photo').src;
    if(!imgMessWrap.querySelector('.download_icon').classList.contains('hide')) {
        imgMessWrap.querySelector('.download_icon').classList.add('hide');
        imgMessWrap.querySelector('.spinner').classList.remove('hide');
        setTimeout( () => {
            imgMessWrap.querySelector('.spinner').classList.add('hide');
            imgMessWrap.querySelector('.loupe_icon').classList.remove('hide');
            popup.classList.remove('hide');
        }, timeBtwMess);       
    } else {
        popup.classList.remove('hide');
    }
}

document.querySelector('.popup .closelink').addEventListener('click', closePopupHandler);
function closePopupHandler() {
    document.querySelector('.popup').classList.add('hide');
}

document.querySelector('.conversation-compose').addEventListener('submit', userSendMessageSubmit);
function userSendMessageSubmit(evt) {
    evt.preventDefault();
    const messInput = document.querySelector('.input-msg');
    const messForSend = {
        'whoSend': 'you',
        'text': messInput.value
    }
    renderMessage(messForSend);
    messInput.value = '';
    messInput.blur();
}