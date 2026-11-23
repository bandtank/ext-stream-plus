define('ext-stream-plus:views/stream/notes/post', ['views/stream/notes/post'], (PostNoteStreamView) => {

    return class extends PostNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});