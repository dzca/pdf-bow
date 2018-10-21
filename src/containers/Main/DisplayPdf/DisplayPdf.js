import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
import axios from 'axios';
import Document from '../../../components/pdf/Document';

class DisplayPdf extends Component {

	state = {
		docs: [],
		selectedId: null,
		loadedDoc: null,
		error: false
	}

	componentDidMount() {
		axios.get('/docs')
			.then(response => {
				const docs = response.data.slice(0, 4);
				docs.forEach(doc => { console.log(doc._id, doc.name) })

				const updatedDocs = docs.map(doc => {
					return {
						...doc
					}
				});
				this.setState({ docs: updatedDocs });
			})
			.catch(error => {
				this.setState({ error: true });
			});
	}

	docSelectedHandler = (id) => {
		console.log('DisplayPdf::docSelectedHandler() clicked with id=' + id + ', selectedId = ' + this.state.selectedId)

		if(!this.state.selectedId || (this.state.selectedId && this.state.selectedId !== id)) {
			axios.get('/docs/' + id).then(response => {
				console.log('DisplayPdf::docSelectedHandler() return res=%s',response.data.name);
				this.setState({ loadedDoc: response.data, selectedId: id });
			});
		} // end if
	}

	deleteDocHandler = (id) => {
		axios.delete('/docs/' + id)
			.then(response => {
				console.log(response);
			});
	}

	render() {

		let docs = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

		if(!this.state.error) {
			docs = this.state.docs.map(doc => {
				return <li
					key={doc._id}
					onClick={() => this.docSelectedHandler(doc._id)}>

					<div> {doc._id} - {doc.created} - {doc.name}</div>

					<button onClick={() => this.deleteDocHandler(doc._id)}>Remove</button>

				</li>;
			});
		}

		let selectedDoc = null;
		if(this.state.loadedDoc) {
			selectedDoc = (
				<section>
					<Document doc={this.state.loadedDoc} />
				</section>
			)
		}

		return(
			<div>
        <h1>Test Display</h1>
				<ul>
					{docs}
				</ul>
				{selectedDoc}

      </div>
		)
	}
}

export default DisplayPdf;
