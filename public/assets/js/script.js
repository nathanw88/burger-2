$(".devour-form").on("click", function(event){
  event.preventDefault()
  var id = $(".burger_id").val()
  
  $.ajax("/burgers/update/" + id, {type: "PUT"}).then(function(res){
    console.log("what")
    window.location.reload(true)
  })
  // window.location.reload(true)
})
