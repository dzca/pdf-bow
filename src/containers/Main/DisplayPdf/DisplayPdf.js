import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import Doc from '../../../components/Doc/Doc';
class DisplayPdf extends Component {

	state = {
		docs: [],
		selectedId: null,
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
		this.setState({ selectedDocId: id });
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

					<button onclick={() => this.deleteDocHandler(doc._id)}>Remove</button>

				</li>;
			});
		}

		return(
			<div>
        <h1>DisplayPdf</h1>
				<ul>
					{docs}
				</ul>

				<section>
					<Doc id={this.state.selectedDocId} />
				</section>
      </div>
		)
	}
}

export default DisplayPdf;
