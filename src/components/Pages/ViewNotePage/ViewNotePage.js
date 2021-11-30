import React from 'react';
import '../Page.css';
import Form from '../../Form/Form';
import Note from '../../Note/Note';
import withNavigate from '../../../hocs/withNavigate';

const FormWithNavigate = withNavigate(Form);

class ViewNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      text: '',
      created: '',
      editingMode: false,
    };
    this.toggleEditingMode = this.toggleEditingMode.bind(this);
  }

  componentDidMount() {
    this.props.get(`notes/?id=${this.props.params.id}`)
      .then((data) => {
        this.setState({ ...data });
      })
      .catch((error) => console.log("Could not load the note", error));
  }

  toggleEditingMode() {
    this.setState({ editingMode: !this.state.editingMode })
  }

  render() {
    const {
      id,
      text,
      created,
    } = this.state;

    const {
      onDeleteClick: handleDeleteClick,
    } = this.props;

    const note = <Note
      id={id}
      text={text}
      created={created}
      onEditClick={this.toggleEditingMode}
      onDeleteClick={handleDeleteClick}
      onView={true}
    />;

    const editing = <FormWithNavigate
      id={id}
      text={text}
      title="Редактировать публикацию"
      btnName="Сохранить"
      onSubmit={this.props.onFormSubmit}
      onGoBackClick={this.toggleEditingMode}
    />;

    return (
      <div className="Page">
        {!this.state.editingMode ? note : editing}
      </div>
    );
  }
}

export default ViewNotePage;
