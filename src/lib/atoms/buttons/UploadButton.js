import React from 'react'
import PropTypes from 'prop-types'
import Papa from 'papaparse'  // http://papaparse.com/docs
import ReactFileReader from 'react-file-reader'

import Button from './Button'

// function DataToArray(strData, fileType) {
//
//   // Determine the correct delimiter based on fileType
//   let strDelimiter
//   if(fileType === ".txt") {
//       strDelimiter = '\t';
//   } else if(fileType === ".csv") {
//     strDelimiter = ',';
//   }
//
//   // Create a regular expression to parse the CSV values.
//   var objPattern = new RegExp(
//   // Delimiters.
//     `(\\${strDelimiter}|\\r?\\n|\\r|^)` +
//
//   // Quoted fields.
//   '(?:"([^"]*(?:""[^"]*)*)"|' +
//
//   // Standard fields.
//   `([^"\\${strDelimiter}\\r\\n]*))`, 'gi');
//
//   // Create an array to hold our data. Give the array a default empty first row.
//   var arrData = [];
//   var headers = [];
//   var headersFound = false;
//   var headerIndex = 0;
//   var idCount = -1;
//   // Create an array to hold our individual pattern matching groups.
//   var arrMatches = null;
//   // Keep looping over the regular expression matches until we can no longer find a match.
//   arrMatches = objPattern.exec(strData);
//   while (arrMatches !== null) {
//     // Get the delimiter that was found.
//     var strMatchedDelimiter = arrMatches[1];
//     // Check to see if the given delimiter has a length (is not the start of string) and if it matches
//     // field delimiter. If id does not, then we know that this delimiter is a row delimiter.
//     if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
//       // Since we have reached a new row of data, add an empty row to our data array.
//       arrData.push({});
//       idCount++;
//       headersFound = true;
//       headerIndex = 0;
//     }
//
//     var strMatchedValue;
//
//     // Now that we have our delimiter out of the way, let's check to see which kind of value we
//     // captured (quoted or unquoted).
//     if (arrMatches[2]) {
//       // We found a quoted value. When we capture this value, unescape any double quotes.
//       strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
//     } else {
//       // We found a non-quoted value.
//       strMatchedValue = arrMatches[3];
//     }
//
//     // Now that we have our value string, let's add it to the data array.
//     if (!headersFound) {
//       headers.push(strMatchedValue);
//     } else {
//       arrData[arrData.length - 1][headers[headerIndex]] = strMatchedValue;
//       headerIndex++;
//     }
//     if (arrData[arrData.length - 1]) {
//       arrData[arrData.length - 1].id = idCount;
//     }
//     arrMatches = objPattern.exec(strData);
//   }
//   // Return the parsed data.
//   return arrData;
// }

class UploadButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
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
      this.setState({
        results,
    })
    alert(JSON.stringify(results))
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
}

UploadButton.defaultProps = {
  content: <Button content="Upload" icon="upload" color="light-blue" />,
}

export default UploadButton
