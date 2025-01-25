"use strict";

// Danh sách bài hát
const songs = [
    { name: "Anh Là Ngoại Lệ Của Em", src: "static/music/a.mp3" },
    { name: "Bài hát 2", src: "static/music/song2.mp3" },
    { name: "Bài hát 3", src: "static/music/song3.mp3" }
];
let currentSongIndex = 0;
let isPlaying = false;

// Phần tử DOM
const audio = new Audio();
const playPauseButton = document.getElementById("playPauseButton");
const nextButton = document.getElementById("nextButton");
const currentSong = document.getElementById("currentSong");

// Cập nhật thông tin bài hát
function loadSong(index) {
    audio.src = songs[index].src;
    currentSong.textContent = songs[index].name;
}

// Phát hoặc tạm dừng nhạc
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Phát";
    } else {
        audio.play();
        playPauseButton.textContent = "Tạm dừng";
    }
    isPlaying = !isPlaying;
});

// Chuyển bài hát
nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
});

// Tải bài hát đầu tiên
loadSong(currentSongIndex);

// Hiệu ứng trái tim bay bổng
const heartButton = document.getElementById("heartButton");
heartButton.addEventListener("click", () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Loại bỏ trái tim sau khi bay xong
    setTimeout(() => {
        heart.remove();
    }, 2000);
});
