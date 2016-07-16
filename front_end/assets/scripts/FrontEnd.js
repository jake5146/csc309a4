/**************************************New JQuery Lib Code*****************************************/

//once the document has loaded
$.noConflict();

//Replace all $ with jQuery

$(document).ready
(
    function()
    {
         //Choose a random banner for the front page everytime
         var BannerIndex = Math.floor(Math.random() * 2) + 1 ;
         var imageUrl = './assets/images/Banner-' + BannerIndex + '.jpg';
         
         //Set a random banner
         jQuery('.BannerContent-Wrapper').css('background-image', 'url(' + imageUrl + ')');
    }

);




/************************************OLD JQuery Lib Code*****************************************/

//  When you use jQuery.noConflict(), it deletes the "$" global variable.
//  When you use jQuery.noConflict(true), it also deletes the "jQuery" global variable.
var jQuery_old = $.noConflict(true);

//Replace all $ with jQuery_old

jQuery_old(document).ready
(
     function()
     {
         //Code for the Date picker on the index.html page
         //Show the datepicker UI
         jQuery_old( "#datepicker" ).datepicker({
                                       showOn: "button",
                                       buttonImage: "./assets/images/calendar.svg",
                                       buttonImageOnly: true,
                                       buttonText: "Select date",
                                       dateFormat: 'DD, MM d',  //The date format to be returned (Ex: Friday, July 10
                                       onSelect: function(dateText, inst) {
                                                                            //When clicked, update the date on top of the events
                                                                            jQuery_old('#EventDate').text( dateText.toUpperCase() );
                                                
                                                
                                                                            //Load new corresponding events from the DB
                                                
                                                                            //console.log(dateText);
                                                                          },
                                        minDate: 0  //Users can only see future events, not past
                                                
                                                
                                                });
 
         //Set datepicker option animations
         jQuery_old( "#datepicker" ).datepicker("option", "showAnim", 'fadeIn');
 
 
         //When we resize the window, make the calendar be positioned appropriately
         jQuery_old(window).resize(function()
                                  {
                                    //Make the new position be the position of the calendar icon trigger
                                    jQuery_old('#ui-datepicker-div').css('top',   jQuery_old('.ui-datepicker-trigger').position().top );
                                    jQuery_old('#ui-datepicker-div').css('left',  jQuery_old('.ui-datepicker-trigger').position().left );
                                  }
                          );
 
     }
 
 
 
 

);






















