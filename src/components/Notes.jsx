import React, { useEffect, useRef } from 'react';
import Note from './Note';

function Notes({ notes = [], setNotes = () => {} }) {
  const noteRefs = useRef({});

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((snote) => snote.id === note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = deterMineNewPosition();
        return { ...note, position };
      }
    });

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }, [notes.length]);

  const deterMineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    };
  };

  const handleDragStart = (note, e) => {
    if(note?.pinned){
        alert("note is already pinned");
        return false;

    }
    const { id, } = note;
    const noteRef = noteRefs.current[id];
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const startPos = note.position;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      if (cehckOverLap(id)) {
        noteRef.style.left = `${startPos.x}px`;
        noteRef.style.top = `${startPos.y}px`;
      } else {
        updateNotePosition(id, newPosition);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const cehckOverLap = (id) => {
    const currentNoteRef = noteRefs.current[id];
    const currentRect = currentNoteRef.getBoundingClientRect();
    return notes.some((note) => {
      if (note.id === id) {
        return false;
      }
      const otherNoteRef = noteRefs.current[note.id];
      const otherRect = otherNoteRef.getBoundingClientRect();
      return !(
        currentRect.right < otherRect.left ||
        currentRect.left > otherRect.right ||
        currentRect.bottom < otherRect.top ||
        currentRect.top > otherRect.bottom
      );
    });
  };

  const updateNotePosition = (id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handlePinedItem = (noteId) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, pinned: true } : { ...note, pinned: false }
    );
    setNotes(updatedNotes);
  }

  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          ref={(ref) => (noteRefs.current[note.id] = ref)}
          initialPosition={note.position}
          content={note.text}
          onMouseDown={(e) => handleDragStart(note, e)}
          handlePinedItem={handlePinedItem}
          id={note.id}
        />
      ))}
    </div>
  );
}

export default Notes;
