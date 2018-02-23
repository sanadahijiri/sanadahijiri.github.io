<style>#sampleBox{width:450px;height:400px;overflow:hidden;background-color:white;text-align:center;line-height:2.5em;font-size:16px;border:transparent 1px solid;border-radius:16px}#sampleText{margin:300px 0}</style>


<script type="text/javascript">
jQuery( function() {
    autoScroll();
} );
var $scrollY = 0;
function autoScroll() {
    var $sampleBox = jQuery( '#sampleBox' );
    $sampleBox.scrollTop( ++$scrollY );
    if( $scrollY < $sampleBox[0].scrollHeight - $sampleBox[0].clientHeight ){
        setTimeout( "autoScroll()", 80 );
    }else{
        $scrollY = 0;
        $sampleBox.scrollTop( 0 );
        setTimeout( "autoScroll()", 80 );
    }
}
</script>

<script type="text/javascript" src="https://www.basho.net/public/pagelist.js"></script>
<script>
<script>pagelist_StartIndex=1;</script>
<script>pagelist_DateFormat="ja";</script>
<script>pagelist_NewHtml="";</script>
<script>pagelist_KugiriHtml=;</script>
<script>
pagelist_OutputCalendar(
    0 // ŠJŽn—j“ú 0=“ú—jŠJŽn 1=ŒŽ—jŠJŽn
);
</script>