let currentPage = 0;

function showJournalPage(index) {
    const title = document.getElementById("pageTitle");
    const date = document.getElementById("pageDate");
    const text = document.getElementById("pageText");
    const image = document.getElementById("pageImage");
    const pageNumber = document.getElementById("pageNumber");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!journalEntries || journalEntries.length === 0) {
        title.textContent = "No Entries Yet";
        date.textContent = "";
        text.textContent = "There are no journal entries to display.";
        image.style.display = "none";
        pageNumber.textContent = "";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    const entry = journalEntries[index];

    title.textContent = entry.title;
    date.textContent = entry.date;
    text.textContent = entry.text;

    if (entry.image) {
        image.src = entry.image;
        image.alt = entry.title;
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

    pageNumber.textContent = `Page ${index + 1} of ${journalEntries.length}`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === journalEntries.length - 1;
}

document.getElementById("prevBtn").addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage--;
        showJournalPage(currentPage);
    }
});

function buildIndex() {
    const indexList = document.getElementById("indexList");
    indexList.innerHTML = "";

    journalEntries.forEach((entry, i) => {
        const li = document.createElement("li");

        li.textContent = entry.date;
        li.style.cursor = "pointer";

        li.onclick = function () {
            currentPage = i;
            showJournalPage(i);
        };

        indexList.appendChild(li);
    });
}

document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentPage < journalEntries.length - 1) {
        currentPage++;
        showJournalPage(currentPage);
    }
});

window.onload = function () {
    buildIndex();
    showJournalPage(currentPage);
};
