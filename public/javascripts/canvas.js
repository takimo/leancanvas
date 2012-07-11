Namespace()
.use('brook.dom.compat dataset')
.apply(function(ns){
  var button = $('a');
  var id = $('#id');

  button.click(function(event){
    var data = {};
    var items = $('.item');
    $.each(items, function(index, item){
      var dataset = ns.dataset(item);
      var lines = item.outerText.split('\n');
      var filtered = lines.filter(function(line){
        return !!line;
      });
      data[dataset.label] = filtered;
    });
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/canvases/update/" + id.val(),
      data: data,
      success: function(msg){
        alert( "Data Saved: " + msg );
      }
    });
  });
});
