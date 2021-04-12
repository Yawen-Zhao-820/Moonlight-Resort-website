$(document).ready(function(){

	/* When we click on the sidebar button, the class:.toggle will be added to the class:main-menu, 
	so that the "left" will be overided from -101% to 0 by the class .toggle,
	which makes us able to see the sidebar in the window.
	When we click on the sidebar button again, the class:.toggle will be removed from the class:main-menu, 
	so that the "left" will be -101% again, which means that the sidebar will be outside of the window, 
	and we cannot see the side bar */

	$(".side-bar-btn").click(function(event){
		$(".main-menu").toggleClass("toggle");
		
		event.preventDefault();
	});

	/* The detailed information is hidden by "display:none;". The "Hide" button is also hidden by "display:none".
	When we click on the "info-btn" (for example, the button "More"), The function "show()" makes the detailed information visible.
	At the same time, the function "hide()" makes the "info-btn" hidden, the function "show()" makes the "hdie-btn" visible.
	When we click on the button "Hide", The function "hide()" makes the detailed information hidden again.
	At the same time, the functin "hide()" also makes the "hide-btn" hidden, and the function "show()" makes the "info-btn" visible.
	So there is only one button visible at a time.
	' $("body").addClass("js"); ' ensures that when JavaScript is disabled, the information will not be hidden.
	So that the user can still see the detailed information.
	*/

	$("body").addClass("js");

	$(".hide-btn-01").click(function(event){
		
		$(".info-01").hide("slow");
		$( this ).hide();
		$(".info-btn-01").show("slow")
		
		event.preventDefault();
	  });
	
	$(".info-btn-01").click(function(event){
		
		$(".info-01").show("slow");
		$( this ).hide();
		$(".hide-btn-01").show("slow")
		
		event.preventDefault();
	  });

	$(".hide-btn-02").click(function(event){
		
		$(".info-02").hide("slow");
		$( this ).hide();
		$(".info-btn-02").show("slow")
		
		event.preventDefault();
	  });
	
	$(".info-btn-02").click(function(event){
		
		$(".info-02").show("slow");
		$( this ).hide();
		$(".hide-btn-02").show("slow")
		
		event.preventDefault();
	  });

	$(".hide-btn-03").click(function(event){
		
		$(".info-03").hide("slow");
		$( this ).hide();
		$(".info-btn-03").show("slow")
		
		event.preventDefault();
	  });
	
	$(".info-btn-03").click(function(event){
		
		$(".info-03").show("slow");
		$( this ).hide();
		$(".hide-btn-03").show("slow")
		
		event.preventDefault();
	  });
	
	 $(".hide-btn-04").click(function(event){
		
		$(".info-04").hide("slow");
		$( this ).hide();
		$(".info-btn-04").show("slow")
		
		event.preventDefault();
	  });
	
	$(".info-btn-04").click(function(event){
		
		$(".info-04").show("slow");
		$( this ).hide();
		$(".hide-btn-04").show("slow")
		
		event.preventDefault();
	  });

	/* After we submit the booking form on the "Book Now" page (click on the button "Book Now"), 
	alert() creates a pop-up window to tell us that our book has been confirmed. 
	Values of room type, start date and end date are assigned to "roomtype". "datestart", "dateend",
	so I can show these information on the pop up window to the user. */

	$("#booking").submit(function(event){
		
		var roomtype = $("#room-type option:selected").text();
		var datestart = $(".booking-form :input[name='start date']").val();
		var dateend = $(".booking-form :input[name='end date']").val();

		alert('Your book for ' + roomtype + ' from ' + datestart + ' to ' + dateend + ' has been confirmed. Thank you!');
		
		event.preventDefault();

	  });

	/* After we submit the advice form on the "Contact Us" page (click on the button "Submit"), 
	alert() creates a pop-up window,
	then fadeOut() makes the advice box fade out */

	$("#advice-box").submit(function(event){

		alert('Thank you for your advice!');
		$(".advice-form").fadeOut(500);
		event.preventDefault();

	  });

});


