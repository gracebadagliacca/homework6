var video;
var volume; 
var button;

function getVid(){
	video = document.querySelector("#myVideo");
	console.log("Got Video") 
}

function playVid() { 
	video.play()
	console.log("Play Video");
	console.log(video);
	//set volume variable
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%" ;
	//change volume text 
} 

function pauseVid() { 
	video.pause()
	// mouse click = event-- onclick 
	console.log("Pause Video");
} 

//Do I need a CSS file to change the images of the buttons?

function decreaseSpeed() { 
	video.playbackRate *= 0.8
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25
	console.log("Speed is " + video.playbackRate);
}


function skipAhead() { 
	video.currentTime += 60

	if (video.ended){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	
	console.log("Current location is " + video.currentTime);
} 

//advance

function mute() { 
	if (video.muted){
		video.muted=false;
		button = document.querySelector("#mute")
		button.innerHTML = "Mute"
  		console.log("Changing to Unmuted");
  	}
  	else{
  		video.muted = true;
  		button = document.querySelector("#mute")
		button.innerHTML = "Unmute"
      	console.log(" Changing to Muted");
  	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (video.volume * 100) + "%";
}
       

function gray() { 
	video.classList.add("grayscale")
	//do you need to do querySelector(".grayscale")
	//do you need an if statement? 
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale")

	console.log("In color");
}
