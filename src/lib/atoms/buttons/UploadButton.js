import React from 'react'
import PropTypes from 'prop-types'
import Papa from 'papaparse'  // http://papaparse.com/docs
import ReactFileReader from 'react-file-reader'

import { Button } from 'LibIndex'


class UploadButton extends React.PureComponent {
  handleFiles = (files) => {
    const { config, handleResults } = this.props
    const reader = new FileReader()

    // TODO: How do we test this?
    // NOTE: Currently, very hard to test.  Be aware
    reader.onload = (e) => {
      let results = Papa.parse(e.target.result, config)
      handleResults(results.data)
    }

    reader.readAsText(files[0])
  }

  render() {
    const { content, fileTypes, multipleFiles } = this.props

    return (
      <ReactFileReader
        handleFiles={this.handleFiles}
        fileTypes={fileTypes}
        multipleFiles={multipleFiles}
      >
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
  fileTypes: PropTypes.arrayOf(PropTypes.string),
  multipleFiles: PropTypes.bool,
  config: PropTypes.shape({
    delimiter: PropTypes.string,
    newline: PropTypes.string,
    quoteChar: PropTypes.string,
    header: PropTypes.bool,
    dynamicTyping: PropTypes.bool,
    preview: PropTypes.number,
    encoding: PropTypes.string,
    worker: PropTypes.bool,
    comments: PropTypes.bool,
    step: PropTypes.func,
    complete: PropTypes.func,
    error: PropTypes.func,
    download: PropTypes.bool,
    skipEmptyLines: PropTypes.bool,
    chunk: PropTypes.func,
    fastMode: PropTypes.bool,
    beforeFirstChunk: PropTypes.func,
    withCredentials: PropTypes.bool,
  })
}

UploadButton.defaultProps = {
  content: <Button content="Upload" icon="upload" color="light-blue" />,
  fileTypes: ['.csv', '.txt'],
  multipleFiles: false,
  config: {
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
    withCredentials: undefined,
  }
}

export default UploadButton
