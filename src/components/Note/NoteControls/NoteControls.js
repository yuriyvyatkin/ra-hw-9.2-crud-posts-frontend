import React from 'react';
import './NoteControls.css';
import Button from '../../Button/Button';

class NoteControls extends React.Component {
  render() {
    const {
      onEditClick: handleEditClick,
      onDeleteClick: handleDeleteClick,
    } = this.props;

    return (
      <div className="Note-controls">
        <Button
          className="Note-controls__button-edit"
          content="Изменить"
          onHandleClick={handleEditClick}
        />
        <Button
          className="Note-controls__button-delete"
          content="Удалить"
          type="submit"
          onHandleClick={() => {
            this.props.navigate("/");
            handleDeleteClick();
          }}
        />
      </div>
    );
  }
}

export default NoteControls;
