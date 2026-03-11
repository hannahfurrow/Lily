function displayJournalEntries() {
    const displayArea = document.getElementById("entriesContainer");
    displayArea.innerHTML = "";

    if (!journalEntries || journalEntries.length === 0) {
        displayArea.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📔</span>
                <p>No entries yet. Start writing your first entry!</p>
            </div>
        `;
        return;
    }

    journalEntries.forEach((entry) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry");

        entryDiv.innerHTML = `
            <h3>${entry.title}</h3>
            <p><strong>${entry.date}</strong></p>
            <p>${entry.text}</p>
            ${entry.image ? `<img src="${entry.image}" alt="${entry.title}">` : ""}
        `;

        displayArea.appendChild(entryDiv);
    });
}

displayJournalEntries();
