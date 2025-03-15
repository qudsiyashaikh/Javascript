document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesContainer = document.getElementById('notesContainer');

    // Load notes from localStorage
    loadNotes();

    // Add note event
    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            addNoteToDOM(noteText);
            saveNoteToLocalStorage(noteText);
            noteInput.value = '';
        }
    }); })



    // Function to add note to DOM
    function addNoteToDOM(noteText) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <p>${noteText}</p>
            <button class="delete-btn">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);

        // Add delete functionality
        const deleteBtn = noteDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(noteDiv);
            removeNoteFromLocalStorage(noteText);
        });
    }

    // Function to save note to localStorage
    function saveNoteToLocalStorage(noteText) {
        const notes = getNotesFromLocalStorage();
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Function to remove note from localStorage
    function removeNoteFromLocalStorage(noteText) {
        const notes = getNotesFromLocalStorage().filter(note => note !== noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Function to load notes from localStorage
    function loadNotes() {
        const notes = getNotesFromLocalStorage();
        notes.forEach(note => addNoteToDOM(note));
    }

    // Function to get notes from localStorage
    function getNotesFromLocalStorage() {}
        return JSON


