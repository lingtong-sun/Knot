$(document).ready(function() {
    initializePage();
    $(".fullheight").height($(document).height());
    
    $(window).resize(function(){
        $(".fullheight").height($(document).height());
    });
});


function initializePage() {

    $('#art1').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeArt();  
    });

     $('#art2').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeArt();  
    });

      $('#art3').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeArt();  
    });


    $('#realface').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        showBoth(true);  
    });

   

    $('.collapsed_cs').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeArt();  
    });

    $('#paintface').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        showBoth(false);  
    });

    $('#project1').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeCS();  
    });

    $('#project2').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

        enlargeCS();  
    });

    $('#home1').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

       showBoth(true);
    });

    $('#home2').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

       showBoth(false);
    });

    $('#art_transition').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

       showArt();
    });

    $('#cs_transition').click(function(event) {
        event.preventDefault();
        console.log("CLICK");

       showCS();
    });
}


function showArt() {
     $('#artDiv').toggleClass('col-md-1 col-md-10');
     $('#csDiv').toggleClass('col-md-10 col-md-2');

     $('#csDiv').css("padding-left", "30px");
     $('#art_list').removeClass('hide');
    // $('#project1_wrapper').css("padding-left", "0px");
    // $('#project1_wrapper').css("padding-right", "0px");
    // $('#project2_wrapper').css("padding-left", "0px");
    // $('#project2_wrapper').css("padding-right", "0px");

    $('.art_wrapper').css("display", "none");
    $('.project_wrapper').css("display", "none");
    


    $('.ti').css("display", "none");
    $('#realface').css("display", "none");
    $('#paintface').css("display", "");
    $('#csDiv').addClass('collapsed_cs');
    $('#artDiv').removeClass('collapsed_art');

    $('#art_content').removeClass('hide');
    $('#cs_content').addClass('hide');
    $('#project_list').addClass('hide');
}

function enlargeArt() {
    $('#artDiv').toggleClass('col-md-10 col-md-6');             
    $('#csDiv').toggleClass('col-md-6 col-md-2');

    $('#csDiv').css("padding-left", "30px");
    $('#art_list').removeClass('hide');
    // $('#project1_wrapper').css("padding-left", "0px");
    // $('#project1_wrapper').css("padding-right", "0px");
    // $('#project2_wrapper').css("padding-left", "0px");
    // $('#project2_wrapper').css("padding-right", "0px");

    $('.art_wrapper').css("display", "none");
    $('.project_wrapper').css("display", "none");
    


    $('.ti').css("display", "none");
    $('#realface').css("display", "none");
    $('#paintface').css("display", "");
    $('#csDiv').addClass('collapsed_cs');
    $('#artDiv').removeClass('collapsed_art');

    $('#art_content').removeClass('hide');
    $('#cs_content').addClass('hide');
    $('#project_list').addClass('hide');
}

function showCS() {
    $('#artDiv').toggleClass('col-md-10 col-md-1');             
    $('#csDiv').toggleClass('col-md-2 col-md-11');
    $('#realface').css("display", "");
    // $('#art1_wrapper').css("padding-left", "0px");
    // $('#art1_wrapper').css("padding-right", "0px");
    // $('#art2_wrapper').css("padding-left", "0px");
    // $('#art2_wrapper').css("padding-right", "0px");
    // $('#art3_wrapper').css("padding-left", "0px");
    // $('#art3_wrapper').css("padding-right", "0px");

    $('.project_wrapper').css("display", "none");
    $('.art_wrapper').css("display", "none");
    $('.ti').css("display", "none");
    $('#paintface').css("display", "none");
    $('#artDiv').addClass('collapsed_art');
    $('#csDiv').removeClass('collapsed_cs');

    $('#project_list').removeClass('hide');
        $('#art_list').addClass('hide');
    $('#art_content').addClass('hide');
    $('#cs_content').removeClass('hide');

}

function enlargeCS() {
    $('#artDiv').toggleClass('col-md-6 col-md-1');             
    $('#csDiv').toggleClass('col-md-6 col-md-11');
    $('#realface').css("display", "");
    // $('#art1_wrapper').css("padding-left", "0px");
    // $('#art1_wrapper').css("padding-right", "0px");
    // $('#art2_wrapper').css("padding-left", "0px");
    // $('#art2_wrapper').css("padding-right", "0px");
    // $('#art3_wrapper').css("padding-left", "0px");
    // $('#art3_wrapper').css("padding-right", "0px");

    $('.project_wrapper').css("display", "none");
    $('.art_wrapper').css("display", "none");
    $('.ti').css("display", "none");
    $('#paintface').css("display", "none");
    $('#artDiv').addClass('collapsed_art');
    $('#csDiv').removeClass('collapsed_cs');

    $('#project_list').removeClass('hide');
        $('#art_list').addClass('hide');
    $('#art_content').addClass('hide');
    $('#cs_content').removeClass('hide');
}

function showBoth(fromLeft) {

    $('#csDiv').removeClass('collapsed_cs');    
    $('#artDiv').removeClass('collapsed_art');
    $('#project_list').addClass('hide');
        $('#art_list').addClass('hide');
    if (fromLeft) {
        $('#artDiv').addClass('col-md-6');
        $('#artDiv').removeClass('col-md-1'); 
        $('#csDiv').addClass('col-md-6');
        $('#csDiv').removeClass('col-md-11');         
    } else {
        $('#artDiv').addClass('col-md-6');
        $('#artDiv').removeClass('col-md-10');       
        $('#csDiv').addClass('col-md-6');
        $('#csDiv').removeClass('col-md-2');         
    }
    
    $('#art_content').addClass('hide');
    $('#cs_content').addClass('hide');
    $('#csDiv').css("padding-left", "0px");
    // $('#art1_wrapper').css("padding-left", "0px");
    // $('#art1_wrapper').css("padding-right", "0px");
    // $('#art2_wrapper').css("padding-left", "0px");
    // $('#art2_wrapper').css("padding-right", "0px");
    // $('#art3_wrapper').css("padding-left", "0px");
    // $('#art3_wrapper').css("padding-right", "0px");


    $('.project_wrapper').css("display", "");
    $('.art_wrapper').css("display", "");
    $('.ti').css("display", "");
    $('#paintface').css("display", "");
    $('#realface').css("display", "");

}