$(document).ready(function () {
  var current = 1;
  $('.pre_btn').click(function(){
    event.preventDefault();
    console.log($('#img_show').attr("src"));
    if(current>1){
      current--;
      var site = "img/" + $('#img_show').attr("alt") + "/content" + current + ".jpg";
      $('#img_show').attr("src" , site);
      console.log($('#img_show').attr("src"));
    }
  });

  $('.next_btn').click(function(){
    event.preventDefault();
    console.log($('#img_show').attr("src"));
    if(current<2){
      current++;
      var site = "img/" + $('#img_show').attr("alt") + "/content" + current + ".jpg";
      $('#img_show').attr("src" , site);
      console.log($('#img_show').attr("src"));
    }
  });

  $('.img_list_btn_01').click(function(){
    event.preventDefault();
    var site = $('.img_list_btn_01 img').attr("src");
    console.log(site);
    $('#img_show').attr("src" , site);
    current = 1;
  });

  $('.img_list_btn_02').click(function(){
    event.preventDefault();
    var site = $('.img_list_btn_02 img').attr("src");
    console.log(site);
    $('#img_show').attr("src" , site);
    current = 2;
  });
});