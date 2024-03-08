const assert = require('assert');
const ModalDialog = require('../src/modal-dialog');

describe('ModalDialog', function() {
    describe('#open()', function() {
        it('should open the modal dialog', function() {
            const modal = new ModalDialog('Test Modal', 'This is a test modal');
            modal.open();
        });
    });

    describe('#close()', function() {
        it('should close the modal dialog', function() {
            const modal = new ModalDialog('Test Modal', 'This is a test modal');
            modal.close();
        });
    });
});
