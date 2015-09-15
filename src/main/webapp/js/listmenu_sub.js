(function($) {
 
	var varBadge = "badge", lmDataKey = "lmData";
    
 var _getContainerKey = function(key) {
  return key + "Container";
 };
 
 $.widget("cx.listmenu",
     {
      options : {},
      _lmData : function(paramObject) {
       var key = paramObject.key, value = paramObject.value, type = paramObject.type;
       var data = this[lmDataKey];
       if (type) {
        if (!data[type]) {
         data[type] = {};
        }
        data = data[type];
       }
       if (value) {
        data[key] = value;
       } else {
        return data[key];
       }
      },
      _create : function() {
       var self = this, options = self.options, $element = self.element, menuClickHandler;
       var $menu, tabIndex = options.startTabIndex, $icon, $name, $badge,$outerAnchortag;
       /*var $menuContainer = $("<div>", {
        "class" : "list-group"
       });*/
       this[lmDataKey] = {};
       $.cx.listmenu.instances.push($element);
       $.each(options.menus,
           function(index, value) {
            $menu = $("<li>");
            
            $outerAnchortag = $("<a>",{
            	 href : '#'	
            });
            
            $outerAnchortag.html(value.name);
            
      /*      $icon = $("<span>", {
             "class" : value.cssclassname
            });*/
            
            $name = $("<span>").html(
              value.name);
 /*           $badge = $(
              "<span>",
              {
               "class" : "badge pull-right test"
              });*/
/*            if (tabIndex) {
             $menu.attr("tabindex",
               tabIndex++);
            }*/
            if (value.click) {
             menuClickHandler = function(clickHandler,$menuContainer,$menu) {
                   
            	 return function(event) {
                  /* if (CX.util.isClickEvent(event)) { */
                     $menuContainer.children("li.active").removeClass("active");
                     $menu.addClass("active");
                     $.proxy(clickHandler,self)(event);
                     /* }*/
              };
             }(value.click,$element,$menu);
             self._on(false,$menu, {
                  "click" : menuClickHandler,
                  "keydown" : menuClickHandler
                 });
            }
            
            $menu.append($outerAnchortag);
            
            if (value.submenu != undefined) {
            	
            	if (value.submenu.menuul) {
            		 $submenuul = $("<ul>", {
                        "class" : value.submenu.menuul.classname
                    });
            	}
            	
            	$menu.append($submenuul);
            	
            	if (value.submenu.menuli) {
            		   $.each(value.submenu.menuli,
            		         
            		  function(index, value) {
            			  $submenuli = $("<li>", {
                              "class" : value.submenu.menuul.classname
                          });
            			  
            			  $submenuul.append($submenuli);
            			  
            		  });
            	}
            }
            
            
           // $outerAnchortag.append($icon);
           // $outerAnchortag.append(value.name);
           // $outerAnchortag.append($badge);
           
         //   $name.append($badge);
          //  $menu.append($name);
            
           // $menu.append($outerAnchortag);
            $element.append($menu);  
            
  /*          self
              ._lmData({
               type : varBadge,
               key : _getContainerKey(value.name),
               value : $badge
              });
            self._setBadge($badge,
              value.count);*/
           });
       //$element.append($menuContainer);
      },
      _init : function() {
       var $element = this.element;
       var $menuContainer = $element;// .children(".list-group");
       $menuContainer.children("#menu_links li").first()
         .trigger("click");
      },
      changeBadge : function(paramObject) {
       var self = this;
       if ($.type(paramObject) === "array") {
        $.each(paramObject, function(index, value) {
         self.changeBadge(value);
        });
       } else {
        var $badge = self._lmData({
         type : varBadge,
         key : _getContainerKey(paramObject.name)
        });
        self._setBadge($badge, paramObject.count);
       }
      },
      _setBadge : function($badge, count) {
       var visibility = "hidden";
       if (count) {
        $badge.html(count);
        visibility = "visible";
       }
       $badge.css("visibility", visibility);
      },
      _destroy : function() {
       var $element = this.element;
       $element.empty();
       var position = $.inArray($element,
         $.cx.listmenu.instances);
       if (position > -1) {
        $.cx.listmenu.instances.splice(position, 1);
       }
      },
      _getOtherInstances : function() {
       var $element = this.element;
       return $.grep($.cx.listmenu.instances,
         function(el) {
          return el !== $element;
         });
      },
      _setOption : function(key, value) {
       this._super(key, value);
      }
     });
 $.extend($.cx.listmenu, {
  instances : []
 });
})(jQuery);