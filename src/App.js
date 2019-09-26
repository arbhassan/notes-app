import React from 'react';
import firebase from 'firebase';
import SideBar from './Components/SideBar/SideBar';
import Editor from './Components/Editor/Editor';
import './App.css';

class App extends React.Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null,
  };

  render() {
    return (
      <div className="app-container">
        <SideBar
          selectedNoteIndex={this.state.selectedNoteIndex}
          selectedNote={this.state.notes}
        />
        <Editor />
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({notes: notes});
      });
  };
}

export default App;
