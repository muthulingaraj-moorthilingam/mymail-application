window.onload=function(){
//var value="";

fetch("https://api.myjson.com/bins/uw598")
.then(function(resolve){
	return resolve.json();
})
.then(function(data){
	console.log(data);
	document.getElementById('ud').src=data.photo;
	value=data;
	console.log(value);
});


var arr=["Form","To","Subject","Has the words","Doesn't have"];
/*
fetch("https://api.myjson.com/bins/11ut94")
.then(function(value){
	return value.json();
})
.then(function(data){
	console.log(data);
	console.log(data[0].name);
	console.log(data.length);
	var  parent=document.getElementById("u_list");
	for (var i =0 ;i< data.length;i++) {
			var div=document.createElement("div");
			div.innerHTML=data[i].name;
			if(data[i].count === 0){
				var span=document.createElement("span");
				span.innerHTML=data[i].count;
				div.appendChild(span);
			}
			parent.appendChild(div);

	}

});
document.getElementById("left-side").addEventListener("click",function(event){
	console.log(event);
	var com1=document.getElementById("com1");
	var com2=document.getElementById("com2");
	var list=document.getElementById("u_list");
	com2.style.display="none";
	list.style.display="none";
});
*/

document.getElementById("page").addEventListener("click",find);
function find(event){
		//console.log(event.target.id);
		//console.log(event.target);
		//console.log(event);
		if (event.target.id === "input"){
			document.getElementById("form").style.backgroundColor="#fff";
			document.getElementById("input").style.backgroundColor="#fff";
			document.getElementById("search1").style.backgroundColor="#fff";
			document.getElementById("search1").style.boxShadow="0px 1px 2.3px 0px rgba(104,106,112,1),1px 0px 2px 0px rgba(104,106,112,0)";
		}
		else if(event.target.id === "search1"){
				document.getElementById("show-search-option").style.display="none";
				document.getElementById("moreoption").style.display="inline-block";
			}
			if((event.target.id ==="moreoption") || (event.target.id === "mp")){
			document.getElementById("show-search-option").style.display="block";
			document.getElementById("moreoption").style.display="none";
		}
		else if(event.target.tagName === "INPUT"){
			var parent=event.target.parentNode;
			//console.log(parent.length);
			if((parent.className === "sso") || (parent.className === "sso-select")){
				/*var da=event.target.previousElementSibling.innerText;
				for(var i=0;i<arr.length;i++){
					if(arr[i] === da){
						event.target.style.borderBottom="1px solid #1A73E8";
					}

				}*/
				var grand_parent=parent.parentNode;
				for(var i=0;i<grand_parent.childElementCount;i++){
					var temp=grand_parent.children[i];
						for(var j=0;j<temp.childElementCount;j++){
							if(temp.children[j] === event.target){
								//continue;
								event.target.style.borderBottom="1px solid #1A73E8";
							}
							else{
								if(temp.children[j].tagName === "INPUT"){
									temp.children[j].style.borderBottom="1px solid #ECEEF1";
								}
							}
						}
				}
			}
			
		}
		/*else if((event.target.id === "tongle") || (event.target.id === "left-side")){
			//document.getElementById("mail-menu").style.display="none";
			//document.getElementsByClassName("con").style.display="none";
			var d=document.getElementsByClassName("con");
			for(var i=0;i<d.length;i++){
				d[i].style.display="none";
			}
		}
		else if(event.target.id === "moremenu"){
				document.getElementById("moremenu").style.display="none";
				document.getElementById("lessbtn").style.display="flex";
				document.getElementById("less").style.display="block";
		}
		else if(event.target.id === "lessbtn"){
				document.getElementById("moremenu").style.display="flex";
				document.getElementById("lessbtn").style.display="none";
				document.getElementById("less").style.display="none";
		}*/
		else if((event.target.id === "content") || (event.target.id === "dpbutton")){
			document.getElementById("dropdown-content").style.display="block";
			var data=document.getElementById("dropdown-content");
			console.log(data.children[0]);
			var parent=data.children[0];
			console.log(parent.childElementCount);
			document.getElementById("elements").style.display="none";
				document.getElementById("byteelements").style.display="none";
		}
		else if((event.target.className === "view")|| (event.target.id === "dpbutton1")){
			document.getElementById("elements").style.display="block";
			document.getElementById("byteelements").style.display="none";
				document.getElementById("dropdown-content").style.display="none";
		}
		else if((event.target.className === "bytespan")|| (event.target.id === "dpbutton2")){
			document.getElementById("byteelements").style.display="block";
			document.getElementById("elements").style.display="none";
					document.getElementById("dropdown-content").style.display="none";
		}
		else if(event.target.tagName ==="LI"){
			if(event.target.parentNode.id ==="ulcontent"){
				console.log(event.target.innerText);
				
			document.getElementById("content").innerHTML=event.target.innerText;
			document.getElementById("dropdown-content").style.display="none";


			}
			else if(event.target.parentNode.id==="ul1element"){
				
					document.getElementById("vspan").innerHTML=event.target.innerText;
					document.getElementById("elements").style.display="none";
				}
				else if (event.target.parentNode.id === "byteele"){
					document.getElementById("bytespan").innerHTML=event.target.innerText;
					document.getElementById("byteelements").style.display="none";
					
				}
		}
		

}

}