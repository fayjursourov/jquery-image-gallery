/**
 * Created by root on 11/12/15.
 */

$(document).ready(function(){
    $(".sidbar_img").click(function(){
        //$("img").hide();
        var thumb = $(this);
        var img = thumb.data('img');
        var bw = 'bw_' + img;
        var img_path = 'img/' + bw;
        $('#display-img').attr('src', img_path);
    });
});


$(document).ready(function(){
    $(".show-img").hover(function(){
        var show = $(this);
        var img = show.attr("src");
        var img_path = img.replace("bw", "color");
        $('#display-img').attr('src', img_path);
    });
});

$(document).ready(function(){
    $(".show-img").mouseout(function(){
        var show = $(this);
        var img = show.attr("src");
        var img_path = img.replace("color", "bw");
        $('#display-img').attr('src', img_path);
    });
});