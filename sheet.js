var { google } = require('googleapis');

async function fetch_async(doc_id, sheet)
{
	var auth = new google.auth.GoogleAuth({
		keyFile: "credentials.json",
		scopes: "https://www.googleapis.com/auth/spreadsheets"
	});

	var client = await auth.getClient();
	var sheets = google.sheets({version:"v4", auth: client})
	var data = await sheets.spreadsheets.values.get({
		"auth": auth,
		"spreadsheetId": doc_id,
		"range": sheet
	});
	return data.data.values; 
}

function fetch(doc_id, sheet, onload)
{
	fetch_async(doc_id, sheet).then(function(data)
	{
		onload(data);
	});
}

exports.fetch = fetch;
