function showRoom(room) {
    const roomDisplay = document.getElementById("roomDisplay");

    if (room === "bedroom") {
        roomDisplay.innerHTML = `
            <h2>Bedroom</h2>
            <p> come up with idea for this room</p>
            <img src="bedroom.jpg" alt="Bedroom Memory" class="room-memory-image">
        `;
    } else if (room === "kitchen") {
        roomDisplay.innerHTML = `
            <h2>Kitchen</h2>
            <p>add recipes that lily and I have done together in this one.</p>
            <img src="kitchen.jpg" alt="Kitchen Memory" class="room-memory-image">
        `;
    } else if (room === "livingroom") {
        roomDisplay.innerHTML = `
            <h2>Living Room</h2>
            <p>add movies we've watched together</p>
            <img src="livingroom.jpg" alt="Living Room Memory" class="room-memory-image">
        `;
    } else if (room === "bathroom") {
        roomDisplay.innerHTML = `
            <h2>Bathroom</h2>
            <p>add bathroom routine and shower stuff?</p>
            <img src="bathroom.jpg" alt="Bathroom Memory" class="room-memory-image">
        `;
    }
}

function toggleMusic() {
    const music = document.getElementById("bgmusic");
    const vinyl = document.getElementById("vinyl");
    const button = document.querySelector(".music-btn");

    if (music.paused) {
        music.play()
            .then(() => {
                vinyl.classList.add("spinning");
                button.textContent = "Pause Music";
            })
            .catch((error) => {
                console.log("Music would not play:", error);
            });
    } else {
        music.pause();
        vinyl.classList.remove("spinning");
        button.textContent = "Play Music";
    }
}
