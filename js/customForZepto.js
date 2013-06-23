/*	Responsive Aeon Grid v2.0
	Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	Licensed under GPL license, http://www.gnu.org/licenses/gpl-3.0-standalone.html
	
*/



//Basic script for Responsive navigation


//Add your scripts here
(function() {
    
        $("#nav").before('<div id="menu"> <span>&#9776</span> </div>');

        $("#menu").click(function(){
            $("#nav").animate({
                height: 'toggle'
            }).css('zIndex', '1000');
        });

        $(window).resize(function(){ 
            if(window.innerWidth > 768) { 
                $("#nav").removeAttr("style");
            } 
        });
});




//Accordion simple function
    (function () {
        $('.Rbcontent').hide();

            $('.Rbaccordion').on('click', function () {
                $('.Rbaccordion').removeClass('Rbactive');
                $(this).addClass('Rbactive');
                
                $('.Rbcontent').slideUp('slow');

                    if($(this).next().is(':hidden') == true) {
                        $(this).next().slideDown('slow');

                    }
            });
            //Add some style
            $('.Rbaccordion').css('cursor','pointer');
    });


    (function(){
        $.extend($.fn, {
            Rbaccordion: function(){
                
                $('.RbaccordionHeading').on('click', function() {
                    $('.RbaccordionHeading').removeClass('Rbactive');
                        $('.Rbcontent').slideUp();
                   
                        if($(this).next().is(':hidden') == true) {
                            
                            $(this).addClass('Rbactive');
                                  
                                $(this).next().slideDown();
                        } 
    
                });
                      
                $('.Rbcontent').hide();
            }
        })
    })(window.jQuery || window.Zepto);

    $('.accordion').Rbaccordion();
















    // tabs

    (function(){
        $.extend($.fn, {
            Rbtabs: function(){

                var container = $(this);

                $(this).find('div').eq(0).addClass('listTabs');
                $(this).find('div').eq(1).addClass('contentTabs');

                var tabsList = '.listTabs';
                var tabContent = '.contentTabs';
                    
                    $(tabContent + ' div').hide();
                    $(tabContent + ' div:first-child').show();
                
                $(tabsList + ' a').on('click', function() {           
                    $(tabsList + ' a').removeClass('selected');
                    $(this).addClass('selected');

                    $(tabContent + ' div').hide();
                    
                    $(tabContent +  ' ' + $(this).attr('href')).show();
                    return false;
                }); 
            }
        })
    })(window.jQuery || window.Zepto);

    $('.tabs').Rbtabs();
