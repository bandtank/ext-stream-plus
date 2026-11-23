define('ext-stream-plus:views/stream/notes/assign', ['views/stream/notes/assign'], (AssignNoteStreamView) => {

    return class extends AssignNoteStreamView {
 
         afterRender() {
             super.afterRender();
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});