'use strict';

$(function() {
    $( "#tabs" ).tabs();
    $( "#tabs-prod" ).tabs();
    $( "#size" ).buttonset();
    $( "#color" ).buttonset();

	var largeImg = $('#largeImg');
	var thumbs = $('#thumbs a');

	thumbs.click(function(e) {
		e.preventDefault();

		var target = $(this);

		showThumbnail(target.attr('href'), target.attr('title'));
	})

	function showThumbnail(href, title) {
		largeImg.attr('src', href);
		largeImg.attr('alt', title);
	}

	$('.star-rating select').barrating({
		theme: 'fontawesome-stars'
	});
});
