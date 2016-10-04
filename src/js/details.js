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
        $("#inform").stop().animate({ height:"430px" },1000);
    });
    $("#inform span").bind("mouseout",function(){
        $("#inform").stop().animate({ height:"10px" },500);
        setTimeout(function(){
            $("#inform").removeClass("inform");
        },500);
    });

    //商品数量的添加与减少
    $(".pieces button").eq(1).bind("click",function(){
        var _pieces=$(".pieces span:first").html();
        _pieces++;
        if(_pieces>=3){
            _pieces=3;
        }
        $(".pieces span:first").html(_pieces);
    });
    $(".pieces button").eq(0).bind("click",function(){
        var _pieces=$(".pieces span:first").html();
        _pieces--;
        if(_pieces<=1){
            _pieces=1;
        }
        $(".pieces span:first").html(_pieces);
    });

    //写入cookies 图片路径 名称 价格 数量
    $("#addToCart a").eq(1).click(function(){
        var _imgSrc=$("#big img:first").attr("src");
        var _goodsName = $("#center h2").html();
        var _goodsPrice= $("#price span:first").html();
        console.log($(".pieces span:first").html());
        var _goodsPieces=$(".pieces span:first").html();
        $.cookie.setAll("goods1",{ imgSrc:_imgSrc, goodsName:_goodsName, goodsPrice:_goodsPrice,goodsPieces:_goodsPieces  },_getDate(21));
        //window.open("cart.html");
        alert("添加购物车成功");
    });

    //tab功能（li的移上事件）
    $("#main .detailsUl li").bind("click",function(){
        $("#main .detailsUl li").css({height:"41px", border:"none", borderBottom: "1px solid #000"});
        $(this).css({borderBottom:"none", borderTop:"3px solid blue", borderLeft: "1px solid blue",borderRight: "1px solid blue"});
        $("#main .details").css("zIndex","0");
        $("#main .details").eq($(this).index()).css("zIndex","10");
    });



});
function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}

