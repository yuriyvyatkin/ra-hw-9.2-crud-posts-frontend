import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import initFetch from './functions/initFetch';
import HomePage from './components/Pages/HomePage/HomePage';
import CreateNotePage from './components/Pages/CreateNotePage/CreateNotePage';
import ViewNotePage from './components/Pages/ViewNotePage/ViewNotePage';
import withParams from './hocs/withParams';
const { get, post, del } = initFetch('https://crud-posts-backend-2021.herokuapp.com/');
const ViewNotePageWithParams = withParams(ViewNotePage);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    get('notes/')
      .then((data) => {
        this.setState({ notes: data });
      })
      .catch((error) => console.log("Could not load notes", error));
  }

  handleFormSubmit({ id, text }) {
    post('notes/', { id, text })
      .then((data) => {
        this.setState({ notes: data });
      })
      .catch((error) => console.log("Could not upload the note", error));
  }

  handleDeleteClick(id) {
    del(`notes/${id}`)
      .then((data) => {
        this.setState({ notes: data });
      })
      .catch((error) => console.log("Could not delete the note", error));
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="App-wrapper">
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      notes={this.state.notes}
                    />
                  }
                />
                <Route
                  path="/notes/new"
                  element={
                    <CreateNotePage
                      onFormSubmit={this.handleFormSubmit}
                    />
                  }
                />
                <Route
                  path="/notes/:id"
                  element={
                    <ViewNotePageWithParams
                      onFormSubmit={this.handleFormSubmit}
                      onDeleteClick={this.handleDeleteClick}
                      get={get}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
