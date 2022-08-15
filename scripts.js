var langCodes = ["en", "fi", "jp"];
var langNames = ["English", "Suomi", "日本語"];
/*var pageFiles = ["home.html", "#", "exp.html", "contact.html"];
var pageIds = ["home", "gallery", "experience", "contact"];*/

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
	constructor (fileName, format, name__en, name__fi, name__jp)
	{
		this.fileName	= fileName;
		this.format		= format;
		this.name__en	= name__en;
		this.name__fi	= name__fi;
		this.name__jp	= name__jp;
	}
};

var digitalImgFiles =
[
	new GalleryImage(
		`limos`,
		`jpg`,
		`Album Cover for Limos`,
		`Levynkansi Limos-bändille`,
		`「リモス」へのアルバムカバー`),
	new GalleryImage(
		`sky`,
		`jpg`,
		`Digital Painting`,
		`Digitaalinen maalaus`,
		`デジタル絵画`),
	new GalleryImage(
		`perfectblue`,
		`jpg`,
		`Film Poster`,
		`Elokuvajuliste`,
		`映画ポスター`),
	new GalleryImage(
		`portrait`,
		`jpg`,
		`Digitally Colored Pencil Drawing`,
		`Digitaalisesti väritetty lyijykynäpiirros`,
		`デジタル的に彩った鉛筆画`),
	new GalleryImage(
		`majyokko`,
		`jpg`,
		`Digital Ink Drawing`,
		`Digitaalinen mustepiirros`,
		`デジタル墨書き`)
];
var designImgFiles =
[
	new GalleryImage(
		`oulupridepamphlet`,
		`jpg`,
		`Tri-fold Pamphlet`,
		`Kolmitaitepamfletti`,
		`三つ折りのパンフレット`),
	new GalleryImage(
		`9solutions1`,
		`jpg`,
		`Vector Illustration`,
		`Vektorikuvitus`,
		`ベクトルイラスト`),
	new GalleryImage(
		`9solutions2`,
		`jpg`,
		`Vector Illustration`,
		`Vektorikuvitus`,
		`ベクトルイラスト`),
	new GalleryImage(
		`datensi`,
		`jpg`,
		`Vector Illustration`,
		`Vektorikuvitus`,
		`ベクトルイラスト`),
	new GalleryImage(
		`cafe`,
		`jpg`,
		`Brand Mockup`,
		`Brändi-mockup`,
		`ブランド・モックアップ`),
	new GalleryImage(
		`varpumagic`,
		`gif`,
		`Motion Graphic`,
		`Motion graphic`,
		`モーショングラフィックス`),
	new GalleryImage(
		`eggplant`,
		`gif`,
		`Motion Graphic`,
		`Motion graphic`,
		`モーショングラフィックス`),
	new GalleryImage(
		`uglogo`,
		`jpg`,
		`Hand-lettered Logo`,
		`Käsin tekstattu logo`,
		`手で書いたロゴ`),
	new GalleryImage(
		`morso`,
		`jpg`,
		`Photo Manipulation, Model: Marleena Maliniemi`,
		`Kuvamanipulaatio, malli: Marleena Maliniemi`,
		`写真煩集、モデル：「<span lang="en">Marleena Maliniemi</span>」`),
	new GalleryImage(
		`noita`,
		`jpg`,
		`Photo Manipulation, Photographer: Rami Kujala`,
		`Kuvamanipulaatio, kuvaaja: Rami Kujala`,
		`写真編集、写真家：「<span lang="en">Rami Kujala</span>」`),
	new GalleryImage(
		`fauralogo`,
		`jpg`,
		`Hand-lettered Logo`,
		`Käsin tekstattu logo`,
		`手で書いたロゴ`),
	new GalleryImage(
		`bcard`,
		`jpg`,
		`Business Card Design`,
		`Käyntikorttimalli`,
		`名刺デザイン`),
	new GalleryImage(
		`bcardlace`,
		`jpg`,
		`Business Card Design`,
		`Käyntikorttimalli`,
		`名刺デザイン`)
];
var tradImgFiles =
[
	new GalleryImage(
		`galactic`,
		`jpg`,
		`Watercolor Portrait`,
		`Vesivärimuotokuva`,
		`水彩肖像画`),
	new GalleryImage(
		`mettja`,
		`jpg`,
		`Watercolor Painting`,
		`Vesivärimaalaus`,
		`水彩画`),
	new GalleryImage(
		`hana`,
		`gif`,
		`Pencil animation`,
		`Lyijykynäanimaatio`,
		`鉛筆アニメーション`),
	new GalleryImage(
		`lady`,
		`jpg`,
		`Watercolor Painting`,
		`Vesivärimaalaus`,
		`水彩画`),
	new GalleryImage(
		`gift`,
		`jpg`,
		`Inktober piece`,
		`Inktober-työ`,
		`「<span lang="en">Inktober</span>」作品`),
	new GalleryImage(
		`hands`,
		`jpg`,
		`Inktober piece`,
		`Inktober-työ`,
		`「<span lang="en">Inktober</span>」作品`),
	new GalleryImage(
		`whale`,
		`jpg`,
		`Inktober piece`,
		`Inktober-työ`,
		`「<span lang="en">Inktober</span>」作品`)
];
var gameArtImgFiles =
[
	new GalleryImage(
	`ugss`,
	`jpg`,
	`All UI Assets aside from Item Icons`,
	`Esineikonit poislukien kaikki UI-grafiikat`,
	`アイテムアイコンをよそにして全てのUIグラフィックス`),
	new GalleryImage(
	`gameover`,
	`jpg`,
	`Game Over Illustration for a Jam Game`,
	`Game Over -kuvitus jamipeliin`,
	`ジャムゲームへのゲームオーバー挿絵`),
	new GalleryImage(
	`icons`,
	`jpg`,
	`Achievement Icons for FinSummerVR`,
	`Achievement-ikoneja FinSummerVR:ään`,
	`「<span lang="en">FinSummerVR</span>」へのアチーブメント・アイコン`),
	new GalleryImage(
	`gamevector`,
	`jpg`,
	`UI Graphics`,
	`Käyttöliittymägrafiikkaa`,
	`UIグラフィックス`),
	new GalleryImage(
	`flan`,
	`gif`,
	`Enemy Animation`,
	`Vihollisanimaatio`,
	`敵アニメーション`),
	new GalleryImage(
	`mahouen`,
	`gif`,
	`Vector Magic Circle`,
	`Vektoritaikaympyrä`,
	`ベクトル魔法円`)
];

