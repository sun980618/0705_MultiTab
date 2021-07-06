/*eslint-disable*/

$(function(){


	$("button.tabBtn").click(function(){
		$("button.tabBtn").css({
			"border":"1px solid #aaa",
			"background-color": "#eee"
		});

		$(this).css({
			"border-bottom-color":"#fff",
			"background-color": "#fff"
		});

		$("div.tabContents").css({"display":"none"});

		var dataLink = $(this).attr("data-link");

		$("#"+dataLink).css({"display":"block"});

		/*$("").css({"display":"block"});*/

	});
});
