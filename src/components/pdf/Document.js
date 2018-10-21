import React, { Component } from 'react';
import axios from 'axios';
import pdfjs from 'pdfjs-dist/webpack.js'
import Page from './Page'
import PageNav from './PageNav'

class Document extends Component {
	state = {
    page:0,
		pages: 0,
		scale: 1.2,
		pdf: null
	}

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

	shouldComponentUpdate(nextProps, nextState){
		console.log('Document::shouldComponentUpdate() state.page=' + this.state.page + ', nextState.page=' + nextState.page)

		//update component if this.state.page changed
		if(this.state.page === nextState.page){
			console.log('Document::shouldComponentUpdate() no refresh')
			return false
		}
		console.log('Document::shouldComponentUpdate() refresh')
		// load pdf via url
		//this._loadPdf(nextProps.docId)
		return true
	}

  // visit url and load page
	componentDidMount(){
		console.log('Document::componentDidMount() doc=' + this.props.doc)
		// load pdf via url
		this._loadPdf()
	}

  // load pdf data
	_loadPdf(){
		let doc = this.props.doc
		console.log('Document::_loadPdf(), return doc.name=%s',doc.name);
		const pdfData = atob(doc.content);

		// load the first page when load the docs
		pdfjs.getDocument({data: pdfData}).then((pdf) => {
			this.setState({pages: pdf.numPages, pdf: pdf, page: 1});
		})
	}

  render () {
		console.log('Document::render()...');
    let pagination = null;
		let page = (<div>no page display</div>)
    if (this.state.pages) {
      pagination = (<PageNav previousPage={this.handlePrevious} nextPage={this.handleNext} />)
			page = (<Page pdf={this.state.pdf} page={this.state.page} />)
    }

		// render page if page is 0, or page is updated

    return (
      <div>
        {pagination}
				{page}

      </div>
    );
  }

}

export default Document;
