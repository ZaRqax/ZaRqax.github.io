

function lab1() {
	var a=prompt("Введите значения a","");
	var b=prompt("Введите значения b","");
	var	c=prompt("Введите значения c","");		
	var x,x2,d=b*b-4*a*c;
    if (a==null || b==null || c==null){
	document.getElementById("no").innerHTML="Вы нажали отмена";
	document.getElementById("abc").innerHTML=null;
	document.getElementById("x").innerHTML=null;
	document.getElementById("d").innerHTML=null;		
	throw new Error("stop");
	}
	if (a==0){
	if (b==0 && c==0){
			document.getElementById("abc").innerHTML="Уравнение имеет бесконечное число корней";	
			document.getElementById("d").innerHTML=null;
			document.getElementById("x").innerHTML=null;
	}
	else{	
	x=(-1*c)/b;
	document.getElementById("abc").innerHTML="Уравнение:"+b+"x+"+c+"=0";
	document.getElementById("d").innerHTML=null;
	document.getElementById("x").innerHTML="x="+x;
	}
	} 
	else{
		   if (d<0){
			   document.getElementById("abc").innerHTML="Уравнение:"+a+"x^2+"+b+"x+"+c+"=0";
			   document.getElementById("d").innerHTML="Нет корней";
			   document.getElementById("x").innerHTML=null;

		    } 
		    else {		
		        x=(-1*b+Math.sqrt(d))/(2*a);
		        x2=(-1*b-Math.sqrt(d))/(2*a);	
		        if (x==x2) {
					document.getElementById("abc").innerHTML="Уравнение:"+a+"x^2+"+b+"x+"+c+"=0";
	               document.getElementById("d").innerHTML="D="+d;
				   document.getElementById("x").innerHTML="x="+x;
	        	}
	    	else {
				document.getElementById("abc").innerHTML="Уравнение:"+a+"x^2+"+b+"x+"+c+"=0";
	            document.getElementById("d").innerHTML="D="+d;
	            document.getElementById("x").innerHTML="Первый корень="+x+"<br>Второй корень="+x2;
				
	    	}
	    	}
			}
		
}