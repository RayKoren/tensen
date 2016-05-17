
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
          '../samples/10.wav',
          '../samples/11.wav',
          '../samples/12.wav',
          '../samples/13.wav',
          '../samples/14.wav',
          '../samples/15.wav',
          '../samples/16.wav',
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
        var t8 = context.createBufferSource();
        var t9 = context.createBufferSource();
        var t10 = context.createBufferSource();
        var t11 = context.createBufferSource();
        var t12 = context.createBufferSource();
        var t13 = context.createBufferSource();
        var t14 = context.createBufferSource();
        var t15 = context.createBufferSource();
        var t16 = context.createBufferSource();

        t1.buffer = bufferList[0];
        t2.buffer = bufferList[1];
        t3.buffer = bufferList[2];
        t4.buffer = bufferList[3];
        t5.buffer = bufferList[4];
        t6.buffer = bufferList[5];
        t7.buffer = bufferList[6];
        t8.buffer = bufferList[4];
        t9.buffer = bufferList[5];
        t10.buffer = bufferList[6];
        t11.buffer = bufferList[0];
        t12.buffer = bufferList[1];
        t13.buffer = bufferList[2];
        t14.buffer = bufferList[3];
        t15.buffer = bufferList[4];
        t16.buffer = bufferList[5];

        t1.connect(context.destination);
        t2.connect(context.destination);
        t3.connect(context.destination);
        t4.connect(context.destination);
        t5.connect(context.destination);
        t6.connect(context.destination);
        t7.connect(context.destination);
        t8.connect(context.destination);
        t9.connect(context.destination);
        t10.connect(context.destination);
        t11.connect(context.destination);
        t12.connect(context.destination);
        t13.connect(context.destination);
        t14.connect(context.destination);
        t15.connect(context.destination);
        t16.connect(context.destination);

        $(".touchPad").click(function() {
        var str = $(this).attr("class");
        var padID = str.replace("col-md-3 touchPad ", "")
        var note = padID + ".buffer";
        console.log(note);

        switch (note) {
          case "t1.buffer":
          note = bufferList[0];
            break;
          case "t2.buffer":
          note = bufferList[1];
            break;
          case "t3.buffer":
          note = bufferList[2];
            break;
          case "t4.buffer":
          note = bufferList[3];
            break;
          case "t5.buffer":
          note = bufferList[4];
            break;
          case "t6.buffer":
          note = bufferList[5];
            break;
          case "t7.buffer":
          note = bufferList[6];
            break;
          case "t8.buffer":
          note = bufferList[7];
            break;
          case "t9.buffer":
          note = bufferList[8];
            break;
          case "t10.buffer":
          note = bufferList[9];
            break;
          case "t11.buffer":
          note = bufferList[10];
            break;
          case "t12.buffer":
          note = bufferList[11];
            break;
          case "t13.buffer":
          note = bufferList[12];
            break;
          case "t14.buffer":
          note = bufferList[13];
            break;
          case "t15.buffer":
          note = bufferList[14];
            break;
          case "t16.buffer":
          note = bufferList[15];
            break;
        }
          playSound(note);
        });
        window.addEventListener("keydown", function(event){
          console.log(event.keyCode);
          var key = event.keyCode;
          switch (key) {
            case "81":
            key = bufferList[0];
                break;
            // case "87":
            // note = bufferList[1];
            //   break;
            // case "69":
            // note = bufferList[2];
            //   break;
            // case "82":
            // note = bufferList[3];
            //   break;
            // case "t5.buffer":
            // note = bufferList[4];
            //   break;
            // case "t6.buffer":
            // note = bufferList[5];
            //   break;
            // case "t7.buffer":
            // note = bufferList[6];
            //   break;
            // case "t8.buffer":
            // note = bufferList[7];
            //   break;
            // case "t9.buffer":
            // note = bufferList[8];
            //   break;
            // case "t10.buffer":
            // note = bufferList[9];
            //   break;
            // case "t11.buffer":
            // note = bufferList[10];
            //   break;
            // case "t12.buffer":
            // note = bufferList[11];
            //   break;
            // case "t13.buffer":
            // note = bufferList[12];
            //   break;
            // case "t14.buffer":
            // note = bufferList[13];
            //   break;
            // case "t15.buffer":
            // note = bufferList[14];
            //   break;
            // case "t16.buffer":
            // note = bufferList[15];
            //   break;
          }
          playSound(key);
        });
        // create and send request (for reverb audio)



        };
        // var request = new XMLHttpRequest(),
        //   url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/11314/AbernyteGrainSilo.m4a";
        //
        // request.open("GET", url, true);
        // request.responseType = "arraybuffer";
        // request.addEventListener("load", onLoad);
        //
        // request.send();

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
