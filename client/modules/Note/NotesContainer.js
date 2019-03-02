import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote } from '../Note/NoteActions';

const mapDispatchToProps = {
    deleteNote: deleteNoteRequest,
    editNote: editNote, 
    updateNote: updateNoteRequest,
};

export default connect(
    null,
    mapDispatchToProps
)(Notes);