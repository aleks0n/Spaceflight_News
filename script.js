document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.Header_button_minus').onclick = function() {
        document.querySelector('.Header_form_number').stepDown(1);
    }
    document.querySelector('.Header_button_plus').onclick = function() {
        document.querySelector('.Header_form_number').stepUp(1);
    }
    
    
});






