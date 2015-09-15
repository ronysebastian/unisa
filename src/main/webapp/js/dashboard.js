unisa.dashboard = function () {
	
	return {
	   riskManagementDetails : function() {
		   
	    	$.ajax({
			     type: "POST",
			     url: "../example/riskManagementDetails.action",
			     cache: false,                                                         
			 	 converters : {
					"* text" : window.String,
					"text html" : true,
					"text xml" : jQuery.parseXML
				 },
			     
				 success : function (respodata, textStatus, jqXHR) { 
					 var $repsonseDiv = $("#page-wrapper");
					if($repsonseDiv.is(":visible")) {
						$repsonseDiv.hide();
						
					}
                    
				$("#page-wrapper").html(respodata);
			    	 
			    	 $("#page-wrapper").slideDown("slow",function() {
			    		 $("#page-wrapper").show();
			    	 });

			    	 
			    	 console.log("success");
			    	
			    	 
			     },
			     
			     
			    
			 });
		   
	   },
	   
	   qualityManagementDetails : function() {
		   
	    	$.ajax({
			     type: "POST",
			     url: "../example/qualityManagementDetails.action",
			     cache: false,                                                         
			 	 converters : {
					"* text" : window.String,
					"text html" : true,
					"text xml" : jQuery.parseXML
				 },
			     
				 success : function (respodata, textStatus, jqXHR) { 
					 var $repsonseDiv = $("#page-wrapper");
					 
					 if($repsonseDiv.is(":visible")) {
						$repsonseDiv.hide();
						
					 }
                  
				     $("#page-wrapper").html(respodata);
			    	 
			    	 $("#page-wrapper").slideDown("slow",function() {
			    		 $("#page-wrapper").show();
			    	 });

			    }
			     
			 });
		   },
		   
		   complianceManagementDetails : function() {
			   
		    	$.ajax({
				     type: "POST",
				     url: "../example/complianceManagementDetails.action",
				     cache: false,                                                         
				 	 converters : {
						"* text" : window.String,
						"text html" : true,
						"text xml" : jQuery.parseXML
					 },
				     
					 success : function (respodata, textStatus, jqXHR) { 
						 var $repsonseDiv = $("#page-wrapper");
						 
						 if($repsonseDiv.is(":visible")) {
							$repsonseDiv.hide();
							
						 }
	                  
					     $("#page-wrapper").html(respodata);
				    	 
				    	 $("#page-wrapper").slideDown("slow",function() {
				    		 $("#page-wrapper").show();
				    	 });

				    }
				     
				 });
			 },
			 
			 informationManagementDetails : function() {
				   
			    	$.ajax({
					     type: "POST",
					     url: "../example/informationManagementDetails.action",
					     cache: false,                                                         
					 	 converters : {
							"* text" : window.String,
							"text html" : true,
							"text xml" : jQuery.parseXML
						 },
					     
						 success : function (respodata, textStatus, jqXHR) { 
							 var $repsonseDiv = $("#page-wrapper");
							 
							 if($repsonseDiv.is(":visible")) {
								$repsonseDiv.hide();
								
							 }
		                  
						     $("#page-wrapper").html(respodata);
					    	 
					    	 $("#page-wrapper").slideDown("slow",function() {
					    		 $("#page-wrapper").show();
					    	 });

					    }
					     
					 });
				 },
				 
				 resourceManagementDetails : function() {
					   
				    	$.ajax({
						     type: "POST",
						     url: "../example/resourceManagementDetails.action",
						     cache: false,                                                         
						 	 converters : {
								"* text" : window.String,
								"text html" : true,
								"text xml" : jQuery.parseXML
							 },
						     
							 success : function (respodata, textStatus, jqXHR) { 
								 var $repsonseDiv = $("#page-wrapper");
								 
								 if($repsonseDiv.is(":visible")) {
									$repsonseDiv.hide();
									
								 }
			                  
							     $("#page-wrapper").html(respodata);
						    	 
						    	 $("#page-wrapper").slideDown("slow",function() {
						    		 $("#page-wrapper").show();
						    	 });

						    }
						     
						 });
					 },
					 
					 serviceDeliveryManagementDetails : function() {
						   
					    	$.ajax({
							     type: "POST",
							     url: "../example/serviceDeliveryManagementDetails.action",
							     cache: false,                                                         
							 	 converters : {
									"* text" : window.String,
									"text html" : true,
									"text xml" : jQuery.parseXML
								 },
							     
								 success : function (respodata, textStatus, jqXHR) { 
									 var $repsonseDiv = $("#page-wrapper");
									 
									 if($repsonseDiv.is(":visible")) {
										$repsonseDiv.hide();
										
									 }
				                  
								     $("#page-wrapper").html(respodata);
							    	 
							    	 $("#page-wrapper").slideDown("slow",function() {
							    		 $("#page-wrapper").show();
							    	 });

							    }
							     
							 });
						 },
						 
						projectPorfolioDetails : function() {
							   
						    	$.ajax({
								     type: "POST",
								     url: "../example/projectPorfolioDetails.action",
								     cache: false,                                                         
								 	 converters : {
										"* text" : window.String,
										"text html" : true,
										"text xml" : jQuery.parseXML
									 },
								     
									 success : function (respodata, textStatus, jqXHR) { 
										 var $repsonseDiv = $("#page-wrapper");
										 
										 if($repsonseDiv.is(":visible")) {
											$repsonseDiv.hide();
											
										 }
					                  
									     $("#page-wrapper").html(respodata);
								    	 
								    	 $("#page-wrapper").slideDown("slow",function() {
								    		 $("#page-wrapper").show();
								    	 });

								    }
								     
								 });
							 },
	   
	applicationPorfolioDetails : function() {
		   
	    	$.ajax({
			     type: "POST",
			     url: "../example/applicationPorfolioDetails.action",
			     cache: false,                                                         
			 	 converters : {
					"* text" : window.String,
					"text html" : true,
					"text xml" : jQuery.parseXML
				 },
			     
				 success : function (respodata, textStatus, jqXHR) { 
					 var $repsonseDiv = $("#page-wrapper");
					if($repsonseDiv.is(":visible")) {
						$repsonseDiv.hide();
						
					}
                   
				$("#page-wrapper").html(respodata);
			    	 
			    	 $("#page-wrapper").slideDown("slow",function() {
			    		 $("#page-wrapper").show();
			    	 });

			    	 
			    	 console.log("success");
			    	
			    	 
			     }
			     
			     
			    
			 });
	   },
	   
	   dashboardDetils : function() {
		   
	    	$.ajax({
			     type: "POST",
			     url: "../example/dashboardDetails.action",
			     cache: false,                                                         
			 	 converters : {
					"* text" : window.String,
					"text html" : true,
					"text xml" : jQuery.parseXML
				 },
			     
				 success : function (respodata, textStatus, jqXHR) { 
					 var $repsonseDiv = $("#page-wrapper");
					if($repsonseDiv.is(":visible")) {
						$repsonseDiv.hide();
						
					}
                  
				$("#page-wrapper").html(respodata);
			    	 
			    	 $("#page-wrapper").slideDown("slow",function() {
			    		 $("#page-wrapper").show();
			    	 });

			    	 
			    	 console.log("success");
			    	
			    	 
			     },
			     
			     
			    
			 });
		   
	   }
	   
	};
	
}();