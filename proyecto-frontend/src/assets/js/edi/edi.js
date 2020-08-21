function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
  idoc.write(editor.getValue());
  idoc.write('<style>'+editor2.getValue()+'</style>');
  idoc.write('<script>'+editor3.getValue()+'</script>');
	idoc.close();
}

function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.session.setMode('ace/mode/html');
  editor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>
<body>
<button onclick="foo()">click</button>
</body>

</html>`,1); //1 = moves cursor to end
  window.editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/twilight");
  editor2.session.setMode("ace/mode/css");
  editor2.setValue(`body
  {
    background-color: ;
    color: ;
  }`,1);
  window.editor3 = ace.edit("editor3");
  editor3.setTheme("ace/theme/twilight");
  editor3.session.setMode("ace/mode/javascript");
  editor3.setValue(`function foo() {
console.log('hola mundo');
}`,1);
  editor.getSession().on('change', function() {
    update();
    
  });
  editor2.getSession().on('change', function() {
    update();
    
  });
  editor3.getSession().on('change', function() {
    update();
    
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "16pt"
  });
  editor2.focus();
  
  
  editor2.setOptions({
    fontSize: "16pt"
  });
  editor3.focus();
  
  
  editor3.setOptions({
    fontSize: "16pt"
  });


}



setupEditor();
update();