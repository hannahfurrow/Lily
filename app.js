// app.js

// Function to add a journal entry
function addJournalEntry(entryText, imageUrl) {
    const journalEntries = getJournalEntries(); // Assuming this function fetches current entries
    const newEntry = {
        text: entryText,
        image: imageUrl,
        date: new Date().toUTCString()
    };
    journalEntries.push(newEntry);
    saveJournalEntries(journalEntries); // Save the updated entries back
}

// Function to display journal entries
function displayJournalEntries() {
    const journalEntries = getJournalEntries(); // Fetch current entries
    const displayArea = document.getElementById('journal-display');
    displayArea.innerHTML = '';
    journalEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('journal-entry');
        entryDiv.innerHTML = `<h3>${entry.date}</h3><p>${entry.text}</p>`;
        if (entry.image) {
            entryDiv.innerHTML += `<img src='${entry.image}' alt='Journal Entry Image'>`;
        }
        displayArea.appendChild(entryDiv);
    });
}

// Example usage of the functions
// addJournalEntry('My first entry!', 'http://example.com/image.jpg');
// displayJournalEntries();