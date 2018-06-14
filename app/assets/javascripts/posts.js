// Loading Comments via AJAX - Replaced by Remote True

$(function(){

  // $("a.load_comments").on("click", function(e){
    // You just clicked on the Load Comments Link
    // We'd love to use the HREF attribute of that link as the URL for the request
      // Fire some ajax.
          //   $.ajax({
          //     method: "GET",
          //     url: this.href
          //   }).success(function(response) {
      // get a response
      // load that response in HTML of page
          //     $("div.comments").html(response)
      // we want to load data into the DOM
          // }).error(function(notNeeded){
          //   alert("we broke!!!")
          // });

  //the below code is the shorter higher level version of all the above code that is commented out.
////Requesting HTML: ///////////////////////////////
  // $.get(this.href).success(function(response)){
  //   $("div.comments").html(response)
  // }

//// Requesting JSON: //////////////////////////////
  // $.get(this.href).success(function(json){
  //   //clear the OL html in case there are stale comments
  //   var $ol = $("div.comments ol")
  //   $ol.html("")   //emptied the OL
  //
  //   //iterate over each comment within json
  //   json.forEach(function(comment){
  //     //with each comment data, append an LI to the OL with the comment content
  //     $ol.append("<li>" + comment.content + "</li>");
  //   })
  // })
  //
  //   //the following line prevents the defaults!
  //   e.preventDefault();
  })
})

//     // load that response into the HTML of the page.
//   //   e.preventDefault();
//   // })
//
//   $("a.load_comments").on("click", function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })
//
//     e.preventDefault();
//   })
// })


// Submit Comments via AJAX - Soon to be replaced by remote true
// $(function(){
//   $("#new_comment").on("submit", function(e){
//     // 1. we need the URL to submit the POST request too
//     // 2. we need the form data.
//
//     // Low level
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: $(this).serialize();, // either JSON or querystring serializing
//       success: function(response){
//         $("#comment_content").val("");
//         var $ol = $("div.comments ol")
//         $ol.append(response);
//       }
//     });
//
//     // Send a POST request to the correct place that form would've gone too anyway
//     // along with the actual form data.

  $("a.load_comments").on("click", function(e){
    $.ajax({
      url: this.href,
      dataType: 'script'
    })
  })
    e.preventDefault();
  })
});


// SUBMIT COMMENTS VIA AJAX - SOON TO BE REPLACED BY REMOTE TRUE
// $(function(){
//   $("#new_comment").on("submit", function(e){
//     // need URL to submit the post request too
//     // need the form data
//
//     // low level
    // $.ajax({
    //   // type: "POST",
    //   type: ($("input[name='_method']").val() || this.method),
    //   url: this.action,
    //   data: $(this).serialize();
    //   success: function(response){
    //     $("#comment_content").val("");
    //     var $ol = $("div.comments ol")
    //     $ol.append(response);
    //   }
    // });
//     // send POST request to the correct plae form would've gone to anyway along with the actual form data.
//
//
//     e.preventDefault();
//   })
// });
