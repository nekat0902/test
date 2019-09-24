# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on 'turbolinks:load', ->
  $('#cover_image').click ->
    $('#article_image').click()
    false

  $('#home_top').click ->
    $('html,body').animate({scrollTop: 0}, 500, 'swing');


  $('a[href^="#profile_page"]').click ->
    $('body,html').animate { scrollTop:$('#profile_page') .offset().top}, 500, 'swing'
    false
  return

 $('a[href^="#media_page"]').click ->
   $('body,html').animate { scrollTop:$('#media_page') .offset().top}, 500, 'swing'
   false
 return
