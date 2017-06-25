(function($){
    $(document).ready(function(){
        $('iframe').each(function(){
            var portletContent = $(this).parents().filter('div[id*=portletContent_]');
            if (portletContent.length){
              var chanId = $(portletContent).attr('id').split('_')[1]
              var controls = $('#toolbar_'+chanId+' .up-portlet-controls');
              //SD : ajout script maximisation canal target _blank
              $('<a class="up-portlet-control plein_ecran" href="'+this.src+'" target="_blank" title="Ouvrir une nouvelle fenetre" id="openiFrame_'+chanId+'"><span>Ouvrir</span></a>').prependTo($(controls));
            }
        });
    });
})(jQuery);