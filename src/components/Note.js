import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (<div className="note">
        <span>Titulo</span>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <small>Importante</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em' />
        </div>
    </div>
    );
};
 
export default Note;