
function changeBodyContent(){
    $.ajax({
        url: '/randomtime',
        success: function(res){
            $('body').text(res);
        }
    })
}