import React from 'react'
import { get } from 'lodash'

import Button from './Button'
import * as constants from 'LibSrc/constants/icons'


export const AcceptButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Accept')}
    details={constants.Accept}
  />
)

export const AddButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Add')}
    details={constants.Add}
  />
)

export const CancelButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Cancel')}
    details={constants.Cancel}
  />
)

export const DownloadButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Download')}
    details={constants.Download}
  />
)

export const SaveButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Save')}
    details={constants.Save}
  />
)

export const SearchButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Search')}
    details={constants.Search}
  />
)

export const UploadButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Upload')}
    details={constants.Upload}
  />
)
