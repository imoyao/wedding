jQuery(document).ready(function($){
/*==========================*/	
/*Preloader */	
/*==========================*/
$('.preloader').delay(350).fadeOut('slow');
/*==========================*/	
/*  Menu */	
/*==========================*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 100, 'easeInOutExpo');
        event.preventDefault();
    });
});

	 $(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });


/*==========================*/	
/* Hero Slider 1 */	
/*==========================*/
 $('.hero-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows:false,
  fade:false,
}); 
 
/*==========================*/	
/* Parallax effect */	
/*==========================*/
$('.parallax').sparallax(); 


/*==========================*/	
/* Event Box Map Show/Hide */	
/*==========================*/
 
 $('.view-map').click(function(){
	  $(this).closest('.event-box').addClass('show-map'); 
	 return false;
});
 
 $('.close-event-map').click(function(){
	   $(this).closest('.event-box').removeClass('show-map'); 
	 return false;
});
	

/*==========================*/	
/* Search Box Toggle  */	
/*==========================*/
$('.search-icon a').click(function(){
	$('body').addClass('show-search');
	return false;
});

$('.close-search').click(function(){
	$('body').removeClass('show-search');
	return false;
});


 /*==========================*/	
/* Go to Top  */	
/*==========================*/
if ($('.go-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700, 'easeInOutExpo');
    });
}


/*==========================*/	
/* Countdown */	
/*==========================*/
(function($) {
    $.fn.countdown = function(endDate, callback) {
        var deadline = new Date(endDate).getTime();

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = deadline - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            callback({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });

            if (distance < 0) {
                clearInterval(x);
                callback({
                    days: Math.abs(days),
                    hours: Math.abs(hours),
                    minutes: Math.abs(minutes),
                    seconds: Math.abs(seconds),
                    passed: true
                });
            }
        }, 1000);
    };
})(jQuery);
var weddingDate = '2025/05/02'
$(".clock").countdown(weddingDate, function(event) {
    if (event.passed) {
        $(".clock-head-text").html("我们本应该结婚……")
      }else{
        $(".clock-head-text").html("距离我们原来打算结婚的日子……" )
        }
    $(".clock").html('<span>' + event.days + ' <b>days</b></span> <span>' + event.hours + '<b>hours</b></span> <span>' + event.minutes + '<b>minutes</b></span> <span>' + event.seconds + '<b>seconds</b></span>');
});
// $(".clock").countdown('2025/05/02', function(event) {
//    $(this).html(event.strftime('<span>%D <b>days</b></span> <span>%H<b>hours</b></span> <span>%M<b>minutes</b></span> <span>%S<b>seconds</b></span>'));
//  });
	 
/*==========================*/	
/* Google Map */	
/*==========================*/
//	if($('#map-canvas').length != 0){
//		var map;
//		function initialize() {
//			var mapOptions = {
//				zoom: 15,
//				scrollwheel: false,
//			 	center: new google.maps.LatLng(25.932884, 83.569633),
//			 	styles: [
//							{"stylers": [{ hue: "#ce9f51" },
//							{ saturation: -100 },
//							{ lightness: 0 }]},
//    					{
//					      "featureType": "road",
//					      "elementType": "labels",
//					      "stylers": [{"visibility": "off"}]
//					    },
//					    {
//					      "featureType": "road",
//					      "elementType": "geometry",
//					      "stylers": [{"lightness": 100},
//					            {"visibility": "simplified"}]
//					    }
//			 	]
//			};
//			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//			var image = 'include/images/map-marker.png';
//			var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
//			var beachMarker = new google.maps.Marker({
//				position: myLatLng,
//				map: map,
//				icon: image
//			 });
//		}
//
//		google.maps.event.addDomListener(window, 'load', initialize);
//	}

