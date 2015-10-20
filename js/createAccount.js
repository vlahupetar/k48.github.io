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

	$('#countriesBilling').on('change', function(){
		if ($("#select2-countriesBilling-container").text() !== 'United States') {
			$('#state').parent().removeClass('hidden');
			$('#statesUS').parent().addClass('hidden');
		} else {
			$('#state').parent().addClass('hidden');
			$('#statesUS').parent().removeClass('hidden');
		}
	})
	$('#countriesService').on('change', function(){
		if ($("#select2-countriesService-container").text() !== 'United States') {
			$('#stateServiceOthers').parent().removeClass('hidden');
			$('#statesUSService').parent().addClass('hidden');
		} else {
			$('#stateServiceOthers').parent().addClass('hidden');
			$('#statesUSService').parent().removeClass('hidden');
		}
	})
	$('#countriesShipping').on('change', function(){
		if ($("#select2-countriesShipping-container").text() !== 'United States') {
			console.log('shipping others working');
			$('#stateShippingOthers').parent().removeClass('hidden');
			$('#statesUSShipping').parent().addClass('hidden');
		} else {
			console.log('shipping working');
			$('#stateShippingOthers').parent().addClass('hidden');
			$('#statesUSShipping').parent().removeClass('hidden');
		}
	})
	$("#enterprise").validate({
		onfocusout: function(element) {
            this.element(element);
    	},
    	focusCleanup: true,
    	onkeyup: false,
		rules: {
			corporateEmail: {
			    email: true
			},
			firstName: {
			    minlength: 2,
			    maxlength: 20
			},
			LastName: {
			    minlength: 2,
			    maxlength: 20
			},
			companyName: {
			    minlength: 2,
			    maxlength: 20
			},
			tax: {
			    minlength: 2,
			    maxlength: 20,
			    number: true
			},
			address1Billing: {
			    minlength: 2,
			    maxlength: 20
			},
			cityBilling: {
			    minlength: 2,
			    maxlength: 20
			},
			postalCodeBilling: {
			    minlength: 2,
			    maxlength: 20,
			    number: true
			},
			state: {
			    minlength: 2,
			    maxlength: 20
			}
		},
		errorElement: "div",
		submitHandler: function(form) {
			$("#corporateEmail").rules("add", {
				required: true,
				messages: {
					required: "Email is required"
				}
			});
			$("#firstName").rules("add", {
				required: true,
				lettersonly: true,
				messages: {
					required: "First name field is required"
				}
			});
			$("#LastName").rules("add", {
				required: true,
				lettersonly: true,
				messages: {
					required: "Last name field is required"
				}
			});
			$("#companyName").rules("add", {
				required: true,
				lettersonly: true,
				messages: {
					required: "Company name field is required"
				}
			});
			$("#billCycle").rules("add", {
				required: true,
				messages: {
					required: "Please select an item"
				}
			});
			$("#invoiceType").rules("add", {
				required: true,
				messages: {
					required: "Please select an item"
				}
			});
			$("#accountCategory").rules("add", {
				required: true,
				messages: {
					required: "Please select an item"
				}
			});
			$("#address1Billing").rules("add", {
				required: true,
				messages: {
					required: "Address field is required"
				}
			});
			$("#cityBilling").rules("add", {
				required: true,
				messages: {
					required: "City field is required"
				}
			});
			$("#postalCodeBilling").rules("add", {
				required: true,
				messages: {
					required: "Postal Code is required"
				}
			});
			if(!($("#state").parent().is(":visible"))){
				$("#state").rules("add", {
					required: true,
					messages: {
						required: "State is required"
					}
				});
			}else{
				$("#state").rules("add", {
					required: false
				});
			}
			if ($("#enterprise").valid()){
				$("#errormessages").removeClass('hidden');
			} else {
				$('html, body').animate({
			        scrollTop: $(".error:first").offset().top + (-40)
			    }, 100);
				$('#corporateEmail').on('click', function(){
					$("#corporateEmail").rules("add", {
						required: false
					});
				});
				$('#firstName').on('click', function(){
					$("#firstName").rules("add", {
						required: false
					});
				});
				$('#LastName').on('click', function(){
					$("#LastName").rules("add", {
						required: false
					});
				});
				$('#companyName').on('click', function(){
					$("#companyName").rules("add", {
						required: false
					});
				});
				$('#billCycle').on('click', function(){
					$("#billCycle").rules("add", {
						required: false
					});
				});
				$('#invoiceType').on('click', function(){
					$("#invoiceType").rules("add", {
						required: false
					});
				});
				$('#accountCategory').on('click', function(){
					$("#accountCategory").rules("add", {
						required: false
					});
				});
				$('#address1Billing').on('click', function(){
					$("#address1Billing").rules("add", {
						required: false
					});
				});
				$('#cityBilling').on('click', function(){
					$("#cityBilling").rules("add", {
						required: false
					});
				});
				$('#postalCodeBilling').on('click', function(){
					$("#postalCodeBilling").rules("add", {
						required: false
					});
				});
				$('#state').on('click', function(){
					$("#state").rules("add", {
						required: false
					});
				});
			}
		}
	});
});