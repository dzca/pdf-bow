import React, { Component } from 'react';
import axios from 'axios';
import pdfjs from 'pdfjs-dist/webpack.js'

class Page extends Component {
	state = {
		loadedDoc: null,
		error: false,
		numPages: null,
		pageNumber: 1
	}

	componentDidMount() {

		if (this.props.pageNum && this.props.pageNum < this.props.numPages) {
			const pageNumber = this.props.pageNum;
			const pdf = this.props.pdf;
			pdf.getPage(pageNumber).then((page) => {
				console.log('Page loaded');

				const scale = 1.5;
				const viewport = page.getViewport(scale);

				const { canvas } = this;
				const context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				// Render PDF page into canvas context
				const renderContext = {
					canvasContext: context,
					viewport: viewport
				};
				const renderTask = page.render(renderContext);
				renderTask.then(function () {
					console.log('Page rendered');
				});
			});
		}

	}

	render() {
		return <canvas ref={(canvas) => { this.canvas = canvas; }} />;
	}
}

export default Page;
