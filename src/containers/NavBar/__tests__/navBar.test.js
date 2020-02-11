
// import React from 'react'
// import { 
//     fireEvent, 
//     render 
//   } from "@testing-library/react";
// import 'jest-dom/extend-expect';
// import { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';
// import NavBar from '../NavBar';
// // import ExportFileMOdal from '../ExportFileModal';
// // import OpenFolderButton from '../../../OpenFolderButton';
// // import BrowserModal from '../BrowserModal';
// // import FileDirectory from '../FileDirectory';
// import { GlobalContext } from '../../../context/globalReducer';
// //import OpenFolder from "../../LeftPanel/OpenFolder/OpenFolderButton";
// configure({ adapter: new Adapter() });

  
let Application = require('spectron').Application
let assert = require('assert')
const electronPath = require('electron')
const path = require('path')

// describe('Application launch', function () {
//     this.timeout(10000)

//     beforeEach(function () {
//         this.app = new Application({
//             path: electronPath,
//             args: [path.join(__dirname, '..')]
//         })
//         return this.app.start()
//     })
//     afterEach(function () {
//         if (this.app && this.app.isRunning()) {
//         return this.app.stop()
//         }
//     })

//   it('shows an initial window', function () {
//     return this.app.client.getWindowCount().then(function (count) {
//       assert.equal(count, 1)
//     })
//   })
// })

// let Application = require('spectron').Application
// let assert = require('assert')

// let app = new Application({
//   path: 'Users/c.aribo/Desktop/Spearmint/spearmint-2.0/src/containers/NavBar'
// })

// app.start().then(function () {
//   // Check if the window is visible
//   return app.browserWindow.isVisible()
// }).then(function (isVisible) {
//   // Verify the window is visible
//   assert.equal(isVisible, true)
// }).then(function () {
//   // Get the window's title
//   return app.client.getTitle()
// }).then(function (title) {
//   // Verify the window's title
//   assert.equal(title, 'My App')
// }).then(function () {
//   // Stop the application
//   return app.stop()
// }).catch(function (error) {
//   // Log any failures
//   console.error('Test failed', error.message)
// })


/**
 * for the buttons:
 *  - testing the props (onClick, onChange) on the button tag
 *      - async. if callback in prop (done) is not invoked the test wont finish (itll timeout). 
 *      - if it is invoked, the click was simulated on the button
 *  - simulating these events 
 *  - import files i'm testing
 *  - need fake wrapper for button tests ?
 * for the name: 
 *  - simulating changes to the projectFilePath state (initialized in globalReducer)
 *  - need fake global reducer state for file name test
 * other:
 *  - resetModules is for cleanup ?
 *  - mount ?
 */

// let wrapper, globalM, dispatchToGlobal;

// beforeEach(() => {
//     globalM = {
//       url: null,
//       isProjectLoaded: false,
//       fileTree: null,
//       componentName: '',
//       isFileDirectoryOpen: true,
//       rightPanelDisplay: 'browserView',
//       displayedFileCode: '',
//       isFolderOpen: {},
//       isFileHighlighted: '',
//       projectFilePath: '',
//       filePathMap: {},
//     };
//     dispatchToGlobal = jest.fn();
    
  
//     wrapper = mount(
//       <GlobalContext.Provider value={[globalM, dispatchToGlobal]}>
//             <NavBar />
//       </GlobalContext.Provider>
//     );
  
//     jest.resetModules();
//   });


// test('renders the export file modal when the open new folder button is clicked', () => {
//     function openExportModal () {
//         done()
//     };

//     const { getByText } = render(
//         <Button className={styles.navBtn} onClick={openExportModal}>Click Here</Button>
//     );
//     const testButton = getByText("Click Here");
//     fireEvent.click(testButton)
// });

// test('loads new project when new project is selected from modal', () => {
//     function handleOpenFolder () {
//         done()
//     };

//     const { getByText } = render (
//         <Button className={styles.navBtn} onClick={handleOpenFolder}>Test Click</Button>
//     );
//     const testClick = getByText("Test Click")
//     fireEvent.click(testClick)
// });

// test('displays correct file name on project directory panel', () => {
//     function handleToggleFileDirectory () {
//         done()
//     };
//     const { getByText } = render (
//         <Button  onClick={handleToggleFileDirectory}>Click Here</Button>
//     );
//     const testClick = getByText("Click Here");
//     fireEvent.click(testClick)
// });

// test('displays code view when code view button is clicked', () => {
//     function handleEditorToggle () {
//         done()
//     };

//    const { getByText } = render(
//     <button className={styles.navBtn} onClick={handleEditorToggle}>Click This</button>
//    );
//    const testClick = getByText("Click This");
//    fireEvent.click(testClick)
// });

// /* how to do the conditional */
// test('displays the browser modal when browser view button is clicked if url is not inputted in the project loader', () => {
//     function handleBrowserToggle () {
//         done()
//     };

//     const { getByText } = render (
//         <Button className={styles.navBtn} onClick={handleBrowserToggle}>Click Here</Button>
//     );
//     const testClick = getByText("Click Here");
//     fireEvent.click(testClick)
// });

// test('displays the browser view when browser view button is clicked if url exists from the projectloader', () => {
//     function handleBrowserToggle () {
//         done()
//     };

//     const { getByText } = render (
//         <Button className={styles.navBtn} onClick={handleBrowserToggle}>Click Here</Button>
//     );
//     const testClick = getByText("Click Here");
//     fireEvent.click(testClick)
// });
