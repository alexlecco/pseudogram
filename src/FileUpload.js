import React, { Component } from 'react';
import firebase from 'firebase';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
      picture: null,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      console.log(error.message)
    }, () => {
      this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL,
      });
    });
  }

  render() {
    if(this.state.uploadValue == 100) {
      return(
        <div>
          <div><p>Upload Completed!</p></div>
          <br />
          <img width="320" src={this.state.picture} alt="" />
        </div>
      );
    } else {
      return(
        <div>
          <progress value={this.state.uploadValue} max="100">
            {this.state.uploadValue} %
          </progress>
          <br />
          <input type="file" onChange={this.handleUpload}/>
        </div>
      );
    }
  }
}

export default FileUpload;
