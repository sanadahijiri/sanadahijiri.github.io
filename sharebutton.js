<script type="text/javascript">
function toFavorite(toURL,toStr){
        if(navigator.userAgent.indexOf("MSIE") > -1){
        //Internet Explorer
                window.external.AddFavorite(toURL,toStr);
        }else if(navigator.userAgent.indexOf("Lunascape") > -1){
        //Lunascape
                alert("[Ctrl] �� [Command]��[G}�{�^���𓯎��ɉ����Ă��������B");
        }else if(navigator.userAgent.indexOf("Flock") > -1){
        //Flock
                window.sidebar.addPanel(toStr,toURL,'');
        }else if(navigator.userAgent.indexOf("Firefox") > -1){
        //Firefox
                window.sidebar.addPanel(toStr,toURL,'');
        }else if(navigator.userAgent.indexOf("Opera") > -1){
        //Opera
                window.open(toURL,'sidebar','title='+toStr);
        }else if(navigator.userAgent.indexOf("Chrome") > -1){
        //Chrome,Safari
                alert("�u�b�N�}�[�N�@�\�������p���������B����[Ctrl] �� [Command]��[D]�{�^���𓯎��ɉ����ƃu�b�N�}�[�N�ł��܂�");
        }else{
        //���̑�
                alert("�u���E�U�t���̃u�b�N�}�[�N�@�\�������p���������B");
        }
}
</script>