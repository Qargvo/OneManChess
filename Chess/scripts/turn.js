	var table = document.getElementById("ChessTable");
var cell = table.getElementsByTagName('td');
var last = cell[0];
	var divlevels = document.getElementById('levels');
	var level = divlevels.getElementsByTagName('input');
	var countf, start_countf ;
	var step_arr = [];
	var beg_table = []
	var ch_table = []
var leveltag = document.getElementById('levels');
spawn    = '<img src="svg/p.svg" height ="50" width="50">';
sbishop  = '<img src="svg/b.svg" height ="50" width="50">';
squeen   = '<img src="svg/q.svg" height ="50" width="50">';
sknight  = '<img src="svg/n.svg" height ="50" width="50">';
sking    = '<img src="svg/k.svg" height ="50" width="50">';
srook    = '<img src="svg/r.svg" height ="50" width="50">';
figdisk  = {p:spawn, b:sbishop, 0:''}

function addFigure(ind, fig, figsvg){
	if (figsvg != '')
		cell[ind].innerHTML = figsvg;
	cell[ind].setAttribute('figure',fig);
}


class Levels{
	constructor(){
		this.levels = [];
	}
	addlevel(tbl){
		this.levels.push(tbl);
	}
	setLevels(){
		var html ='';
		for (var i=0; i < this.levels.length; i++) {html += '<input num="'+i+'" type="button" value="'+(i + 1) +'" style="display: block">';}
		leveltag.innerHTML = html;
		var levelfun = leveltag.getElementsByTagName('input');
		var leveltable = this.levels;

		for (var i=0; i < this.levels.length; i++) {

			levelfun[i].addEventListener('click', function(){
				var countfig = 0
				for (var x = 0; x < 4; x++)
					for (var y = 0; y < 4; y++){		
						if (leveltable[parseInt(this.getAttribute('num'))][y][x] != '0') countfig += 1;
						addFigure(x+y*4,leveltable[parseInt(this.getAttribute('num'))][y][x],figdisk[leveltable[i-1][y][x]])
					}
				beg_table = set_table(table);
				ch_table = set_table(table);
				countf = start_countf = countfig;
				Reset()
			}) }
	}

}
let levelMaster = new Levels();
// [['0','0','0','0'],
// ['0','0','0','0'],
// ['0','0','0','0'],
// ['0','0','0','0']]
level0 = [['p','0','0','0'],
		  ['0','p','0','0'],
		  ['p','0','0','0'],
		  ['0','0','0','0']];
level1 = [['0','0','0','0'],
		  ['0','p','0','0'],
		  ['p','0','0','0'],
		  ['0','0','0','b']];
level2 = [['0','0','0','0'],
		  ['0','p','0','0'],
		  ['p','0','0','0'],
		  ['n','0','p','0']];
level3 = [['0','0','0','0'],
		  ['k','p','0','0'],
		  ['0','0','0','0'],
		  ['n','0','p','0']];
level4 = [['0','0','0','0'],
		  ['k','p','0','r'],
		  ['0','0','0','0'],
		  ['n','0','0','q']];
level5 = [['0','0','0','0'],
		  ['k','p','0','r'],
		  ['0','0','0','0'],
		  ['n','0','0','q']];		  
