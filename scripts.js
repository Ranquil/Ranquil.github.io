var langCodes = ["en", "fi", "jp"];
var langNames = ["English", "Suomi", "日本語"];
var pageFiles = ["home.html", "#", "exp.html", "contact.html"];
var pageIds = ["home", "gallery", "experience", "contact"];

class NavigationItem
{
	constructor (itemName, name__en, name__fi, name__jp)
	{
		this.itemName = itemName;
		this.name__en = name__en;
		this.name__fi = name__fi;
		this.name__jp = name__jp;
	}
}

var navItems =
[
	new NavigationItem("home", "Home", "Etusivu", "ホーム"),
	new NavigationItem("gallery", "Gallery", "Galleria", "ギャラリー"),
	new NavigationItem("exp", "Experience", "Kokemus", "経験"),
	new NavigationItem("contact", "Contact", "Ota yhteyttä","ご連絡")
];

class GalleryImage
{
	constructor (fileName, name__en, name__fi, name__jp)
	{
		this.fileName	= fileName;
		this.name__en	= name__en;
		this.name__fi	= name__fi;
		this.name__jp	= name__jp;
	}
};

var digitalImgFiles =
[
	new GalleryImage(
	`limos`,
	`Album Cover for Limos`,
	`Levynkansi Limos-bändille`,
	`「リモス」にアルバムカバー`),
	new GalleryImage(
	`jigazou`,
	`Self-portrait`,
	`Omakuva`,
	`自画像`),
	new GalleryImage(
	`sky`,
	`Digital Painting`,
	`Digitaalinen maalaus`,
	`デジタル絵画`)
];
var tradImgFiles =
[
	new GalleryImage(
	`whale`,
	`Inktober piece`,
	`Inktober-työ`,
	`「Inktober」作品`)
];
var gameArtImgFiles =
[

];

var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);
var lang = url.substring(url.lastIndexOf('/')-2).substr(0, 2);



function pageInit()
{
	langLink();
	navigationLink();
}

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

function navigationLink()
{
	var linkRow = "";
	var i;
	
	for (i = 0; i <  navItems.length; i++)
	{
		var item = navItems[i];
		
		var name = "name__" + lang;
		
		linkRow += `<a href="${item.itemName}.html" class="nav"><span class="nav"><span id="${item.itemName}">${item[name]}</span></span></a>`;
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
	/*document.getElementById("digital").innerHTML = setImgs(digitalImgFiles, "digital");
	document.getElementById("trad").innerHTML = setImgs(tradImgFiles, "trad");
	
	document.getElementById("lightboxStorage").innerHTML = setLightboxes(digitalImgFiles, "digital") + setLightboxes(tradImgFiles, "trad");*/
	
	document.getElementById("digital").innerHTML = setImgButtons(digitalImgFiles, "digitalImgFiles");
	document.getElementById("trad").innerHTML = setImgButtons(tradImgFiles, "tradImgFiles");
}

function setImgs(imgs, category)
{
	var htmlCode = "";
	
	for (var i = 0; i < imgs.length; i++)
	{
		htmlCode +=	`<a href="#preview_${imgs[i].fileName}"><img class="thumbnail" src="../img/gallery/${imgs[i].fileName}_small.jpg"></a>`;
	}
	
	return htmlCode;
}

function setImgButtons(imgs, categoryName)
{
	var htmlCode = "";
	
	console.log(categoryName);
	
	for (var i = 0; i < imgs.length; i++)
	{
		/*var imgIndex = imgs.findIndex(function (element)
		{
			return element == img;
		});*/
		
		htmlCode +=	`<a onclick='createLightbox("${categoryName}", ${i})'><img class="thumbnail" src="../img/gallery/${imgs[i].fileName}_small.jpg"></a>`;
	}
	
	return htmlCode;
}

function createLightbox(categoryName, imgIndex)
{
	document.getElementById("lightboxStorage").innerHTML = "";
	
	var htmlCode = "";
	var imgNameVar = "name__" + lang;
	
	var imgs = eval(categoryName);	/* I know, I know, I shouldn't use eval(), but I can't find any other way to do this, sorry. */
	var img = imgs[imgIndex]
	var imgsLengthIndex = imgs.length; imgsLengthIndex--;
	console.log(img);
	var imgIndexPrev = imgIndex; imgIndexPrev--;
	var imgIndexNext = imgIndex; imgIndexNext++;
	/*var imgPrevData = JSON.stringify(imgs[imgIndexPrev]);
	var imgNextData = JSON.stringify(imgs[imgIndexNext]);*/
	
	htmlCode += `<div id="preview_${img.fileName}" class="lightbox">
	<div class="lightbox_content h-center v-center">`;
	if (imgIndex > 0)
	{
		htmlCode += `<a class="lightbox_content_previous v-center" onclick='createLightbox("${categoryName}", ${imgIndexPrev})'></a>`;
	}
	htmlCode += `<div class="lightbox_content_img">
	<img src="../img/gallery/${img.fileName}_big.jpg">
	<h5>${img[imgNameVar]}</h5>
	</div>`;
	if (imgIndex < imgsLengthIndex && imgs.length > 1)
	{
		htmlCode += `<a class="lightbox_content_next v-center" onclick='createLightbox("${categoryName}", ${imgIndexNext})'></a>`;
	}
	htmlCode += `<a class="lightbox_content_exit h-center v-center" onclick="document.getElementById('lightboxStorage').innerHTML = ''"></a>
	</div>
	</div>`;
	
	document.getElementById("lightboxStorage").innerHTML = htmlCode;
}

function setLightboxes(imgs, category)
{
	var htmlCode = "";
	
	var imgNameVar = "name__" + lang;
	
	var imgsLengthIndex = imgs.length; imgsLengthIndex--;
	
	for (var i = 0; i < imgs.length; i++)
	{
		var img = imgs[i];
		
		htmlCode += `<div id='preview_${img.fileName}' class='lightbox'>
		<div class='lightbox_content h-center v-center'>`;
		if (i > 0)
		{
			var prevImg = i; prevImg--;
			htmlCode += `<a class='lightbox_content_previous v-center' href='#preview_${imgs[prevImg].fileName}'></a>`;
		}
		htmlCode += `<div class='lightbox_content_img'>
		<img src='../img/gallery/${img.fileName}_big.jpg'>
		<h5>${img[imgNameVar]}</h5>
		</div>`;
		if (i < imgsLengthIndex && imgs.length > 1)
		{
			var nextImg = i; nextImg++;
			htmlCode += `<a class='lightbox_content_next v-center' href='#preview_${imgs[nextImg].fileName}'></a>`;
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