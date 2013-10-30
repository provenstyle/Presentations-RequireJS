
if (!window.console || typeof window.console === "undefined") {
   window.console = {
      log: function(logMessage) {
      }
   };
}

var formatMessage = function(message) {
   var date = new Date().toLocaleTimeString();
   return date + ": " + message;
};

var log = function (message) {
   if (loggingEnabled)
      console.log(formatMessage(message));
};

