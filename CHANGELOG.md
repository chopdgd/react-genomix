# Change Log

## [v0.15.0](https://github.com/chopdgd/react-genomix/tree/v0.15.0) (2019-10-14)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.14.2...v0.15.0)

- Updated dependencies
- Added a custom hook for parsing URL parameters if you are using React Router

## [v0.14.2](https://github.com/chopdgd/react-genomix/tree/v0.14.2) (2019-09-13)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.14.1...v0.14.2)

- Fixed bug with no data message renderer in Table

## [v0.14.1](https://github.com/chopdgd/react-genomix/tree/v0.14.1) (2019-09-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.14.0...v0.14.1)

- Updated deps

## [v0.14.0](https://github.com/chopdgd/react-genomix/tree/v0.14.0) (2019-08-23)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.13.0...v0.14.0)

- Updated deps

## [v0.13.0](https://github.com/chopdgd/react-genomix/tree/v0.13.0) (2019-08-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.12.0...v0.13.0)

- Dropped support for using localStorage to "remember" column widths in BaseTable.
- Updated deps

## [v0.12.0](https://github.com/chopdgd/react-genomix/tree/v0.12.0) (2019-08-02)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.11.1...v0.12.0)

- Dropped support for fixed data table
- Consolidated react-base-table to one main Table
- Droppped support for all table cells, only use table cell renderers for react-base table
- Added table cell renderers for common cells we use

## [v0.11.1](https://github.com/chopdgd/react-genomix/tree/v0.11.1) (2019-07-26)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.11.0...v0.11.1)

- Fixed issue with imports in react-base-table
- minor bug fixes in react-base-table

## [v0.11.0](https://github.com/chopdgd/react-genomix/tree/v0.11.0) (2019-07-22)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.10.3...v0.11.0)

- Added react-base-table as an additional option

## [v0.10.3](https://github.com/chopdgd/react-genomix/tree/v0.10.3) (2019-06-24)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.10.2...v0.10.3)

- Updated CheckboxFixedCell to pass back record in case it is needed.

## [v0.10.2](https://github.com/chopdgd/react-genomix/tree/v0.10.2) (2019-06-24)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.10.1...v0.10.2)

- updated useLocalStorage to ensure it updates state if localStorage updates

## [v0.10.1](https://github.com/chopdgd/react-genomix/tree/v0.10.1) (2019-06-17)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.10.0...v0.10.1)

- onScrollEnd was being called without the props from fixed-data-table
- Added better docs for InfiniteScrollTable

## [v0.10.0](https://github.com/chopdgd/react-genomix/tree/v0.10.0) (2019-06-14)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.9.1...v0.10.0)

- Added component InfiniteScrollTable - virtualized table that allows for infinite scrolling with network requests.

## [v0.9.1](https://github.com/chopdgd/react-genomix/tree/v0.9.1) (2019-06-11)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.9.0...v0.9.1)

- Updated all dependencies
- Adjusted useLocalStorage to be able to handle different data types

## [v0.9.0](https://github.com/chopdgd/react-genomix/tree/v0.9.0) (2019-05-16)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.5...v0.9.0)

- Updated all dependencies
- Added a custom hook to use setInterval

## [v0.8.5](https://github.com/chopdgd/react-genomix/tree/v0.8.5) (2019-04-24)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.4...v0.8.5)

- Updated all dependencies

## [v0.8.4](https://github.com/chopdgd/react-genomix/tree/v0.8.4) (2019-04-10)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.3...v0.8.4)

- Updated all dependencies

## [v0.8.3](https://github.com/chopdgd/react-genomix/tree/v0.8.3) (2019-03-06)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.2...v0.8.3)

- Updated FixedDataTable to disable height from AutoSizer. Instead allow user to specify maxHeight. See demo how to make it responsive using hooks.useWindowSize.

## [v0.8.2](https://github.com/chopdgd/react-genomix/tree/v0.8.2) (2019-03-05)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.1...v0.8.2)

- Updated FixedDataTable to use AutoSizer from react-virtualized to make table responsive to parent container

## [v0.8.1](https://github.com/chopdgd/react-genomix/tree/v0.8.1) (2019-02-28)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.8.0...v0.8.1)

- FixedDataTable was using height instead of maxHeight. Now using maxHeight to make it responsive.

## [v0.8.0](https://github.com/chopdgd/react-genomix/tree/v0.8.0) (2019-02-28)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.7...v0.8.0)

- Moved to react 16.8.x
- Updated all class components to functional components w/ hooks
- Deprecated react-virtualized
- FixedDataTable now is responsive by default
- Fixed issue with FixedDataTable resize columns

## [v0.7.7](https://github.com/chopdgd/react-genomix/tree/v0.7.7) (2019-01-31)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.6...v0.7.7)

- Fixed issue with fixed-data-table-2 version. Was using unstable pre-release. Changed back to latest stable.

## [v0.7.6](https://github.com/chopdgd/react-genomix/tree/v0.7.6) (2019-01-17)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.5...v0.7.6)

