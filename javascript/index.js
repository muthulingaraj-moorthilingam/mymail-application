var value="";

fetch("https://api.myjson.com/bins/uw598")
.then(function(resolve){
	return resolve.json();
})
.then(function(data){
	console.log(data);
	document.getElementById('user').src=data.photo;
	value=data;
	console.log(value);
});

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

document.getElementById("user").addEventListener("mouseover",function(event){
	
	console.log(event);

});