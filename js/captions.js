


var video = document.querySelector('#video');
var text = document.querySelectorAll('span');
var transcript = document.querySelector('#transcript')
var current = video.currentTime;


video.addEventListener("timeupdate", () => {
	for (i = 0; i < text.length; i+=1) {
		var begin = text[i].getAttribute("data-transcriptBegin");
		var end = text[i].getAttribute("data-transcriptEnd");
		var current = video.currentTime;
		

			if (current>=begin && current < end)  {
				text[i].className = "active";
			} else {
			text[i].className = "";
			}
	
	}
});




