define('ext-stream-plus:views/stream/notes/unrelate', ['views/stream/notes/unrelate'], (UnrelateNoteStreamView) => {

    return class extends UnrelateNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});