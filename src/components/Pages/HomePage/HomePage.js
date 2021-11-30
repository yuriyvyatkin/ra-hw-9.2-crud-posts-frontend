import { Link } from "react-router-dom";
import React from 'react';
import '../Page.css';
import './HomePage.css';
import Button from '../../Button/Button';
import Note from '../../Note/Note';

class Home extends React.Component {
  render() {
    return (
      <div className="Page">
        <Button
          className="Home__button-create"
          content={<Link to="/notes/new">Создать запись</Link>}
        />
        <div className="Home__notes-container">
          {this.props.notes.map(({ id, text, created }) => {
            return (
              <Note
                key={id}
                id={id}
                text={text}
                created={created}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
