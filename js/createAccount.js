$(document).ready(function(){
	$('#showShipping').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#sameShipping').parent().removeClass('hidden');
	        $('#shippingBlock').removeClass('hidden');
	    } else {
	        $('#sameShipping').parent().addClass('hidden');
	        $('#shippingBlock').addClass('hidden');
	    }
	})
	$('#showService').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#sameService').parent().removeClass('hidden');
	        $('#serviceBlock').removeClass('hidden');
	    } else {
	        $('#sameService').parent().addClass('hidden');
	        $('#serviceBlock').addClass('hidden');
	    }
	})
	$('#sameService').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#serviceBlock').addClass('hidden');
	    } else {
	    	$('#serviceBlock').removeClass('hidden');
	    }
	})
	$('#sameShipping').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#shippingBlock').addClass('hidden');
	    } else {
	    	$('#shippingBlock').removeClass('hidden');
	    }
	})
	$('.addNumber').click(function(e){
		e.preventDefault();
		var $this = $(this);
        $(this).parent().next().removeClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().remove();
	})
})