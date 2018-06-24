import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class DisplayPdf extends Component {

	state = {
		numPages: null,
		pageNumber: 1,
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}


	render() {
		return(
			<div>
        <h1>DisplayPdf</h1>

        <Document
          file="questions.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>


		)
	}
}

export default DisplayPdf;
