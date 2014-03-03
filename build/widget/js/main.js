/*
	Page specific JavaScript:
*/
$(function(){
	$.Placeholder.init();
	// -- disable page transition for jquery mobile
	/*$(document).bind('pageinit', function () {
    	$.mobile.defaultPageTransition = 'slide';
	});
	*/
	/* $(document).bind("mobileinit", function () {
        $.extend($.mobile, {
            defaultPageTransition : 'none'
        });
 
        $.mobile.defaultPageTransition = 'none';
        $.mobile.defaultDialogTransition = 'none';
    }); */
});
/*
$(document).on('pageshow', '#myDrafts', function(event) {
	var rightColHeight = 0;
	var leftColHeight = 0;
	var $nextBlock;

	$('.draftBlock:even').each(function() {
		$nextBlock = $(this).next('.draftBlock');
		leftColHeight = $(this).height();
		rightColHeight = $nextBlock.height();

		if(leftColHeight > rightColHeight) {
			$nextBlock.height(leftColHeight);
		} else if(leftColHeight < rightColHeight) {
			$(this).height(rightColHeight);
		} else {
		}
	});
});
*/
$(document).on('pagecreate', '#myContacts', function(event) {
	$(".contactList > li > .contactTitle").on('click', function(event) {
		if($(this).hasClass('collapsed')) {
			$(this).toggleClass('collapsed');
			$(this).toggleClass('expanded');
			$(this).nextAll('.contactContent:hidden').show(); // for devices that don't support ~ selector
			return false;
		}

		if($(this).hasClass('expanded')) {
			$(this).toggleClass('expanded');
			$(this).toggleClass('collapsed');
			$(this).nextAll('.contactContent:visible').hide(); // for devices that don't support ~ selector
			return false;
		}
	});
});

$(document).on('pagecreate', '#createNew_step2a', function(event) {
	$(".createNav > .button.primary").on('click', function(event) {
		
		$.mobile.changePage("createNew_step3a.html");
	});
});

$(document).on('pagecreate', '#createNew_step3a', function(event) {
	$("#chooseLocation").on('click', function(event) {
		event.preventDefault();
	    navigator.geolocation.getCurrentPosition(
	        function(position) {
	            //alert(position.coords.latitude + ',' + position.coords.longitude);
	             //store
                window.localStorage["position.latitude"] = position.coords.latitude;
                window.localStorage["position.longitude"] = position.coords.longitude;     
	        },
	        function() {
	            alert('Error getting location');
	        });
		$.mobile.changePage("createNew_step3b.html");
	});
});

$(document).on('pagecreate', '#createNew_step3b', function(event) {
	$(".locationChoice > li > div").off().on('click', function(event) {
		if($(this).hasClass('collapsed')) {
			$(this).toggleClass('collapsed');
			$(this).toggleClass('expanded');
			return false;
		}

		if($(this).hasClass('expanded')) {
			$(this).toggleClass('expanded');
			$(this).toggleClass('collapsed');
			return false;
		}
	});
});
/*
$(document).on('pageshow', '#createNew_step3a', function(event) {
	$("#chooseLocationDialog").popup('open');
});
*/
$(document).on('pagecreate', '#createNew_step4', function(event) {
	$(".addTasks > li > div.button.tertiary").on('click', function() {
		$(this).addClass('inactive');
		$(this).siblings(".editTask").removeClass('inactive');
	});

	$(".editTask > .controls > .button.tertiary").on('click', function() {
		$(this).closest(".editTask").addClass('inactive');
		$(this).closest(".editTask").siblings("div.addTask").removeClass('inactive');
	});
	$(".editTask > .controls > .button.primary").on('click', function() {
		$(this).closest(".editTask").addClass('inactive');
		$(this).closest(".editTask").siblings(".reviewTask").removeClass('inactive');
	});

	$(".reviewTask i.icon.cancel").on('click', function(event) {
		$(this).closest(".reviewTask").addClass('inactive');
		$(this).closest(".reviewTask").siblings('div.addTask').removeClass('inactive');
	});
});

$(document).on('pagecreate', '#createNew_complete', function(event) {
	$(".locationChoice > li > div").click(function() {
		//alert('hello world');
		if($(this).hasClass('collapsed')) {
			$(this).toggleClass('collapsed');
			$(this).toggleClass('expanded');
			return false;
		}

		if($(this).hasClass('expanded')) {
			$(this).toggleClass('expanded');
			$(this).toggleClass('collapsed');
			return false;
		}
	});
});

$(document).on('pagecreate', '#completeTask', function(event) {
	$(".addTasks > li > div").click(function() {
		$(this).addClass('inactive');
		$(this).next("div").removeClass('inactive');
	});
});

