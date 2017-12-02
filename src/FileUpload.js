import React, { Component } from 'react';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
    };
  }

  render() {
    if(this.state.uploadValue !== 100) {
      return(
        <div>
          <progress value={ this.state.uploadValue } max="100">
            {this.state.uploadValue} %
          </progress>
          <br />
          <input type="file" onChange={ this.props.onUpload }/>
        </div>
      );
    } else {
      return(
        <div>
          <div><p>Upload Completed!</p></div>
        </div>
      );
    }
  }
}

export default FileUpload;
