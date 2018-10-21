import React, { Component } from 'react';
import axios from 'axios';
import pdfjs from 'pdfjs-dist/webpack.js'
import Page from './Page'
class Document extends Component {
	state = {
		loadedDoc: null,
		error: false,
		numPages: null,
		pageNumber: 1,
		pdf:null
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

    // TODO: compute the number of pages, prepare current views
		if(this.state.loadedDoc) {
			// convert string to {data: Uint8Array}
			// console.log('Document content = ' + this.state.loadedDoc.content);
			//const raw = '';
			const pdfData = atob(this.state.loadedDoc.content);


      pdfjs.getDocument({data: pdfData}).then((pdf) => {
				console.log('parsed pdf')
				this.setState({numPages: pdf.numPages, pdf: pdf});
			})
      

			// const rawLength = raw.length;
			// const pdfBinArray = new Uint8Array(new ArrayBuffer(rawLength));
			// const stream = { data: pdfBinArray };
			doc = (
				<div className="Doc">
          <h1>{this.state.loadedDoc._id}</h1>

          <div className="Edit">
            <button onClick={this.deleteDocHandler} className="Delete">Delete</button>
          </div>
					<Page pageNum={this.state.pageNumber} numPages={this.state.numPages} pdf={this.state.pdf}></Page>
	        <p>Page  of {this.state.numPages}</p>
			</div>
			);
		}
		return doc;
	}
}

export default Document;
