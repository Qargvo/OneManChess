function show_map(){
	html = "<table align='center' border='1' cellspacing='0' id='ChessTable' countf = '0'>"//need to change view
	for (var y = 3; y >= 0; y--){
		html += "<tr>";
		for (var x = 0; x <= 3; x++){
			color = ((x + y) % 2 == 0) ? "grey" : "white";//need to change view
			html += "<td style='text-align:center; height:70; width:70; " + 
				"background-color:" + color  + ";'" +
				"num = " + (x + (3-y)*4) +
				" color = " + color +
				" figure = " + "0" +
				" selected = " + "0" +
				">" + "</td>";//need to change view
		}
	}
	html += "<tr>";
	document.getElementById("board").innerHTML = html;
}
show_map();


// var tds = document.querySelectorAll('td');

// for (var i = 0; i < tds.length; i++) {
// 	tds[i].addEventListner('click'.function(){

// 	})
// }