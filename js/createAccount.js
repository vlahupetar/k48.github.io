$(document).ready(function(){
	//enterprise form
	$('#showShippingEnterprise').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#sameShippingEnterprise').parent().removeClass('hidden');
	        $('#shippingBlockEnterprise').removeClass('hidden');
	    } else {
	        $('#sameShippingEnterprise').parent().addClass('hidden');
	        $('#shippingBlockEnterprise').addClass('hidden');
	    }
	})
	$('#showServiceEnterprise').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#sameServiceEnterprise').parent().removeClass('hidden');
	        $('#serviceBlockEnterprise').removeClass('hidden');
	    } else {
	        $('#sameServiceEnterprise').parent().addClass('hidden');
	        $('#serviceBlockEnterprise').addClass('hidden');
	    }
	})
	$('#sameServiceEnterprise').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#serviceBlockEnterprise').addClass('hidden');
	    } else {
	    	$('#serviceBlockEnterprise').removeClass('hidden');
	    }
	})
	$('#sameShippingEnterprise').click(function(){
		var $this = $(this);
	    if ($this.is(':checked')) {
	        $('#shippingBlockEnterprise').addClass('hidden');
	    } else {
	    	$('#shippingBlockEnterprise').removeClass('hidden');
	    }
	})
	$('.addNumber').click(function(e){
		e.preventDefault();
		var $this = $(this);
        $(this).parent().next().removeClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().remove();
	})
	// autocomplete countries
	$(".js-example-basic-single").select2();
	$('.addNumber').click(function(e){
		e.preventDefault();
		var $this = $(this);
        $(this).parent().next().removeClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().remove();
	})
	// select
	$("#select2-countriesBillingEnterprise-container").text();
});