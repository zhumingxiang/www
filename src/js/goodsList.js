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

});