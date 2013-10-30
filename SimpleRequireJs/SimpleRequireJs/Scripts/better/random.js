(function(ns) {
   ns.randomBetween = function (a, b) {
      return Math.floor((Math.random() * (b - a + 1))) + a;
   };

   ns.pickRandom = function (list) {
      var index = ns.randomBetween(0, list.length - 1);
      return list[index];
   };
})(window.demo = window.demo || {});
