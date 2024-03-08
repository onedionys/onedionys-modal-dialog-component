// modal-dialog.js

class ModalDialog {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    open() {
        // Logika untuk membuka modal dialog
        console.log('Modal opened:', this.title);
    }

    close() {
        // Logika untuk menutup modal dialog
        console.log('Modal closed:', this.title);
    }
}

// Export kelas ModalDialog agar dapat digunakan di luar modul
module.exports = ModalDialog;
