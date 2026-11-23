define('ext-stream-plus:views/stream/notes/create', ['views/stream/notes/create'], (CreateNoteStreamView) => {

    return class extends CreateNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});