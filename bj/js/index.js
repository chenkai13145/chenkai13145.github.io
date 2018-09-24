/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
$(function () {
  // fullpage 是插件提供的方法 
  $('#updowm').fullpage({
      afterLoad:function(el,index){
          $("#updowm .section").removeClass("animate")
          setTimeout(function(){
            $("#updowm .section").eq(index-1).addClass("animate")
          },200)
       
      }
  });

$(".three .list li a").mouseenter(function(){
  $(".three .list li a").removeClass("active");
 var index=$(this).attr("data-index")
  $(this).addClass("active")
  $(this).parents(".list").next().children("li").css({"background":"url(image/list_con"+index+".png) no-repeat center"})
})
$(".lists>li").each(function(index, element) {

    $(element).children(".tile").css("background-image","url(image/s"+(index+1)+".JPG)");
$(element).children(".neirong").css("background-image","url(image/s"+(index+6)+".JPG)");
});
$(".lists>li").mouseenter(function(){//$(this).children(".neirong")表示的是当前对象的子节点（.neirong）
$(this).children(".neirong").stop().animate({width:545});//
$(this).siblings().children(".neirong").stop().animate({width:0});
});

});