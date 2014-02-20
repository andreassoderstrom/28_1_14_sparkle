$(document).ready(function () {
  //Globals, se över dessa.. behövs de?
  var soundObject;
  var sId = 1;

  soundManager.setup({
    url: 'swf',
    flashVersion: 9,
    preferFlash: true,
    onready: function() {
      console.log("ready! ------------------------------------------ ON READY! ");

      soundObject = soundManager.createSound({
          id: 'testSong',
          url: 'sound/song.mp3',
          autoLoad: true,
          autoPlay: false,
          useEQData: true,
          useWaveformData: true,
          useHighPerformance: true 
        })
      
      //MakeSomeNoise(soundObject);

    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

  


  function MakeSomeNoise(soundObject) {

    soundObject.play( {
          
          whileplaying: function() {
            
            //loopa igenom eq arrayen senare och koppla med sparks. 
            console.log(soundObject.eqData.left[0]);

            var limit = 0.6;

            if (soundObject.eqData.left[0] > limit) {
              GenerateSpark();
            };
            

          },
          onfinish: function() {
           
            console.log("finished playing");

          }


          
         
    });

  };




   



    // Spark Generator code -------------------------------------------------------------------------------------------------------//

    //Draw X amount of sparks --- TEST ----------------------//

    /*

    var counter = 0;
    var max = 10;
    function DrawSparks() {

        console.log(counter, max);
        

        if(counter < max) {
            GenerateSpark();
            counter++;
            setTimeout(DrawSparks, 500);
        }



    }

    DrawSparks();
    */
   //---------------------End Spark Test------------------//



	function GenerateSpark() {

        //parent element, size of window.
        var parent = $('#container');

        //Spark unique id;
        
        //random number based on parent width
        randomPositionW = Math.ceil(Math.random() * parent.width());
        //random number based on parent height
        randomPositionH = Math.ceil(Math.random() * parent.height());


        //Test logs -----------------------------------------------------
        /*
        console.log("RandomW:", randomPositionW);
        console.log("RandomH:", randomPositionH);

        console.log("Parent H and W", parent.height(), parent.width());
        */
        //---------------------------------------------------------------

        

        var div = $('<div></div>').attr({
            id: sId,
            class: 'spark'
        }).css({
            bottom: randomPositionH,
            left: randomPositionW,
        })

        parent.append(div);
        console.log(":::::::: Spark ID: ", sId);



        

      
        
      
        
        sId++;


    }



});
