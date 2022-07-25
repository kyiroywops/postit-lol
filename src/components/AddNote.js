import { useState } from 'react';

const AddNote = ({ handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        handleAddNote()
    }
    return(
        <div className='note new'>
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Ingresa tu nota aquí..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>200 Remaining</small>
                <button className='save' onClick={handleSaveClick}>Guardar</button>
            </div>

        </div>)
}

export default AddNote;