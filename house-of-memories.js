function showRoom(room) {
    const roomDisplay = document.getElementById("roomDisplay");

    if (room === "bedroom") {
        roomDisplay.innerHTML = `
            <h2>Bedroom</h2>
            <p>Late night talks, sleepy thoughts, and quiet moments together.</p>
            <img src="bedroom-memory.jpg" alt="Bedroom Memory" class="room-memory-image">
        `;
    } else if (room === "kitchen") {
        roomDisplay.innerHTML = `
            <h2>Kitchen</h2>
            <p>Little meals, snacks, and the feeling of being at home with you.</p>
            <img src="kitchen-memory.jpg" alt="Kitchen Memory" class="room-memory-image">
        `;
    } else if (room === "livingroom") {
        roomDisplay.innerHTML = `
            <h2>Living Room</h2>
            <p>Movie nights, soft music, and just existing together.</p>
            <img src="livingroom-memory.jpg" alt="Living Room Memory" class="room-memory-image">
        `;
    } else if (room === "attic") {
        roomDisplay.innerHTML = `
            <h2>Attic</h2>
            <p>A secret place for hidden thoughts, old memories, and things too special to leave out in the open.</p>
            <img src="attic-memory.jpg" alt="Attic Memory" class="room-memory-image">
        `;
    }
}