var map = new BMapGL.Map('map-canvas');
var point = new BMapGL.Point(107.816706,35.049437)
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(true);
// 创建点标记
var myIcon = new BMapGL.Icon("/include/img/map-marker.png", new BMapGL.Size(26, 26));
var marker = new BMapGL.Marker(point, {
    icon: myIcon
});
// 在地图上添加点标记
map.addOverlay(marker);
var opts = {
    width: 200,
    height: 100,
    title: '期待你的到来'
};
var infoWindow = new BMapGL.InfoWindow('提示：沿着十字路口向西往村里走，走到路口后向北拐。找不到地址请电话联系本人哦', opts);
// 点标记添加点击事件
marker.addEventListener('click', function () {
    map.openInfoWindow(infoWindow, point); // 开启信息窗口
});

// 自驾路线规划
var mapCarLine = new BMapGL.Map('map-canvas2');
mapCarLine.enableScrollWheelZoom(true);

var driving = new BMapGL.DrivingRouteLine(mapCarLine, {
    renderOptions: {
        map: mapCarLine,
        autoViewport: true,
        enableDragging: false,
    }
})
var driving1 = new BMapGL.DrivingRouteLine(mapCarLine, {
    renderOptions: {
        map: mapCarLine,
        autoViewport: true,
        enableDragging: false,
    }
})
var driving2 = new BMapGL.DrivingRoute(map, {
    renderOptions: {
        map: mapCarLine,
        autoViewport: true,
        enableDragging: false,
    }
})
var driving3= new BMapGL.DrivingRoute(mapCarLine, {
    renderOptions: {
        map: mapCarLine,
        autoViewport: true,
        enableDragging: false,
    }
})

var startXiAnBeiZhan = new BMapGL.Point(108.945421,34.381032);
var startXiAn = new BMapGL.Point(108.953509,34.265619);
var startXiAnXianYangInternationalAirport = new BMapGL.Point(108.768576,34.442079);
var startXiYang = new BMapGL.Point(108.715205,34.336191);
var end = new BMapGL.Point(107.816706,35.049437);
var tingKouStation = new BMapGL.Point(107.949848,35.103598);

driving.search(startXiAnBeiZhan, end, {
    waypoints: [tingKouStation]
});

driving1.search(startXiAn, end, {
    waypoints: [tingKouStation]
});

driving2.search(startXiYang, end, {
    waypoints: [tingKouStation]
});
driving3.search(startXiAnXianYangInternationalAirport, end, {
    waypoints: [tingKouStation]
});

/*==========================*/	
/* Header fix */	
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
	
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});


// 初始化APlayer
var player = new APlayer({
  container: document.getElementById('aplayer'),
  mini: true,
  autoplay: true, // 尝试自动播放
  loop: 'all',
  volume: 0.52,
  theme:"#F0A1A8",
  //   TODO: 修改背景音乐
  audio: [
   {
    name: 'Purple Passion',
    artist: 'Barcelona',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714047986322/Purple Passion.mp3',
  }, {
    name: 'Flightless Bird, American Mouth',
    artist: 'Barcelona',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714048231244/Flightless%20Bird,%20American%20Mouth.mp3',
  }, {
    name: 'Sweets',
    artist: '宫本笑里',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714047681155/Sweets.mp3',
  }, {
    name: 'I Choose You',
    artist: 'Barcelona',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714047435607/I Choose You.mp3',
  },{
    name: '胡桃鉗-糖梅仙子之舞',
    artist: '柴可夫斯基',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714030223925/%E6%9F%B4%E5%8F%AF%E5%A4%AB%E6%96%AF%E5%9F%BA%EF%BC%9A%E7%B3%96%E6%A2%85%E4%BB%99%E5%AD%90%E4%B9%8B%E8%88%9E%E2%80%A7%E8%83%A1%E6%A1%83%E9%89%97.mp3',
  },{
    name: '出嫁',
    artist: '罗大佑',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714046860125/%E5%87%BA%E5%AB%81.mp3',
  }, {
    name: '竹竿舞',
    artist: '周杰伦',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1714047209636/竹竿舞.mp3',
  },
  ]
});


var recordPlayer = document.querySelector('.record-player');

// 控制唱片旋转
player.on('play', function () {
  recordPlayer.style.animationPlayState = 'running';
});

