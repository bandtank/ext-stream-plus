define('ext-stream-plus:views/stream/notes/email-received', ['views/stream/notes/email-received'], (EmailReceivedNoteStreamView) => {

    return class extends EmailReceivedNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});