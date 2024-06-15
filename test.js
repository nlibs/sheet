var S = require("./sheet")
var DOC_ID = "1exnmU7bfZ2RJMSGGULii6FanbDbg82AlKKOO2fYGOhw";
S.fetch(DOC_ID, "charts", onfetch);

function onfetch(data)
{
	console.log(data);
}