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

function redirectByLang()
{
	var userLang = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
	
	if (langCodes.includes(userLang) == false)
	{
		userLang = "en";
	}
	
	window.location.href = userLang + "/home.html";
}

function sendEmail(e, lang)
{
	alert("sendEmail function started");
	
	e.preventDefault();
	
	const POST_URL = "https://script.google.com/macros/s/AKfycbwxs1-lq72M_opLQt0y656wn4WnwluS0iJWKAYKuWAWkA8CwHwP/exec";
	
	alert("URL given");
	
	const postRequest =
	{
		name: e.target["name"].value,
		email: e.target["email"].value,
		subject: e.target["subject"].value,
		body: e.target["message"].value
	};
	
	alert("postRequest filled in");
	
	if(POST_URL)
	{
		alert("POST_URL has some value");
		$.post(POST_URL, JSON.stringify(postRequest)).then(res =>
		{
			e.target.reset();
			
			alert("The form has been cleared");
			
			if (res)
				switch (lang)
				{
					case 'fi':
					alert("Viestisi on lähetetty eteenpäin. Kiitoksia paljon yhteydenotostasi!");
					break;
					
					case 'jp':
					alert("メッセージは届けられました。ご連絡でありがとうございました！");
					break;
					
					default:
					alert("Your message has been sent forward. Thank you very much for the contact!");
				}
			else
				switch (lang)
				{
					case 'fi':
					alert("Jotain meni vikaan! Tarkista, että kaikki tekstikentät on täytetty, ja että sähköpostiosoite on kirjoitettu oikein.");
					break;
					
					case 'jp':
					alert("何かは駄目になってしまいました！欄が全部詰めてあり、メールアドレスが正しく書いてあると確かめてください。");
					break;
					
					default:
					alert("Something went wrong! Please check that all text fields are filled in and the e-mail address is written correctly.");
				}
		});
		
		return true;
		
	}
	
	else
	{
		alert("Asetapa se POST_URL ennen kuin menet julkaisemaan keskeneräisiä sivustoja, senkin pöhkö devaaja.");
		
		return false;
	}
}