    //                          LIST(TABLE) FORM                   //

    // Update the corresponding Subtotals and Category Subtotal
    function update_subtotals(change_location, static_location, amount, subtotal_location, new_value, old_value){
        
        // Update Item total price
        let new_price = roughScale(new_value) * roughScale(amount);
        document.getElementById(change_location).value = new_price;
        
        // Update the Subtotal
        let static_price = document.getElementById(static_location).value;
        static_price = roughScale(static_price);
        document.getElementById(subtotal_location).value = new_price + static_price;

        update_shipping(new_value, old_value);
    }

    // Update the shipping price ($5 per item)
    function update_shipping(new_value, old_value){

        let price_for_each_item = 5;
        let current_shipping_price = document.my_form.shipping.value;
        current_shipping_price = roughScale(current_shipping_price);

        current_shipping_price += (roughScale(new_value)*5 - roughScale(old_value)*5);
        document.my_form.shipping.value = current_shipping_price;

        update_everyone(current_shipping_price);
    }
    
    // Update Totals, Sales and Grand total
    function update_everyone(arg){

        let subtotal_one = document.my_form.subtotal_one.value;
        let subtotal_two = document.my_form.subtotal_two.value;
        let subtotal_three = document.my_form.subtotal_three.value;

        subtotal_one = roughScale(subtotal_one);
        subtotal_two = roughScale(subtotal_two);
        subtotal_three = roughScale(subtotal_three);

        total = subtotal_one + subtotal_two + subtotal_three;

        document.my_form.total_one.value = total;
        document.my_form.sales_tax.value = total*0.0825;
        document.my_form.total_two.value = total*1.0825;
        document.my_form.grand_total.value = (total*1.0825 + arg);
    }

    // Parses string to integer while returning zero for any NaN or negative inputs
    function roughScale(x) {
        let parsed = parseInt(x);
        if (isNaN(parsed) || parsed < 0) { return 0 }
        return parsed;
    }


    // -------------------------------------------------------------- //