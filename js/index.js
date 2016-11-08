 window.onload=function(){
  // 银泰首页
 var ytShouye=$(".yt-shouye")[0] ;
 var home=$(".home")[0];
 ytShouye.onmouseover=function(){
 	home.style.color="#e5004f";
  home.className="home homexin";
 } 
 ytShouye.onmouseout=function(){
  home.style.color="#666";
  home.className="home ";
 } 
 //微信
 var ytweixin=$(".yt-weixin")[0];
 var weichat=$(".weichat")[0];
 var yincang=$(".yincang")[0];
 var blank=$(".blank")[0];
 var weichata=$("a",weichat)[0];
 var weipic=$(".weipic")[0];
 ytweixin.onmouseover=function(){
  weichat.className="weichat weichatxin";
  weipic.style.backgroundPosition="-225px -87px";
  yincang.style.display="block";
  blank.style.display="block";
  weichata.style.background="#fff";
  weichata.style.width="87px";
 
 }
 ytweixin.onmouseout=function(){
  weichat.className="weichat";
  yincang.style.display="none";
  blank.style.display="none";
  weichata.style.background="#eee";
  weichata.style.width="40px";
  weipic.style.backgroundPosition="-225px -57px";
 }
// 手机银泰
  var ytphone=$(".yt-phone")[0];
  var phone=$(".phone")[0];
  var yincang1=$(".yincang1")[0];
  var blank1=$(".blank")[1];
  var phonea=$("a",phone)[0];
  var phonepic=$(".phonepic")[0];
  ytphone.onmouseover=function(){
  phone.className="phone phonexin";
  phonepic.style.backgroundPosition="0px -20px";
  yincang1.style.display="block";
  blank1.style.display="block";
  blank1.style.width="147px";
  phonea.style.background="#fff";
  phonea.style.width="120px";
 
 }
 ytphone.onmouseout=function(){
  phone.className="phone";
  yincang1.style.display="none";
  blank1.style.display="none";
  phonea.style.background="#eee";
  phonea.style.width="72px";
 phonepic.style.backgroundPosition="0px 0px";
 }
 //我的银泰
 var wdyt=$(".wdyt") ;
 var dixia=$(".dixia");
 var third=$(".third")[0];
 var second=$(".second")[3];
  wdyt[0].onmouseover=function(){
  third.className="third thirdxin";
  dixia[0].style.display="block";
  second.style.color="#e5004f";
 } 
  wdyt[0].onmouseout=function(){
  dixia[0].style.display="none";
  third.className="third";
  second.style.color="#666";
 } 
// 轮播图
  var box=$(".lunbo");
  var yuanxing=$(".fang");
  var imgs=$(".diertu");
  var vai=$(".vai");
  var zuoniu=$(".zuobian");
  var youniu=$(".youbian");
   imgs[0].style.zIndex=5;
   vai[0].style.zIndex=3;
   yuanxing[0].className="fang hot";
    var now=0;
    var t=setInterval(move,4000)
    box[0].onmouseover=function(){
     clearInterval(t);
     zuoniu[0].style.display="block";
     youniu[0].style.display="block";
    }
    box[0].onmouseout=function(){
     t=setInterval(move,4000);
     zuoniu[0].style.display="none";
     youniu[0].style.display="none";
    }
    youniu[0].onclick=function(){
     move();
   }      
    zuoniu[0].onclick=function(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    for(var i=0;i<imgs.length;i++){
      animate(imgs[i],{opacity:0});
      animate(vai[i],{opacity:0});
      yuanxing[i].className="fang";
    }
    animate(imgs[now],{opacity:1});
    animate(vai[now],{opacity:1});
    yuanxing[now].className="fang hot";
   }  

    for(var i=0;i<yuanxing.length;i++){
        yuanxing[i].index=i;
        yuanxing[i].onclick=function(){
      for(var i=0;i<imgs.length;i++){
        animate(imgs[i],{opacity:0});
        animate(vai[i],{opacity:0});
        yuanxing[i].className="fang";
        }
      animate(imgs[this.index],{opacity:1});
      animate(vai[this.index],{opacity:1});
      yuanxing[this.index].className="fang hot";
      now=this.index
   }
        
  }
    function move(){
     now++;
     if(now==imgs.length){
      now=0;
    }
    for(var i=0;i<imgs.length;i++){
       imgs[0].style.zIndex=0;
      animate(imgs[i],{opacity:0});
      animate(vai[i],{opacity:0});
      yuanxing[i].className="fang";
    }
    animate(imgs[now],{opacity:1});
    animate(vai[now],{opacity:1});
    yuanxing[now].className="fang hot";
   } 
 // 竖导航
  var dh1=$(".dh1");
  var qiushangxin=$(".qiushangxin");
  var qiushangxin1=$(".qiushangxin1");
  var qiushangxin2=$(".qiushangxin2");
  var qiushangxin3=$(".qiushangxin3");
  var qiushangxin4=$(".qiushangxin4");
  var qiushangxin5=$(".qiushangxin5");
  var qiushangxin6=$(".qiushangxin6");
  var qiushangxin7=$(".qiushangxin7");
  var qiushangxin8=$(".qiushangxin8");
  var qiushangxin9=$(".qiushangxin9");
  var dhbj=$(".dhbj");
  var dhbj1=$(".dhbj1");
  var dhbj2=$(".dhbj2");
  var dhbj3=$(".dhbj3");
  var dhbj4=$(".dhbj4");
  var dhbj5=$(".dhbj5");
  var dhbj6=$(".dhbj6");
  var dhbj7=$(".dhbj7");
  var dhbj8=$(".dhbj8");
  var dhbj9=$(".dhbj9");
  var xs=$(".xs");
    dh1[0].onmouseover=function(){
      qiushangxin[0].style.display="block";
      dhbj[0].style.backgroundPosition="0px -126px";
      xs[0].style.display="none";
    }
    dh1[0].onmouseout=function(){
      qiushangxin[0].style.display="none";
      xs[0].style.display="block";
      dhbj[0].style.backgroundPosition="0px -108px";
    }
    dh1[1].onmouseover=function(){
      qiushangxin1[0].style.display="block";
      xs[1].style.display="none";
      dhbj1[0].style.backgroundPosition="-17px -128px";
    }
    dh1[1].onmouseout=function(){
      qiushangxin1[0].style.display="none";
      xs[1].style.display="block";
      dhbj1[0].style.backgroundPosition="-17px -110px";
    }
    dh1[2].onmouseover=function(){
      qiushangxin2[0].style.display="block";
      xs[2].style.display="none";
      dhbj2[0].style.backgroundPosition="-34px -128px";
    }
    dh1[2].onmouseout=function(){
      qiushangxin2[0].style.display="none";
       xs[2].style.display="block";
      dhbj2[0].style.backgroundPosition="-34px -110px";
    }
     dh1[3].onmouseover=function(){
      qiushangxin3[0].style.display="block";
      xs[3].style.display="none";
      dhbj3[0].style.backgroundPosition="-51px -129px";
    }
    dh1[3].onmouseout=function(){
      qiushangxin3[0].style.display="none";
      xs[3].style.display="block";
      dhbj3[0].style.backgroundPosition="-51px -111px";
    }
     dh1[4].onmouseover=function(){
      qiushangxin4[0].style.display="block";
      xs[4].style.display="none";
      dhbj4[0].style.backgroundPosition="-68px -129px";
    }
    dh1[4].onmouseout=function(){
      qiushangxin4[0].style.display="none";
      xs[4].style.display="block";
      dhbj4[0].style.backgroundPosition="-68px -111px";
    }
     dh1[5].onmouseover=function(){
      qiushangxin5[0].style.display="block";
      xs[5].style.display="none";
      dhbj5[0].style.backgroundPosition="-85px -128px";
    }
    dh1[5].onmouseout=function(){
      qiushangxin5[0].style.display="none";
       xs[5].style.display="block";
      dhbj5[0].style.backgroundPosition="-85px -110px";
    }
     dh1[6].onmouseover=function(){
      qiushangxin6[0].style.display="block";
       xs[6].style.display="none";
      dhbj6[0].style.backgroundPosition="-102px -129px";
    }
    dh1[6].onmouseout=function(){
      qiushangxin6[0].style.display="none";
      xs[6].style.display="block";
      dhbj6[0].style.backgroundPosition="-102px -111px";
    }
     dh1[7].onmouseover=function(){
      qiushangxin7[0].style.display="block";
      xs[7].style.display="none";
      dhbj7[0].style.backgroundPosition="-119px -129px";
    }
    dh1[7].onmouseout=function(){
      qiushangxin7[0].style.display="none";
      xs[7].style.display="block";
      dhbj7[0].style.backgroundPosition="-119px -111px";
    }
     dh1[8].onmouseover=function(){
      qiushangxin8[0].style.display="block";
       xs[8].style.display="none";
      dhbj8[0].style.backgroundPosition="-136px -129px";
    }
    dh1[8].onmouseout=function(){
      qiushangxin8[0].style.display="none";
      xs[8].style.display="block";
      dhbj8[0].style.backgroundPosition="-136px -111px";
    }
     dh1[9].onmouseover=function(){
      qiushangxin9[0].style.display="block";
      xs[9].style.display="none";
      dhbj9[0].style.backgroundPosition="-153px -129px";
    }
    dh1[9].onmouseout=function(){
      qiushangxin9[0].style.display="none";
      xs[9].style.display="block";
      dhbj9[0].style.backgroundPosition="-153px -111px";
    }
    // 超值好货
     var shangbq=$(".shangbq");
     var baokuan=$(".baokuan");
     var baokuan1=$(".baokuan1");
     var baokuan2=$(".baokuan2");
     var shangbqa=$(".shangbqa");
     var sanjiao=$(".sanjiao");
      shangbq[0].style.borderBottom="5px solid #e5004f" ;
      shangbqa[0].style.fontWeight="bold";
      sanjiao[0].style.display="block";
      shangbq[0].onmouseover=function(){
      baokuan[0].style.display="block";
      baokuan1[0].style.display="none";
      baokuan2[0].style.display="none";
      shangbq[0].style.borderBottom="5px solid #e5004f" ;
      shangbq[1].style.borderBottom="5px solid #333" ;
      shangbq[2].style.borderBottom="5px solid #333" ;
      shangbqa[0].style.fontWeight="bold";
      shangbqa[1].style.fontWeight="normal";
      shangbqa[2].style.fontWeight="normal";
      sanjiao[0].style.display="block";
      sanjiao[1].style.display="none";
      sanjiao[2].style.display="none";
     }
      shangbq[1].onmouseover=function(){
      baokuan1[0].style.display="block";
      baokuan[0].style.display="none";
      baokuan2[0].style.display="none";
      shangbq[1].style.borderBottom="5px solid #e5004f" ;
      shangbq[0].style.borderBottom="5px solid #333" ;
      shangbq[2].style.borderBottom="5px solid #333" ;
      shangbqa[1].style.fontWeight="bold";
      shangbqa[0].style.fontWeight="normal";
      shangbqa[2].style.fontWeight="normal";
      sanjiao[1].style.display="block";
      sanjiao[0].style.display="none";
      sanjiao[2].style.display="none";
 }
      shangbq[2].onmouseover=function(){
      baokuan2[0].style.display="block";
      baokuan[0].style.display="none";
      baokuan1[0].style.display="none";
      shangbq[2].style.borderBottom="5px solid #e5004f" ;
      shangbq[0].style.borderBottom="5px solid #333" ;
      shangbq[1].style.borderBottom="5px solid #333" ;
      shangbqa[2].style.fontWeight="bold";
      shangbqa[1].style.fontWeight="normal";
      shangbqa[0].style.fontWeight="normal";
      sanjiao[2].style.display="block";
      sanjiao[0].style.display="none";
      sanjiao[1].style.display="none";
 }
 // 热门品牌
     var remen=$(".remen");
     var remen1=$(".remen1");
     var yifubox=$(".yifubox");
     var yifubox2=$(".yifubox2");
     var rmpp=$(".rmpp");
     var xsj=$(".xsj");
      remen[0].style.borderBottom="3px solid #e70050";
      rmpp[0].style.fontWeight="bold";
      xsj[0].style.display="block";
      remen[0].onmouseover=function(){
      yifubox[0].style.display="block";
      yifubox2[0].style.display="none";
      remen[0].style.borderBottom="3px solid #e70050";
      remen1[0].style.borderBottom="3px solid #333";
      rmpp[0].style.fontWeight="bold";
      rmpp[1].style.fontWeight="normal";
      xsj[0].style.display="block";
      xsj[1].style.display="none";
     }
      remen1[0].onmouseover=function(){
      yifubox2[0].style.display="block";
      yifubox[0].style.display="none";
      remen1[0].style.borderBottom="3px solid #e70050";
      remen[0].style.borderBottom="3px solid #333";
      rmpp[1].style.fontWeight="bold";
      rmpp[0].style.fontWeight="normal";
      xsj[1].style.display="block";
      xsj[0].style.display="none";
     }
// 品牌展示
var liebiao2=$(".liebiao2");
for(var i=0;i<liebiao2.length;i++){
  logo(liebiao2[i]);
}
function logo(obj){
  var box1=$(".tudebox",obj);
  var imgs1=$(".liebiao33",obj);
  var zuoniu1=$(".anniuzuo1",obj);
  var youniu1=$(".anniuyou1",obj);
  var mv=parseInt(getStyle(box1[0],"width"));
  for(var i=0;i<imgs1.length;i++){
    if(i==0){
      continue;
    }else{
      imgs1[i].style.left=mv+"px";
    }
    // yuanxing[0].className="yuanxing hot";
  }
  // now 记录当前窗口的图片 next 记录下一张图片
   var now1=0;next1=0;flag1=true;
   // var t1=setInterval(move11,2000);
   // box1[0].onmouseover=function(){
   //    clearInterval(t);
   //    zuoniu[0].style.display="block";
   //    youniu[0].style.display="block";
   //  }
   //  box1[0].onmouseout=function(){
   //    t=setInterval(move,2000);
   //    zuoniu[0].style.display="none";
   //    youniu[0].style.display="none";
   //  }
    youniu1[0].onclick=function(){
      if(flag1){
      move11();

      }flag1=false;
   }      
    zuoniu1[0].onclick=function(){
      if(flag1){
     move12();
     }
     flag1=false;
  } 
  function move11(){
    next1++;
    if(next1==imgs1.length){
      next1=0;
    }
    imgs1[next1].style.left=mv+"px";
    // yuanxing[now].className="yuanxing";
    // yuanxing[next].className="yuanxing hot";
    animate(imgs1[now1],{left:-mv}
    );
    animate(imgs1[next1],{left:0},function(){
       flag1=true;
    });
    now1=next1;
  }
 function move12(){
    next1--;
    if(next1<0){
      next1=imgs1.length-1;
    }
    imgs1[next1].style.left=-mv+"px";
    // yuanxing[now].className="yuanxing";
    // yuanxing[next].className="yuanxing hot";
    animate(imgs1[now1],{left:mv});
    animate(imgs1[next1],{left:0},function(){
      flag1=true;
    });
    now1=next1;
  }
  }
// 小轮播

var DwBox=$(".shi");
var arr=[];
for(var i=0;i<DwBox.length;i++){
  arr[i]=i;
}
  function LBTH(obj,num){
  var DwImg=$(".datu1",obj[num]);
  var lunbotuFLi=$(".yuanxing",obj[num]);
  var floorBtnL=$(".Lbutton",obj[num])[0];
  var floorBtnR=$(".Rbutton",obj[num])[0];
  var datubox=$(".datuBox",obj[num])[0];
  var NOW2=0;
  var NEXT2=0;
  lunbotuFLi[0].classList.add("active");
  var fw=parseInt(getStyle(DwImg[0],"width"));
  var flag2=true; 
  for(var i=0;i<DwImg.length;i++){
    if(i==0){
      continue;
    }else{
    DwImg[i].style.left=fw+"px";
    }
  }
  function moveF(){
    NEXT2++;
    if(NEXT2==DwImg.length){
      NEXT2=0;
    }
    DwImg[NEXT2].style.left=fw+"px";
    animate(DwImg[NOW2],{left:-fw});
    animate(DwImg[NEXT2],{left:0},function(){
      flag2=true;
    });
    lunbotuFLi[NOW2].classList.remove("active");
    lunbotuFLi[NEXT2].classList.add("active");
    NOW2=NEXT2;
}
  function moveFL(){
    NEXT2--;
    if(NEXT2<0){
      NEXT2=DwImg.length-1;
    }
    DwImg[NEXT2].style.left=-fw+"px";
    animate(DwImg[NOW2],{left:fw});
    animate(DwImg[NEXT2],{left:0},function(){
      flag2=true;
    });
    lunbotuFLi[NOW2].classList.remove("active");
    lunbotuFLi[NEXT2].classList.add("active");
    NOW2=NEXT2;
}
  datubox.onmouseover=function(){
    animate(floorBtnL,{left:0},100);
    animate(floorBtnR,{right:0},100);
}
  datubox.onmouseout=function(){
    animate(floorBtnL,{left:-50},100);
    animate(floorBtnR,{right:-50},100);
}
/*
  点击轮波图按钮事件
*/
  for(var i=0;i<lunbotuFLi.length;i++){
    lunbotuFLi[i].index=i;
    lunbotuFLi[i].onmouseover=function(){
      if((parseInt(getStyle(DwImg[NEXT2],"left")))==0){
        if(NOW2>this.index){
          DwImg[this.index].style.left=fw+"px";
          animate(DwImg[NOW2],{left:-fw});
          animate(DwImg[this.index],{left:0});
        }else if(NOW2<this.index){
          DwImg[this.index].style.left=-fw+"px";
          animate(DwImg[NOW2],{left:fw});
          animate(DwImg[this.index],{left:0});
        }else{
          return;
      }
        lunbotuFLi[this.index].classList.add("active");
        lunbotuFLi[NOW2].classList.remove("active");
        NOW2=this.index;
        NEXT2=NOW2;
      }
    }
  }
/*左右两边按钮*/
  floorBtnL.onclick=function(){
    if(flag2){
      moveFL();
      flag2=false;
    }
  }
  floorBtnR.onclick=function(){
    if(flag2){
      moveF();
      flag2=false;
    }
  }
}
LBTH(DwBox,arr[0]);
LBTH(DwBox,arr[1]);
LBTH(DwBox,arr[2]);
LBTH(DwBox,arr[3]);
LBTH(DwBox,arr[4]);
LBTH(DwBox,arr[5]);
// 侧导航
  var floor=$(".shishang");
  var navlis=$(".tu1");
  var cetu=$(".image");
  var Cheight=document.documentElement.clientHeight;
  var floornav=$(".shutiao")[0];
  var n;
  var sign=true;
  for(var i=0;i<floor.length;i++){
    floor[i].h=floor[i].offsetTop;
  }
  window.onscroll=function(){
    if(sign){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if(top>=floor[0].h-600){
      floornav.style.display="block";
      var nheight=floornav.offsetHeight;
      floornav.style.top=(Cheight-nheight)/2+"px";
    }
    for(var i=0;i<floor.length;i++){
        if(top>=floor[i].h-200){
         for(var j=0;j<cetu.length;j++){
          cetu[j].style.opacity=1;
        }
      cetu[i].style.opacity=0;
      n=i;
     }
    }
    if(top<floor[0].h-600){
       floornav.style.display="none";
    }
   }
  }

  for(var i=0;i<navlis.length;i++){
    navlis[i].index=i;
    navlis[i].onclick=function(){
      sign=false;
      animate(document.body,{scrollTop:floor[this.index].h},function(){
        sign=true;
      })
      animate(document.documentElement,{scrollTop:floor[this.index].h},function(){
        sign=true;
      })
      n=this.index;
    }
    navlis[i].onmouseover=function(){
      cetu[this.index].style.opacity=0;
    }
    navlis[i].onmouseout=function(){
      if(n==this.index){
        return;
      }
      cetu[this.index].style.opacity=1;
    }
  }
   
    navlis[9].onclick=function(){
    animate(document.body,{scrollTop:0},300)
    animate(document.documentElement,{scrollTop:0},300)
  }
  //边框
  var arr=[];
  var biankuang=$(".biankuang");
  for(var i=0;i<biankuang.length;i++){
    arr[i]=i;
  }
 
  function waikuang(obj,num){
  var oh=parseInt(getStyle(obj[num],"height"));
  var ow=parseInt(getStyle(obj[num],"width"));
  var biankuang1=$(".biankuang1",obj[num])[0];
  var biankuang2=$(".biankuang2",obj[num])[0];
  var biankuang3=$(".biankuang3",obj[num])[0];
  var biankuang4=$('.biankuang4',obj[num])[0];
  obj[num].onmouseover=function(){
    animate(biankuang1,{height:oh+2});
    animate(biankuang2,{width:ow+2});
    animate(biankuang3,{height:oh+2});
    animate(biankuang4,{width:ow+2});
  }
  obj[num].onmouseout=function(){
    animate(biankuang1,{height:0});
    animate(biankuang2,{width:0});
    animate(biankuang3,{height:0});
    animate(biankuang4,{width:0});
  }
 }
 for(var i=0;i<biankuang.length;i++){
  waikuang(biankuang,arr[i]);
 }
 //购物
 var gwd=$(".gwd");
    var kk=$(".kk1");
    gwd[0].onmouseover=function(){
      kk[0].style.display="block";
    }
    gwd[0].onmouseout=function(){
      kk[0].style.display="none";
    }
 }

    

    

