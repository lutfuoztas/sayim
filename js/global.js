﻿/*
Author: WebThemez
Author URL: http://webthemez.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/
$( function() {
// Add background image
	$.backstretch('images/aaa.jpg');
	var endDate = "Jun  24, 2025 09:30:00";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Saniye</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
