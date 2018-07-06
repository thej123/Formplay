//                  SUBMISSION FORM                                //

    // Go through each input and send it for validation
    function submit(){
        let my_elements = document.forms[0]
        let the_length = my_elements.elements.length
        for (i=0; i < the_length; i++ ){
            if (!(test(my_elements.elements[i])))
                return false;
        }
        return true;
    }

    // Run validation on the input
    function test(input){
        if (input.validity && !input.validity.valid){
            if (input.validity.valueMissing){
                alert(input.name + " must be entered.")
            } else if (input.validity.typeMismatch){
                alert("Please enter an email address.");
            } else {
                alert(input.name + "Value is invalid.");
            }
            bring_focus(input);
            return false;
        }
            
        // check specifically for expiry validation and return accordingly.
        return input.name == "ccexpire" ? check_expiry(input) : true;
    }

    // Bring the cursor to the input where the error occured
    function bring_focus(arg){
        arg.focus();
        arg.select();
    }

    // Check Credit Card expiry towards todays date
    function check_expiry(arg){
        let now = new Date();
        let month = now.getMonth()+1;
        let year = now.getFullYear();
        if ( year > parseInt(arg.value.substring(3,))){
            alert("Expiry date has to be in future.");
            bring_focus(arg);
            return false
        }
        else if ( year == parseInt(arg.value.substring(3,))){
            if (month >= parseInt(arg.value.substring(0, 2))){
                alert("Expiry date has to be in future.");
                bring_focus(arg);
                return false
            }
        }
        return true;
    }

    // Reset the form to original content
    function reset() {
        alert('The form will be reset.');
    }