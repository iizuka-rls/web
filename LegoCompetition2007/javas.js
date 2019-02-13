//言語選択のための関数
function popJump(selOBJ)
{
	location.href=selOBJ.options[selOBJ.selectedIndex].value;
}
//写真を入れ替える関数
function change(View,iNum)
{
	document.View.src = "img/photo_"+iNum+"_l.png";
}
//サブウインドウを表示する関数
function openWin(Mname)
{
	if(Mname=="machine1"||Mname=="machine2"){
		window.open( Mname+".html" ,"Mname","width=400,height=320,left=10,top=10,scrollbars=no;location=no,menubar=no");
	}else if(Mname=="machine0"){
		window.open( Mname+".html" ,"Mname","width=400,height=374,left=10,top=10,scrollbars=no;location=no,menubar=no");
	}else{
		window.open( Mname+".html" ,"Mname","width=400,height=400,left=10,top=10,scrollbars=no;location=no,menubar=no");
	}
}
