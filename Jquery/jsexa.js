function ini(){
	document.body.innerHTML=
	"<table id='tabla'>"+
	"<th scope='3'><td>listado de proveedores</td></th>"+
	"<tr>"+
	"<td>empresa</td>"+
	"<td>cif</td>"+
	"<td>direccion</td>"+
	"</tr>"+
	"<th scope='3'><td>bar reinolds</td></th>"+
	"</table>";
}
function añadirfilas(emp,cif,dir){
	var d=document.getElementById("tabla").createElement("tr");
	d.innerHTML="<td>"+emp+"</td><td>"+cif+"</td><td>"+dir+"</td>";
}
function colorearFilas(){
	n=0;
	var ls=document.getElementsByTagName("tr");
	foreach(ls){
		if (n%0==1){
			ls[n].backgroundColor="grey";
		}
	}
}
document.onload(ini);
añadirfilas("clowdonald","85225465Y","calle meollo peleon");
