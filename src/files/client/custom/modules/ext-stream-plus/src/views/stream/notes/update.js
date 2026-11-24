define('ext-stream-plus:views/stream/notes/update', ['views/stream/notes/update'], (UpdateNoteStreamView) => {

    return class extends UpdateNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});