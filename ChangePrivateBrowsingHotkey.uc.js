(function(){
  _ucUtils.registerHotkey(
  {
    id: "testKey",
    key: "n",
    modifiers: "Ctrl br Shift",

  },
  function(win,hotkey){
	document.getElementById("Tools:PrivateBrowsing").doCommand();
  });
})();
