function createMultipleHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "flying-heart";
            heart.style.left = `${Math.random() * window.innerWidth}px`;
            heart.style.animationDelay = `${Math.random()}s`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000); // Thời gian bay
        }, i * 200); // Tạo độ trễ giữa các trái tim
    }
}

document.getElementById("heartButton").addEventListener("dblclick", createMultipleHearts);
