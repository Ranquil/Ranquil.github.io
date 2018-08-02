var langCodes = ["en", "fi", "jp"];
var langNames = ["EN", "FI", "JP"];
var fileName = location.href.split("/").slice(-1);
var langDirectories = [];

function langLink()
{
	var i;
	for (i = 0; i < langCodes.length; i++)
	{
		var langLink = langNames[i].link("../" + langCodes[i] + "/" + filename);
		document.getElementById("langnav").innerHTML += langLink;
		
		if (i < langCodes.length--)
		{
			document.getElementById("langnav").innerHTML += " ";	
		}
	}
}