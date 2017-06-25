 function removeHintText(fieldId){
  	var field = document.getElementById(fieldId);
  	var defaultValue = field.getAttribute('defaultValue');
	    if (defaultValue == field.value) {	    	
	    	field.value = '';
	    }
	}
	
  function putHintText(fieldId){
  	var field = document.getElementById(fieldId);
  	var defaultValue = field.getAttribute('defaultValue');
		if (field.value == '') {	    	
	    	field.value = defaultValue;
	    }
	}