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

    if (document.cookie == "") {
        return;
    }
    var goodsList = document.cookie.split("; ");
    for (var i = 0; i < goodsList.length; i++) {
        //{ imgSrc:_imgSrc, goodsName:_goodsName, goodsPrice:_goodsPrice,goodsPieces:_goodsPieces  }
        var id = goodsList[i].split("=")[0];
        var snoId=id.substring(0,3);
        if( snoId=="sno" ){
            var _imgSrc = $.cookie.getAll(id).imgSrc;
            var _name = $.cookie.getAll(id).goodsName;
            var _price = $.cookie.getAll(id).goodsPrice;
            var _pieces = $.cookie.getAll(id).goodsPieces;
            var goodsDiv = "<div id="+id+">" +
                "<input type='checkbox'/>" +
                "<img src=" + _imgSrc + ">" +
                "<a href='#' class='userA'>" + _name + "</a>" +
                "<span>" + _price + "</span>" +
                "<table><tr><td>-</td><td class='cs2'>" + _pieces + "</td><td>+</td></tr></table>" +
                "<span class='cartSpan'>" + "￥" + ((parseFloat(_price.substring(1))) * parseInt(_pieces)).toFixed(2) + "</span>" +
                "<span class='del'>删除</span>" +
                "</div>";
            $("#cartList .top").append(goodsDiv);
        }
    }
        refreshTotal();
        $("#cartList .top input:checkbox").bind("change", function(){
            refreshTotal();
        });

        $("#cartList .bottom input:checkbox").change(function(){
            if (this.checked) {
                $("#cartList .top input:checkbox").prop("checked", true);
            } else {
                $("#cartList .top input:checkbox").prop("checked", false);
            }
            refreshTotal();
        });

    //删除商品信息
    $("#cartList .top div .del").bind("click",function(){
       // $.cookie.setAll("goods1",{ },_getDate(-1));
        var currentId=$(this).parent().attr("id");
        $.cookie.unsetAll( currentId );
        $(this).parent().remove();
        refreshTotal();
    });
    $("#cartList .bottom .jsA").eq(0).bind("click",function(){
       var _snoIds=$("#cartList .top input:checked").parent();
        _snoIds.each(function(i,value){
            $.cookie.unsetAll( this.id );
        });
        $("#cartList .top input:checked").parent().remove();
        refreshTotal();
    });

    // + 和 - 商品数量
    $("#cartList .top div td").bind("click", function () {
            var _id =$(this).parent().parent().parent().parent().attr("id");
            console.log(_id);
            var _imgSrc = $.cookie.getAll(_id).imgSrc || 0;
            var _name = $.cookie.getAll(_id).goodsName || 0;
            var _price = $.cookie.getAll(_id).goodsPrice || 0;
            var cartPieces = $.cookie.getAll(_id).goodsPieces || 0;
        if ($(this).html() == "-") {
            cartPieces--;
            if (cartPieces < 1) {
                cartPieces = 1;
            }
            $($(this).parent()).children(".cs2").html(cartPieces);
            $($(this).parent().parent().parent().parent()).find(".cartSpan").html( "￥"+parseFloat(cartPieces*parseFloat(_price.substring(1))*100)/100 );
            $.cookie.setAll(_id,{ imgSrc:_imgSrc, goodsName:_name, goodsPrice:_price, goodsPieces:cartPieces  });
        }
        if ($(this).html() == "+") {
            cartPieces++;
            if (cartPieces > 10) {
                cartPieces = 10;
            }
            $($(this).parent()).children(".cs2").html(cartPieces);
            $($(this).parent().parent().parent().parent()).find(".cartSpan").html( "￥"+parseFloat(cartPieces*parseFloat(_price.substring(1))*100)/100 );
            $.cookie.setAll(_id,{ imgSrc:_imgSrc, goodsName:_name, goodsPrice:_price, goodsPieces:cartPieces  });
        }
        refreshTotal();
    });

});

function _getDate(num){
    var d = new Date();
    d.setDate(d.getDate() + num);
    return d;
}
function refreshTotal(){
    var checkedList = $("#cartList .top div").find("input:checked").parent();
    var totalMoney = 0;
    var totalPieces=0;
    checkedList.each(function(i, value){
        var num = $.cookie.getAll(this.id).goodsPieces || 0;
        var price = $.cookie.getAll(this.id).goodsPrice.substring(1) || 0;
        var cj=parseFloat((parseInt(num)*parseFloat(price)*100)/100);
        var pieces=parseInt(num);
        totalPieces+=pieces++;
        totalMoney += cj;
    })
    $("#cartList .bottom b").html(totalPieces);
    $("#total").html("￥"+totalMoney);
}