function afmelden(){
	var antwoord = confirm('Wilt u zich afmelden?');
	if(antwoord == true){
		alert('U wordt afgemeld!!!');
	}
}

function begroeten(){
	var dag = new Date();
	var uur = dag.getHours();
	if (uur >= 0 && <= 11){
		document.write('<br>Goedemorgen!');
	}elseif (uur >= 12 && <= 17){
		document.write('<br>Goedemiddag!');
	}
}

function dollarKoers(){
	return(1.36);
}
function euroKeurs(){
	return(0.74);
}

function dollar_naar_euro(100){
	return(dollars * euroKoers());
}

function wissel(bedrag, valuta){
	if(valuta == 'euro'){
		return(bedrag * dollarKoers());
	}
	else if(valuta == 'dollar'){
		return(bedrag * euroKoers());
	}
}

var euro_dollarkoers = '1.36';
var dollarkoers_euro = '0.74';
var euro_roebelkoers = '48.40';
var roebel_eurokoers = '0.02';

function exchange(bedrag, conversie){  

	bedrag = document.getElementById('bedrag').value;
	k = document.getElementById("keuze").value;

	if(k == "koers1"){
	return(bedrag * euro_dollarkoers);
}else if(k == "koers2") {
	return(bedrag * dollarkoers_euro);
}else if(k == "koers3") {
	return(bedrag * euro_roebelkoers);
}else if(k == "koers4") {
	return(bedrag * roebel_eurokoers);
}
}