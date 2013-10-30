define(['logger', 'messageGenerator'], function(logger, messageGenerator) {

   $(function() {
      logger.log("Adding message");
      $('.message').text(messageGenerator.getMessage());
      logger.log("Message added");
   });
   
});