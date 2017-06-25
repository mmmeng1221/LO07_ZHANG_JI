/*
 * Esup-portail functions for uPortal
 */
// Revision: 2010-09-09 vrepain
(function($){
$(document).ready(function() {  
	$("#portalPageBarFontsizeLarger").click(function () {
		var size = $('html').css('font-size');
		var sizeNum = parseFloat(size, 10);
		var sizeUnit = size.slice(-2);
		if (sizeNum <= 24) {
			sizeNum = sizeNum * 1.2;
			$('html').css('font-size', sizeNum + sizeUnit);
		}
		return false;
	});

	$("#portalPageBarFontsizeSmaller").click(function () {
		var size = $('html').css('font-size');
		var sizeNum = parseFloat(size, 10);
		var sizeUnit = size.slice(-2);
		if (sizeNum >= 4) {
			sizeNum = sizeNum / 1.2;
			$('html').css('font-size', sizeNum + sizeUnit);
		}
		return false;
	});

});

})(jQuery);