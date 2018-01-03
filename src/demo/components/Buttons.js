import React from 'react'
import { Container, Segment, List, Header } from 'semantic-ui-react'

import * as GenomiX from 'LibIndex'

const handleResults = (results) => {
  alert(JSON.stringify(results))
}

const defaultButtons = [
  {
    key: 1,
    description: 'Button',
    header: <GenomiX.Button content="Default" />,
  },
  {
    key: 2,
    description: 'AcceptButton',
    header: <GenomiX.AcceptButton />,
  },
  {
    key: 3,
    description: 'CancelButton',
    header: <GenomiX.CancelButton />,
  },
  {
    key: 4,
    description: 'DownloadButton',
    header: <GenomiX.DownloadButton color="black" />,
  },
  {
    key: 5,
    description: 'SaveButton',
    header: <GenomiX.SaveButton />,
  },
  {
    key: 6,
    description: 'SearchButton',
    header: <GenomiX.SearchButton color="action-warning" />,
  },
  {
    key: 7,
    description: 'UploadButton',
    header: (
      <GenomiX.UploadButton
        content={<GenomiX.Button content="Upload" icon="upload" color="black" />}
        handleResults={handleResults}
      />
    ),
  },
  {
    key: 8,
    description: 'ExportButton',
    header: <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" color="black" />} />,
  },
]
const invertedButtons =[
  {
    key: 1,
    description: 'Button',
    header: <GenomiX.Button content="Default" inverted />,
    meta: 'inverted',
  },
  {
    key: 2,
    description: 'AddButton',
    header: <GenomiX.AddButton color="green" inverted />,
    meta: 'inverted',
  },
  {
    key: 3,
    description: 'AcceptButton',
    header: <GenomiX.AcceptButton inverted />,
    meta: 'inverted',
  },
  {
    key: 4,
    description: 'CancelButton',
    header: <GenomiX.CancelButton inverted />,
    meta: 'inverted',
  },
  {
    key: 5,
    description: 'DownloadButton',
    header: <GenomiX.DownloadButton color="black" inverted />,
    meta: 'inverted',
  },
  {
    key: 6,
    description: 'SaveButton',
    header: <GenomiX.SaveButton inverted />,
    meta: 'inverted',
  },
  {
    key: 7,
    description: 'SearchButton',
    header: <GenomiX.SearchButton color="action-warning" inverted />,
    meta: 'inverted',
  },
  {
    key: 8,
    description: 'UploadButton',
    header: (
      <GenomiX.UploadButton
        content={<GenomiX.Button content="Upload" icon="upload" inverted />}
        handleResults={handleResults}
      />
    ),
    meta: 'inverted',
  },
  {
    key: 9,
    description: 'ExportButton',
    header: <GenomiX.ExportButton content={<GenomiX.Button content="Export" icon="download" inverted />} />,
    meta: 'inverted',
  },
]
const loanIconButtons = [
  {
    key: 1,
    description: 'loanIconButton add default',
    header: <GenomiX.LoanIconButton icon="add" color="green" />,
  },
  {
    key: 2,
    description: 'loanIconButton add inverted',
    header: <GenomiX.LoanIconButton inverted icon="add" color="green" />,
  },
  {
    key: 3,
    description: 'loanIconButton delete inverted',
    header: <GenomiX.LoanIconButton inverted icon="trash" color="action-error" />,
  },
  {
    key: 4,
    description: 'loanIconButton edit inverted',
    header: <GenomiX.LoanIconButton inverted icon="edit" color="light-blue" />,
  },
]

const Buttons = () => (
  <Container>
    <Header>Default Buttons</Header>

    <Segment.Group>
      <Segment>
        <List
            items={defaultButtons}
            horizontal
          />
      </Segment>
      <Segment secondary font="">
        <p>GenomiX.Button content="Default"</p>
        <p>GenomiX.AcceptButton</p>
      </Segment>
    </Segment.Group>
    <Header>Inverted Buttons</Header>
    <Segment.Group>
      <Segment>
        <List
            items={invertedButtons}
            horizontal
          />
      </Segment>
      <Segment secondary>
        Button usage instruction goes here
      </Segment>
    </Segment.Group>
    <Header>Loan Icon Buttons</Header>
    <Segment.Group>
      <Segment>
        <List
            items={loanIconButtons}
            horizontal
          />
      </Segment>
      <Segment secondary>
        Button usage instruction goes here
      </Segment>
    </Segment.Group>
  </Container>
)

export default Buttons
