
/*
 * GET home page.
 */
var canvases = require('dirty')('./data/canvas.db');

exports.view = function(req, res){
  var id = req.params.id;
  var canvas = JSON.parse(canvases.get(id) || "{}");

  var buildedCanvas = {};
  for(var i=0;i<9;i++){
    var item = canvas[i];
    console.log(item);
    buildedCanvas[i] = item ? item.join("\n") : "";
  }

  res.render('canvases/view', {
    title: 'LeanCanvas',
    canvas: buildedCanvas,
    id: id
  });
};

exports.update = function(req, res){
  canvases.set(req.params.id, JSON.stringify(req.body), function(error){
    res.end('保存しました');
  });
};
