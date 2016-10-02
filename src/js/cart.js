/**
 * Created by Administrator on 2016/10/1.
 */
$(function(){
    //cart页面上，达令app二维码的显示与隐藏
    //console.log($("#top>ul").children().eq(3));
    $("#cartTop>ul").children().eq(5).bind("mouseover",function(){
        $("#cartTop>.erwei").css("display","block");
    });
    $("#cartTop>ul").children().eq(5).bind("mouseout",function(){
        $("#cartTop>.erwei").css("display","none");
    });

    $("#cartTop>.erwei").bind("mouseover",function(){
        $(this).css("display","block");
    });
    $("#cartTop>.erwei").bind("mouseout",function(){
        $(this).css("display","none");
    });

    //从cookie里取出商品信息，并追加到cartList里
    //Object {
    // imgSrc: "../images/good1.jpg",
    // goodsName: "[台湾 · 喝出天使容颜] Simply 纯正零添加特浓黑豆水(30g)",
    // goodsPrice: "￥39.80", goodsPieces: "1"
    // }
    if($.cookie.getAll("goods1")) {
        console.log($.cookie.getAll("goods1").imgSrc);
        var goodsDiv = "<div>" +
            "<input type='checkbox'/>" +
            "<img src=" + $.cookie.getAll("goods1").imgSrc + ">" +
            "<a href='#' class='userA'>" + $.cookie.getAll("goods1").goodsName + "</a>" +
            "<span>" + $.cookie.getAll("goods1").goodsPrice + "</span>" +
            "<table><tr><td>-</td><td class='cs2'>" + $.cookie.getAll("goods1").goodsPieces + "</td><td>+</td></tr></table>" +
            "<span class='cartSpan'>" + "￥" + ((parseFloat($.cookie.getAll("goods1").goodsPrice.substring(1))) * parseInt($.cookie.getAll("goods1").goodsPieces)).toFixed(2) + "</span>" +
            "<span class='del'>删除</span>" +
            "</div>";
        $("#cartList .top").append(goodsDiv);
        $("#cartList .top div td").bind("click", function (e) {
            e = e || event;
            //console.log($("#cartList .top div td"));
            var cartPieces;
            if ($(this).html() == "-") {
                cartPieces = $("#cartList .top div td").eq($(this).index() + 1).html();
                //console.log(cartPieces);
                cartPieces--;
                if (cartPieces < 1) {
                    cartPieces = 1;
                }
                $("#cartList .top div td").eq($(this).index() + 1).html(cartPieces);
                $("#cartList .cartSpan").html("￥" + ((parseFloat($.cookie.getAll("goods1").goodsPrice.substring(1))) * parseInt(cartPieces)).toFixed(2));
                console.log($(this).parent().parent().parent().parent().children("input"));
                if($(this).parent().parent().parent().parent().children("input")[0].checked == true){
                    $("#cartList .bottom b").html(cartPieces);
                    $("#cartList .bottom .cartP1 span").html("￥" + ((parseFloat($.cookie.getAll("goods1").goodsPrice.substring(1))) * parseInt(cartPieces)).toFixed(2));
                }
            }
            if ($(this).html() == "+") {
                cartPieces = $("#cartList .top div td").eq($(this).index() - 1).html();
                cartPieces++;
                if (cartPieces > 4) {
                    cartPieces = 4;
                }
                $("#cartList .top div td").eq($(this).index() - 1).html(cartPieces);
                $("#cartList .cartSpan").html("￥" + ((parseFloat($.cookie.getAll("goods1").goodsPrice.substring(1))) * parseInt(cartPieces)).toFixed(2));
                if($(this).parent().parent().parent().parent().children("input")[0].checked == true) {
                    $("#cartList .bottom b").html(cartPieces);
                    $("#cartList .bottom .cartP1 span").html("￥" + ((parseFloat($.cookie.getAll("goods1").goodsPrice.substring(1))) * parseInt(cartPieces)).toFixed(2));
                }
            }
        });

        //删除商品信息
        $("#cartList .top div .del").bind("click",function(){
           // $.cookie.setAll("goods1",{ },_getDate(-1));
            $.cookie.unset("goods1",'', new Date(0));
            location.reload();
        });
    }

    //商品数量与价格
    $("#cartList .top div input:checkbox").bind("click",function(){
        if( $(this)[0].checked==true ){
            $("#cartList .bottom b").html( $("#cartList .top .cs2").html() );
            $("#cartList .bottom .cartP1 span").html( $("#cartList .cartSpan").html() );
        }
        if( $(this)[0].checked==false ){
            $("#cartList .bottom b").html( 0 );
            $("#cartList .bottom .cartP1 span").html( 0 );
        }
    })

    //全选功能
    console.log($("#cartList input:checkbox"));
    $("#cartList .bottom input:checkbox").bind("click",function(){
        $("#cartList .top input:checkbox").attr({checked:"checked"});
        $("#cartList .bottom b").html( $("#cartList .top .cs2").html() );
        $("#cartList .bottom .cartP1 span").html( $("#cartList .cartSpan").html() );

    });


});
function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}