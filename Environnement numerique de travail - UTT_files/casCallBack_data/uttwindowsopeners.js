
function openWinTreeView (id, title, closable, width, height, className, updateContainerId)	{				  	
  var win = Windows.getWindow(id+'_win');
  if (closable==null) {
    closable=false;
  }
  if (width==null) {
    width=300;
  }
  if (height==null) {
    height=200;
  }
  if (typeof(win)=='undefined') {
	  if (className==null) {
		  className="greenlighting";
	  }
    win = new Window(id+'_win',{className: className, title: title, destroyOnClose:true, recenterAuto:true, resizable:true, closable:closable, minimizable:false, maximizable:false,  minWidth:width, minHeight:height, showEffectOptions: {duration:0.5}});    
		var editorOnClose = { 
			onClose: function(eventName, win) {
				eval(id+'_containerOnCloseUpdate()'); 
				if (updateContainerId != null) {
					eval(updateContainerId+'Update()'); 
				}
			} ,
			onDestroy: function(eventName, win) {
				Windows.removeObserver(editorOnClose);
			}
		};
		Windows.addObserver(editorOnClose);		
		win.setDestroyOnClose();
    win.setZIndex(99999);
    win.setContent(id,true);
    win.showCenter(true);
  } else {
    win.showCenter();
  }
}

function openWin (href, title, closable, width, height, className) {
  var win = Windows.getWindow(title+'_win');
  if (closable==null) {
    closable=false;
  }
  if (width==null) {
    width=300;
  }
  if (height==null) {
    height=200;
  }
  if (typeof(win)=='undefined') {
  	win = new Window(title+'_win',{className: className, title: title, url: href, destroyOnClose:true, recenterAuto:true, resizable:true, closable:closable, minimizable:false, maximizable:false,  minWidth:width, minHeight:height,  showEffectOptions: {duration:0.5}});    
  	win.setZIndex(99999);
  	win.showCenter(true);
  } else {
    win.showCenter();
  }
  
}

function openGenericHRefWin (id, href, title, resizable, closable, minimizable, maximizable, minWidth, width, minHeight, height, className, updateContainerId) {
	  var win = Windows.getWindow(id);
	  if (resizable==null) {
	    resizable=true;
	  }
	  if (closable==null) {
	    closable=true;
	  }
	  if (minimizable==null) {
	    minimizable=false;
	  }
	  if (maximizable==null) {
	    maximizable=false;
	  }
	  if (width==null) {
	    width=300;
	  }
	  if (height==null) {
	    height=400;
	  }
	  if (typeof(win)=='undefined') {
		  if (className==null) {
			  className="greenlighting";
		  }
	  	win = new Window(id,{className: className, title: title, url: href, destroyOnClose:true, recenterAuto:true, resizable:true, closable:closable, minimizable:false, maximizable:false,  minWidth:minWidth, minHeight:minHeight,  width:width, height:height, showEffectOptions: {duration:0.5}});

			var editorOnClose = { 
				onClose: function(eventName, win) {
					if (updateContainerId != null) {
						eval(updateContainerId+'Update()'); 
					}
				} ,
				onDestroy: function(eventName, win) {
					Windows.removeObserver(editorOnClose);
				} 
			};
			Windows.addObserver(editorOnClose);		
			win.setDestroyOnClose();	  	
	  	
	  	win.setZIndex(99999);
	  	win.showCenter(true);
	  } else {
	    win.showCenter();
	  }
}

function openWinSelect (href, id, title, closable, width, height, className, updateContainerId) {
	var win = Windows.getWindow(id);
	//var win = Windows.getWindow(title+'_win');
	if (closable==null) {
	  closable=false;
	}
	if (width==null) {
	  width=300;
	}
	if (height==null) {
	  height=200;
	}
	if (typeof(win)=='undefined') {
		if (className==null) {
	  	className="greenlighting";
	 	}
	 	win = new Window(id,{className: className, title: title, url: href, destroyOnClose:true, recenterAuto:true, resizable:true, closable:closable, minimizable:false, maximizable:false,  minWidth:width, minHeight:height,  showEffectOptions: {duration:0.5}});
		var editorOnClose = { 
			onClose: function(eventName, win) {
	 			eval(id+'_containerOnCloseUpdate()'); 
	 			if (updateContainerId != null) {
	  			eval('parent.'+updateContainerId+'Update()'); 
	   		}
	  	} ,
			onDestroy: function(eventName, win) {
				Windows.removeObserver(editorOnClose);
			} 
	 	};
	 	Windows.addObserver(editorOnClose);  
	 	win.setDestroyOnClose();    
	   
	  win.setZIndex(99999);
	  win.showCenter(true);
	} else {
	   win.showCenter();
	}
}



function openWinSelect2 (id, title, closable, width, height, className, updateContainerId)	{				  	
	  var win = Windows.getWindow(id+'_win');
	  if (closable==null) {
	    closable=false;
	  }
	  if (width==null) {
	    width=300;
	  }
	  if (height==null) {
	    height=200;
	  }
	  if (typeof(win)=='undefined') {
		  if (className==null) {
			  className="greenlighting";
		  }
	    win = new Window(id+'_win',{className: className, title: title, destroyOnClose:true, recenterAuto:true, resizable:true, closable:closable, minimizable:false, maximizable:false,  minWidth:width, minHeight:height, showEffectOptions: {duration:0.5}});    
			var editorOnClose = { 
				onClose: function(eventName, win) {
					//eval(id+'_containerOnCloseUpdate()');
				} ,
				onDestroy: function(eventName, win) {
					eval(id+'_containerOnCloseUpdate()');
					Windows.removeObserver(editorOnClose);
					if (updateContainerId != null) {
						eval(updateContainerId+'Update()'); 
					}
				} 
			};
			Windows.addObserver(editorOnClose);		
			win.setDestroyOnClose();
	    win.setZIndex(99999);
	    win.setContent(id,true);
	    win.showCenter(true);
	  } else {
	    win.showCenter();
	  }
	}