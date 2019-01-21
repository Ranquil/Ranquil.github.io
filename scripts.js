var langCodes = ["en", "fi", "jp"];
var langNames = ["English", "Suomi", "日本語"];
var pageFiles = ["home.html", "#", "exp.html", "contact.html"];
var pageIds = ["home", "gallery", "experience", "contact"];
var pageNames =
{
	home: ["Home", "Etusivu", "ホーム"],
	gallery: ["Gallery", "Galleria", "ギャラリー"],
	experience: ["Experience", "Kokemus", "経験"],
	contact: ["Contact", "Ota yhteyttä","ご連絡"]
};
var digitalImgFiles =
[
	"limos",
	"jigazou"
]
var tradImgFiles =
[
	"whale"
]
var gameArtImgFiles =
[

]

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

function navigationLink(lang)
{
	var linkRow = "";
	var i;
	
	for (i = 0; i <  pageIds.length; i++)
	{
		linkRow += "<a href='" + pageFiles[i] + "' class='nav'><span class='nav'><span id='" + pageIds[i] + "'></span></span></a>";
	}
	
	document.getElementById("navigationBar").innerHTML = linkRow;
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

function gallerySetup()
{
	document.getElementById("digital").innerHTML = setImgs(digitalImgFiles, "digital");
	document.getElementById("trad").innerHTML = setImgs(tradImgFiles, "trad");
	
	document.getElementById("lightboxStorage").innerHTML = setLightboxes(digitalImgFiles, "digital") + setLightboxes(tradImgFiles, "trad");
	/*document.getElementById("lightboxStorage").innerHTML = setLightboxes(tradImgFiles, "trad");*/
}

function setImgs(imgs, category)
{
	var htmlCode = "";
	
	for (var i = 0; i < imgs.length; i++)
	{
		htmlCode +=	"<a href='#preview_" + imgs[i] + "'><img class='thumbnail' src='../img/gallery/" + imgs[i] + "_small.jpg'></a>";
	}
	
	return htmlCode;
}

function setLightboxes(imgs, category)
{
	var htmlCode = "";
	
	console.log(`There is/are ${imgs.length} image(s) in ${category}.`);
	
	var imgsLengthIndex = imgs.length; imgsLengthIndex--;
	/*I have no earthly idea why I have to do this this way, but the whole browser crashes if I use "imgs.length--"*/
	
	for (var i = 0; i < imgs.length; i++)
	{
		htmlCode += `<div id='preview_${imgs[i]}' class='lightbox'>
		<div class='lightbox_content h-center v-center'>`;
		if (i > 0)
		{
			var prevImg = i; prevImg--;
			/*I have no earthly idea why I have to do this this way, but the whole browser crashes if I use "i++"*/
			htmlCode += `<a class='lightbox_content_previous v-center' href='#preview_${imgs[prevImg]}'></a>`;
		}
		else
		{
			/*htmlCode += `<a class='lightbox_content_dummyButton'></a>`;*/
		}
		htmlCode += `<div class='lightbox_content_img'>
		<img src='../img/gallery/${imgs[i]}_big.jpg'>
		</div>`;
		if (i < imgsLengthIndex && imgs.length > 1)
		{
			var nextImg = i; nextImg++; /*Same problem here. Technology is weird*/
			htmlCode += `<a class='lightbox_content_next v-center' href='#preview_${imgs[nextImg]}'></a>`;
		}
		else
		{
			/*htmlCode += `<a class='lightbox_content_dummyButton'></a>`;*/
		}
		htmlCode += `<a class='lightbox_content_exit h-center v-center' href='#${category}'></a></div></div>`;
	}
	
	return htmlCode;
}

function sendEmail(e, userLang)
{
	e.preventDefault();
	
	const POST_URL = "https://script.google.com/macros/s/AKfycbwxs1-lq72M_opLQt0y656wn4WnwluS0iJWKAYKuWAWkA8CwHwP/exec";
	
	const postRequest =
	{
		name: e.target["name"].value,
		email: e.target["email"].value,
		subject: e.target["subject"].value,
		body: e.target["message"].value
	};
	
	if(POST_URL)
	{
		try
		{
			$.post(POST_URL, JSON.stringify(postRequest), "text").
			then(res =>
			{
				
				e.target.reset();
				
				if (res == "success")
					switch (userLang)
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
					switch (userLang)
					{
						case 'fi':
						alert("Jotain meni vikaan! Tarkista, että kaikki tekstikentät on täytetty, ja että sähköpostiosoite on kirjoitettu oikein.\nVirheviesti: " + res);
						break;
						
						case 'jp':
						alert("何かは駄目になってしまいました！欄が全部詰めてあり、メールアドレスが正しく書いてあると確かめてください。\nエラーメッセージ： " + res);
						break;
						
						default:
						alert("Something went wrong! Please check that all text fields are filled in and the e-mail address is written correctly.\nError message: " + res);
					}
			});
		
		}
		
		catch(err)
		{
			alert("Error:\n" + err.message);
		}
		
	}
	
	else
	{
		alert("Asetapa se POST_URL ennen kuin menet julkaisemaan keskeneräisiä sivustoja, senkin pöhkö devaaja.");
	}
}