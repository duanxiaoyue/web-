window.onload = function(){
 var oTop = document.getElementById("bottom");
 var t=document.getElementById("bot");
 document.onmousemove = function(evt){
  var oEvent = evt || window.event;
  var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  oTop.style.left = oEvent.clientX + scrollleft +15 +"px";
  oTop.style.top = oEvent.clientY + scrolltop +10 + "px";
 }
}
$(document).ready(function(){
	var nodes=document.getElementsByTagName('li');
	for(var i=0;i<nodes.length;i++)
	{
		nodes[i].onmouseover=function(){
			this.className="Display";
		}
		nodes[i].onmouseout=function(){
			this.className="";
		}
	}
	$("#email").blur(function(){
		var txt_1=$(this).val();
		var $error1=$('<span id="error1">邮箱不能为空！</span>');
		if(txt_1=="")
		{
			$("#email").after($error1);
		}
		else
		{
			$("#error1").remove();
			var str=document.getElementById("email").value;
			var e1=str.indexOf('@');
			var e2=str.lastIndexOf('.');
			var $error3=$('<span id="error3">邮箱格式不正确！</span>');
			if(e1<1 || e2-e1<2)
			{
				$("#email").after($error3);
			}
		}
	});
	$("#email").focus(function(){
		$("#error1").remove();
	});
	$("#psw").focus(function(){
		$("#error2").remove();
	});
	$("#psw").blur(function(){
		var txt_2=$(this).val();
		var $error2=$('<span id="error2">密码不能为空！</span>');
		if(txt_2=="")
		{
			$("#psw").after($error2);
		}
		else
		{
			$("#error2").remove();
		}
	});
	$("#logon").click(function(){
		alert("登录成功！");
	});
	var tit_1=document.getElementById('tit_1');
	var tit_2=document.getElementById('tit_2');
	var tit_3=document.getElementById('tit_3');
	$("#tit_one").mouseover(function(){
		$("#tit_one").css("border","0px");
		$("#tit_two").css("border","1px solid white");
		$("#tit_three").css("border","1px solid white");
		$("#sgt").css("display","block");
		$("#exa").css("display","none");
		$("#cpt").css("display","none");
	});
	$("#tit_two").mouseover(function(){
		$("#tit_two").css("border","0px");
		$("#tit_one").css("border","1px solid white");
		$("#tit_three").css("border","1px solid white");
		$("#sgt").css("display","none");
		$("#exa").css("display","block");
		$("#cpt").css("display","none");
	});
	$("#tit_three").mouseover(function(){
		$("#tit_three").css("border","0px");
		$("#tit_one").css("border","1px solid white");
		$("#tit_two").css("border","1px solid white");
		$("#sgt").css("display","none");
		$("#exa").css("display","none");
		$("#cpt").css("display","block");
	});
});