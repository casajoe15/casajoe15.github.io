//Variable to track number of steps
var totalsteps = 5;

//track which step should be displayed
var currentstep = 0;
//store the html of each slide
var currentslide;

$(function() {
  $('.totalsteps').html(totalsteps);

//hide the steps
$('.steps li, .end, .controls, #prev').hide();

});

//click events
$('#begin').on('click', function(){
  //do something here
  $('.welcome').hide();
  currentstep = 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step ' + currentstep);
});

//click on Next
$('#next').on('click', function(){
  if(currentstep != totalsteps){
 $(currentslide).hide();
 currentstep++;
 currentslide = $('#step' + currentstep);
 $(currentslide).fadeIn(1000);
 $('h2').html('Step ' + currentstep);
 }
 if(currentstep == totalsteps){
   $('#next').hide();
 }
 if(currentstep != 1){
   $('#prev').show();
 }
});

//click on prev
$('#prev').on('click', function(){

 $(currentslide).hide();
 currentstep--;
 currentslide = $('#step' + currentstep);
 $(currentslide).fadeIn(1000);
 $('h2').html('Step ' + currentstep);

 if(currentstep != totalsteps){
   $('#next').show();
 }
 if(currentstep == 1){
   $('#prev').hide();
 }
});

$('#finish').on('click', function(){
//hide everthing again
 $('.steps li, .end, .controls, #prev').hide();
 $('.end').fadeIn(1000)
});

$('.stepimg').on('click', function(){
  $(this).css('width','100%');
});

$('h2').on('mouseover', function(){
  $(this).css('color','red');
});

$('h2').on('mouseleave', function(){
  $(this).css('color','blue');
});

$('#end').on('click', function(){
  location.reload();
});
