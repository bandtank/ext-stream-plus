define('ext-stream-plus:views/stream/notes/status', ['views/stream/notes/status'], (StatusNoteStreamView) => {

    return class extends StatusNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});