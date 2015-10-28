$(document).ready(function(){
    // enterprise form
    $("#currency").prop("disabled", true);
    $("#accountCategory").prop("disabled", true);
    $("#paymentTerm").prop("disabled", true);
    $("#billCycle").prop("disabled", true);
    $("#tax").prop("disabled", true);
    $("#spinnerAcc").css('display', 'block');
    $("#spinnerPay").css('display', 'block');
    $("#spinnerBill").css('display', 'block');
    $("#spinnerCurr").css('display', 'block');
    setTimeout(function(){
        $("#currency").prop("disabled", false);
        $("#accountCategory").prop("disabled", false);
        $("#paymentTerm").prop("disabled", false);
        $("#spinnerAcc").css('display', 'none');
        $("#spinnerPay").css('display', 'none');
        $("#spinnerBill").css('display', 'none');
        $("#spinnerCurr").css('display', 'none');
    }, 3000)
    // phone description logic
    $('.desc-remove').click(function(){
        var $this = $(this);
        // phone
        $this.parent().parent().parent().addClass('hidden');
        var case1 = $('.phone1').hasClass('hidden');
        var case2 = $('.phone2').hasClass('hidden');
        var case3 = $('.phone3').hasClass('hidden');
        var case4 = $('.phone4').hasClass('hidden');
        if (!(case1 && case2 && case3) || !(case2 && case3 && case4) || !(case1 && case3 && case4) || !(case1 && case2 && case4)) {
            $(".addPhone").removeClass('hidden');
        }
        if ((case1 && case2 && case3) || (case2 && case3 && case4) || (case1 && case3 && case4) || (case1 && case2 && case4)) {
            $(".desc-remove").addClass('hidden');
        }
        var appendSelectedPhoneType = $this.next().val();
        if (appendSelectedPhoneType) {
            $('.phone-type1').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type2').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type3').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
            $('.phone-type4').append("<option value='"+appendSelectedPhoneType+"'>"+appendSelectedPhoneType+"</option>");
        }
        
    });

    $('#taxExempt').click(function(){
        var $this = $(this);
        if (!$this.is(':checked')) {
            $("#tax").rules("add", {
                minlength: false,
                maxlength: false,
                number: false
            });
            $("#tax").focus();
            $("#tax").blur();
            $("#tax").prop("disabled", true);
        } else {
            $("#tax").rules("add", {
                minlength: 5,
                maxlength: 20,
                number: true
            });
            $("#tax").prop("disabled", false);
        }
    });
    $('#companyName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#firstName").rules("add", {
                required: false,
            });
            $("#firstName").blur();
            $("#LastName").rules("add", {
                required: false,
            });
            $("#LastName").blur();
            $('#firstName').prop("disabled", true);
            $('#LastName').prop("disabled", true);
            $('#firstName').prev().css("opacity", "0.5");
            $('#LastName').prev().css("opacity", "0.5");
            $("#firstName").rules("add", {
                required: false,
            });
            $("#LastName").rules("add", {
                required: false,
            });
        } else {
            $('#firstName').prop("disabled", false);
            $('#LastName').prop("disabled", false);
            $('#firstName').prev().css("opacity", "1");
            $('#LastName').prev().css("opacity", "1");
        }
    });
    $('#firstName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#companyName").rules("add", {
                required: false,
            });
            $("#companyName").blur();
            $('#companyName').prop("disabled", true);
            $('#companyName').prev().css("opacity", "0.5");
            
        } else if ($('#LastName').val()) {
            $('#companyName').prop("disabled", true);
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
        } else {
            $('#companyName').prop("disabled", false);
            $('#companyName').prev().css("opacity", "1");
        }
    });
    $('#LastName').on('focusout', function() {
        var $this = $(this);
        if ($this.val()) {
            $("#companyName").rules("add", {
                required: false,
            });
            $("#companyName").blur();
            $('#companyName').prop("disabled", true);
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
        } else if ($('#firstName').val()) {
            $('#companyName').prop("disabled", true);
            $('#companyName').prev().css("opacity", "0.5");
            $("#companyName").rules("add", {
                required: false,
            });
        } else {
            $('#companyName').prop("disabled", false);
            $('#companyName').prev().css("opacity", "1");
        }
    });
    //$(".spinner-container").css("display", "block");
    // here is logic to add another block of fields
    // if user wants to add more than one address
    // also he can check 'same as billing' checkbox
    // in this case additional block will be hided
    // and pre-filled in future
    $('#showShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#shippingBlockEnterprise').removeClass('hidden');
            if ($('#showBilling').is(':checked')) {
                $('#sameShippingEnterprise').parent().removeClass('hidden');
            }
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
            $('#shippingBlockEnterprise').addClass('hidden');
            $("#sameShippingEnterprise").prop('checked', false); 
        }
    });
    $('#showServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#serviceBlockEnterprise').removeClass('hidden');
            if ($('#showBilling').is(':checked')) {
                $('#sameServiceEnterprise').parent().removeClass('hidden');
            }
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
            $('#serviceBlockEnterprise').addClass('hidden');
            $("#sameServiceEnterprise").prop('checked', false); 
        }
    });
    $('#sameServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#serviceBlockEnterprise').addClass('hidden');
        } else {
            $('#serviceBlockEnterprise').removeClass('hidden');
        }
    });
    $('#sameShippingEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#shippingBlockEnterprise').addClass('hidden');
        } else {
            $('#shippingBlockEnterprise').removeClass('hidden');
        }
    });

    $('#showBilling').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#BillingAdd').removeClass('hidden');
        } else {
            $('#BillingAdd').addClass('hidden');
        }
        if ($this.is(':checked') && $('#showShippingEnterprise').is(':checked')) {
            $('#sameShippingEnterprise').parent().removeClass('hidden');
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
        }
        if ($this.is(':checked') && $('#showServiceEnterprise').is(':checked')) {
            $('#sameServiceEnterprise').parent().removeClass('hidden');
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
        }
        if (!$this.is(':checked') && $('#showShippingEnterprise').is(':checked')) {
            console.log('dfss');
            $("#sameShippingEnterprise").prop('checked', false); 
            $('#shippingBlockEnterprise').removeClass('hidden');
        }
        if (!$this.is(':checked') && $('#showServiceEnterprise').is(':checked')) {
            console.log('dfss');
            $("#sameServiceEnterprise").prop('checked', false); 
            $('#serviceBlockEnterprise').removeClass('hidden');
        }
    });

    // showing additional phone number in case it is needed
    $('.addPhone').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var case1 = $('.phone1').hasClass('hidden');
        var case2 = $('.phone2').hasClass('hidden');
        var case3 = $('.phone3').hasClass('hidden');
        var case4 = $('.phone4').hasClass('hidden');
        
        if ((case2 && case3) || (case2 && case4) || (case2 && !case1 && !case3 && !case4)) {
            $('.phone2').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        } else if (case3 && (!case1 && !case2)) {
            $('.phone3').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        } else if (!case1 && !case2 && !case3) {
            $('.phone4').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.addClass('hidden');
        } else {
            $('.phone1').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
        }
        
    });

    var previous1, previous2, previous3, previous4; // variables to store previous values from select
    //to prevent option lose

    $('.phone-type1').on('focus', function(){
        previous1 = this.value;
    });
    $('.phone-type2').on('focus', function(){
        previous2 = this.value;
    });
    $('.phone-type3').on('focus', function(){
        previous3 = this.value;
    });
    $('.phone-type4').on('focus', function(){
        previous4 = this.value;
    });

    $('.phone-type1').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous1){
            $(".phone-type2").append("<option value='"+previous1+"'>"+previous1+"</option>");
            $(".phone-type3").append("<option value='"+previous1+"'>"+previous1+"</option>");
            $(".phone-type4").append("<option value='"+previous1+"'>"+previous1+"</option>");
        }
    });
    $('.phone-type2').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous2){
            $(".phone-type1").append("<option value='"+previous2+"'>"+previous2+"</option>");
            $(".phone-type3").append("<option value='"+previous2+"'>"+previous2+"</option>");
            $(".phone-type4").append("<option value='"+previous2+"'>"+previous2+"</option>");
        }
    });
    $('.phone-type3').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type4 option[value='"+selected+"']").remove();
        }
        if (previous3){
            $(".phone-type1").append("<option value='"+previous3+"'>"+previous3+"</option>");
            $(".phone-type2").append("<option value='"+previous3+"'>"+previous3+"</option>");
            $(".phone-type4").append("<option value='"+previous3+"'>"+previous3+"</option>");
        }
    });
    $('.phone-type4').on('change', function(){
        var $this = $(this);
        var selected = $this.val();
        if($this.val()) {
            $(".phone-type1 option[value='"+selected+"']").remove();
            $(".phone-type2 option[value='"+selected+"']").remove();
            $(".phone-type3 option[value='"+selected+"']").remove();
        }
        if (previous4){
            $(".phone-type1").append("<option value='"+previous4+"'>"+previous4+"</option>");
            $(".phone-type2").append("<option value='"+previous4+"'>"+previous4+"</option>");
            $(".phone-type3").append("<option value='"+previous4+"'>"+previous4+"</option>");
        }
    });
    // autocomplete countries and states
    $(".js-example-basic-single").select2();

    // temp remove of selection arrow
    // it doesn't match to default browser styles

    // select countries and states for USA
    $('#countriesBilling').on('change', function(){
        if ($("#select2-countriesBilling-container").text() !== 'United States') {
            //$('#state').parent().removeClass('hidden');
            /*$("#state").rules("add", {
                required: false
            });*/
            $('#statesUS').parent().addClass('hidden');
            $("#postalCodeBilling").parent().removeClass('padding-left-0');
            $("#postalCodeBilling").parent().removeClass('col-md-4');
            $("#postalCodeBilling").parent().addClass('col-md-12');
            $("#postalCodeBilling").rules("add", {
                number: false
            });
        } else {
            //$('#state').parent().addClass('hidden');
            $('#statesUS').parent().removeClass('hidden');
            $("#postalCodeBilling").parent().addClass('padding-left-0');
            $("#postalCodeBilling").parent().addClass('col-md-4');
            $("#postalCodeBilling").parent().removeClass('col-md-12');
            $("#postalCodeBilling").rules("add", {
                number: true
            });
        }
    });
    $('#countriesService').on('change', function(){
        if ($("#select2-countriesService-container").text() !== 'United States') {
            //$('#stateServiceOthers').parent().removeClass('hidden');
            $('#statesUSService').parent().addClass('hidden');
            $("#postalCodeService").parent().removeClass('padding-left-0');
            $("#postalCodeService").parent().removeClass('col-md-4');
            $("#postalCodeService").parent().addClass('col-md-12');
            $("#postalCodeService").rules("add", {
                number: false
            });
        } else {
           // $('#stateServiceOthers').parent().addClass('hidden');
            $('#statesUSService').parent().removeClass('hidden');
            $("#postalCodeService").parent().addClass('padding-left-0');
            $("#postalCodeService").parent().addClass('col-md-4');
            $("#postalCodeService").parent().removeClass('col-md-12');
            $("#postalCodeService").rules("add", {
                number: true
            });
        }
    });
    $('#countriesShipping').on('change', function(){
        if ($("#select2-countriesShipping-container").text() !== 'United States') {
            //$('#stateShippingOthers').parent().removeClass('hidden');
            $('#statesUSShipping').parent().addClass('hidden');
            $("#postalCodeShipping").parent().removeClass('padding-left-0');
            $("#postalCodeShipping").parent().removeClass('col-md-4');
            $("#postalCodeShipping").parent().addClass('col-md-12');
            $("#postalCodeShipping").rules("add", {
                number: false
            });
        } else {
           // $('#stateServiceOthers').parent().addClass('hidden');
            $('#statesUSShipping').parent().removeClass('hidden');
            $("#postalCodeShipping").parent().addClass('padding-left-0');
            $("#postalCodeShipping").parent().addClass('col-md-4');
            $("#postalCodeShipping").parent().removeClass('col-md-12');
            $("#postalCodeShipping").rules("add", {
                number: true
            });
        }
    });
    // Bill Cycle changes depending on currency selected value
    $('#currency').on('change', function(){
        if ($("#currency").val() === 'USD') {
            $("#billCycle").prop("disabled", false);
            $("#billCycle option").each(function() {
                $(this).remove();
            });
            $('#billCycle').append("<option value='USD'>Test Data For USD</option>");
        } else if ($("#currency").val() === 'EU') {
            $("#billCycle").prop("disabled", false);
            $("#billCycle option").each(function() {
                $(this).remove();
            });
            $('#billCycle').append("<option value='EU'>Test Data For EU</option>");
        } else {
            $("#billCycle option").each(function() {
                $(this).remove();
                $('#billCycle').append("<option value=''></option>");
                $("#billCycle").prop("disabled", true);
            });
        }
    });
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
                minlength: 3,
                maxlength: 20
            },
            LastName: {
                minlength: 3,
                maxlength: 20
            },
            companyName: {
                minlength: 1
            },
            tax: {
                minlength: 2,
                maxlength: 20,
                number: true
            },
            address1Billing: {
                minlength: 5,
                maxlength: 20
            },
            cityBilling: {
                minlength: 3,
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
            },
            // service addresses
            address1Shipping: {
                minlength: 5,
                maxlength: 20
            },
            cityShipping: {
                minlength: 3,
                maxlength: 20
            },
            postalCodeShipping: {
                minlength: 2,
                maxlength: 20,
                number: true
            },
            stateShippingOthers: {
                minlength: 2,
                maxlength: 20
            }
        },
        errorElement: "div",
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
              .addClass(errorClass);
          },
          unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
              .removeClass(errorClass);
          },
        submitHandler: function(form, event) {
            event.preventDefault(event);
            if ($("#firstName").prop('disabled') && $("#LastName").prop('disabled')){
                    $("#companyName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                } else if ($("#companyName").prop('disabled')){
                    $("#firstName").rules("add", {
                        required: true,
                        messages: {
                            required: "First name field is required"
                        }
                    });
                    $("#LastName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                    $("#companyName").rules("add", {
                        required: false
                    });
                } else {
                    $("#firstName").rules("add", {
                        required: true,
                        messages: {
                            required: "First name field is required"
                        }
                    });
                    $("#LastName").rules("add", {
                        required: true,
                        messages: {
                            required: "Last name field is required"
                        }
                    });
                    $("#companyName").rules("add", {
                        required: true,
                        messages: {
                            required: "Company name field is required"
                        }
                    });
                }
            $("#enterprise :input").prop("disabled", true);
            $("#enterprise :checkbox").prop("disabled", true);
            $("#createSpin").css("display", "block");
            $("body").css("opacity", "0.7");
            
            setTimeout(function(){
            // adding required fields logic after click on submit button
                $("#enterprise :input").prop("disabled", false);
                $("#enterprise :checkbox").prop("disabled", false);
                if (!$("#billCycle").val()) {
                    $("#billCycle").prop("disabled", true);
                }
                if (!$("#tax").val()) {
                    $("#tax").prop("disabled", true);
                }
                if ($("#firstName").val() || $("#LastName").val()) {
                    $("#companyName").prop("disabled", true);
                } else if ($("#companyName").val() ) {
                    $("#firstName").prop("disabled", true);
                    $("#LastName").prop("disabled", true);
                } else {
                    $("#companyName").prop("disabled", false);
                    $("#firstName").prop("disabled", false);
                    $("#LastName").prop("disabled", false);
                }
                $("#createSpin").css("display", "none");
                $("body").css("opacity", "1");
                $("#corporateEmail").rules("add", {
                    required: true,
                    messages: {
                        required: "Email is required"
                    }
                });
                /*if ($("#select2-countriesBilling-container").val() !== 'United States') {
                    $("#postalCodeBilling").rules("add", {
                        number: false
                    });
                } else {
                    $("#postalCodeBilling").rules("add", {
                        number: true
                    });
                }*/
                
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
                $("#currency").rules("add", {
                    required: true,
                    messages: {
                        required: "Currency is required"
                    }
                });
                $("#ExternalAccountID").rules("add", {
                    required: true,
                    messages: {
                        required: "External Account ID is required"
                    }
                });
                // we should also add/remove some validation for additional address fields
                // in cases it is showing or not
                /*if($("#showShippingEnterprise").is(":checked") && !($("#sameShippingEnterprise").is(":checked"))) {
                    
                } else {

                }*/

                // required logic for state field will be applied
                // only if state relates not to US
                // in this case there is required text field on the page
                // if coutry is US
                // state is filled by default, there will be no possibility
                // to make it empty
                /*if(!($("#state").parent().is(":visible"))) {
                    $("#state").rules("add", {
                        required: true,
                        messages: {
                            required: "State is required"
                        }
                    });
                } else {
                    $("#state").rules("add", {
                        required: false
                    });
                }*/
                if ($("#enterprise").valid()){
                    // here validation from backend should be applied
                    $("#errormessages").parent().removeClass('hidden');
                    $('html, body').animate({
                        scrollTop: $("#errormessages").offset().top + (-40)
                    }, 100);
                    //form.submit();
                } else {
                    // here added behaviors for temporary removal of 'required' errors
                    // this should be done after click on related field
                    $('html, body').animate({
                        scrollTop: $(".error:first").offset().top + (-40)
                    }, 100);
                    $('#corporateEmail').on('focus', function(){
                        $("#corporateEmail").rules("add", {
                            required: false
                        });
                    });
                    $('#firstName').on('focus', function(){
                        $("#firstName").rules("add", {
                            required: false
                        });
                        $("#companyName").rules("add", {
                            required: false
                        });
                    });
                    $('#LastName').on('focus', function(){
                        $("#LastName").rules("add", {
                            required: false
                        });
                        $("#companyName").rules("add", {
                            required: false
                        });
                    });
                    $('#companyName').on('focus', function(){
                        $("#companyName").rules("add", {
                            required: false
                        });
                        $("#firstName").rules("add", {
                            required: false
                        });
                        $("#LastName").rules("add", {
                            required: false
                        });
                    });
                    $('#invoiceType').on('focus', function(){
                        $("#invoiceType").rules("add", {
                            required: false
                        });
                    });
                    $('#accountCategory').on('focus', function(){
                        $("#accountCategory").rules("add", {
                            required: false
                        });
                    });
                    $('#address1Billing').on('focus', function(){
                        $("#address1Billing").rules("add", {
                            required: false
                        });
                    });
                    $('#cityBilling').on('focus', function(){
                        $("#cityBilling").rules("add", {
                            required: false
                        });
                    });
                    $('#postalCodeBilling').on('focus', function(){
                        $("#postalCodeBilling").rules("add", {
                            required: false
                        });
                    });
                    $('#state').on('focus', function(){
                        $("#state").rules("add", {
                            required: false
                        });
                    });
                    $('#ExternalAccountID').on('focus', function(){
                        $("#ExternalAccountID").rules("add", {
                            required: false
                        });
                    });
                    $('#currency').on('focus', function(){
                        $("#currency").rules("add", {
                            required: false
                        });
                        $("#billCycle").rules("add", {
                            required: false
                        });
                        $("#billCycle").click();
                    });
                }
            }, 3000)
        }
    });
});
