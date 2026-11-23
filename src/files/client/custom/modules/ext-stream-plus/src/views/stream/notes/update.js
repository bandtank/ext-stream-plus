define('ext-stream-plus:views/stream/notes/update', ['views/stream/notes/update'], (UpdateNoteStreamView) => {

    return class extends UpdateNoteStreamView {
 
         afterRender() {
             super.afterRender();
            this.$el.find('.details').removeClass('hidden');
            this.$el.find('.fields').addClass('hidden');
            this.$el.find('[data-action="expandDetails"] .fas')
                .toggleClass('fa-chevron-down fa-chevron-up');
            $("div.stream-date-container a span").text(function() {
                return $(this).attr('title');
            });
         }
     }
});