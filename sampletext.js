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