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