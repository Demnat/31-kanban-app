import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';

import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
  // dropNote,
};

const noteTarget = {
    drop(targetProps, monitor) {
      console.log(monitor.getDropResult());
      const dropProps = monitor.getDropResult();
      const { id: noteId, laneId: dropLaneId } = dropProps;
   
      if (!targetProps.lane.notes.length) {
        targetProps.dropNote(
          targetProps.note.id,
          dropLaneId,
        );
      }
    },
   };


export default compose(
    connect(null, mapDispatchToProps),
    DropTarget(ItemTypes.NOTE, noteTarget, (dropConnect) => ({
      connectDropTarget: dropConnect.dropTarget()
    }))
  )(Notes);

// export default connect(
//   null,
//   mapDispatchToProps
// )(Notes);