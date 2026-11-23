define('ext-stream-plus:views/stream/notes/create-related', ['views/stream/notes/create-related'], (CreateRelatedNoteStreamView) => {

    return class extends CreateRelatedNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});