// JavaScript: static/js/memories.js

// Lấy danh sách kỷ niệm từ localStorage
function loadMemories() {
    const memories = JSON.parse(localStorage.getItem("memories")) || [];
    const memoryList = document.getElementById("memory-list");

    // Xóa danh sách cũ
    // memoryList.innerHTML = "";

    // Thêm từng kỷ niệm vào danh sách
    memories.forEach(memory => {
        const li = document.createElement("li");
        li.textContent = memory;
        memoryList.appendChild(li);
    });
}

// Thêm kỷ niệm mới
function addMemory() {
    const input = document.getElementById("memory-input");
    const memory = input.value.trim();

    if (memory) {
        // Lấy danh sách kỷ niệm hiện tại
        const memories = JSON.parse(localStorage.getItem("memories")) || [];
        memories.push(memory);

        // Lưu lại vào localStorage
        localStorage.setItem("memories", JSON.stringify(memories));

        // Cập nhật hiển thị
        loadMemories();

        // Xóa input sau khi thêm
        input.value = "";

        // Hiển thị thông báo thành công
        showSuccessMessage();
    } else {
        alert("Vui lòng nhập kỷ niệm trước khi thêm!");
    }
}

// Hiển thị thông báo thêm thành công
function showSuccessMessage() {
    const message = document.getElementById("success-message");
    message.textContent = "Thêm kỷ niệm thành công!";
    message.classList.remove("hidden");
    message.classList.add("visible");

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        message.classList.remove("visible");
        message.classList.add("hidden");
    }, 3000);
}

// Tải kỷ niệm khi trang mở
window.onload = function () {
    loadMemories();
};
