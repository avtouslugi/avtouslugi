/*

[Main Script]

Project: Angfuzsoft
Version: 1.0
Author : mechon.com

*/
;(function($){
    "use strict";
/* ------------------------------------------------------------------------- *

    * Mail Chimp ajax

    * ------------------------------------------------------------------------- */

    var $widgetsubscribeForm = $('form.footer-newsletter');

    // Subscribe Shortcode MailChimp ajax
    $widgetsubscribeForm.on('submit',function(e){
        let $emailAdd = $(this).find('input[type="email"]').val();
        $.ajax({
            type: 'POST',
            url: mechonajax.action_url,
            data:{
                sectsubscribe_email: $emailAdd,
                security: mechonajax.nonce,
                action: 'mechon_subscribe_ajax'
            },

            success: function(data){
                $('form.footer-newsletter input[type="email"]').val('');
                $('.footer-newsletter').append(data);
            },

            error: function(){
                $('.footer-newsletter').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');

            }
        });
        e.preventDefault();
    });

})(jQuery);