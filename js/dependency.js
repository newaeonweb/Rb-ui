/*
 *  Project: Dependency
 *  Description: Load Javascript and Css files Async or Sync
 *  Author: Fernando Monteiro 
 *  License: BSD
 */

// Start with a semi-column to avoid malformed scripts.
;(function ( $, window, undefined ) {
    'use strict';
    // Create the defaults once
    var pluginName = 'dependency',
        document = window.document,
        defaults = {
            loadDependency: []
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
            // Start the logic
            for (var i = 0;  i < this.options.loadDependency.length; i++) {
                
                if (this.options.loadDependency[i].scriptType === "text/javascript"){

                    // Create the js
                    var dscript = document.createElement("script");
                    dscript.type = this.options.loadDependency[i].scriptType;
                    dscript.src = this.options.loadDependency[i].urlPath;

                    if(this.options.loadDependency[i].async === false){
                        document.getElementsByTagName('head')[0].appendChild(dscript);
                    }else {
                       $("head").append(dscript);  
                    }

                }else {
                    
                    // Create the css
                    var dcss = document.createElement("link");
                    dcss.rel = "stylesheet";
                    dcss.type = this.options.loadDependency[i].scriptType;
                    dcss.href = this.options.loadDependency[i].urlPath;
                    document.getElementsByTagName('head')[0].appendChild(dcss);

                }
            }

            // Define the script order
            var loadOrder = function(){

            };
            // Define delay for script order
            var delay = function(){

            };


    };

    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));

//Chamada da função
/*$('head').dependency({
    loadDependency: [
        {urlPath:"http://localhost:28289/js/date.js", scriptType:"text/javascript", async: true},
        {urlPath:"http://localhost:28289/js/daterangepicker.js", scriptType:"text/javascript"},
        {urlPath:"http://localhost:28289/css/style.css", scriptType:"text/css"}
    ]
});*/