define('ext-stream-plus:views/stream/notes/relate', ['views/stream/notes/relate'], (RelateNoteStreamView) => {

    return class extends RelateNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});