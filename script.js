function initGoogleAPI() {
    gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: 'YOUR_API_KEY',
            clientId: 'YOUR_CLIENT_ID',
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            scope: 'https://www.googleapis.com/auth/spreadsheets',
        }).then(() => {
            // Authenticated successfully
            // Now, you can use gapi.client.sheets...
        });
    });
}

function get(){
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1MXQC1bXosDb6Ov9NI4YCJ-bLEOFpUyWj1r92gA65ySc',
    range: 'Sheet1!A1:B5', // Specify the range you want to retrieve
}).then((response) => {
    const data = response.result.values;
    if (data) {
        // Process and use the retrieved data
        console.log(data);
    } else {
        console.log('No data found.');
    }
}).catch((err) => {
    console.error('The API returned an error:', err);
});
}