angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/hello');

        $stateProvider
            .state({
                name: 'xtsy',
                url: '/xtsy',
                templateUrl: '../modules/index/HomePage.html'
            })
            .state({
                name: 'zhszindex',
                url: '/zhszindex',
                templateUrl: '../modules/index/AccountSet.html'
            })
            .state({
                name: 'xxlb',
                url: '/xxlb',
                templateUrl: '../modules/informationManage/InformationList.html'
            })
            .state({
                name: 'ggglhome',
                url: '/ggglhome',
                templateUrl: '../modules/informationManage/InformationList.html'
            })
            .state({
                name: 'infomationBackBtn',
                url: '/infomationBackBtn',
                templateUrl: '../modules/informationManage/InformationList.html'
            })
            .state({
                name: 'infomationBackBtnfh',
                url: '/infomationBackBtnfh',
                templateUrl: '../modules/informationManage/drafts.html'
            })
            .state({
                name: 'inforbj',
                url: '/inforbj',
                templateUrl: '../modules/informationManage/InformationDelivery.html'
            })
            .state({
                name: 'xxfb',
                url: '/xxfb',
                templateUrl: '../modules/informationManage/InformationDelivery.html'
            })
            .state({
                name: 'cgx',
                url: '/cgx',
                templateUrl: '../modules/informationManage/drafts.html'
            })
            .state({
                name: 'informationck',
                url: '/informationck',
                templateUrl: '../modules/informationManage/InformationDetails.html'
            })
            .state({
                name: 'spxx',
                url: '/spxx',
                templateUrl: '../modules/ShopManage/ShopInformation.html'
            })
            .state({
                name: 'gggl',
                url: '/gggl',
                templateUrl: '../modules/ShopManage/AdvertisingManage.html'
            })
            .state({
                name: 'ggglzj',
                url: '/ggglzj',
                templateUrl: '../modules/informationManage/InformationDelivery.html'
            })
            .state({
                name: 'srtx',
                url: '/srtx',
                templateUrl: '../modules/ShopManage/IncomePresentation.html'
            })
            .state({
                name: 'splb',
                url: '/splb',
                templateUrl: '../modules/shangpin/shopProductList.html'
            })
            .state({
                name: 'TixBtn',
                url: '/TixBtn',
                templateUrl: '../modules/ShopManage/AmountCash.html'
            })
            .state({
                name: 'addsp',
                url: '/addsp',
                templateUrl: '../modules/shangpin/addShangPin.html'
            })
            .state({
                name: 'spbj',
                url: '/spbj',
                templateUrl: '../modules/shangpin/addShangPin.html'
            })
            .state({
                name: 'tjsphome',
                url: '/tjsphome',
                templateUrl: '../modules/shangpin/addShangPin.html'
            })
            .state({
                name: 'spcgx',
                url: '/spcgx',
                templateUrl: '../modules/shangpin/shoppingcgx.html'
            })
            .state({
                name: 'sppj',
                url: '/sppj',
                templateUrl: '../modules/shangpin/shoppingpinjia.html'
            })
            .state({
                name: 'pplb',
                url: '/pplb',
                templateUrl: '../modules/shangpin/shoppingpinpai.html'
            })
            .state({
                name: 'addpp',
                url: '/addpp',
                templateUrl: '../modules/shangpin/addBrand.html'
            })
            .state({
                name: 'ddlb',
                url: '/ddlb',
                templateUrl: '../modules/order/orderList.html'
            })
            .state({
                name: 'ddlbhome',
                url: '/ddlbhome',
                templateUrl: '../modules/order/orderList.html'
            })
            .state({
                name: 'ddsz',
                url: '/ddsz',
                templateUrl: '../modules/order/orderSz.html'
            })
            .state({
                name: 'qrsh',
                url: '/qrsh',
                templateUrl: '../modules/order/ConfirmationReceipt.html'
            })
            .state({
                name: 'addfhd',
                url: '/addfhd',
                templateUrl: '../modules/order/AddDeliveryPoint.html'
            }) 
            .state({
                name: 'dhtx',
                url: '/dhtx',
                templateUrl: '../modules/order/ArrivalReminding.html'
            })
            .state({
                name: 'thWCckxq',
                url: '/thWCckxq',
                templateUrl: '../modules/order/ReturnGoodsWC.html'
            })
            .state({
                name: 'thckxq',
                url: '/thckxq',
                templateUrl: '../modules/order/ReturnGoods.html'
            })
            .state({
                name: 'tkckxq',
                url: '/tkckxq',
                templateUrl: '../modules/order/tkApplication.html'
            })
            .state({
                name: 'tkwcckxq',
                url: '/tkwcckxq',
                templateUrl: '../modules/order/tkwcApplication.html'
            })
            .state({
                name: 'thsqcl',
                url: '/thsqcl',
                templateUrl: '../modules/order/ApplicationProcess.html'
            })
            .state({
                name: 'tksqcl',
                url: '/tksqcl',
                templateUrl: '../modules/order/RefundApplication.html'
            })
            .state({
                name: 'tkyy',
                url: '/tkyy',
                templateUrl: '../modules/order/ReasonsRefunds.html'
            })
            .state({
                name: 'zdydyx',
                url: '/zdydyx',
                templateUrl: '../modules/order/CustomprintItem.html'
            })
            .state({
                name: 'fhdxxgl',
                url: '/fhdxxgl',
                templateUrl: '../modules/order/DeliveryInformation.html'
            })   
            .state({
                name: 'plfh',
                url: '/plfh',
                templateUrl: '../modules/order/BatchDelivery.html'
            })
            .state({
                name: 'dyfhd',
                url: '/dyfhd',
                templateUrl: '../modules/order/PrintInvoice.html'
            })
            .state({
                name: 'orderCkdd',
                url: '/orderCkdd',
                templateUrl: '../modules/order/OrderDetails.html'
            })
            .state({
                name: 'jflb',
                url: '/jflb',
                templateUrl: '../modules/dispute/disputeList.html'
            })
            .state({
                name: 'zplb',
                url: '/zplb',
                templateUrl: '../modules/recruit/Recruitmentlist.html'
            })
            .state({
                name: 'xxfbzplb',
                url: '/xxfbzplb',
                templateUrl: '../modules/recruit/Recruitmentlist.html'
            })
            .state({
                name: 'zpfb',
                url: '/zpfb',
                templateUrl: '../modules/recruit/RecruitRelease.html'
            })
            .state({
                name: 'jllb',
                url: '/jllb',
                templateUrl: '../modules/recruit/Resumelist.html'
            })
            .state({
                name: 'jllbCK',
                url: '/jllbCK',
                templateUrl: '../modules/recruit/ResumeView.html'
            })
            .state({
                name: 'yhqlb',
                url: '/yhqlb',
                templateUrl: '../modules/Promotion/couponsList.html'
            })
            .state({
                name: 'tjyhq',
                url: '/tjyhq',
                templateUrl: '../modules/Promotion/AddCoupons.html'
            })
            .state({
                name: 'yhqmx',
                url: '/yhqmx',
                templateUrl: '../modules/Promotion/CouponDetails.html'
            })
            .state({
                name: 'yhqfs',
                url: '/yhqfs',
                templateUrl: '../modules/Promotion/CouponSend.html'
            })
            .state({
                name: 'yfmb',
                url: '/yfmb',
                templateUrl: '../modules/setup/FreightFormwork.html'
            })
            .state({
                name: 'zhsz',
                url: '/zhsz',
                templateUrl: '../modules/setup/PaymentSet.html'
            })
            .state({
                name: 'bannersz',
                url: '/bannersz',
                templateUrl: '../modules/setup/bannerSetup.html'
            })
            .state({
                name: 'tjmb',
                url: '/tjmb',
                templateUrl: '../modules/setup/addTemplate.html'
            })
            .state({
                name: 'zfbj',
                url: '/zfbj',
                templateUrl: '../modules/setup/PaymentMethod.html'
            })
            .state({
                name: 'addImg',
                url: '/addImg',
                templateUrl: '../modules/setup/changImg.html'
            })
            .state({
                name: 'wlgs',
                url: '/wlgs',
                templateUrl: '../modules/setup/LogisticsCompany.html'
            })
            .state({
                name: 'kdmbd',
                url: '/kdmbd',
                templateUrl: '../modules/order/ExpressSheet.html'
            })
            .state({
                name: 'ddgz',
                url: '/ddgz',
                templateUrl: '../modules/order/OrderTracking.html'
            });
    });