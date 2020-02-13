let Application = require('spectron').Application
let assert = require('assert')
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function() {
    let app;
    beforeEach(function() {
      app = new Application({
        path: electronPath,
        args: [path.join(__dirname, '../../electron.js')],
      });
      return app.start();
    });

    afterEach(function() {
        if (app && app.isRunning()) {
          return app.stop();
        }
      });

      it('find title', function() {
          app.client.waitUntilWindowLoaded(10000)
          .then(()=> {
            return app.client.getText('#test');
          })
          .then((title) => {
            expect(title).toEqual('spearmint');    
          })
      });

    // /* renders the export file modal when the open new folder button is clicked */
    // test('get text from the export file modal', async () => {
    //     this.app.client.findElements('.exportButton').getValue('Convert To Javascript Code').then(function (modalText) {
    //         //expect('Convert To Javascript Code').toEqual('Convert To Javascript Code');
    //         //assert.equal(modalText, 'Convert To Javascript Code')
    //         //console.log('exportButton button says' + modalText)
    //     })
    // })

    // /* loads new project when new project is selected from modal */
    // test('get text from the new project loader', () => {
    //     this.app.client.getText('.newProject').getAttribute('id').then(function (newProject) {
    //         assert.equal(newProject, 'open')
    //     })
    // })

    // /* displays correct file name on project directory panel */
    // test('get text from the file tree', () => {
    //     this.app.client.getText('FileDirectory').then(function (fileName) {
    //         assert.equal(fileName, '')
    //     })
    // })

    // /* displays code view when code view button is clicked */
    // test('code view button renders code view', () => {
    //     let invoked = function () {
    //         console.log('hello')
    //     }
    //     this.app.client.getText('.codeView').then(function (invoked) {
    //         invoked()
    //     })
    // })

    // /* displays the browser modal when browser view button is clicked if url is not inputted in the project loader */
    // test('browser button renders browser modal', () => {
    //     this.app.client.getText('.browserView').then(function (browserBtn) {
    //         assert.equal(browserBtn, 'Open the test site')
    //     })
    // })

    // /* displays the browser view when browser view button is clicked if url exists from the projectloader */
    // test('browser modal renders browser view', () => {

    // })

});