levelMaster.addlevel(level0);
levelMaster.addlevel(level1);
levelMaster.addlevel(level2);
levelMaster.addlevel(level3);
levelMaster.addlevel(level4);
levelMaster.addlevel(level5);
levelMaster.setLevels();


	function set_table(tb){
		ctb = tb.getElementsByTagName('td');
		res = [	['0', '0', '0', '0'],
				['0', '0', '0', '0'],
				['0', '0', '0', '0'],
				['0', '0', '0', '0']]
		for (var i = 0; i < 16; i++){
			res[Math.trunc(i / 4)][i % 4] = ctb[i].getAttribute('figure');	
		}
		return res;
	}
	
		function step(ind, ChTable){
			res = [];
			x = ind % 4;
			y = Math.trunc(ind / 4);
			var chfig = ChTable[y][x];
			switch(chfig){
				case 'p': 
					{if (y > 0){
					if (ChTable[y - 1][x] == '0') res.push(ind - 4);
					if ((x > 0) && (ChTable[y - 1][x - 1] != '0')) res.push(ind - 5);
					if ((x < 3) && (ChTable[y - 1][x + 1] != '0')) res.push(ind - 3);}}
					break;
				case 'b':
				case 'r':
				case 'q':
						if ((chfig == 'b')||(chfig == 'q')){
						i = x - 1;
						j = y - 1;
						while ((i >= 0) && (j >= 0)) {
							if (ChTable[j][i] != '0'){
								res.push(i + j * 4) ; 
								break;}
							i--;
							j--;
							}
						i = x - 1;
						j = y + 1;
						while ((i >= 0) && (j <= 3)) {
							if (ChTable[j][i] != '0') {
								res.push(i + j * 4) ;
								break;}
							i--;
							j++;
							}
						i = x + 1;
						j = y - 1;
						while ((i <= 3) && (j >= 0)) {
							if (ChTable[j][i] != '0') {
								res.push(i + j * 4) ;
								break;}
							i++;
							j--;
							}
						i = x + 1;
						j = y + 1;
						while ((i <= 3) && (j <= 3)) {
							if (ChTable[j][i] != '0'){
								res.push(i + j * 4) ;
								break;}
							i++;
							j++;
							}					
						};
					if ((chfig == 'r')||(chfig == 'q')){
						i = x;
						j = y - 1;
						while (j >= 0){
							if (ch_table[j][i] != '0'){
								res.push(i + j * 4);
								break;}
							j--;
							};
						i = x + 1;
						j = y;
						while (i <= 3){
							if (ch_table[j][i] != '0'){
								res.push(i + j * 4);
								break;}
							i++;
							};
						i = x;
						j = y + 1;
						while (j <= 3){
							if (ch_table[j][i] != '0'){
								res.push(i + j * 4);
								break;}
							j++;
							};
						i = x - 1;
						j = y;
						while (i >= 0){
							if (ch_table[j][i] != '0'){
								res.push(i + j * 4);
								break;}
							i--;
							};
						};
					break;
					case 'k':{
						if (y > 0){
							res.push(ind - 4);
							if (x > 0) res.push(ind - 5);
							if (x < 3) res.push(ind - 3);
							}
						if (y < 3){
							res.push(ind+4);
							if (x > 0) res.push(ind + 3);
							if (x < 3) res.push(ind + 5);
							};
						if (x > 0) res.push(ind - 1);
						if (x < 3) res.push(ind + 1);
					}
					break;
					case 'n':{
						if (y > 1){
							if (x > 0) res.push(ind - 9);
							if (x < 3) res.push(ind - 7);
						};
						if (x < 2){
							if (y > 0) res.push(ind - 2);
							if (y < 3) res.push(ind + 6);
						};
						if (y < 2){
							if (x < 3) res.push(ind + 9);
							if (x > 0) res.push(ind + 7);
						};
						if (x > 1){
							if (y < 3) res.push(ind + 2);
							if (y > 0) res.push(ind - 6);
						};
					}//
					break;
			}
			return res;

		}

	 


	//alert(ch_table);
	for (var i = 0; i <= 15; i++) //need to change
		cell[i].addEventListener('click', function(){
		if (this.getAttribute('figure') != '0')
		if (step_arr.indexOf(parseInt(this.getAttribute('num'))) != -1) { 
			this.innerHTML = last.innerHTML;
			last.innerHTML = '';
			this.setAttribute('figure', last.getAttribute('figure'));
			last.setAttribute('figure','0');
			countf--;
			ind = parseInt(this.getAttribute('num'));
			indl = parseInt(last.getAttribute('num'));
			ch_table[Math.trunc(ind / 4)][ind % 4] = ch_table[Math.trunc(indl / 4)][indl % 4];
			ch_table[Math.trunc(indl / 4)][indl % 4] = '0';
			last.style.backgroundColor = last.getAttribute('color');
			last.setAttribute('selected', '0');
			step_arr.forEach(function(el){
				cell[el].style.backgroundColor = cell[el].getAttribute('color');
			});
			step_arr = [];
			if (countf == 1) {
				$('#successModal').modal({});
				Reset();
			}
		}else if (this.getAttribute('selected') == '1') {
			num = parseInt(last.getAttribute('num'));	
			last.style.backgroundColor = this.getAttribute('color');
			this.setAttribute('selected','0');
			step_arr.forEach(function(el){
				cell[el].style.backgroundColor = cell[el].getAttribute('color');
			});
			step_arr = [];	
		}
		else{
			last.style.backgroundColor = last.getAttribute('color');
			last.setAttribute('selected', '0');
			num = parseInt(this.getAttribute('num'));
			step_arr.forEach(function(el){
				cell[el].style.backgroundColor = cell[el].getAttribute('color');
			});	
			step_arr = step(num,ch_table);
			this.style.backgroundColor = '#5080A0';	
			this.setAttribute('selected','1');
			step_arr.forEach(function(el){
				if (cell[el].getAttribute('figure') != '0')
					cell[el].style.backgroundColor = 'yellow';
			});
			last = this;
		}
		});	


res = document.getElementById('Reset');
res.onclick = function(){Reset()};

function Reset(){
		step_arr = [];
		countf = start_countf;
		for (var x = 0; x < 4; x++)
			for (var y = 0; y < 4; y ++){
				ch_table[y][x] = beg_table[y][x];
				tcell = cell[x + y * 4]
				tcell.style.backgroundColor = tcell.getAttribute('color');
				tcell.setAttribute('figure',beg_table[y][x]);
				if (beg_table[y][x] != '0') tcell.innerHTML = '<img src="svg/' + beg_table[y][x] + '.svg" height ="50" width="50">' 
					else tcell.innerHTML = '';
			} 		
		
	}