import { useState } from 'react';

const AddNote = () => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
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
                <button className='save'>Guardar</button>
            </div>

        </div>)
}

export default AddNote;