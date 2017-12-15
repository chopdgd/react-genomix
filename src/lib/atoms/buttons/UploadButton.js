import React from 'react'
import PropTypes from 'prop-types'
import Papa from 'papaparse'  // http://papaparse.com/docs
import ReactFileReader from 'react-file-reader'

import Button from './Button'

class UploadButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleFiles = this.handleFiles.bind(this);
  }

  handleFiles = (files) => {
    const config = {
        	delimiter: "",	// auto-detect
        	newline: "",	// auto-detect
        	quoteChar: '"',
        	header: true,
        	dynamicTyping: false,
        	preview: 0,
        	encoding: "",
        	worker: false,
        	comments: false,
        	step: undefined,
        	complete: undefined,
        	error: undefined,
        	download: false,
        	skipEmptyLines: false,
        	chunk: undefined,
        	fastMode: undefined,
        	beforeFirstChunk: undefined,
        	withCredentials: undefined
        }
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      let results = Papa.parse(text, config)
      this.props.handleResults(results.data)
  }
    reader.readAsText(files[0]);
  }

  render() {
    const { content } = this.props
    console.log(this.state)
    return (
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={['.csv', '.txt',]}>
        {content}
      </ReactFileReader>
    )
  }
}


UploadButton.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  handleResults: PropTypes.func.isRequired,
}

UploadButton.defaultProps = {
  content: <Button content="Upload" icon="upload" color="light-blue" />,
}

export default UploadButton
