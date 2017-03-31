$(document).ready(function() {
   Stripe.setPublishableKey($('meta[name="stripe-key"]').attr("content"));
   // watch for a form submission
   $('#form-submit-btn').click(function(event) {
       event.preventDefault();
       $('input[type=submit]').prop('disabled', true);
       var error = false;
       var ccNum = $('#card_number').val();
       var cvcNum = $('#card_code').val();
       var expMonth = $('#card_month').val();
       var expYear = $('#card_year').val();
       
       if (!error) {
           // Get the Stripe token:
           Stripe.createToken({
               number: ccNum,
               cvc: cvcNum,
               exp_month: expMonth,
               exp_year: expYear
           }, stripeResponseHandler);
       }
       return false;
   });
   
   function stripeResponseHandler(status, response) {
       // Get a reference to the fase:
       var f = $('#new_user');
       var token = response.id;
       appendToken = "<input type='hidden' name='user[stripe_card_token]' value='" + token + "' />";
       f.append(appendToken);
       f.get(0).submit();
   }
});