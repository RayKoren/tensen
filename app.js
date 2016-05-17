
  $(document).ready(function() {
///// AudioContext init /////
    var context;
    window.addEventListener('load', init, false);
    function init() {
      try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        context = new AudioContext();
      }
      catch(e) {
        alert('Web Audio API is not supported in this browser');
      }
    }

///////// osc for pad 1 //////
    // var audioCtx = new AudioContext();
    //     var osc = document.getElementById('touchPad');
    //
    //   osc.onmousedown = function(){
    //     var oscPitch = document.getElementById('oscPitch').value;
    //     //var oscGain = document.getElementById('oscGain').value;
    //
    //     oscillator = audioCtx.createOscillator();
    //     gainNode = audioCtx.createGain();
    //
    //       oscillator.type = "sine";
    //       oscillator.frequency.value = oscPitch;
    //       //gainNode.gain.value = oscGain;
    //       //oscillator.connect(audioCtx.destination); // not needed b/c gain node
    //       oscillator.start(0);
    //
    //       oscillator.connect(gainNode);
    //       gainNode.connect(audioCtx.destination);
    //
    //   };
    //
    // osc.onmouseup = function(){
    //   oscillator.disconnect();
    // }
///////// end osc for pad 1 //////
//////// Load sounds into Buffer ////
    window.onload = init;
    var context;
    var bufferLoader;

    function init() {
      // Fix up prefixing
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();

      bufferLoader = new BufferLoader(
        context,
        [
          '../samples/10.wav',
          '../samples/11.wav',
          '../samples/12.wav',
          '../samples/13.wav',
          '../samples/14.wav',
          '../samples/15.wav',
          '../samples/16.wav',
        ],
        finishedLoading
        );
      bufferLoader.load();
    }
///// playSound function declaration /////
    function playSound(buffer) {
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(0);
    }

////// multi sound func //////
      function finishedLoading(bufferList) {
        var t1 = context.createBufferSource();
        var t2 = context.createBufferSource();
        var t3 = context.createBufferSource();
        var t4 = context.createBufferSource();
        var t5 = context.createBufferSource();
        var t6 = context.createBufferSource();
        var t7 = context.createBufferSource();

        t1.buffer = bufferList[0];
        t2.buffer = bufferList[1];
        t3.buffer = bufferList[2];
        t4.buffer = bufferList[3];
        t5.buffer = bufferList[4];
        t6.buffer = bufferList[5];
        t7.buffer = bufferList[6];

        t1.connect(context.destination);
        t2.connect(context.destination);
        t3.connect(context.destination);
        t4.connect(context.destination);
        t5.connect(context.destination);
        t6.connect(context.destination);
        t7.connect(context.destination);

        $(".touchPad").click(function() {
        var str = $(this).attr("class");
        var padID = str.replace("col-md-3 touchPad ", "")
        var note = padID + ".buffer";
        console.log(note);
        playSound(note);
        //playSound(t6.buffer);
        });
        };


        // $(".touchPad").click(function() {
        // console.log($(this).attr("class"));
        // //playSound(source7.buffer);
        // });

        // var someVar;
        // someVar = some_other_function();
        // alert(someVar);
        // div.addEventListener("click", function(){
        //     some_function(someVar);
        // }, false);

  });
