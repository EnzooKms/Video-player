const Video = document.getElementById("yt")
const backBtn = document.getElementById("back")
const skipBtn = document.getElementById("skip")
const resetBtn = document.getElementById("reset")
const bar = document.getElementById("timer")
let duration;

Video.addEventListener('loadedmetadata', () => {
    duration = Video.duration
    console.log(duration);
})


resetBtn.addEventListener("click", () => {
    Video.currentTime = 0
})

backBtn.addEventListener("click", () => {
    Video.currentTime -= 10
})

skipBtn.addEventListener("click", () => {
    Video.currentTime += 10
})

setInterval(() => {
    bar.style.width = `${Video.currentTime / duration * 100}%`
}, 200)