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
        $("#top>.erwei").css("display","none");
    });

    $("#cartTop>.erwei").bind("mouseover",function(){
        $(this).css("display","block");
    });
    $("#cartTop>.erwei").bind("mouseout",function(){
        $(this).css("display","none");
    });
});