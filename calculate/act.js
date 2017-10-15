// var str1="1",str2="2",str3="3",str4="4",str5="5",str6="6",str7="7",str8="8",
// str9="9",str0="0",op1="+",op2="-",op3="*",op4="/",dot=".",equ="=";
		var str="";var resultNum="";
		function showData(id){
			str=str+document.getElementById(id).value;
			document.getElementById("result").innerHTML=str;
		}
		function actionc(){
			document.getElementById("result").innerHTML="";
			str="";
		}
		function calculate(){
			resultNum=eval(str);
			str="";
			document.getElementById("result").innerHTML=resultNum;
			str=resultNum;
		}