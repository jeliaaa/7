$(document).ready(function(){
    $(".team-member").click(function(){
        const memberId = $(this).data('member-id');
        const memberName = $(this).find('h2').text();
        const memberImg = $(this).find('img').attr('src');
        const memberRole = $(this).find('p').text();

        $('#model-title').text(memberName);
        $('#model-img').attr('src', memberImg);
        $('#model-description').text(`Our team member ${memberName} is, ${memberRole}.`);
        $('#model').fadeIn(300);
    });
    $('#close-btn', '#model').click(function(e){
        if(e.target == this){
            $('#model').fadeOut(300);
        }
    })
})