var langCodes = ["en", "fi", "jp"];
var langNames = ["English", "Suomi", "日本語"];
var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);

function langLink()
{
	var linkRow = "";
	var i;
	for (i = 0; i < langCodes.length; i++)
	{
		linkRow += "<a lang='" + langCodes[i] + "' href='../" + langCodes[i] + "/" + fileName + "'>" + langNames[i] + "</a>";
		
		if (i < langCodes.length + 1)
		{
			linkRow += " ";	
		}
	}
	
	document.getElementById("navlang").innerHTML = linkRow;
}

function asd()
{
	alert(langCodes.length);
}