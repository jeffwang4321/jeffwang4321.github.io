/*============================== SCROLL NAV Tracker =============================*/ 
$(document).ready(function(){
                
    var home= 0;
    var skills= $('#home').height();
    var work= skills+$('#about').height()+$('.skills').height();
    var projects= work+$('#work').height();
    var contact= projects+$('#projects').height();
    $(".main").scroll(function(){
        var scrollPos= $(this).scrollTop();
        if (scrollPos >= home && scrollPos < skills){
            $('#home_nav').css('color','#b93632');
            $('#skills_nav').css('color','white');
            $('#work_nav').css('color','white');
            $('#projects_nav').css('color','white');
            $('#contact_nav').css('color','white');
        }
  
        else if (scrollPos >= skills && scrollPos < work){
            $('#home_nav').css('color','white');
            $('#skills_nav').css('color','#b93632');
            $('#work_nav').css('color','white');
            $('#projects_nav').css('color','white');
            $('#contact_nav').css('color','white');
        }
  
        else if (scrollPos >= work && scrollPos < projects){
            $('#home_nav').css('color','white');
            $('#skills_nav').css('color','white');
            $('#work_nav').css('color','#b93632');
            $('#projects_nav').css('color','white');
            $('#contact_nav').css('color','white');
        } 
  
        else if(scrollPos >= projects && scrollPos < contact){
            $('#home_nav').css('color','white');
            $('#skills_nav').css('color','white');
            $('#work_nav').css('color','white');
            $('#projects_nav').css('color','#b93632');
            $('#contact_nav').css('color','white');
        }
  
        else if(scrollPos >= contact){
            $('#home_nav').css('color','white');
            $('#skills_nav').css('color','white');
            $('#work_nav').css('color','white');
            $('#projects_nav').css('color','white');
            $('#contact_nav').css('color','#b93632');
        }
       });
    });
  
    $(window).resize(function(){
        var home= 0;
        var skills= $('#home').height();
        var work= skills+$('#skills').height();
        var projects= work+$('#work').height();
        var contact= projects+$('#projects').height();
    
        $(".main").scroll(function(){
            var scrollPos= $(this).scrollTop();
            if (scrollPos >= home && scrollPos < skills){
                $('#home_nav').css('color','#b93632');
                $('#skills_nav').css('color','white');
                $('#work_nav').css('color','white');
                $('#projects_nav').css('color','white');
                $('#contact_nav').css('color','white');
            }
        
            else if (scrollPos >= skills && scrollPos < work){
                $('#home_nav').css('color','white');
                $('#skills_nav').css('color','#b93632');
                $('#work_nav').css('color','white');
                $('#projects_nav').css('color','white');
                $('#contact_nav').css('color','white');
            }
        
            else if (scrollPos >= work && scrollPos < projects){
                $('#home_nav').css('color','white');
                $('#skills_nav').css('color','white');
                $('#work_nav').css('color','#b93632');
                $('#projects_nav').css('color','white');
                $('#contact_nav').css('color','white');
            } 
        
            else if(scrollPos >= projects && scrollPos < contact){
                $('#home_nav').css('color','white');
                $('#skills_nav').css('color','white');
                $('#work_nav').css('color','white');
                $('#projects_nav').css('color','#b93632');
                $('#contact_nav').css('color','white');
            }
        
            else if(scrollPos >= contact){
                $('#home_nav').css('color','white');
                $('#skills_nav').css('color','white');
                $('#work_nav').css('color','white');
                $('#projects_nav').css('color','white');
                $('#contact_nav').css('color','#b93632');
            }
        });
  });