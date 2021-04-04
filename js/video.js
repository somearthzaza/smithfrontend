 $(document).ready(function() {
     var playerSettings = {
         fullscreen: {
             enabled: true
         },
         resetOnEnd: true,
         hideControls: true,
         clickToPlay: true,
         keyboard: false,
     }

     const players = Plyr.setup('.js-player', playerSettings);

     players.forEach(function(instance, index) {
         instance.on('play', function() {
             players.forEach(function(instance1, index1) {
                 if (instance != instance1) {
                     instance1.pause();
                 }
             });
         });
     });

     $('.video-section').on('translated.owl.carousel', function(event) {
         players.forEach(function(instance, index1) {
             instance.pause();
         });
     });


 });