//����I���̂��߂̊֐�
function popJump(selOBJ)
{
	location.href=selOBJ.options[selOBJ.selectedIndex].value;
}
//�ʐ^�����ւ���֐�
function change(View,iNum)
{
	document.View.src = "img/photo_"+iNum+"_l.png";
}
//�T�u�E�C���h�E��\������֐�
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
