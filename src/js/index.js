/**
 * Created by Administrator on 2016/9/28.
 */
$(function(){
    //弹窗功能
    $(function(){
        new Cpm().init();
    });
    function Cpm(){
        this.target=$("<div></div>");
    }
    Cpm.prototype={
        init:function(){
            $(document.body).append(this.target);
            this.initposition();
        },
        initposition:function(){
            this.target.html("亲爱的！<br/><br/>达令网（亲爱的网）<br/><br/>你的爱！<br/><br/>（9秒后广告自动消失）<br/><br/>或者(单击去广告)");
            this.target.css({ borderRadius:"5px",
                width:"150px",height:"200px",
                backgroundColor:"yellow",
                zIndex:"1001",
                padding:"50px",
                position:"fixed",
                left:"1070px",
                opacity:0,
                cursor: "pointer",
                top:"50px"
            });
            this.move();
        },
        move:function(){
            var _this=this;
            this.target.animate({ opacity:1 },2000,function(){
                setTimeout(function(){
                    _this.target.remove();
                },9*1000);
                $(_this.target).bind("click",function(){
                    _this.target.remove();
                });
            })
        }
    }

    //动态获取注册用户名
    //console.log( $("#top ul li:first").children("a").html() );
    //console.log( $.cookie.getAll("user1").user1Photo );
   //$("#top ul li:first").children("a").html( $.cookie.getAll("user1") );

    //搜索框功能
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
    $( "#search form input:text" ).autocomplete({
        source: availableTags
    });

    //达令app二维码的显示与隐藏
    //console.log($("#top>ul").children().eq(3));
    $("#top>ul").children().eq(3).bind("mouseover",function(){
        $("#top>.erwei").css("display","block");
    });
    $("#top>ul").children().eq(3).bind("mouseout",function(){
        $("#top>.erwei").css("display","none");
    });

    $("#top>.erwei").bind("mouseover",function(){
        $(this).css("display","block");
    });
    $("#top>.erwei").bind("mouseout",function(){
        $(this).css("display","none");
    });

    //菜单栏（侧边栏)的隐藏与显示
    //console.log($("#menu>span"));
    $("#menu>span").bind("mouseover",function(){
        $("#menu>span").children().eq(1).attr("src","images/down.jpg");
        $("#menu>.hide").css("display","block");
        $("#menu>.hide").children().css({ border:"none",backgroundColor:"#e8e3eb",borderBottom:"1px dotted #ccc"});
    });
    $("#menu>span").bind("mouseout",function(){
        $("#menu>span").children().eq(1).attr("src","images/up.jpg");
        $("#menu>.hide").css("display","none");
    });

    $("#menu>.hide").children().bind("mouseover",function(){
        $("#menu>.hide").css("display","block");
        $("#menu>span").children().eq(1).attr("src","images/down.jpg");
        $(".liHide").css("display","none");
        $(".liHide").eq($(this).index()).css({ display:"block" , zIndex:101 });
        $("#menu>.hide").children().css({ border:"none" , backgroundColor:"#e8e3eb" });
        $(this).css({ border: "1px solid #000", borderRight: "none" , backgroundColor:"#fff" });
    });
    $("#menu>.hide").children().bind("mouseout",function(){
        $(".liHide").eq($(this).index()).css({ display:"none" });
    });

    $("#menu>.hide").bind("mouseout",function(){
        $(this).css("display","none");
        $("#menu>span").children().eq(1).attr("src","images/up.jpg");
    });

    $(".liHide").bind("mouseover",function(){
        $("#menu>.hide").css("display","block");
        $("#menu>span").children().eq(1).attr("src","images/down.jpg");
        $(this).css({ zIndex:101 , display:"block"});
    });
    $(".liHide").bind("mouseout",function(){
        $("#menu>.hide").css("display","none");
        $("#menu>span").children().eq(1).attr("src","images/up.jpg");
        $(this).css("display","none");
    });

    //轮模图滚动
    var currentIndex=0;
    var timer=setInterval(show,3*1000);
    $("#codeN>a").bind("click",function(){
        clearInterval(timer);
        $("#banner img").css("zIndex",0);
        $("#banner img").eq($(this).index()).css({zIndex:11,backgroundColor:"#000"});
        $("#codeN a").css("backgroundColor","#ccc");
        $("#codeN a").eq($(this).index()).css("backgroundColor","#000");
        currentIndex=$(this).index();
        timer=setInterval(show,3*1000);
    });
    function show(){
        if(currentIndex==5){
            currentIndex=-1;
        }
        currentIndex++;
        $("#banner img").css("zIndex",0);
        $("#banner img").eq(currentIndex).css("zIndex",11);
        $("#codeN a").css("backgroundColor","#ccc");
        $("#codeN a").eq(currentIndex).css("backgroundColor","#000");
    }

    //购物车logo显示与隐藏
    $(".row1").bind("mouseover",function(){
        $("#find table .divCart1").eq($(this).index()).css("display","block");
    })
    $(".row1").bind("mouseout",function(){
        $("#find table .divCart1").css("display","none");
    })

    $(".row2").bind("mouseover",function(){
        $("#find table .divCart2").eq($(this).index()).css("display","block");
    })
    $(".row2").bind("mouseout",function(){
        $("#find table .divCart2").css("display","none");
    })

    //tab功能实现
    $("#good div span").bind("click",function(){
        $("#good div span").removeClass("tab");
        $(this).toggleClass("tab");
        $("#good table").css("display","none");
        $("#good table").eq($(this).index()).css("display","block");
    });

    //jquery UI折叠面板功能的实现
    $( ".accordion" ).accordion({
        event: "click hoverintent"
    });

    //侧边栏商品数量的获取与写入
        var _goodsPieces=0;
        $(" #find .divCart1 ").bind("click",function(e){
            e=e||event;
            new Fire().init(e);

            var _imgSrc="../images/new2.jpg";
            var _goodsName = "[台湾 · 喝出天使容颜] Simply 纯正零添加特浓黑豆水(30g)";
            var _goodsPrice= "￥39.80";
            _goodsPieces++;
            //$.cookie.setAll("goods1",{ imgSrc:_imgSrc, goodsName:_goodsName, goodsPrice:_goodsPrice,goodsPieces:_goodsPieces  },_getDate(21));
            setTimeout(function(){
                //$("#sidebar ul li span").eq(0).html($.cookie.getAll("goods1").goodsPieces);
                $("#sidebar ul li span").eq(0).html(_goodsPieces);
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
                        _this.target.remove();
                    },1000);
                    //console.log($(this).parent().html());
                })
            }
        }

    //侧边栏的移上事件
    $("#sidebar ul li a").eq(0).bind("mouseover",function(){
        $(this).children("img").attr("src","images/cartLogo2.jpg");
    });
    $("#sidebar ul li a").eq(0).bind("mouseout",function(){
        $(this).children("img").attr("src","images/cartLogo.jpg");
    });
    $("#sidebar ul li a").eq(1).bind("mouseover",function(){
        $(this).children("img").attr("src","images/$Logo2.jpg");
        $(this).children("img").css({ position: "relative", right:"10px" });
    });
    $("#sidebar ul li a").eq(1).bind("mouseout",function(){
        $(this).children("img").attr("src","images/$Logo.jpg");
    });
    $("#sidebar ul li a").eq(2).bind("mouseover",function(){
        $(this).children("img").attr("src","images/heartLogo2.jpg");
        $(this).children("img").css({ position: "relative", right:"10px" });
    });
    $("#sidebar ul li a").eq(2).bind("mouseout",function(){
        $(this).children("img").attr("src","images/heartLogo.jpg");
    });

});

function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}

$.event.special.hoverintent = {
    setup: function() {
        $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    teardown: function() {
        $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    handler: function( event ) {
        var currentX, currentY, timeout,
            args = arguments,
            target = $( event.target ),
            previousX = event.pageX,
            previousY = event.pageY;

        function track( event ) {
            currentX = event.pageX;
            currentY = event.pageY;
        };

        function clear() {
            target
                .unbind( "mousemove", track )
                .unbind( "mouseout", clear );
            clearTimeout( timeout );
        }

        function handler() {
            var prop,
                orig = event;

            if ( ( Math.abs( previousX - currentX ) +
                Math.abs( previousY - currentY ) ) < 7 ) {
                clear();

                event = $.Event( "hoverintent" );
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
                // 防止访问原始事件，因为新事件会被异步触发，旧事件不再可用 (#6028)
                delete event.originalEvent;

                target.trigger( event );
            } else {
                previousX = currentX;
                previousY = currentY;
                timeout = setTimeout( handler, 100 );
            }
        }

        timeout = setTimeout( handler, 100 );
        target.bind({
            mousemove: track,
            mouseout: clear
        });
    }
};
