define('ext-stream-plus:views/stream/notes/email-sent', ['views/stream/notes/email-sent'], (EmailSentNoteStreamView) => {

    return class extends EmailSentNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});