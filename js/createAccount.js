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
	
	$('.addNumber').click(function(e){
		e.preventDefault();
		var $this = $(this);
        $(this).parent().next().removeClass('hidden');
        $(this).parent().addClass('hidden');
        $(this).parent().prev().remove();
	})
	// autocomplete countries
	$(".js-example-basic-single").select2();
	$(".select2-selection__arrow").remove();

	// select countries and states for USA

	$('#countriesBillingEnterprise').on('change', function(){
		if ($("#select2-countriesBillingEnterprise-container").text() !== 'United States') {
			state
			$('#state').parent().removeClass('hidden');
			$('#statesUS').parent().addClass('hidden');
		} else {
			$('#state').parent().addClass('hidden');
			$('#statesUS').parent().removeClass('hidden');
		}
	})
	

});