/**
 * Created by Administrator on 2016/10/3.
 */
$("#register .reg ul li").css({ borderBottom:"none",height:"35px"});
$("#register .reg ul li").eq(1).css({ borderBottom:"2px solid #654579",height:"33px"});

$(function(){
    //获取验证码
    var arr=new Array();
    $("#register .reg .codeDiv1 button").bind("click", function(){
        var sum="";
        $(this).html("");
        for( var i=0; i<4; i++ ){
            arr[i]=parseInt( Math.random()*123 );
            if( arr[i]>=48&&arr[i]<=57 || arr[i]>=65&&arr[i]<=90 || arr[i]>=97&&arr[i]<=122 ){
                sum=sum+String.fromCharCode(arr[i]);
            }else{
                i--;
                continue;
            }
        }
        $(this).html(sum);
    });

    $(".codeDiv1 input:text").bind("click",function(){
        $(".codeDiv1 img").eq($(this).index()-1).attr("src","../images/photoCode2.jpg");
    });

//表单验证与注册（信息写入cookie）
function isPhotonumber(){
    var regAccount=/^1[3|4|5|7|8]\d{9}$/;
    if( $(".codeDiv1 input:text").eq(0).val()=="" ){
        $(".codeDiv1 p").eq(0).css("display","block");
        $(".codeDiv1 input:text").eq(0).focus();
        return false;
    }else if( !regAccount.test( $(".codeDiv1 input:text").eq(0).val() ) ){
        $(".codeDiv1 p").eq(0).css("display","block");
        $(".codeDiv1 input:text").eq(0).val("");
        $(".codeDiv1 input:text").eq(0).focus();
        return false;
    }else{
        $(".codeDiv1 p").eq(0).css("display","none");
        return true;
    }
}
function ischeck(){
    if( $(".codeDiv1 input:text").eq(1).val()!=$(".codeDiv1 button").eq(0).html() ){
        $(".codeDiv1 p").eq(1).css("display","block");
        $(".codeDiv1 input:text").eq(1).val("");
        $(".codeDiv1 input:text").eq(1).focus();
        return false;
    }else{
        $(".codeDiv1 p").eq(1).css("display","none");
        return true;
    }
}
function ispassword(){
    var regAccount=/^[a-z0-9_-]{6,18}$/;
    if( $(".codeDiv1 input:password").eq(0).val()=="" ){
        $(".codeDiv1 p").eq(3).css("display","block");
        $(".codeDiv1 input:password").eq(0).val("");
        $(".codeDiv1 input:password").eq(0).focus();
        return false;
    }else if(!regAccount.test( $(".codeDiv1 input:text").eq(3).val() )){
        $(".codeDiv1 p").eq(3).css("display","block");
        $(".codeDiv1 input:password").eq(0).val("");
        $(".codeDiv1 input:password").eq(0).focus();
        return false;
    }else{
        $(".codeDiv1 p").eq(3).css("display","none");
        return true;
    }
}
//console.log($(".codeDiv1 input:button:first").val());
var textValues=$(".codeDiv1 input:text").val();
textValues="";
$(".codeDiv1 input:button:first").bind("click",function(){
    if(  !isPhotonumber() || !ischeck() || !ispassword() ){
        return false;
    }
    if( $(".codeDiv1 input:checkbox").eq(0).is(":checked")==true ){
        $.cookie.setAll("user1",{ user1Photo:$(".codeDiv1 input:text").eq(0).val(),user1Password:$(".codeDiv1 input:password").eq(0).val() },_getDate(21) );
        $(".codeDiv1 input:text").val("");
        $(".codeDiv1 input:password").val("");
        window.open("login.html");
    }
});

//登录与注册切换
    $("#register .reg ul li").bind("click",function(){
        $("#register .reg div").css("zIndex",0);
        $("#register .reg div").eq($(this).index()).css("zIndex",10);
        $("#register .reg ul li").css({ borderBottom:"none",height:"35px"});
        $(this).css({ borderBottom:"2px solid #654579",height:"33px"});
    });

//登录验证
    $(".codeDiv2 input:button:first").bind("click",function(){
        //console.log($.cookie.getAll("user1").user1Photo);
        //console.log($("#register .codeDiv2 input:text").eq(0).val());
        $("#register .reg .codeP5").eq(0).css("display","block");
        $("#register .codeDiv2 input:text").eq(0).focus();
        if( $.cookie.getAll("user1").user1Photo==$("#register .codeDiv2 input:text").eq(0).val() ){
            $("#register .reg .codeP5").eq(0).css("display","none");
            $("#register .reg .codeP6").eq(0).css("display","block");
            $("#register .codeDiv2 input:password").eq(0).focus();
            if( $.cookie.getAll("user1").user1Password==$("#register .codeDiv2 input:password").eq(0).val() ){
                $("#register .reg .codeP6").eq(0).css("display","none");
                alert("登录成功");
                $(".codeDiv2 input:text").val("");
                $(".codeDiv2 input:password").val("");
                window.open("../index.html");
            }
        }

    });

});
function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}