- Fixed bug with ExportButton [#357](https://github.com/chopdgd/react-genomix/issues/357)
- Updated dependencies

## [v0.7.5](https://github.com/chopdgd/react-genomix/tree/v0.7.5) (2018-10-31)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.4...v0.7.5)

- Updated dependencies

## [v0.7.4](https://github.com/chopdgd/react-genomix/tree/v0.7.4) (2018-10-29)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.3...v0.7.4)

- Updated dependencies

## [v0.7.3](https://github.com/chopdgd/react-genomix/tree/v0.7.3) (2018-10-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.2...v0.7.3)

- Fixed issue with dependencies not being installed
- Added dist to package.json to ensure css is installed from yarn/npm

## [v0.7.2](https://github.com/chopdgd/react-genomix/tree/v0.7.2) (2018-10-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.1...v0.7.2)

- Moved from create-react-app to nwb to manage the component library

## [v0.7.1](https://github.com/chopdgd/react-genomix/tree/v0.7.1) (2018-10-08)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.7.0...v0.7.1)

- Updated to react-scripts 2.0.4 - was causing some import issues in apps with higher versions of react-scripts
- Updated 3rd party libs

## [v0.7.0](https://github.com/chopdgd/react-genomix/tree/v0.7.0) (2018-09-28)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.6.0...v0.7.0)

- Upgraded all stable 3rd party libs
- Removed webpack configuration in favor to using create-react-app v2
- Dropped support for UploadButton because issue with FileReader

## [v0.6.0](https://github.com/chopdgd/react-genomix/tree/v0.6.0) (2018-06-11)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.5.0...v0.6.0)

- Upgraded all stable 3rd party libs

- Updated genomics urlBuilders [#290](https://github.com/chopdgd/react-genomix/pull/290)
- Updated Gene Cells to have uniform link outs [#291](https://github.com/chopdgd/react-genomix/pull/291)
- Resolved [#140](https://github.com/chopdgd/react-genomix/issues/140) and [#184](https://github.com/chopdgd/react-genomix/issues/184) - dealing with state management of Checkbox cells [#292](https://github.com/chopdgd/react-genomix/pull/292)
- Added ability for ExportButton to have custom onClick methods [#272](https://github.com/chopdgd/react-genomix/pull/272)

## [v0.5.0](https://github.com/chopdgd/react-genomix/tree/v0.5.0) (2018-04-27)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.7...v0.5.0)

- Upgraded all stable 3rd party libs
- Export button was causing a new pop up window with AdBlockers [#236](https://github.com/chopdgd/react-genomix/issues/236)
- Updated Progress Bars [#254](https://github.com/chopdgd/react-genomix/issues/254)

- Upgraded all stable 3rd party libs

## [v0.4.7](https://github.com/chopdgd/react-genomix/tree/v0.4.7) (2018-04-18)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.6...v0.4.7)

- Upgraded all stable 3rd party libs

## [v0.4.6](https://github.com/chopdgd/react-genomix/tree/v0.4.6) (2018-03-26)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.5...v0.4.6)

- Updated logout path in Navbar User component [#223](https://github.com/chopdgd/react-genomix/issues/223)

## [v0.4.5](https://github.com/chopdgd/react-genomix/tree/v0.4.5) (2018-02-26)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.4...v0.4.5)

- Had to downgrade Semantic UI CSS. It was causing modals to render incorrectly. [#204](https://github.com/chopdgd/react-genomix/issues/204)

## [v0.4.4](https://github.com/chopdgd/react-genomix/tree/v0.4.4) (2018-02-26)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.3...v0.4.4)

- Add Menu Icon that can be used to pass callback via props [#190](https://github.com/chopdgd/react-genomix/issues/190)
- Race condition with FixedDataTable not having height/maxHeight as a defaultProp [#183](https://github.com/chopdgd/react-genomix/issues/183)
- Updated numerous dependencies

## [v0.4.3](https://github.com/chopdgd/react-genomix/tree/v0.4.3) (2018-02-12)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.1...v0.4.3)

- Fixed issue with ExportButton. It was not exporting correctly.

## [v0.4.1](https://github.com/chopdgd/react-genomix/tree/v0.4.1) (2018-02-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.0...v0.4.1)

- Build may have contained different versions of dependencies. Created a new build

## [v0.4.0](https://github.com/chopdgd/react-genomix/tree/v0.4.0) (2018-02-09)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.5...v0.4.0)

- Updated Semantic React UI to 0.78.2
- Updated many dependencies to the latest versions (Fixed-data-table, etc)
- Converted all simple components to stateless pure components
- Removed target as required prop in TurnAroundTimeProgress [#146](https://github.com/chopdgd/react-genomix/issues/146)
- Fixed issues with ExportButton handling state [#158](https://github.com/chopdgd/react-genomix/issues/158)
- Fixed issues with NavMenu handling state [#162](https://github.com/chopdgd/react-genomix/issues/162)

## [v0.3.5](https://github.com/chopdgd/react-genomix/tree/v0.3.5) (2018-01-24)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.4...v0.3.5)

- Added `idKey` prop LinkFixedCell to help build URL [#138](https://github.com/chopdgd/react-genomix/issues/138)
- Fixed issues with FixedDataTable state [#142](https://github.com/chopdgd/react-genomix/issues/142)
- Fixed issues with AutoCompleteDropdown state [#144](https://github.com/chopdgd/react-genomix/issues/144)
- Dropped support for package-lock.json

## [v0.3.4](https://github.com/chopdgd/react-genomix/tree/v0.3.4) (2018-01-18)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.3...v0.3.4)

- Upgraded dependencies
- Fixed issues with SaveForm and SaveFormModal dealing with handleChange
- Fixed issue with AutoCompleteDropdown

## [v0.3.3](https://github.com/chopdgd/react-genomix/tree/v0.3.3) (2018-01-13)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.2...v0.3.3)

- Added missing updated minified css files

## [v0.3.2](https://github.com/chopdgd/react-genomix/tree/v0.3.2) (2018-01-13)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.1...v0.3.2)

- Removed font completely from css

## [v0.3.1](https://github.com/chopdgd/react-genomix/tree/v0.3.1) (2018-01-13)

[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.0...v0.3.1)

- Fixed issues with css
- Added minified css to be imported in other projects in `dist/`

## [v0.3.0](https://github.com/chopdgd/react-genomix/tree/v0.3.0) (2018-01-10)

- First release
