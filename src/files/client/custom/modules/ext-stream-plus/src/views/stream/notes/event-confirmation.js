define('ext-stream-plus:views/stream/notes/event-confirmation', ['crm:views/stream/notes/event-confirmation'], (EventConfirmationNoteView) => {

    return class extends EventConfirmationNoteView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});