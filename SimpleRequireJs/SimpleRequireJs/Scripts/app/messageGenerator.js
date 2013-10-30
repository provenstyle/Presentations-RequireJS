define(['random'], function(random) {

   var messages = [
      'Hello',
      'Howdy',
      'Hi',
      'Sup Yo'
   ];

   var getMessage = function() {
      return random.pickRandom(messages);
   };
   
   return {
      getMessage: getMessage 
   };
});