import React from 'react'
import { get } from 'lodash'

import { Button } from '../../index'
import * as constants from '../../constants/icons'


export const AcceptButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Accept')}
    {...constants.Accept}
  />
)

export const AddButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Add')}
    {...constants.Add}
  />
)

export const CancelButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Cancel')}
    {...constants.Cancel}
  />
)

export const DownloadButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Download')}
    {...constants.Download}
  />
)

export const SaveButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Save')}
    {...constants.Save}
  />
)

export const SearchButton = ({ ...props }) => (
  <Button
    {...props}
    content={get(props, 'content', 'Search')}
    {...constants.Search}
  />
)
