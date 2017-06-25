Object.extend(AjaxSubmitButton, {
	
	partial: function(updateContainerID, formFieldID, options) {
		var optionsCopy = Object.extend(new Object(), options); 
		var formField = $(formFieldID);
		var form = formField.form;
		
		if (form == null) {
			if (options && options['formID']) {
				var formID = options['formID'];
				form = $(formID);
			}
		}
		var queryParams = {};
		queryParams[formField.name] = $F(formField);
		queryParams[AjaxSubmitButton.PartialFormSenderIDKey] = formField.name;
		optionsCopy['parameters'] = Hash.toQueryString(queryParams);
		
		if (updateContainerID == null) {
			AjaxSubmitButton.request(form, null, optionsCopy);
		}
		else {
			AjaxSubmitButton.update(updateContainerID, form, null, optionsCopy);
		}
	},
	
	update: function(id, form, queryParams, options) {
		if (form == null) {
			if (options && options['formID']) {
				var formID = options['formID'];
				form = $(formID);
			}
		}
		var updateElement = $(id);
		if (updateElement == null) {
			alert('There is no element on this page with the id "' + id + '".');
		}
		var finalUrl = AjaxSubmitButton.generateActionUrl(id, form, queryParams, options);
		var finalOptions = AjaxSubmitButton.processOptions(form, options);
		new Ajax.Updater(id, finalUrl, finalOptions);
	},
	
	request: function(form, queryParams, options) {
		if (form == null) {
			if (options && options['formID']) {
				var formID = options['formID'];
				form = $(formID);
			}
		}
		var finalUrl = AjaxSubmitButton.generateActionUrl(null, form, queryParams, options);
		var finalOptions = AjaxSubmitButton.processOptions(form, options);
		new Ajax.Request(finalUrl, finalOptions);
	}
	
});

Object.extend(AjaxBusy, {
	
	register: function(busyClass, busyAnimationElement, watchContainerID, onCreateCallback, onCompleteCallback) {
		Ajax.Responders.register({
			onCreate: function(request, transport) {
	     	var updateContainer = AjaxBusy.requestContainer(request);
	     	if (!watchContainerID || (updateContainer && updateContainer.id == watchContainerID)) {
			  	if (busyClass && updateContainer) {
						updateContainer.addClassName(busyClass);
			   	}
			   	
			   	if (busyAnimationElement && $(busyAnimationElement)) {
			   		Effect.Appear(busyAnimationElement, {duration:0.0, queue:'front'});
			   	}
			   	
			   	if (onCreateCallback) {
			   		onCreateCallback(request, transport);
			   	}
	     	}
		  },
		  
		  onComplete: function(request, transport) {
	     	var updateContainer = AjaxBusy.requestContainer(request);
	     	if (!watchContainerID || (updateContainer && updateContainer.id == watchContainerID)) {
			  	if (busyClass && updateContainer) {
						updateContainer.removeClassName(busyClass);
					}
					
					if (busyAnimationElement && $(busyAnimationElement) && Ajax.activeRequestCount==0) {
						Effect.Fade(busyAnimationElement, {duration:0.5, queue:'end'});
					}
	
			   	if (onCompleteCallback) {
			   		onCompleteCallback(request, transport);
			   	}
			  }
			}
	  });
	}
  
});

var UttAjaxModalDialog = {
	close: function(id) {
		if (id == null || id == "undefined") {
			parent.Windows.closeAll();
		} else {
			var win = Windows.getWindow(id);
			if (win == null || win == "undefined") {
				win = parent.Windows.getWindow(id);
			}
			win.close();
		}
	},
	
	open: function(id) {
		eval("openCAMD_" + id + "()");
	}
	
};

var CAMD = UttAjaxModalDialog;

var UttAjaxWindow = {
	close: function(id) {
		if (id == null || id == "undefined") {
			parent.Windows.closeAll();
		} else {
			var win = Windows.getWindow(id);
			if (win == null || win == "undefined") {
				win = parent.Windows.getWindow(id);
			}
			win.close();
		}
	},
	
	open: function(id) {
		eval("openCAW_" + id + "()");
  	}
	

};
var CAW = UttAjaxWindow;
