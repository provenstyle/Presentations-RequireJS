(function(ns) {
   if (!window.console || typeof window.console === "undefined") {
      window.console = {
         log: function (logMessage) {
         }
      };
   }

   ns.formatMessage = function (message) {
      var date = new Date().toLocaleTimeString();
      return date + ": " + message;
   };

   ns.log = function (message) {
      if (ns.loggingEnabled)
         console.log(ns.formatMessage(message));
   };
})(window.demo = window.demo || {});
