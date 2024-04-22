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
        }, 1500, 'easeInOutExpo');
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
        $(".clock-head-text").html("我们已经结婚……")
      }else{
        $(".clock-head-text").html("距离我们结婚还有……" )
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
map.centerAndZoom(new BMapGL.Point(107.816706,35.049437), 15);
map.enableScrollWheelZoom(true);
// 创建点标记
var marker = new BMapGL.Marker(new BMapGL.Point(107.816706,35.049437));
//var marker2 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
//var marker3 = new BMapGL.Marker(new BMapGL.Point(116.395, 39.935));
//var marker4 = new BMapGL.Marker(new BMapGL.Point(116.415, 39.931));
// 在地图上添加点标记
//TODO: 修改marker + 文字描述
map.addOverlay(marker);
 
 
// if($('#map-canvas2').length != 0){
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
//			map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);
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

var map = new BMapGL.Map('map-canvas2');
    var point = new BMapGL.Point(116.51397, 39.73517);
    map.centerAndZoom(point, 11);
    map.enableScrollWheelZoom(true);

    var driving = new BMapGL.DrivingRouteLine(map, {
        renderOptions: {
            map: map,
            autoViewport: true,
            enableDragging: true,
        }
    })
    var driving2 = new BMapGL.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true,
        }
    })

    var start = new BMapGL.Point(116.236532, 39.904113661);
    var start2 = new BMapGL.Point(116.310791, 40.003419);
    var end = new BMapGL.Point(116.545486, 40.006040);
    var end2 = new BMapGL.Point(116.486419, 39.877282);
    var way2 = new BMapGL.Point(116.36315661025989,39.904113661);
    var way1 = new BMapGL.Point(116.49257333444989,39.87920464090217);
    var way = '39.87920464090217,116.49257333444989|39.87806279099342,116.49218746174857'

    driving.search(start, end, {
            waypoints: [way2]
        });
    driving2.search(start2, end2, {

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
        name: 'I Choose You',
        artist: 'Barcelona',
        url: 'http://music.163.com/song/media/outer/url?id=28258464.mp3',
      },
      {
        name: 'song name',
        artist: 'artist name',
        url: 'http://sp.9sky.com/convert/song/music/1038551/20240219160210870.mp3',
      },
      {
        name: 'song name',
        artist: 'artist name',
        url: 'http://sp.9sky.com/convert/song/music/1038551/20240219160758008.mp3',
      },
      {
        name: 'song name',
        artist: 'artist name',
        url: 'https://rainymood.com/audio1112/0.mp3',
      }
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
 
