(function(ns) {
   ns.messages = [
      'Hello',
      'Howdy',
      'Hi',
      'Sup Yo'
   ];

   ns.getMessage = function () {
      return ns.pickRandom(ns.messages);
   };
})(window.demo = window.demo || {});

