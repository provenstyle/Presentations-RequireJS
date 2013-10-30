(function(ns) {
   $(function () {
      ns.log("Adding message");
      $('.message').text(ns.getMessage());
      ns.log("Message added");
   });
})(window.demo = window.demo || {});
