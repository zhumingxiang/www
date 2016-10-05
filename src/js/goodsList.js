/**
 * Created by Administrator on 2016/10/4.
 */
$(function(){
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#searchList .head form input:text" ).autocomplete({
        source: availableTags
    });

    //加入购物车
    //console.log($("#searchList .goods").html());
    $("#searchList .goods dl").bind("mouseover",function(){
        $("#searchList .goods dl div").css("display","none");
        $("#searchList .goods dl div").eq($(this).index()).css("display","block");
    });

    //侧边栏商品数量的获取与写入
    var goodsPieces=0;
    $("#searchList .goods dl div").bind("click",function(e){
        e=e||event;
        var goodsKey=$(this).attr("id");
        //console.log(goodsKey);
        var _imgSrc=$(this).parent().children("dt").children("a").children("img").attr("src");
        //console.log(_imgSrc);
        var _goodsName=$(this).parent().children("dd").children(".userA").html();
        console.log(_goodsName);
        var _goodsPrice= $(this).parent().children("dd").children("b").html();
        //console.log(_goodsPrice);
        var _goodsPieces=1;
        $.cookie.setAll(goodsKey,{ imgSrc:_imgSrc, goodsName:_goodsName, goodsPrice:_goodsPrice,goodsPieces:_goodsPieces  },_getDate(21));

        new Fire().init(e);
        goodsPieces++;
        setTimeout(function(){
            $("#sidebar2 ul li span").eq(0).html(goodsPieces);
        },2*1000);
    });
    function Fire(){
        this.target=$("<div></div>");
    }
    Fire.prototype={
        init:function(e){
            $(document.body).append(this.target);
            this.initposition(e);
        },
        initposition:function(e){
            e=e||event;
            this.target.css({ borderRadius:"50%",
                width:"30px",height:"30px",
                backgroundColor:"red",
                zIndex:"1000",
                position:"absolute",
                left: e.pageX,
                top:e.pageY
            });
            this.move(e);
        },
        move:function(e){
            var _this=this;
            this.target.animate({ top: e.pageY-180,left:document.body.offsetWidth-35 },2000,function(){
                setTimeout(function(){
                    _this.target.animate({ width:0,height:0},1000);
                    //_this.target.remove();
                },1000);
                //console.log($(this).parent().html());
            })
        }
    }

    //侧边栏的移上事件
    $("#sidebar2 ul li a").eq(0).bind("mouseover",function(){
        $(this).children("img").attr("src","../images/cartLogo2.jpg");
    });
    $("#sidebar2 ul li a").eq(0).bind("mouseout",function(){
        $(this).children("img").attr("src","../images/cartLogo.jpg");
    });
    $("#sidebar2 ul li a").eq(1).bind("mouseover",function(){
        $(this).children("img").attr("src","../images/$Logo2.jpg");
        $(this).children("img").css({ position: "relative", right:"10px" });
    });
    $("#sidebar2 ul li a").eq(1).bind("mouseout",function(){
        $(this).children("img").attr("src","../images/$Logo.jpg");
    });
    $("#sidebar2 ul li a").eq(2).bind("mouseover",function(){
        $(this).children("img").attr("src","../images/heartLogo2.jpg");
        $(this).children("img").css({ position: "relative", right:"10px" });
    });
    $("#sidebar2 ul li a").eq(2).bind("mouseout",function(){
        $(this).children("img").attr("src","../images/heartLogo.jpg");
    });


});
function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}