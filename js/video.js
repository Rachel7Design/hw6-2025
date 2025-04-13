var video;

window.addEventListener("load", function() {

	const video = document.querySelector("video")
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Good job opening the window")

});



document.querySelector("#play").addEventListener("click", function() {
	
	const video = document.querySelector("video")
	video.play();
	console.log("Play Video");
	video.volume = 1.0;
	console.log(video.volume * 100 + "%");
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	
});


document.querySelector("#pause").addEventListener("click", function() {
	const video = document.querySelector("video")
	video.pause();
	console.log("Pause Video");
});


document.querySelector("#slower").addEventListener("click", function() {

	const video = document.querySelector("video")
	video.playbackRate -= .1;
	console.log(video.playbackRate * 100 + "%")


});


document.querySelector("#faster").addEventListener("click", function() {

	const video = document.querySelector("video")
	video.playbackRate += .1;
	console.log(video.playbackRate * 100 + "%")

});

document.querySelector("#skip").addEventListener("click", function() {
	const video = document.querySelector("video")
	video.currentTime += 10 
	if (video.ended) {
		video.currentTime = 0;
		video.play();
	}
	
});


document.querySelector("#mute").addEventListener("click", function()

{
	const video = document.querySelector("video")
	video.muted = !video.muted;
	if (video.muted === true) {
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else document.querySelector("#mute").innerHTML = "Mute"

});


document.querySelector("#slider").addEventListener("input", function (event) {

	const video = document.querySelector("video");
	video.volume = parseInt(event.target.value) / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log(video.volume)
	document.querySelector("#play").addEventListener("click", function () {
		video.volume = parseInt(event.target.value) / 100;
		document.querySelector("#volume").textContent = video.volume * 100 + "%";

	});
});



document.querySelector("#vintage").addEventListener("click", function() {

	document.querySelector("video").classList.add("oldSchool");


});
// adding a class from the video to change the style



document.querySelector("#orig").addEventListener("click", function() {

	document.querySelector("video").classList.remove("oldSchool");

});

// removing a class from the video to change the style
