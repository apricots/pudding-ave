$(document).ready(function() {



	// if you click on a flavor of pudding...
	$( ".boxed" ).click(function( event ) {
  		var puddingN = $(this).find('.boxTitle');
            puddingName = puddingN.text();
 		// highlight the box and the pudding name
        $(this).toggleClass("highlightedBox");
        puddingN.toggleClass("boxTitleHl");

 		// if new, add to form
 		var puddingPrice = $(this).data('price');
 		$('#theOrder').append('<tr class="orderItem default" data-price=' + puddingPrice + '><td>'+puddingName+'</td><td><input type="text" class="form-control" value="1"></td><td class="price">'+puddingPrice+'</td></tr>');
   		
 		 // if already in form, do this
 		// $('#theOrder td:contains("Mint")').alert("hi");
	});

	// if update the quantity of items
	// this only works with already existing items so far
	$('#theOrder').on('keyup', '.form-control', calcPrice);

  	
  	// switch logo on click
  	$('#my_image').on('mouseenter',function(){
        $(this).attr('src', 'images/logo2.png');

	});

	$('#my_image').on('mouseleave',function(){
	        $(this).attr('src', 'images/logo3.png');

	});

	/*
	$(function() {
	    $(selector).pagination({
	        items: 100,
	        itemsOnPage: 10,
	        cssStyle: 'light-theme'
	    });
	});
	*/

});


function calcPrice() {
	var unitPrice = +$(this).closest('.orderItem').data('price');
	var quantity = +$(this).val();
	console.log(quantity);
	console.log(unitPrice);
	$(this).closest('.orderItem').find('.price').text(unitPrice * quantity);

}
