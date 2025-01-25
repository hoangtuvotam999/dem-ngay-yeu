document.addEventListener("click", function (e) {
    const colors = ["💜", "💙", "💚", "❤️", "💛", "😼", "🐧", "🎀"];
    const heartCount = 2; // Số lượng trái tim mỗi lần click

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.className = "click-heart";
        heart.textContent = colors[Math.floor(Math.random() * colors.length)];

        // Vị trí bắt đầu tại vị trí click chuột
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;

        // Thêm hiệu ứng ngẫu nhiên
        const randomSize = Math.random() * 20 + 10; // Kích thước trái tim (10px - 30px)
        heart.style.fontSize = `${randomSize}px`;
        heart.style.animationDelay = `${Math.random() * 0.5}s`;
        heart.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * -200}px)`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000); // Thời gian tồn tại của trái tim
    }
});