var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);
var lang = url.substring(url.lastIndexOf('/')-2).substr(0, 2);

var closeButtonSvg =
`<?xml version="1.0" encoding="UTF-8"?>
<svg width="50" height="50" version="1.1" viewBox="0 0 13.229167 13.229167" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<metadata>
<rdf:RDF>
<cc:Work rdf:about="">
<dc:format>image/svg+xml</dc:format>
<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
<dc:title/>
</cc:Work>
</rdf:RDF>
</metadata>
<g transform="translate(434.31 -64.179)">
<path d="m-427.69 64.179a6.6147 6.6147 0 0 0 -6.6146 6.6149 6.6147 6.6147 0 0 0 6.6146 6.6146 6.6147 6.6147 0 0 0 6.6146 -6.6146 6.6147 6.6147 0 0 0 -6.6146 -6.6149zm0 0.8026a5.8122 5.8122 0 0 1 5.8123 5.8123 5.8122 5.8122 0 0 1 -5.8123 5.812 5.8122 5.8122 0 0 1 -5.8123 -5.812 5.8122 5.8122 0 0 1 5.8123 -5.8123zm3.011 2.2335-3.011 3.0113-3.0078-3.0084a4.6773 4.6773 0 0 0 -0.57092 0.5645l3.0114 3.0113-3.0078 3.0081a4.6773 4.6773 0 0 0 0.56419 0.57062l3.0111-3.0111 3.0078 3.0078a4.6773 4.6773 0 0 0 0.57092 -0.56421l-3.0111-3.0113 3.0079-3.0078a4.6773 4.6773 0 0 0 -0.56451 -0.57091z" fill="#226464"/>
</g>
</svg>`;
var prevButtonSvg =
`<?xml version="1.0" encoding="UTF-8"?>
<svg width="13.229mm" height="26.458mm" version="1.1" viewBox="0 0 13.229439 26.458334" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<metadata>
<rdf:RDF>
<cc:Work rdf:about="">
<dc:format>image/svg+xml</dc:format>
<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
<dc:title/>
</cc:Work>
</rdf:RDF>
</metadata>
<g transform="translate(574.77 -70.172)">
<path d="m-561.54 96.63-13.229-13.229 13.229-13.229z" fill="#226464"/>
</g>
</svg>`;
var nextButtonSvg =
`<?xml version="1.0" encoding="UTF-8"?>
<svg width="13.229mm" height="26.458mm" version="1.1" viewBox="0 0 13.229439 26.458334" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<metadata>
<rdf:RDF>
<cc:Work rdf:about="">
<dc:format>image/svg+xml</dc:format>
<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
<dc:title/>
</cc:Work>
</rdf:RDF>
</metadata>
<g transform="translate(574.77 -70.172)">
<path d="m-574.77 96.63 13.229-13.229-13.229-13.229z" fill="#226464"/>
</g>
</svg>`;


document.addEventListener("DOMContentLoaded", function()
{
	switch (fileName)
	{
		case "gallery.html":
		gallerySetup();
		default:
		pageInit();
	}
});

window.addEventListener("resize", function()
{
	resizeImage();
});
window.addEventListener("orientationchange", function()
{
	resizeImage();
});

window.addEventListener("keydown", function(event)
{
	if (fileName == "gallery.html" && document.getElementById("imgDiv") != null)
	{
		var key = event.which || event.keyCode;
		
		switch (key)
		{
			case 27:
			document.getElementById("close").click();
			break;
			case 37:
			document.getElementById("prev").click();
			break;
			case 39:
			document.getElementById("next").click();
			break;
		}
	}
});

