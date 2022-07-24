const AddNote = () => {
    return(
        <div className='note new'>
            <textarea rows="8" cols="10" placeholder="Ingresa tu nota aquí..."></textarea>
            <div className='note-footer'>
                <small>200 Remaining</small>
                <button className='save'>Guardar</button>
            </div>

        </div>)
}

export default AddNote;