const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {

    constructor() {
        this.doc = new GoogleSpreadsheet('1g0w-nTqCDIFgluplIKyTq5KZR3TzA84BMPv4ZYGaJWw');
    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo();
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
        await sheet.addRows(rows);
    }

}