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

document.getElementById("header").addEventListener("click",find);
function find(event){
		console.log(event.target.id);
		console.log(event.target);
		if (event.target.id === "input"){
			document.getElementById("form").style.backgroundColor="#fff";
			document.getElementById("input").style.backgroundColor="#fff";
			document.getElementById("form").style.boxShadow="0px 1px 2.3px 0px rgba(104,106,112,1),1px 0px 2px 0px rgba(104,106,112,0)";
		}
		if(event.target.id ==="downaerrow"){
			document.getElementById("show-search-option").style.display="block";
		}
}
/*
document.getElementById("input").addEventListener("keypress",function(event){
				if(event.code === "Enter"){
						alert("u find it");
				}
});
//box-shadow: 0px 1px 2.3px 0px rgba(104,106,112,1),1px 0px 2px 0px rgba(104,106,112,0)";
*/

	//document.getElementById("header").style.width=window.innerWidth;
	console.log(window.innerWidth)
}