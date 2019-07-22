/* JavaScript written by MaoRX.cn */
var version="19w27a";
console.info("Version "+version);
var backend="https://maorx.cn/a/like.php";
var lastModified0="";
var eTag0="";
var currentEditingNote="";
var currentNotes="";
var maximumNoteNumber="";
var currentNoteIsNew=true;
var pinnedNoteNum="";
var currentTime="";
var thePopUp;
var popUpClosing=false;
window.oncontextmenu=function(){return false;};
window.onload=function(){
	ua = navigator.userAgent;
	ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	isMobile = isIphone || isAndroid;
	if(isMobile){
		form0.action="https://m.baidu.com/s";
		bgbox.style.backgroundSize="auto 100%";
		bgbox.style.backgroundPosition="center";
	}
	if(location.hostname && location.hostname != atob("YS5tYW9yeC5jbg==")){
		location.href = atob("aHR0cHM6Ly9hLm1hb3J4LmNuLw==");
	}
	bgPreference = localStorage.getItem("bgPreference");
	if(bgPreference == undefined){
		localStorage.setItem("bgPreference", "Default");
		bgPreference = "Default";
	}
	switch (bgPreference) {
	case 'Default':
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_1.jpg)";
		bgbox.style.opacity="1";
		bgPreBoxIn1.classList.add("selected");
		break;
	case 'Default2':
		bgbox.style.backgroundImage = "url(./images/BG_A_Default_2.jpg)";
		bgbox.style.opacity="1";
		bgPreBoxIn2.classList.add("selected");
		break;
	case 'Bing':
		bgbox.style.opacity="1";
		bgPreBoxInBing.classList.add("selected");
		break;
	case 'Live':
		liveBgBox.style.display="inline";
		bgPreBoxInLive.classList.add("selected");
		break;
	}
	getLike();
	currentNotes = localStorage.getItem("currentNotes");
	maximumNoteNumber = localStorage.getItem("maximumNoteNumber");
	if(currentNotes == undefined){
		currentNotes = "0";
		maximumNoteNumber = "0";
	}
	loadNotes();
	var newScript = document.createElement("script");
	newScript.src = "https://maorx.cn/a/code.php?action=start";
	newScript.onload = function(){
		document.body.removeChild(newScript);
	};
	document.body.appendChild(newScript);
};
function Input_KeyDown(event){
	event = event || window.event;
	source = event.srcElement; 
	if(event.keyCode==13){
		var str = input0.value;
		var finalStr=str.replace("翻译：","");
		if(str.indexOf("翻译：") != -1){
			form0.action="https://fanyi.baidu.com/#en/zh/"+finalStr;
			input0.name=""; 
		}else{
			form0.action="https://www.baidu.com/s"
			input0.name="word"; 
		}  
		$("form").submit();         
	}
}
function Input_Focus()
{
	quotebox.style.opacity="1";
	ua = navigator.userAgent;
	ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	isMobile = isIphone || isAndroid;
	if(isMobile){
		title.style.top="30px";
		input0.style.top="100px";
	}
	if(bgPreference=="Live"){
		liveBgBox.style.transform="scale(1.1)";
		liveBgBox.style.filter="blur(10px)";
	}
};
function Input_Blur()
{
	input0.value="";
	quotebox.style.opacity="0";
	if(isMobile){
		title.style.top="100px";
		input0.style.top="170px";
	}
	if(bgPreference=="Live"){
		liveBgBox.style.transform="";
		liveBgBox.style.filter="";
	}
};
function Title_Click(event)
{
	if($(navbox).css("display")=="none"){
		input0.style.opacity="0";
		quotebox.style.opacity="0";
		if(bgPreference=="Live"){
			liveBgBox.style.transform="scale(1.1)";
			liveBgBox.style.filter="blur(10px)";
		}else{
			bgbox.style.transform="scale(1.1)";
			bgbox.style.filter="blur(10px)";
		}
		navbox.style.display="block";
		bgPreference = localStorage.getItem("bgPreference");
		btnSettings.style.opacity = "1";
		btnSettings.style.cursor = "pointer";
		if(bgPreference == "Bing"){
			btnLike.style.opacity = "1";
			btnLike.style.cursor = "pointer";
		}
		document.getElementById("tp-weather-widget").style.opacity = "0.5";
		document.getElementById("tp-weather-widget").style.pointerEvents = "auto";
		setTimeout("navbox.style.opacity='1';",100);
	}else{
		Navbox_Click(event)
	}
}
function titleHover()
{
	title.style.transform="scale(1.15)";
	setTimeout(function(){
		title.style.transform="scale(1.1)";
	},250);
}
function titleHover2()
{
	title.style.transform="scale(0.95)";
	setTimeout(function(){
		title.style.transform="scale(1)";
	},250);
}
function Navbox_Click(event)
{
	var obj=event.srcElement;
	if(obj.classList.contains("shouldNotFade")==false){
		input0.style.opacity="1";
		if(bgPreference=="Live"){
			liveBgBox.style.transform="";
			liveBgBox.style.filter="";
		}else{
			bgbox.style.transform="";
			bgbox.style.filter="";
		}
		navbox.style.opacity="0";
		btnSettings.style.opacity = "0";
		btnSettings.style.cursor = "default";
		btnLike.style.opacity="0";
		btnLike.style.cursor="default";
		document.getElementById("tp-weather-widget").style.opacity="0";
		document.getElementById("tp-weather-widget").style.pointerEvents = "none";
		setTimeout("navbox.style.display='none';",250);
	}
	//alert(obj.id);
}
function loadNotes()
{
	if(currentNotes != "0"){
		textNote.style.left = "200px";
		textNote.style.width = "420px";
		noteListWrap.style.left = "0px";
		for(var i = 1;i < Number(maximumNoteNumber) + 1;i++){
			currentNoteTitle = localStorage.getItem("note" + i);
			currentNoteTime = localStorage.getItem("noteTime" + i);
			if(currentNoteTitle != undefined){
				var newNoteDiv = document.createElement("div");
				newNoteDiv.className = "noteItem";
				newNoteDiv.classList.add("shouldNotFade");
				newNoteDiv.id = "noteItem" + i;
				newNoteDiv.onclick = function(){
					openNote(this);
				}
				var newNoteSpan1 = document.createElement("span");
				newNoteSpan1.className = "noteTitle";
				newNoteSpan1.classList.add("shouldNotFade");
				newNoteSpan1.id = "noteTitle" + i;
				var newNoteSpan2 = document.createElement("span");
				newNoteSpan2.className = "noteTime";
				newNoteSpan2.classList.add("shouldNotFade");
				newNoteSpan2.id = "noteTime" + i;
				newNoteDiv.appendChild(newNoteSpan1);
				newNoteDiv.appendChild(newNoteSpan2);
				noteList.appendChild(newNoteDiv);
				document.getElementById("noteTitle" + i).innerText = localStorage.getItem("note" + i);
				document.getElementById("noteTime" + i).innerText = localStorage.getItem("noteTime" + i);
			}
		}
	}
	textNote.value = "";
	pinnedNoteNum=localStorage.getItem("pinnedNoteNum");
	if(pinnedNoteNum!=undefined&&pinnedNoteNum!=""){
		pinnedNoteContent.innerText=localStorage.getItem("note" + pinnedNoteNum);
		pinnedNoteTime.innerText=localStorage.getItem("noteTime" + pinnedNoteNum);
		showPinnedNote();
	}
}
function newNote()
{
	noteToolBar.style.display = "none";
	if(document.getElementById("noteItem" + currentEditingNote) != undefined){
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNotes = Number(currentNotes) + 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem","")) + 1;
	currentNoteIsNew = true;
	textNote.value = "";
	textNote.focus();
	currentNotes = Number(currentNotes) - 1;
	currentEditingNote = Number(noteList.lastElementChild.id.replace("noteItem","")) - 1;
}
function openNote(obj)
{
	if(document.getElementById("noteItem" + currentEditingNote) != undefined){
		document.getElementById("noteItem" + currentEditingNote).classList.remove("current");
	}
	currentNoteIsNew = false;
	currentEditingNote = obj.id.replace("noteItem","");
	textNote.value = localStorage.getItem("note"+currentEditingNote);
	noteToolBar.style.display = "block";
	document.getElementById("noteItem" + currentEditingNote).classList.add("current");
}
function noteChanged()
{
	if(textNote.value!=""&&noteListWrap.style.left!="0px"){
		textNote.style.left="200px";
		textNote.style.width="420px";
		noteListWrap.style.left="0px";
		noteToolBar.style.display = "block";
	}
	if(textNote.value!=""&&currentNoteIsNew==true){
		currentNotes=Number(currentNotes)+1;
		currentEditingNote=Number(noteList.lastElementChild.id.replace("noteItem","")) + 1;
		var newNoteDiv=document.createElement("div");
		newNoteDiv.className="noteItem";
		newNoteDiv.classList.add("shouldNotFade");
		newNoteDiv.classList.add("current");
		newNoteDiv.id="noteItem"+currentEditingNote;
		newNoteDiv.onclick=function(){
			openNote(this);
		}
		var newNoteSpan1=document.createElement("span");
		newNoteSpan1.className="noteTitle";
		newNoteSpan1.classList.add("shouldNotFade");
		newNoteSpan1.id="noteTitle"+currentEditingNote;
		var newNoteSpan2=document.createElement("span");
		newNoteSpan2.className="noteTime";
		newNoteSpan2.classList.add("shouldNotFade");
		newNoteSpan2.id="noteTime"+currentEditingNote;
		newNoteDiv.appendChild(newNoteSpan1);
		newNoteDiv.appendChild(newNoteSpan2);
		noteList.appendChild(newNoteDiv);
		noteList.scrollTop=noteList.clientHeight;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", currentEditingNote);
		noteToolBar.style.display="block";
		currentNoteIsNew=false;
	}
	if(textNote.value==""&&currentNotes=="1"&&noteListWrap.style.left=="0px"){
		textNote.style.left="0px";
		textNote.style.width="620px";
		noteListWrap.style.left="-200px";
		noteToolBar.style.display = "none";
	}
	if(textNote.value==""){
		noteList.removeChild(document.getElementById("noteItem" + currentEditingNote));
		currentNotes = Number(currentNotes) - 1;
		currentNoteIsNew = true;
		localStorage.setItem("currentNotes", currentNotes);
		localStorage.setItem("maximumNoteNumber", Number(noteList.lastElementChild.id.replace("noteItem","")));
		noteToolBar.style.display = "none";
	}
	if(document.getElementById("noteTitle" + currentEditingNote) != undefined){
		document.getElementById("noteTitle" + currentEditingNote).innerText = textNote.value;
		document.getElementById("noteTime" + currentEditingNote).innerText = currentTime;
	}
	if(currentEditingNote==pinnedNoteNum){
		pinnedNoteContent.innerText=textNote.value;
		pinnedNoteTime.innerText=currentTime;
	}
	if(currentEditingNote==pinnedNoteNum&&textNote.value==""){
		unpinNote();
	}
}
function saveNote()
{
	noteChanged();
	if(textNote.value != ""){
		localStorage.setItem("note" + currentEditingNote, textNote.value);
		localStorage.setItem("noteTime" + currentEditingNote, currentTime);
	}else{
		localStorage.removeItem("note" + currentEditingNote);
		localStorage.removeItem("noteTime" + currentEditingNote);
	}
}
function delNote()
{
	if(confirm("删除这条便笺？")){
		textNote.value = "";
		saveNote();
	}
}
function pinNote()
{
	pinnedNoteContent.innerText=textNote.value;
	pinnedNoteTime.innerText=document.getElementById("noteTime" + currentEditingNote).innerText;
	pinnedNoteNum=currentEditingNote;
	localStorage.setItem("pinnedNoteNum", currentEditingNote);
	showPinnedNote();
}
function showPinnedNote()
{
	pinnedBox.style.display="block";
	setTimeout(function(){
		pinnedBox.style.opacity="1";
		pinnedBox.style.transform="scale(1.05)";
	},100);
	setTimeout(function(){
		pinnedBox.style.transform="scale(1)";
	},350);
}
function unpinNote()
{
	pinnedNoteNum="";
	localStorage.setItem("pinnedNoteNum", "");
	pinnedBox.style.transform="scale(1.05)";
	setTimeout(function(){
		pinnedBox.style.transform="scale(0.5)";
		pinnedBox.style.opacity="0";
	},250);
	setTimeout(function(){
		pinnedBox.style.display="none";
	},500);
}
function navboxScale0()
{
	//navboxCus.style.MozTransform="scale(0.9)";
	//navboxCus.style.WebkitTransform="scale(0.9)";
	navbox1.style.MozTransform="scale(0.9)";
	navbox1.style.WebkitTransform="scale(0.9)";
	navbox2.style.MozTransform="scale(0.9)";
	navbox2.style.WebkitTransform="scale(0.9)";
}
function navboxScale1()
{
	//navboxCus.style.MozTransform="scale(1)";
	//navboxCus.style.WebkitTransform="scale(1)";
	navbox1.style.MozTransform="scale(1)";
	navbox1.style.WebkitTransform="scale(1)";
	navbox2.style.MozTransform="scale(1)";
	navbox2.style.WebkitTransform="scale(1)";
}
/*function nbSwitch0_Click()
{
	if(navboxCus.style.left!="0px"){
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.remove("current");
		nbSwitch0_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			navboxCus.style.left="0px";
			navbox1.style.left="100%";
			navbox2.style.left="100%";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}*/
function nbSwitch1_Click()
{
	if(navbox1.style.left!="0px"){
		//nbSwitch0_0.classList.remove("current");
		nbSwitch2_0.classList.remove("current");
		nbSwitch1_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			//navboxCus.style.left="-100%";
			navbox1.style.left="0px";
			navbox2.style.left="100%";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}
function nbSwitch2_Click()
{
	if(navbox2.style.left!="0px"){
		//nbSwitch0_0.classList.remove("current");
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.add("current");
		navboxScale0()
		setTimeout(function(){
			//navboxCus.style.left="-100%";
			navbox1.style.left="-100%";
			navbox2.style.left="0px";
		},250);
		setTimeout(function(){
			navboxScale1()
		},500);
	}
}
function showAbout()
{
	thePopUp=popAbout;
	pVersion.innerText=version;
	showPop();
}
function showSettings()
{
	thePopUp=popBg;
	/*switch (bgPreference) {
	case 'Default':
		useDefaultWp.checked="true";
		break;
	case 'Bing':
		useBingWp.checked="true";
		break;
	case 'Live':
		useLiveWp.checked="true";
		break;
	}*/
	showPop();
}
function showPop()
{
	cover1.style.display="block";
	setTimeout(function(){
		cover1.style.opacity="1";
		thePopUp.style.opacity="1";
		thePopUp.style.MozTransform="rotate3d(1,1,0,-10deg)";
		thePopUp.style.WebkitTransform="rotate3d(1,1,0,-10deg)";
	},100);
	setTimeout(function(){
		thePopUp.style.MozTransform="rotate3d(0,0,0,0deg)";
		thePopUp.style.WebkitTransform="rotate3d(0,0,0,0deg)";
	},350);
}
function btnCloseHover(obj)
{
	thePopUp=obj.parentNode;
	thePopUp.style.MozTransform="rotate3d(1,1,0,5deg)";
	thePopUp.style.WebkitTransform="rotate3d(1,1,0,5deg)";
}
function btnCloseHover2()
{
	if(popUpClosing==false){
		thePopUp.style.MozTransform="rotate3d(0,0,0,0deg)";
		thePopUp.style.WebkitTransform="rotate3d(0,0,0,0deg)";
	}
}
function closePop(obj)
{
	popUpClosing=true;
	obj.style.display="none";
	thePopUp=obj.parentNode;
	cover1.style.opacity="0";
	thePopUp.style.opacity="0";
	thePopUp.style.MozTransform="rotate3d(1,1,0,20deg)";
	thePopUp.style.WebkitTransform="rotate3d(1,1,0,20deg)";
	setTimeout(function(){
		cover1.style.display="none";
		thePopUp.style.MozTransform="rotate3d(1,1,0,90deg)";
		thePopUp.style.WebkitTransform="rotate3d(1,1,0,90deg)";
		obj.style.display="block";
		popUpClosing=false;
	},350);
}
function changeWp (obj)
{
	switch (obj.id) {   //(obj.value)
	case 'bgPreBoxD1':
		//document.body.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/MobiusBeta/a.maorx.cn/images/BG_A_Default_1.jpg)";
		bgbox.style.opacity = "1";
		bgPreBoxIn1.classList.add("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default");
		bgPreference="Default";
		break;
	case 'bgPreBoxD2':
		liveBgBox.style.display="none";
		bgbox.style.backgroundImage = "url(./images/BG_A_Default_2.jpg)";
		bgbox.style.opacity = "1";
		bgPreBoxIn2.classList.add("selected");
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Default2");
		bgPreference="Default2";
		break;
	case 'bgPreBoxBing':
		//bgbox.style.backgroundImage = "url(https://api.i-meto.com/bing?new)";
		var bingWallpaper = localStorage.getItem("bing-wallpaper");
		function loadBingWallpaper(headerMap) {
			//document.body.style.backgroundImage = bingWallpaper;
			bgbox.style.backgroundImage = bingWallpaper;
		}
		if (bingWallpaper) loadBingWallpaper();
		liveBgBox.style.display="none";
		bgbox.style.opacity = "1";
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxInBing.classList.add("selected");
		bgPreBoxInLive.classList.remove("selected");
		localStorage.setItem("bgPreference", "Bing");
		bgPreference="Bing";
		break;
	case 'bgPreBoxLive':
		liveBgBox.style.display="inline";
		bgbox.style.opacity = "0";
		bgPreBoxIn1.classList.remove("selected");
		bgPreBoxIn2.classList.remove("selected");
		bgPreBoxInBing.classList.remove("selected");
		bgPreBoxInLive.classList.add("selected");
		localStorage.setItem("bgPreference", "Live");
		bgPreference="Live";
		break;
	}
}
/*function ChangeBG()
{	
	var btnBG = document.getElementById("nav_function");
	bgPreference = localStorage.getItem("bgPreference");
	if(bgPreference != "Default"){
		//document.body.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		bgbox.style.backgroundImage = "url(images/BG_A_Default_1.jpg)";
		bgbox.style.opacity = "1";
		btnBG.innerHTML = "切换为每日背景";
		localStorage.setItem("bgPreference", "Default");
	}else{
		//bgbox.style.backgroundImage = "url(https://api.i-meto.com/bing?new)";
		var bingWallpaper = localStorage.getItem("bing-wallpaper");
		function loadBingWallpaper(headerMap) {
			//document.body.style.backgroundImage = bingWallpaper;
			bgbox.style.backgroundImage = bingWallpaper;
		}
		if (bingWallpaper) loadBingWallpaper();
		bgbox.style.opacity = "1";
		btnBG.innerHTML = "切换为默认背景";
		localStorage.setItem("bgPreference", "Bing");
	}
};*/
function getLike()
{
	var xhr = new XMLHttpRequest();
	xhr.open("POST", backend);
	xhr.setRequestHeader('Content-Type',' application/x-www-form-urlencoded');
	xhr.send("action=getLikedCount&lastModified0="+lastModified0+"&eTag0="+eTag0);
	xhr.onreadystatechange = function(){ 
		if (xhr.readyState==4 && xhr.status==200){ 
			numLiked.innerText=xhr.responseText;
		}
	}
}
function likeClick()
{
	btnLike.style.MozTransform="scale(0.8)";
	btnLike.style.WebkitTransform="scale(0.8)";
	setTimeout(function(){
		btnLike.style.MozTransform="scale(1.2)";
		btnLike.style.WebkitTransform="scale(1.2)";
	},100);
	setTimeout(function(){
		btnLike.style.MozTransform="scale(0.9)";
		btnLike.style.WebkitTransform="scale(0.9)";
	},200);
	setTimeout(function(){
		btnLike.style.MozTransform="scale(1)";
		btnLike.style.WebkitTransform="scale(1)";
	},300);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", backend);
	xhr.setRequestHeader('Content-Type',' application/x-www-form-urlencoded');
	xhr.send("action=updateLikedCount");
	xhr.onreadystatechange = function(){ 
		if (xhr.readyState==4 && xhr.status==200){ 
			if (xhr.responseText==="liked"){
				alert("已经点过喜欢啦");
			}else{
				numLiked.innerText=xhr.responseText;
			}
		}
	}
}
function Time(){
	//var vWeek,vWeek_s,vDay;
	//vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
	var date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hours = date.getHours();
	minutes = date.getMinutes();
	//seconds = date.getSeconds();
	//vWeek_s = date.getDay();
	//titleText.innerText = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	titleText.innerText = hours + ":" + minutes;
	currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
};
setInterval("Time()",1000);
function pinnedNoteHover(ev,obj) 
{
	m_clientX = ev.clientX-obj.offsetLeft;
	m_clientY = ev.clientY-obj.offsetTop;
	pinnedNoteW=window.getComputedStyle(obj).width.replace("px","");
	pinnedNoteH=window.getComputedStyle(obj).height.replace("px","");
	if(m_clientX<pinnedNoteW*0.3 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg) rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY<pinnedNoteH*0.3){
		obj.style.transform="rotateX(10deg) rotateY(5deg)";
	}
	if(m_clientX<pinnedNoteW*0.3 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotate3d(0,0,0,0deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.3 && m_clientY<pinnedNoteH*0.7){
		obj.style.transform="rotateY(5deg)";
	}
	if(m_clientX<pinnedNoteW*0.3 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg) rotateY(-5deg)";
	}
	if(m_clientX>pinnedNoteW*0.3 && m_clientX<pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg)";
	}
	if(m_clientX>pinnedNoteW*0.7 && m_clientY>pinnedNoteH*0.7){
		obj.style.transform="rotateX(-10deg) rotateY(5deg)";
	}
	btnUnpin.style.opacity="1";
}
function pinnedNoteHover2(obj) 
{
	obj.style.transform="rotate3d(0,0,0,0deg)";
	btnUnpin.style.opacity="0";
}