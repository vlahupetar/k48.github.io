$(document).ready(function(){
    // enterprise form
    $("#billCycle").prop("disabled", true);
    $("#currency").prop("disabled", true);
    $("#accountCategory").prop("disabled", true);
    $("#paymentTerm").prop("disabled", true);
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
    $('.desc-link').click(function(){
        var $this = $(this);
        var imageUrlCommon = "assets/add_comment.png";
        var imageUrlRemove = "assets/del_comment.png";
        if ($this.hasClass('phone-desc-add')) {
            $this.removeClass('phone-desc-add');
            $this.addClass('phone-desc-del');
            $this.next().removeClass('hidden');
        } else {
            $this.addClass('phone-desc-add');
            $this.removeClass('phone-desc-del');
            $this.next().addClass('hidden');
        }
    });
    $('.desc-remove').click(function(){
        var $this = $(this);
        // phone
        $this.parent().addClass('hidden');
        var case1 = $('.phone').hasClass('hidden');
        var case2 = $('.phone1').hasClass('hidden');
        var case3 = $('.phone2').hasClass('hidden');
        if (!(case1 && case2) || !(case2 && case3) || !(case1 && case3)) {
            $(".addPhone").removeClass('hidden');
        }
        if ((case1 && case2) || (case2 && case3) || (case1 && case3)) {
            $(".desc-remove").addClass('hidden');
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
            $('#sameShippingEnterprise').parent().removeClass('hidden');
            $('#shippingBlockEnterprise').removeClass('hidden');
        } else {
            $('#sameShippingEnterprise').parent().addClass('hidden');
            $('#shippingBlockEnterprise').addClass('hidden');
        }
    });
    $('#showServiceEnterprise').click(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('#sameServiceEnterprise').parent().removeClass('hidden');
            $('#serviceBlockEnterprise').removeClass('hidden');
        } else {
            $('#sameServiceEnterprise').parent().addClass('hidden');
            $('#serviceBlockEnterprise').addClass('hidden');
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
    });

    // showing additional phone number in case it is needed
    $('.addPhone').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var case1 = $('.phone').hasClass('hidden');
        var case2 = $('.phone1').hasClass('hidden');
        var case3 = $('.phone2').hasClass('hidden');
        if (case1 && case2) {
            $('.phone').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.removeClass('hidden');
        } else if (case2 && case3) {
            $('.phone1').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.removeClass('hidden');
        } else if (case1 && case3)  {
            $('.phone').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.removeClass('hidden');
        } else if (case1) {
            $('.phone').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.removeClass('hidden');
        } else if (case2) {
            $('.phone1').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.removeClass('hidden');
        } else {
            $('.phone2').removeClass('hidden');
            $('.desc-remove').removeClass('hidden');
            $this.addClass('hidden');
        }
        
    });

    // autocomplete countries and states
    $(".js-example-basic-single").select2();

    // temp remove of selection arrow
    // it doesn't match to default browser styles

    // select countries and states for USA
    $('#countriesBilling').on('change', function(){
        if ($("#select2-countriesBilling-container").text() !== 'United States') {
            $('#state').parent().removeClass('hidden');
            $('#statesUS').parent().addClass('hidden');
        } else {
            $('#state').parent().addClass('hidden');
            $('#statesUS').parent().removeClass('hidden');
        }
    });
    $('#countriesService').on('change', function(){
        if ($("#select2-countriesService-container").text() !== 'United States') {
            $('#stateServiceOthers').parent().removeClass('hidden');
            $('#statesUSService').parent().addClass('hidden');
        } else {
            $('#stateServiceOthers').parent().addClass('hidden');
            $('#statesUSService').parent().removeClass('hidden');
        }
    });
    $('#countriesShipping').on('change', function(){
        if ($("#select2-countriesShipping-container").text() !== 'United States') {
            $('#stateShippingOthers').parent().removeClass('hidden');
            $('#statesUSShipping').parent().addClass('hidden');
        } else {
            $('#stateShippingOthers').parent().addClass('hidden');
            $('#statesUSShipping').parent().removeClass('hidden');
        }
    });
    // Bill Cycle changes depending on currency selected value
    $('#currency').on('change', function(){
        if ($("#currency").val() === 'USD') {
            $('#billCycle').prop('disabled', false);
            $('#billCycle').val('SomeTestDataUSD');
        } else if ($("#currency").val() === 'EU') {
            $('#billCycle').val('SomeTestDataEU');
            $('#billCycle').prop('disabled', false);
        } else {
            $('#billCycle').val('');
            $('#billCycle').prop('disabled', true);
        }
    });
    // currency changes depending on bill cycle selected value
    $('#billCycle').on('change', function(){
        if ($("#billCycle").val() === 'SomeTestDataUSD') {
            $('#currency').val('USD');
        } else {
            $('#currency').val('EU');
        }
    });
    $("#enterprise").validate({
        onfocusout: function(element) {
            this.element(element);
        },
        //focusCleanup: true,
        //onkeyup: false,
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
                minlength: 2,
                maxlength: 20
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
        submitHandler: function(form, event) {
            event.preventDefault(event);
            $("#enterprise :input").prop("disabled", true);
            $("#enterprise :checkbox").prop("disabled", true);
            $("#createSpin").css("display", "block");
            $("body").css("opacity", "0.7");
            
            setTimeout(function(){
            // adding required fields logic after click on submit button
                $("#enterprise :input").prop("disabled", false);
                $("#enterprise :checkbox").prop("disabled", false);
                $("#createSpin").css("display", "none");
                $("body").css("opacity", "1");
                $("#corporateEmail").rules("add", {
                    required: true,
                    email: false,
                    messages: {
                        required: "Email is required"
                    }
                });
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
                if(!($("#state").parent().is(":visible"))) {
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
                }
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
                    $('#corporateEmail').on('focusout', function(){
                        $("#corporateEmail").rules("add", {
                            required: false,
                            email: true
                        });
                    });
                    $('#corporateEmail').on('focus', function(){
                        $("#corporateEmail").rules("add", {
                            email: false
                        });
                    });
                    $('#firstName').on('focus', function(){
                        $("#firstName").rules("add", {
                            required: false
                        });
                    });
                    $('#LastName').on('focus', function(){
                        $("#LastName").rules("add", {
                            required: false
                        });
                    });
                    $('#billCycle').on('focus', function(){
                        $("#billCycle").rules("add", {
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
                }
            }, 3000)
        }
    });
});