$(document).ready(function() {

	$('.nav-item_submenu').hover(function() {
		$('.submenu').css('display', 'block');

		$('.open-submenu').click(function() {
			$('.submenu').hide();
		});

		$('.promotion__center').hover(function() {
			$('.submenu').hide();
		})
	})

	$('.submenu__list-item').click(function() {
		$('.submenu').toggle();
	})

	$('.navbar-toggler').click(function() {
		$(this).toggleClass('open-submenu');
	})

  $('.nav-item_non-submenu').hover(function() {
  	$('.submenu').css('display', 'none');
  }) 

		// $('.submenu').mouseout(function() {
	 //  	$(this).hide();
	 //  })

		// var hideSubmenu = getElementByClassName('submenu');

		// hideSubmenu.onmouseout = function(event) {
		//   this.
		// };

});