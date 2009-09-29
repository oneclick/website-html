/*
function addClickUrl(el, url) {
	$(el).click(function() {
		if (url != null && url != "") {
			location = url;
		}
	});
}
*/

$(document).ready(function() {

	// add fx to nav bar items
	$("#navbar > a").each(function() {
		//addClickUrl($(this), $(this).attr("url"));
		$(this).mouseover(function() {
			$(this).css("color", "#cc053a");
		}).mouseout(function() {
			$(this).css("color", "#ad050a");
		});
	});

	// add fx to download icons
	$("#download_btn, #addon_btn").each(function() {
		//addClickUrl($(this), $(this).attr("url"));
		$(this).mouseover(function() {
			$(this).css("border", "5px solid #eeeaff");
		}).mouseout(function() {
			$(this).css("border", "5px solid #d5eaf7");
		});
	});

	// add fx to fastlink icons
/*
	$("#fastbar > .fastlink").each(function() {
		addClickUrl($(this), $(this).attr("url"));
	});
*/
});
