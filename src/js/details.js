/**
 * Created by Administrator on 2016/9/30.
 */
$(function(){
    //菜单栏（侧边栏)的隐藏与显示
    //console.log($("#menu>span"));
    $("#menu2>span").bind("mouseover",function(){
        $("#menu2>span").children().eq(1).attr("src","../images/down.jpg");
        $("#menu2>.hide").css("display","block");
        $("#menu2>.hide").children().css({ border:"none",backgroundColor:"#e8e3eb",borderBottom:"1px dotted #ccc"});
    });
    $("#menu2>span").bind("mouseout",function(){
        $("#menu2>span").children().eq(1).attr("src","../images/up.jpg");
        $("#menu2>.hide").css("display","none");
    });

    $("#menu2>.hide").children().bind("mouseover",function(){
        $("#menu2>.hide").css("display","block");
        $("#menu2>span").children().eq(1).attr("src","../images/down.jpg");
        $(".liHide").css("display","none");
        $(".liHide").eq($(this).index()).css({ display:"block" , zIndex:101 });
        $("#menu2>.hide").children().css({ border:"none" , backgroundColor:"#e8e3eb" });
        $(this).css({ border: "1px solid #000", borderRight: "none" , backgroundColor:"#fff" });
    });
    $("#menu2>.hide").children().bind("mouseout",function(){
        $(".liHide").eq($(this).index()).css({ display:"none" });
    });

    $("#menu2>.hide").bind("mouseout",function(){
        $(this).css("display","none");
        $("#menu2>span").children().eq(1).attr("src","../images/up.jpg");
    });

    $(".liHide").bind("mouseover",function(){
        $("#menu2>.hide").css("display","block");
        $("#menu2>span").children().eq(1).attr("src","../images/down.jpg");
        $(this).css({ zIndex:101 , display:"block"});
    });
    $(".liHide").bind("mouseout",function(){
        $("#menu2>.hide").css("display","none");
        $("#menu2>span").children().eq(1).attr("src","../images/up.jpg");
        $(this).css("display","none");
    });

    //console.log($("#big img"));
    //console.log($("#small img"));
    $("#small img").bind("mouseover",function(){
        $("#big img").css("zIndex","0");
        $("#big img").eq($(this).index()-1).css("zIndex","10");
        $("#fdjright img").eq(0).attr("src",$(this).attr("src"));
        $("#small img").css({ width:"50px", height:"50px", border:"none"});
        $(this).css({ width:"46px", height:"46px", border:"2px solid red"});
    });
    $("#big img").bind("mouseover",function(){
        $("#small img").eq($(this).index()).css({ width:"46px", height:"46px", border:"2px solid red"});
    });
    $("#big").bind("mousemove",function(e){
        e=e||event;
        var ox= e.pageX-97-50;
        var oy= e.pageY-250-50;
        if( ox<=0 ){
            ox=0;
        }else if( ox>250 ){
            ox=250;
        }
        if( oy<=0 ){
            oy=0;
        }else if( oy>250 ){
            oy=250;
        }
        $("#fdjright").css("display","block");
        $("#fdjright img").eq(0).css({ top:-3.5*oy+"px", left:-3.5*ox+"px"});
        $("#fdj").css({ display:"block", top:oy+"px", left:ox+"px"});
    });
    $("#big").bind("mouseout",function(){
        $("#fdjright").css("display","none");
        $("#fdj").css("display","none");
    });

    //消费者告知书的隐藏与显示
    $("#inform span").bind("mouseover",function(){
        $("#inform").addClass("inform");
        $("#inform").stop().animate({ height:"350px" },1000);
    });
    $("#inform span").bind("mouseout",function(){
        $("#inform").stop().animate({ height:"10px" },500);
        setTimeout(function(){
            $("#inform").removeClass("inform");
        },500);
    });

    /*
    var center=$("center");
    var h2=center.getElementsByTagName("h2")[0];
    var tds=center.getElementsByTagName("td");
    var pieces=$("pieces");
    var piecespan=pieces.getElementsByTagName("span")[0];
    var btn1=pieces.getElementsByTagName("button")[0];
    var btn2=pieces.getElementsByTagName("button")[1];
    var piece=1;
    btn1.onclick=function(){
        piece++;
        piecespan.innerHTML=piece;
    }
    btn2.onclick=function(){
        piece--;
        if(piece==0){
            piece=1;
        }
        piecespan.innerHTML=piece;
    }

    for( var i=0; i<tds.length; i++ ){
        tds[i].onclick=function(){
            for( var j=0; j<tds.length; j++ ){
                tds[j].style.border="1px solid #ccc";
            }
            this.style.border="1px solid red";
        }
    }

    var addToCart=$("addToCart");
    var price=$("price");

    var pricespan=price.getElementsByTagName("span")[0];

    var addimage=fd.getElementsByTagName("img")[5];

    var price=pricespan.innerHTML;
    var pname=h2.innerHTML;
    var imgsrc=addimage.getAttribute("src");

    //console.log(imgsrc);
    //console.log(price.innerHTML);

    //console.log(_value.innerHTML);
    addToCart.onclick=function(){
        var pieces=$("pieces");
        var piecespan=pieces.getElementsByTagName("span")[0];
        var jiage=piecespan.innerHTML;
        var _value="imgsrc:"+imgsrc+"&pname:"+pname+"&price:"+price+"&pieces:"+jiage;
        setCookie("name",_value,31);
    }*/

});