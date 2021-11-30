import React from 'react';
import '../Page.css';
import Form from '../../Form/Form';
import withNavigate from '../../../hocs/withNavigate';

const FormWithNavigate = withNavigate(Form);

class CreateNotePage extends React.Component {
  render() {
    return (
      <div className="Page">
        <FormWithNavigate
          title="Новый пост"
          btnName="Опубликовать"
          onSubmit={this.props.onFormSubmit}
        />
      </div>
    );
  }
}

export default CreateNotePage;
