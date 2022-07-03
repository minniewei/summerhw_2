
function value(){
	const test=document.getElementsByClassName('input');
	const search=document.getElementsByClassName('search')[0].value;
	for(var i=0;i<test.length;i++){
		if(test[i].checked){
			alert(test[i].value);
		}
	}
	alert(search);
}
