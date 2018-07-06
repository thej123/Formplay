window.addEventListener('load', initiate, false);

    function initiate(){
        let form=document.forms[0];
        form.addEventListener('reset', reset, false);
        form.addEventListener('submit', function(){
            // Do not submit the form unless all validations comes back true.
            if(!submit()){
                event.preventDefault();
            }
        });
    }