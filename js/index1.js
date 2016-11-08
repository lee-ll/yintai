$(document).ready(function(){
//银泰首页
$(".yt-shouye").hover(function(){
	$(".home").css("color","#e5004f").addClass("homexin");
},function(){
	$(".home").css("color","#666").removeClass("homexin");
})
//微信
$(".yt-weixin").hover(function(){
	$(".weichat").addClass("weichatxin");
	$(".weipic").css("background-position","-225px -87px");
	$(".yincang").show();
	$(".blank").eq(0).show();
	$(".weichat a").css({"background":"#fff","width":87})
},function(){
	$(".weichat").removeClass("weichatxin");
	$(".weipic").css("background-position","-225px -57px");
	$(".yincang").hide();
	$(".blank").eq(0).hide();
	$(".weichat a").css({"background":"#eee","width":40})
})
//手机银泰
$(".yt-phone").hover(function(){
	$(".phone").addClass("phonexin");
	$(".phonepic").css("background-position","0px -20px");
	$(".yincang1").show();
	$(".blank").eq(1).show().css("width",147);
	$(".phone a").css({"background":"#fff","width":120})
},function(){
	$(".phone").removeClass("phonexin");
	$(".phonepic").css("background-position","0px 0px");
	$(".yincang1").hide();
	$(".blank").eq(1).hide();
	$(".phone a").css({"background":"#eee","width":72})
})
//我的银泰
$(".wdyt").hover(function(){
	$(".third").addClass("thirdxin");
	$(".dixia").show();
	$(".second").eq(3).css("color","#e5004f")
},function(){
	$(".third").removeClass("thirdxin");
	$(".dixia").hide();
	$(".second").eq(3).css("color","#666")
})
//轮播图
  var box=$(".lunbo");
  var yuanxing=$(".fang");
  var imgs=$(".diertu");
  var zuoniu=$(".zuobian");
  var youniu=$(".youbian");
  var vai=$(".vai");
  imgs.eq(0).css("z-index",5);
  vai.eq(0).css("z-index",3);
   $(".fang").eq(0).addClass("hot");
   var now=0;
   var t=setInterval(move,2000);
   $(".lunbo").on("mouseover",function(){
    clearInterval(t);
    $(".zuobian").show();
    $(".youbian").show();
   })
    $(".lunbo").on("mouseout",function(){
    t=setInterval(move,2000)
    $(".zuobian").hide();
    $(".youbian").hide();
   })
  $(".youbian").on("click",function(){
      move();
  })
  $(".zuobian").on("click",function(){
    move1();
  })
$(".fang").click(function(){
  var index=$(this).index();
  imgs.fadeOut().eq(index).fadeIn();
  vai.fadeOut().eq(index).fadeIn();
  yuanxing.removeClass("hot").eq(index).addClass("hot");
  now=index;
   })

function move(){
  now++;
  if(now==imgs.size()){
    now=0;
  }
  imgs.eq(0).css("z-index",0).end().fadeOut().eq(now).fadeIn();
  vai.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")

}
 function move1(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    imgs.eq(0).css("z-index",0).end().fadeOut().eq(now).fadeIn();
  vai.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")
  }
  //竖导航
  $(".dh1").eq(0).hover(function(){
  	$(".qiushangxin").show();
  	$(".dhbj").css("background-position","0px -126px");
  	$(".xs").eq(0).hide();
  },function(){
  	$(".qiushangxin").hide();
  	$(".dhbj").css("background-position","0px -108px");
  	$(".xs").eq(0).show();
  })
 $(".dh1").eq(1).hover(function(){
  	$(".qiushangxin1").show();
  	$(".dhbj1").css("background-position","-17px -128px");
  	$(".xs").eq(1).hide();
  },function(){
  	$(".qiushangxin1").hide();
  	$(".dhbj1").css("background-position","-17px -110px");
  	$(".xs").eq(1).show();
  }) 
 $(".dh1").eq(2).hover(function(){
  	$(".qiushangxin2").show();
  	$(".dhbj2").css("background-position","-34px -128px");
  	$(".xs").eq(2).hide();
  },function(){
  	$(".qiushangxin2").hide();
  	$(".dhbj2").css("background-position","-34px -110px");
  	$(".xs").eq(2).show();
  })
 $(".dh1").eq(3).hover(function(){
  	$(".qiushangxin3").show();
  	$(".dhbj3").css("background-position","-51px -129px");
  	$(".xs").eq(3).hide();
  },function(){
  	$(".qiushangxin3").hide();
  	$(".dhbj3").css("background-position","-51px -111px");
  	$(".xs").eq(3).show();
  })
 $(".dh1").eq(4).hover(function(){
  	$(".qiushangxin4").show();
  	$(".dhbj4").css("background-position","-68px -129px");
  	$(".xs").eq(4).hide();
  },function(){
  	$(".qiushangxin4").hide();
  	$(".dhbj4").css("background-position","-68px -111px");
  	$(".xs").eq(4).show();
  })
 $(".dh1").eq(5).hover(function(){
  	$(".qiushangxin5").show();
  	$(".dhbj5").css("background-position","-85px -128px");
  	$(".xs").eq(5).hide();
  },function(){
  	$(".qiushangxin5").hide();
  	$(".dhbj5").css("background-position","-85px -110px");
  	$(".xs").eq(5).show();
  })
 $(".dh1").eq(6).hover(function(){
  	$(".qiushangxin6").show();
  	$(".dhbj6").css("background-position","-102px -129px");
  	$(".xs").eq(6).hide();
  },function(){
  	$(".qiushangxin6").hide();
  	$(".dhbj6").css("background-position","-102px -111px");
  	$(".xs").eq(6).show();
  })
 $(".dh1").eq(7).hover(function(){
  	$(".qiushangxin7").show();
  	$(".dhbj7").css("background-position","-119px -129px");
  	$(".xs").eq(7).hide();
  },function(){
  	$(".qiushangxin7").hide();
  	$(".dhbj7").css("background-position","-119px -111px");
  	$(".xs7").eq(7).show()
  })
 $(".dh1").eq(0).hover(function(){
  	$(".qiushangxin").show();
  	$(".dhbj").css("background-position","0px -126px");
  	$(".xs").eq(0).hide();
  },function(){
  	$(".qiushangxin").hide();
  	$(".dhbj").css("background-position","0px -108px");
  	$(".xs").eq(0).show();
  })
 $(".dh1").eq(8).hover(function(){
  	$(".qiushangxin8").show();
  	$(".dhbj8").css("background-position","-136px -129px");
  	$(".xs").eq(8).hide();
  },function(){
  	$(".qiushangxin8").hide();
  	$(".dhbj8").css("background-position","-136px -111px");
  	$(".xs").eq(8).show();
  })
 $(".dh1").eq(9).hover(function(){
  	$(".qiushangxin9").show();
  	$(".dhbj9").css("background-position","-153px -129px");
  	$(".xs").eq(9).hide();
  },function(){
  	$(".qiushangxin9").hide();
  	$(".dhbj9").css("background-position","-153px -111px");
  	$(".xs").eq(9).show();
  })
 //超值好货
 $(".shangbq").eq(0).css("border-bottom","5px solid #e5004f");
 $(".shangbqa").eq(0).css("font-weight","bold");
 $(".sanjiao").eq(0).show();
 $(".baokuan").addClass("baobao");
 $(".baokuan1").addClass("baobao");
 $(".baokuan2").addClass("baobao");
 $(".shangbq").mouseover(function(){
 	var index=$(".shangbq").index($(this));
 	$(".baobao").hide().eq(index).show();
 	$(".shangbq").css("border-bottom","5px solid #333").eq(index).css("border-bottom","5px solid #e5004f");
 	$(".shangbqa").css("font-weight","normal").eq(index).css("font-weight","bold");
 	$(".sanjiao").hide().eq(index).show();    
 })
//热门品牌
 $(".remen").addClass("rere").eq(0).css("border-bottom","3px solid #e70050");
 $(".remen1").addClass("rere");
 $(".yifubox").addClass("yifufu");
 $(".yifubox2").addClass("yifufu");
 $(".rmpp").eq(0).css("font-weight","bold");
 $(".xsj").eq(0).show();
 $(".rere").mouseover(function(){
 	var index=$(".rere").index($(this));
 	$(".yifufu").hide().eq(index).show();
 	$(".rere").css("border-bottom","3px solid #333").eq(index).css("border-bottom","3px solid #e70050");
 	$(".rmpp").css("font-weight","normal").eq(index).css("font-weight","bold");
 	$(".xsj").hide().eq(index).show();
 })
//品牌展示 
$(".liebiao2").each(function(index,val){
	logo($('.liebiao2:eq('+index+') .liebiao33'), $('.liebiao2:eq('+index+') .anniuzuo1'), $('.liebiao2:eq('+index+') .anniuyou1'))
})  
    function logo(a,b,c){
    	var mv=parseInt($(".liebiao2:eq(0) .tudebox").width());
    	var now1=0;next1=0;flag1=true;
    	a.css("left",mv).eq(0).css("left",0);
    b.click(function(){
    	if(flag1){
    		move11();
    	}flag1=false;
    })
    c.click(function(){
    	if(flag1){
    		move12();
    	}flag1=false;
    })
    function move11(){
    	next1++;
    	if(next1==$(".liebiao2:eq(0) .liebiao33").length){
    		next1=0;
    	}
    	a.eq(next1).css("left",mv).end().eq(now1).animate({"left":-mv}).end().eq(next1).animate({"left":0},function(){
    		flag1=true;
    	})
    	now1=next1;
    }
    function move12(){
    	next1--;
    	if(next1<0){
    		next1=$(".liebiao2:eq(0) .liebiao33").length-1;
    	}
    	a.eq(next1).css("left",-mv).end().eq(now1).animate({"left":mv}).end().eq(next1).animate({"left":0},function(){
    		flag1=true;
    	})
    	now1=next1;
    }
    }
// 小轮播
// $(".shishang").each(function(index){
//  xiaolunbo($(".shishang:eq("+index+") .datu1"),$(".shishang:eq("+index+") .yuanxing"),$(".shishang:eq("+index+") .datuBox"),$(".shishang:eq("+index+") .Lbutton"),$(".shishang:eq("+index+") .Rbutton"))  
// })
//  function xiaolunbo(a,b,c,d,e){
//   a.eq(0).css("left",0);
//  	var mv2=parseInt($(".shishang:eq(0) .datuBox").width());
//     b.eq(0).addClass("active");
//     var now2=0;next2=0;flag2=true;
//     c.hover(function(){
//     	d.show();
//     	e.show();
//     },function(){
//     	d.hide();
//     	e.hide();
//     })
//     e.click(function(){
//     	if(flag2){
//       shift1();

//       }flag2=false;
//    })
//     d.click(function(){
//     	if(flag2){
//       shift2();

//       }flag2=false;
//    })
//    b.click(function(){
//   var index=$(this).index();
//       next2=index;
//       if(now2<index){
//         a.eq(index).css("left",mv2).end().eq(now2).animate({left:-mv2}).end().eq(next2).animate({left:0});
//       }else if(now2>index){
//         a.eq(index).css("left",-mv2).end().eq(now2).animate({left:mv2}).end().eq(next2).animate({left:0});
//       }else return;
//    b.eq(now2).removeClass("active");
//    b.eq(index).addClass("active");
//    now2=index;
//    })
//    function shift1(){
//    	next2++;
//   if(next2==a.size()){
//     next2=0;
//   }
//   a.eq(next2).css("left",mv2).end().eq(now2).animate({left:-mv2}).end().eq(next2).animate({left:0},function(){
//     flag2=true;
//   });
//   b.eq(now2).removeClass("active").end().eq(next2).addClass("active");
//   now2=next2;
//    }
//   function shift2(){
//       next2--;
//   if(next2<0){
//     next2=a.length-1;
//   }
//   a.eq(next2).css("left",-mv2).end().eq(now2).animate({left:mv2}).end().eq(next2).animate({left:0},function(){
//     flag2=true;
//   });
//   b.eq(now2).removeClass("active").end().eq(next2).addClass("active");
//   now2=next2;
//    }
//  }
function LBTH(obj1){
  var yuanxing1=$(".yuanxing",obj1);
  var imgs1=$(".datu1",obj1);
  var zuoniu1=$(".Lbutton",obj1);
  var youniu1=$(".Rbutton",obj1);
  var datubox=$(".datuBox",obj1);
  var MV=imgs1.eq(0).width();
   imgs1.css("left",MV).eq(0).css("left",0);
   yuanxing1.eq(0).addClass("active");
   var now2=0;next2=0;flag2=true;
   // var T2=setInterval(moveR,2000);
   datubox.on("mouseover",function(){
    // clearInterval(T2);
    zuoniu1.show();
    youniu1.show();
   })
    datubox.on("mouseout",function(){
    // T2=setInterval(moveR,2000)
    zuoniu1.hide();
    youniu1.hide();
   })
  youniu1.on("click",function(){
    if(flag2){
      moveL();
      flag2=false;
    }
  })
  zuoniu1.on("click",function(){
    if(flag2){
      moveR();
      flag2=false;
     }
  })
yuanxing1.click(function(){
  var index=$(this).index();
      if(now2<index){
        imgs1.eq(index).css("left",MV).end().eq(now2).animate({left:-MV}).end().eq(next2).animate({left:0});
      }else if(now2>index){
        imgs1.eq(index).css("left",-MV).end().eq(now2).animate({left:MV}).end().eq(next2).animate({left:0});
      }else return;
   yuanxing1.eq(now2).removeClass("active");
   yuanxing1.eq(index).addClass("active");
   now2=index;
   next2=index;
   })
function moveL(){
  next2++;
  if(next2==imgs1.size()){
    next2=0;
  }
  imgs1.eq(next2).css("left",MV).end().eq(now2).animate({left:-MV}).end().eq(next2).animate({left:0},function(){
    flag2=true;
  });
  yuanxing1.eq(now2).removeClass("active").end().eq(next2).addClass("active");
  now2=next2;
}
 function moveR(){
    next2--;
    if(next2<0){
      next2=imgs1.length-1;
    }
    imgs1.eq(next2).css("left",-MV).end().eq(now2).animate({left:MV}).end().eq(next2).animate({left:0},function(){
      flag2=true;
    })
    yuanxing1.eq(now2).removeClass("active").end().eq(next2).addClass("active");
     now2=next2;
  }
}
LBTH($(".shi").eq(1))
//侧导航
var Cheight=document.documentElement.clientHeight;
var n;
var sign=true;
$(".shishang").each(function(index){
  $(".shishang").eq(index).data("h",$(".shishang").eq(index).offset().top);
})
$(window).on("scroll",function(){
  if(sign){
   var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=$(obj).scrollTop(); 
    if(top>=$(".shishang").eq(0).data("h")-600){
      $(".shutiao").show();
      var nheight=$(".shutiao").height();
       $(".shutiao").css("top",(Cheight-nheight)/2)  
    }
    $(".shishang").each(function(index){
      if(top>=$(".shishang").eq(index).data("h")-200){
        $(".image").each(function(index1){
            $(".image").eq(index1).css("opacity",1);
        })
        $(".image").eq(index).css("opacity",0)
        n=index;
      }
    })
    if(top<$(".shishang").eq(0).data("h")-600){
      $(".shutiao").hide();
    }
  }
})
$(".tu1").each(function(index){
  $(".tu1").eq(index).click(function(){
 sign=false;
 $(document.body).animate({scrollTop:$(".shishang").eq(index).data("h")},function(){
  sign=true;
 });
 $(document.documentElement).animate({scrollTop:$(".shishang").eq(index).data("h")},function(){
  sign=true;
 })
 n=index;
})
  $(".tu1").eq(index).hover(function(){
    $(".image").eq(index).css("opacity",0)
  },function(){
    if(n==index){
      return;
    }
    $(".image").eq(index).css("opacity",1);
  })
})
jQuery.backTop($(".tu1").eq(9),300)
//边框
function waikuang(obj){
  var oh=obj.height();
  var ow=obj.width();
  obj.hover(function(){
  $(".biankuang1",obj).animate({"height":oh+2})
  $(".biankuang2",obj).animate({"width":ow+2})
  $(".biankuang3",obj).animate({"height":oh+2})
  $(".biankuang4",obj).animate({"width":ow+2})
},function(){
  $(".biankuang1",obj).animate({"height":0})
  $(".biankuang2",obj).animate({"width":0})
  $(".biankuang3",obj).animate({"height":0})
  $(".biankuang4",obj).animate({"width":0})
})
}
$(".biankuang").each(function(index){
 waikuang($(".biankuang").eq(index));
})
//购物
$(".gwd").hover(function(){
  $(".kk1").show();
},function(){
  $(".kk1").hide();
})
//按需加载
$("img").addClass("lazy");
$(".shutiao img").removeClass("lazy");
$(".hui img").removeClass("lazy");
$("img.lazy").attr("src","image/x.jpg").lazyload({
  threshold : 200
})
})



