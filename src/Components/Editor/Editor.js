import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers.js';
import BorderColorIcon from '@material-ui/system';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';

class Editor extends React.Component {
  state = {
    text: '',
    title: '',
    id: '',
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }
  updateBody = async val => {
    await this.setState({text: val});
    this.update();
  };

  update = debounce(() => {
    console.log('UPDATING DATABASE');
    // come back later
  }, 1500);
}

export default withStyles(styles)(Editor);
