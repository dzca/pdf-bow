import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import axios from 'axios';

class Upload extends Component {

	onDrop = (acceptedFiles) => {
		acceptedFiles.forEach(file => {
			const reader = new FileReader();

			reader.onload = () => {
				const fileAsBinaryString = btoa(reader.result);
        console.log('reading file name=%s',file.name)
				// do whatever you want with the file content
				//console.log(fileAsBinaryString)

        let data = {
          'content':fileAsBinaryString,
          'name': file.name
        };

        // 1) upload to server
        axios.post('/docs', data).then(res =>{

          console.log('upload finished.');
        })

        // 2) display on page/view

			};
			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');

			reader.readAsBinaryString(file);

		});
	}

	render() {
		return(
      <div>
        <h1>Upload</h1>
        <Dropzone onDrop = {(files) => this.onDrop(files) } >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
		)
	}
}

export default Upload;