player.on('pause', function () {
  recordPlayer.style.animationPlayState = 'paused';
});

//     页面加载完毕后尝试播放
window.onload = function() {
    player.play();
};

$("#gallery-content").nanogallery2({
    galleryDisplayTransitionDuration: 1500,
    galleryMosaic :
    [
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 4, r: 1 },
        { w: 2, h: 1, c: 5, r: 1 },
        { w: 2, h: 2, c: 5, r: 2 },
        { w: 1, h: 1, c: 4, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 1, r: 3 },
        ],
    thumbnailAlignment: "justified",
    thumbnailHeight: 600,
    thumbnailWidth: 800,
    thumbnailBaseGridHeight: 300,
    thumbnailDisplayTransition: "flipDown",
    thumbnailDisplayTransitionDuration: 600,
    thumbnailDisplayInterval: 30,
    galleryRenderDelay: 100,
    galleryDisplayMode: "rows",
    galleryMaxRows: 1,
    galleryFilterTags: true,
    galleryFilterTagsMode: 'single',
    displayBreadcrumb : true,
    galleryLastRowFull : true,
    galleryDisplayTransition: 'rotateX',
    galleryDisplayTransitionDuration: 500,
    thumbnailL1GutterWidth: 0,
    thumbnailL1GutterHeight: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,
    thumbnailL1BuildInit2: "image_scale_1.20",
    thumbnailL1HoverEffect2: "thumbnail_scale_1.00_1.05_300|image_translateX_-20px_20px",
    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: {
    display: false,
    position: "onBottomOverImage",
    hideIcons: false,
    titleFontSize: "1em",
    align: "left",
    titleMultiLine: true,
    displayDescription: false
    },
    gallerySorting: "random",
    galleryTheme: {
    thumbnail: {
    titleShadow: "none",
    descriptionShadow: "none",
    titleColor: "#fff"
    },
    navigationBreadcrumb: {
    background: "#3C4B5B"
    },
    navigationFilter: {
    background: "#2E7C7F",
    backgroundSelected: "#19676B",
    color: "#eee"
    }
    },
    XviewerTheme: {
       barBackground: "rgba(240, 161, 168, 0.7)"
    },
    viewerToolbar: {
        "display": false,
    },
    viewerTools: {
    topLeft: "label",
    topRight: "pageCounter,playPauseButton,fullscreenButton,zoomButton,closeButton"
    },
    touchAnimation: true,
    locationHash: true,
    items: [
    {
    src: "include/images/hero-img1.jpg",
    srct: "include/images/hero-img1.jpg",
    title: "测试",
    description: "十多个发动机体育课",
    tags: "全部 婚礼 游玩 亲亲",
    },
    {
    src: "include/images/hero-img2.jpg",
    srct: "include/images/hero-img2.jpg",
    title: "pic 2",
    tags: "全部 婚礼 游玩 亲亲",
    },{
    src: "include/gallery/1243546.jpg",
    srct: "include/gallery/1243546.jpg",
    tags: "全部 婚礼 游玩 亲亲",
    title: "pic 3"
    },
    {
    src: "include/images/hero-img2.jpg",
    srct: "include/images/hero-img2.jpg",
    tags: "全部 游玩",
    title: "pic 4"
    },{
    src: "include/gallery/1243546.jpg",
    srct: "include/gallery/1243546.jpg",
    tags: "全部 婚礼",
    title: "pic 5"
    },
    {
    src: "include/images/hero-img2.jpg",
    srct: "include/images/hero-img2.jpg",
    tags: "全部",
    title: "pic 6"
    },{
    src: "include/gallery/1243546.jpg",
    srct: "include/gallery/1243546.jpg",
    tags: "全部",
    title: "pic 7"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 8"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 9"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 10"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 11"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 12"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 13"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 14"
    },{
    src: "include/gallery/98765.jpg",
    srct: "include/gallery/98765.jpg",
    tags: "全部",
    title: "pic 15"
    }
    ]
});
