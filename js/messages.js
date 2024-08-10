const user_city = getURLParameter('user_city');
// console.log(user_city);
const timeBtwMess = 3000;
const scrollContainer = document.querySelector('.conversation-container');
const messages = [
	{
		'text': '<div class="img_message"><img src="img/photo1_clear.jpg" class="photo blur-preview"><div class="loupe_icon hide" ><img src="img/loupe.png"></div><div class="download_icon" ><img src="img/download.png"></div><div class="spinner hide"></div></div>',
		'messNumber': 1,
		'timeBtw': timeBtwMess,
	},
	{
		'text': `Hello, sugar 😘 Are you from ${user_city}?`,
		'messNumber': 2,
		'timeBtw': timeBtwMess,
		'translateId': 'a13',
	},
	{
		'text': 'do you love hot and sexy girls?',
		'messNumber': 3,
		'timeBtw': timeBtwMess,
		'translateId': 'a14',
	},	
	{
		'text': `I'm so boring right now.... Can i have you for a chat?`,
		// 'buttons': ['blowjob', 'ass fuck'],
		'messNumber': 4,
		'timeBtw': timeBtwMess,
		'translateId': 'a15',
		'addFunction': () => {
			document.querySelector('.conversation-compose').addEventListener('submit', after4MessSubmit);
			function after4MessSubmit() {
				sendMessage(messages[4]);
			}
		}
	},
	{
		'text': '<div class="img_message"><img src="img/photo2_clear.jpg" class="photo blur-preview"><div class="loupe_icon hide" ><img src="img/loupe.png"></div><div class="download_icon" ><img src="img/download.png"></div><div class="spinner hide"></div></div>',
		// 'buttons': ['Bra', 'Panties'],
		'messNumber': 5,
		'timeBtw': timeBtwMess,
		'stopAutoSend': true
	},
	{
		'text': '<n id="a16">Please hurry up, i feel so hot right now 🔥</n>',
		'messNumber': 6,
		'timeBtw': timeBtwMess,
		'translateId': 'a16',
	},
	{
		'text': '<div class="img_message"><img src="img/photo3.jpg" class="photo final"></div>',
		'messNumber': 7,
		'timeBtw': timeBtwMess,
	},
	// {
	// 	'text': '<video  muted="muted" playsinline="playsinline"><source src="img/1.mp4" type="video/mp4"></video><div class="blur"></div>',
	// 	'messNumber': 6,
	// 	'addFunction': () => {
	// 		        let video = document.querySelector('.message__text video');
	// 		        let blur = document.querySelector('.message__text .blur');
	// 		        var isBodyClicked = false;
	// 		        blur.onclick = function () {
	// 		            if(isBodyClicked === false) {
	// 		                blur.style.display = "none";
	// 		                video.play();
	// 		                setTimeout(videoPause, 5000);
	// 		                function videoPause() {
	// 		                   blur.style.display = "block";
	// 		                   setTimeout( () => {scrollContainer.scrollTop = scrollContainer.scrollHeight + 1000;}, 100);
	// 		                   video.pause();
	// 		                }
	// 		            }

	// 		            isBodyClicked = true;
	// 		        }
	// 	}
	// },
	// {
	// 	'text': 'lets continue in app bb💋',
	// 	'messNumber': 7,
	// 	'timeBtw': timeBtwMess,
	// 	'addFunction': () => {
	// 		let finalBtn = document.querySelector('.final_btn');
	//         setTimeout( () => {
	//             finalBtn.style.display = "flex";
	//             document.querySelector('.bubble').style.display = "none";
	//             setTimeout( () => {scrollContainer.scrollTop = scrollContainer.scrollHeight + 1000;}, 100);
	//         }, timeBtwMess);
	// 	}
	// },
];



//Lets Go
showIsTypingDots();
sendMessage(messages[0]);