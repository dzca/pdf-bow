import React, { Component } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

class Doc extends Component {
	state = {
		loadedDoc: null,
		error: false,
		numPages: null,
		pageNumber: 1
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}

	componentDidUpdate() {
		if(this.props.id) {
			if(!this.state.loadedDoc || (this.state.loadedDoc && this.state.loadedDoc._id !== this.props.id)) {
				axios.get('/docs/' + this.props.id)
					.then(response => {
						console.log('res=%j',response.data);
						this.setState({ loadedDoc: response.data });
					});
			}
		}
	}

	deleteDocHandler = () => {
		axios.delete('/docs/' + this.props.id)
			.then(response => {
				console.log(response);
			});
	}

	render() {
		let doc = <p style={{ textAlign: 'center' }}>Please select a Doc!</p>;
		if(this.props.id) {
			doc = <p style={{ textAlign: 'center' }}>Loading...!</p>;
		}
		if(this.state.loadedDoc) {
			// convert string to {data: Uint8Array}
			console.log(this.state.loadedDoc.content);
			//const raw = '';
			const raw = atob(this.state.loadedDoc.content);
			// const rawLength = raw.length;
			// const pdfBinArray = new Uint8Array(new ArrayBuffer(rawLength));
			// const stream = { data: pdfBinArray };
			doc = (
				<div className="Doc">
          <h1>{this.state.loadedDoc._id}</h1>

          <div className="Edit">
            <button onClick={this.deleteDocHandler} className="Delete">Delete</button>
          </div>

					<Document
	          file={{data: raw}}
	          onLoadSuccess={this.onDocumentLoad}>
	          <Page pageNumber={this.state.pageNumber} />
	        </Document>
	        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
			</div>
			);
		}
		return doc;
	}
}

export default Doc;
