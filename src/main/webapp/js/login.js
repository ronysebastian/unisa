var unisa ={};

unisa.login = function() {
	
	var _getContainerData = function(containerDivId) {
		var $container = $(containerDivId +' :input');
		return $container.serialize();
	};
	
	var fieldErrorClass = 'errorfield'
	var _parseJSON = function(data) {
		
		if (data) {
			_reseltfielderror();
			data = $.parseJSON(data);
            var firstEle;
            
 
            
			for ( var field in data.fieldErrors) {
				//var elem = document.getElementsByName(field)[0];
				//elem.focus();
				//debugger;
				 if(!firstEle) {
					 firstEle = field;
				  }
				console.log("field---->"+data.fieldErrors[field]);
				_fielderrorFn(field,data.fieldErrors[field]);
			/*	for(var key in field) {
				    var value = field[key];
				    console.log("value---->"+value);
				}*/
				//_fielderrorFn()
				//break;
			}
			//debugger;
			_fielderrorFocus(firstEle);
			return data;
		}
	};
	
	var _checkError  = function(data, type) {
		 var checkerror = false;
		 var content = $.parseJSON(data)
		 if (content.fieldErrors) {
			 checkerror = true;
         }
		 return checkerror;
	};
	
	var _fielderrorFocus = function (fieldname) {
		var $value = $(":input[name='"+fieldname+"']");
		$value.tooltip('show');
		$value.focus();
	}
	
	var _reseltfielderror = function() {
		$.each( $(":input[class=errorfield]"), function() {
		    console.log("key--->"+this);
		    $(this).removeClass('errorfield');
		});
		 
		
	}
	
	var _fielderrorFn = function(fieldname,errormessage) {
		var $value = $(":input[name='"+fieldname+"']");
		
		$value.addClass(fieldErrorClass);
		
/*		$value.css({
			"background" : "none repeat scroll 0 0 #e8d4d7",
	        "border" : "1px solid #f60000"
        });*/
		//debugger;
	//	$value.focus();
		$value.attr('title',
				errormessage).tooltip({html : true });
	}
	
	return {
		
		doLogin: function(e) {
			//alert("test");
			var inputvalue = _getContainerData('#logincontainer');
		//	alert(inputvalue);
			 $.ajax({
			     type: "POST",
			     url: "../example/validationform.action?struts.enableJSONValidation=true",
			     cache: false,                                                         
			     data: inputvalue,
			 	converters : {
					"* text" : window.String,
					"text html" : true,
					"text json" : _parseJSON,
					"text xml" : jQuery.parseXML
				},
				dataFilter : function(data, type) {
					var ajaxOptions = this;
					if (! _checkError(data)) {
						ajaxOptions.success = undefined;
					}
					return data;
				},
			    
			     success : function (respodata, textStatus, jqXHR) {  
			    	 
			    	// var test = $("#attach_file_div").fileuploader("getUploadedFileKeys");
			    	 
			   /* 	   _getComposeContainerJQueryObj().fadeOut( "slow", function() {
							// Animation complete.
			    		   _getMailListContainerJQueryObj().fadeIn( "slow", function() {
			    			   _pollMailTimer(false);
							});
	
						});*/
			    	 
			    	 console.log("success");
			    	
			    	 
			     },
			 });
			 e.preventDefault();
			 
			
		}
		
	}
	
	
}();