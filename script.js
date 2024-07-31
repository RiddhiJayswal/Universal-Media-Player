const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

const speedUpHandler = ()=>{
 // * where is the video-> 
 const videoElement = document.querySelector("video");
 if (videoElement == null) {
     return;
 }
 // i want that playback speed should be at max 300%
 if (videoElement.playbackRate > 3) {
     return;
 }
 // video -> speed increase
 const increaseSpeed = videoElement.playbackRate + 0.5;
 videoElement.playbackRate = increaseSpeed;

 showToast(increaseSpeed + "X");

 // which property you will use to increase it's speed 
 // * how much you want to increase
}

const handleInput=()=>{
    // i want to make it click
    console.log("input is clicked")
    videoInput.click();

}
const acceptInputHandler=(obj)=>{
    const selectedVideo = obj.target.files[0];
    //src ->base64
    const link = URL.createObjectURL(selectedVideo);
    // console.log("files",selectedFiles);
    // console.log("file selected");
    // console.log(obj);
    const videoElement = document.createElement("video");
    videoElement.src = link;
    //done
    videoElement.setAttribute("class","video");
    videoElement.play();
    // videoElement.controls=true;
    videoPlayer.appendChild(videoElement);
    //how to set volume/speed in js


}
speedUp.addEventListener("click",speedUpHandler);
videoBtn.addEventListener("click",handleInput);
videoInput.addEventListener("change",acceptInputHandler);