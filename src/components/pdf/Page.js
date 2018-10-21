import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import axios from 'axios';
// import pdfjs from 'pdfjs-dist/webpack.js'

class Page extends Component {

  state = {
    page: 1,
    pdf: null,
  };

  shouldComponentUpdate(nextProps, nextState){
		console.log('Page::shouldComponentUpdate() state.page=' + this.state.page + ', nextState.page=' + nextState.page)

		//update dom if this.state.page changed
		if(this.state.page === nextState.page){
			console.log('Page::shouldComponentUpdate() no refresh')
			return false
		}
		console.log('Document::shouldComponentUpdate() refresh')
		// this.setState({ page: 1 });
		// load pdf via url
		//this._loadPdf(nextProps.docId)
		return true
	}

  componentDidMount() {
    console.log('Page::componentDidUpdate() pdf=' + this.props.pdf)
    if(this.props.pdf){
      let pdf = this.props.pdf
      let page = this.props.page
      this.setState({ pdf: pdf, page: page });

      pdf.getPage(page).then((p) => {
        console.log('render pdf......')
        const scale = 1.5;
        const viewport = p.getViewport(scale);

        const { canvas } = this;
        const canvasContext = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext,
          viewport,
        };
        p.render(renderContext);
      });

    } else {
      console.log('error, no pdf properties')
    }
  }

    // PdfJsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.550/pdf.worker.js';
    // PdfJsLib.getDocument(this.props.file).then((pdf) => {
    //   this.setState({ pdf });
    //   if (this.props.onDocumentComplete) {
    //     this.props.onDocumentComplete(pdf.pdfInfo.numPages);
    //   }
    //   pdf.getPage(this.props.page).then((page) => {
    //     const scale = 1.5;
    //     const viewport = page.getViewport(scale);
    //
    //     const { canvas } = this;
    //     const canvasContext = canvas.getContext('2d');
    //     canvas.height = viewport.height;
    //     canvas.width = viewport.width;
    //
    //     const renderContext = {
    //       canvasContext,
    //       viewport,
    //     };
    //     page.render(renderContext);
    //   });
    // });


  // componentWillReceiveProps(newProps) {
  //   if (newProps.page !== this.props.page) {
  //     this.state.pdf.getPage(newProps.page).then((page) => {
  //       const scale = 1.5;
  //       const viewport = page.getViewport(scale);
  //
  //       const { canvas } = this;
  //       const canvasContext = canvas.getContext('2d');
  //       canvas.height = viewport.height;
  //       canvas.width = viewport.width;
  //
  //       const renderContext = {
  //         canvasContext,
  //         viewport,
  //       };
  //       page.render(renderContext);
  //     });
  //   }
  // }

  render() {
    let canvas = null
    if(this.props.pdf){
      //canvas = "pdf display, page =" + this.props.page
      canvas = (<canvas ref={(canvas) => { this.canvas = canvas; }} />)
    }
    return  (
      <div>
        {canvas}
      </div>
    )
    //return ;
  }
}

Page.propTypes = {
  pdf: PropTypes.object.isRequired,
  page: PropTypes.number,
  // onDocumentComplete: PropTypes.func,
}

export default Page