/* ----------------------------------------------------------*/

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
	document.getElementById("digital").innerHTML = setImgButtons(digitalImgFiles, "digitalImgFiles");
	document.getElementById("design").innerHTML = setImgButtons(designImgFiles, "designImgFiles");
	document.getElementById("trad").innerHTML = setImgButtons(tradImgFiles, "tradImgFiles");
	document.getElementById("2d").innerHTML = setImgButtons(gameArtImgFiles, "gameArtImgFiles");
}

function setImgButtons(imgs, categoryName)
{
	var htmlCode = "";
	
	for (var i = 0; i < imgs.length; i++)
	{
		htmlCode +=	`<a onclick='createLightbox("${categoryName}", ${i})'><img class="thumbnail" src="../img/gallery/${imgs[i].fileName}_small.jpg"></a>`;
	}
	
	return htmlCode;
}

function createLightbox(categoryName, imgIndex)
{
	document.getElementById("lightboxStorage").innerHTML = "";
	
	var htmlCode = "";
	var imgNameVar = "name__" + lang;
	
	var imgs = eval(categoryName);	/* I know, I know, I shouldn't use eval(), but I can't find any other way to do this in native JS, sorry. */
	var img = imgs[imgIndex];
	var imgsLengthIndex = imgs.length; imgsLengthIndex--;
	var imgIndexPrev = imgIndex; imgIndexPrev--;
	var imgIndexNext = imgIndex; imgIndexNext++;
	
	htmlCode += `<div id="preview_${img.fileName}" class="lightbox">
	<div style="height: 100%; width: 100%; position: fixed;" onclick="document.getElementById('lightboxStorage').innerHTML = ''"></div>
	<div class="lightbox_content h-center v-center">`;
	if (imgIndex > 0)
	{
		htmlCode += `<a id="prev" class="lightbox_content_previous v-center" onclick='createLightbox("${categoryName}", ${imgIndexPrev})' onkeydown="navigateLightboxViaKeyboard(event)">${prevButtonSvg}</a>`;
	}
	htmlCode += `<div id="imgDiv" class="lightbox_content_img">
	<img id="lightboxImg" onload="resizeImage()" src="../img/gallery/${img.fileName}_big.${img.format}">
	<h5>${imgIndexNext}/${imgs.length}: ${img[imgNameVar]}</h5>
	</div>`;
	if (imgIndex < imgsLengthIndex && imgs.length > 1)
	{
		htmlCode += `<a id="next" class="lightbox_content_next v-center" onclick='createLightbox("${categoryName}", ${imgIndexNext})' onkeydown="navigateLightboxViaKeyboard(event)">${nextButtonSvg}</a>`;
	}
	htmlCode += `<a id="close" class="lightbox_content_exit h-center v-center" onclick="document.getElementById('lightboxStorage').innerHTML = ''" onkeydown="navigateLightboxViaKeyboard(event)">${closeButtonSvg}</a>
	</div>
	</div>`;
	
	document.getElementById("lightboxStorage").innerHTML = htmlCode;
}

function resizeImage()
{
	var parentDiv = document.getElementById("imgDiv");
	
	if (parentDiv != null)
	{ 
		var img = document.getElementById("lightboxImg");
		var divTrueHeight = parentDiv.clientHeight; divTrueHeight -= 30;
		var imgRatio = img.naturalWidth; imgRatio /= img.naturalHeight;
		var divRatio = parentDiv.clientWidth; divRatio /= divTrueHeight;
		var resWidth, resHeight;
		
		if (img.naturalWidth > parentDiv.clientWidth || img.naturalHeight > divTrueHeight)
		{
			var divMin = Math.min(parentDiv.clientWidth, divTrueHeight);
		
			if (imgRatio == 1)
			{
				resWidth = divMin;
				resHeight = divMin;
			}
			else if (imgRatio < 1)
			{
				resHeight = divMin;
				resWidth = divMin;
				if (divRatio >= 1)
					resWidth *= imgRatio;
				else
					resHeight /= imgRatio;
				if (resHeight > divTrueHeight)
				{
					resHeight = divTrueHeight;
					resWidth = divTrueHeight;
					resWidth *= imgRatio;
				}
			}
			else if (imgRatio > 1)
			{
				resWidth = divMin;
				resHeight = divMin;
				if (divRatio > 1)
					resWidth *= imgRatio;
				else
					resHeight /= imgRatio;
				if (resWidth > parentDiv.clientWidth)
				{
					resWidth = parentDiv.clientWidth;
					resHeight = parentDiv.clientWidth;
					resHeight /= imgRatio;
				}
			}
		}
		else
		{
			resHeight = img.naturalHeight;
			resWidth = img.naturalWidth;
		}
			
		img.width = resWidth;
		img.height = resHeight;
	}
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
						alert("何かは駄目になってしまいました！全ての欄が詰めてあり、メールアドレスが正しく書いてあると確かめてください。\nエラーメッセージ： " + res);
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