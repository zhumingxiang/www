/**
 * Created by Administrator on 2016/10/3.
 */
$(function(){
    $("#register .reg ul li").css({ borderBottom:"none",height:"35px"});
    $("#register .reg ul li:first").css({ borderBottom:"2px solid #654579",height:"33px"});
    $("#register .reg div").eq(1).css("zIndex",0);
    $("#register .reg div").eq(0).css("zIndex",10);
});