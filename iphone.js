var icons = ['http://s20.postimg.org/8zwrfee3d/1446280208_messages_ios7_ios_7.png', 'http://s20.postimg.org/ay3fde6l5/1446280266_settings_ios7_ios_7.png','http://s20.postimg.org/g6ygb9p09/1446280270_photos_ios7_ios_7.png', 'http://s20.postimg.org/gas9riuhl/1446280278_app_store_ios7_ios_7.png','http://s20.postimg.org/hxm2qhvx5/1446280310_notes_ios7_ios_7.png', 'http://s20.postimg.org/efa2u3v15/1446280312_calculator_ios7_ios_7.png','http://s20.postimg.org/rfltqjhll/1446280298_itunes_ios7_ios_7.png', 'http://s20.postimg.org/5lj6d082h/1446280301_weather_ios7_ios_7.png','http://s20.postimg.org/4n2tapuqh/1446280283_videos_ios7_ios_7.png', 'http://s20.postimg.org/z72jp3lqx/1446280288_maps_ios7_ios_7.png','http://s20.postimg.org/gg5oc1xi1/1446285905_passbook_ios7_ios_7.png', 'http://s20.postimg.org/gcbuvss0p/1446285881_clock_ios7_ios_7.png','http://s20.postimg.org/5dvjghx3t/1446280296_reminders_ios7_ios_7.png', 'http://s20.postimg.org/isdo9na3d/1446284865_game_center_ios7_ios_7.png','http://s20.postimg.org/jx7qf0wk9/1446285921_compass_ios7_ios_7.png', 'http://s20.postimg.org/en2rnqcbd/1446285943_music_ios7_ios_7.png','http://s20.postimg.org/vv48vstzt/1446284849_phone_ios7_ios_7.png', 'http://s20.postimg.org/6norht1i1/1446280275_safari_ios7_ios_7.png','http://s20.postimg.org/8bnwwgfdl/1446280263_mail_ios7_ios_7.png', 'http://s20.postimg.org/b7103bjdl/1446280258_camera_ios7_ios_7.png'];


//Each functions to pull in the iPhone Icons from the arrays that are set above
$.each(icons, function(i,v){
	$("<li>", {html: '<img class="icons" src="' + v + '" />' }).appendTo(".icon-images");
});

//Click Event for the power button to turn the phone on and off
$(".power").on('click',function(){
	$('.inner-screen').toggleClass("on off");
    if($('#screen').hasClass("off")){
    	$('#screen').css('background','#000');
        $('.bottom-overlay').css('background-color','#000');
        $('.icons').css('visibility', 'hidden');
    }else{
    	$('#screen').css('background','url("http://s20.postimg.org/7zb7y8z4t/background.png")');
        $('.bottom-overlay').css('background-color','#CCCCFF');
        $('.icons').css('visibility', 'visible');
    }
});

