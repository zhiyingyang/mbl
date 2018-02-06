$(".admin").hover(function(){
	$(".admin").css("background","#1ABC9C")
    $(".adminLeft").animate({left:"10%"},1000);
},function(){
	$(".admin").css("background","none")
    $(".adminLeft").animate({left:"-100%"},10)
});
$(".message").hover(function(){
	$(".message").css("background","#1ABC9C")
    $(".messageLeft").animate({left:"10%"},1000);
},function(){
	$(".message").css("background","none")
    $(".messageLeft").animate({left:"-100%"},10)
});
$(".leftNavTwo .leftNavTwoList").eq(0).show().siblings(".leftNavTwo .leftNavTwoList").hide();
var index_;
$(".leftNavOne li").click(function(){
	index_ = $(this).index();
	$(this).addClass("current").siblings(".leftNavOne li").removeClass("current");
	$(".leftNavTwo .leftNavTwoList").eq(index_).show().siblings(".leftNavTwo .leftNavTwoList").hide();
	$(".leftNavTwoList li").removeClass("currentli");
});

$(".leftNavTwoList li").click(function(){
	index_ = $(this).index();
	$(this).addClass("currentli").siblings(".leftNavTwoList li").removeClass("currentli");
});
//$('.xtsy').click(function(){
//	document.getElementById("myframe").src="index/HomePage.html";
//})
//$('.zhszindex').click(function(){
//	document.getElementById("myframe").src="index/AccountSet.html";
//})
//$('.xxlb').click(function(){
//	document.getElementById("myframe").src="informationManage/InformationList.html";
//})
//$('.xxfb').click(function(){
//	document.getElementById("myframe").src="informationManage/bannerSetup.html";
//})
//$('.cgx').click(function(){
//	document.getElementById("myframe").src="informationManage/drafts.html";
//})
//$('.spxx').click(function(){
//	document.getElementById("myframe").src="ShopManage/ShopInformation.html";
//})
//$('.gggl').click(function(){
//	document.getElementById("myframe").src="ShopManage/AdvertisingManage.html";
//})
//$('.srtx').click(function(){
//	document.getElementById("myframe").src="ShopManage/IncomePresentation.html";
//})
//$('.splb').click(function(){
//	document.getElementById("myframe").src="shangpin/shopProductList.html";
//});
//$('.addsp').click(function(){
//	document.getElementById("myframe").src="shangpin/addShangPin.html";
//})
//$('.spcgx').click(function(){
//	document.getElementById("myframe").src="shangpin/shoppingcgx.html";
//})
//$('.sppj').click(function(){
//	document.getElementById("myframe").src="shangpin/shoppingpinjia.html";
//})
//$('.pplb').click(function(){
//	document.getElementById("myframe").src="shangpin/shoppingpinpai.html";
//})
//$('.addpp').click(function(){
//	document.getElementById("myframe").src="shangpin/addBrand.html";
//})
//
//$('.ddlb').click(function(){
//	document.getElementById("myframe").src="order/orderList.html";
//})
//$('.qrsh').click(function(){
//	document.getElementById("myframe").src="order/ConfirmationReceipt.html";
//})
//$('.dhtx').click(function(){
//	document.getElementById("myframe").src="order/ArrivalReminding.html";
//})
//$('.ddsz').click(function(){
//	document.getElementById("myframe").src="order/orderSz.html";
//})
//$('.thsqcl').click(function(){
//	document.getElementById("myframe").src="order/ApplicationProcess.html";
//})
//$('.tksqcl').click(function(){
//	document.getElementById("myframe").src="order/RefundApplication.html";
//})
//$('.tkyy').click(function(){
//	document.getElementById("myframe").src="order/ReasonsRefunds.html";
//})
//$('.kdmbd').click(function(){
//	document.getElementById("myframe").src="order/ExpressSheet.html";
//})
//$('.zdydyx').click(function(){
//	document.getElementById("myframe").src="order/CustomprintItem.html";
//})
//$('.fhdxxgl').click(function(){
//	document.getElementById("myframe").src="order/DeliveryInformation.html";
//})
//$('.zplb').click(function(){
//	document.getElementById("myframe").src="recruit/Recruitmentlist.html";
//})
//$('.zpfb').click(function(){
//	document.getElementById("myframe").src="recruit/DeliveryInformation.html";
//})
//$('.jllb').click(function(){
//	document.getElementById("myframe").src="recruit/Resumelist.html";
//})
//$('.hdlb').click(function(){
//	document.getElementById("myframe").src="Promotion/ActivityList.html";
//})
//$('.lbtsz').click(function(){
//	document.getElementById("myframe").src="Promotion/CarouselFigure.html";
//})
//$('.yhqlb').click(function(){
//	document.getElementById("myframe").src="Promotion/couponsList.html";
//})
//$('.yhqfs').click(function(){
//	document.getElementById("myframe").src="Promotion/CouponSend.html";
//})
//$('.jysz').click(function(){
//	document.getElementById("myframe").src="setup/TransactionSet.html";
//})
//$('.yfmb').click(function(){
//	document.getElementById("myframe").src="setup/FreightFormwork.html";
//})
//$('.wlgs').click(function(){
//	document.getElementById("myframe").src="setup/LogisticsCompany.html";
//})
//$('.zhsz').click(function(){
//	document.getElementById("myframe").src="setup/PaymentSet.html";
//})
//$('.bannersz').click(function(){
//	document.getElementById("myframe").src="setup/bannerSetup.html";
//})
//$('.jflb').click(function(){
//	document.getElementById("myframe").src="dispute/disputeList.html";
//})
// $('#myframe').on('load',function(event){  
//    $('#myframe').contents().find('.spbj').on('click',function(){  
//      document.getElementById("myframe").src="shangpin/addShangPin.html";
//    });  
//  });      
$(".user").focus(function(){
  $(".user").css("background-color","#3498DB");
});
$(".mima").focus(function(){
  $(".mima").css("background-color","#3498DB");
});
$(".user").blur(function(){
  $(".user").css("background-color","#99CBED");
});
$(".mima").blur(function(){
  $(".mima").css("background-color","#99CBED");
});
$(".yzm").focus(function(){
  $(".yzm").css("background-color","#3498DB");
});
$(".yzm").blur(function(){
  $(".yzm").css("background-color","#99CBED");
});

