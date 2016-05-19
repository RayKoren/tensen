var SCConnected = false;
var gainNode;
var delayNode;
var context;
var bufferLoader;



//// Doc Ready ///
$(document).ready(function() {

    /// popover stuff ///
    $(function() {
        $('[data-toggle="popover"]').popover()
    })
    $('body').on('click', function(e) {
        $('[data-toggle="popover"]').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    ////recoder object ///
    init();
    var recorderObj = {
        context: context,
        //source: gainNode
    };
    recorder = new SC.Recorder(recorderObj);
    upload = new SC.upload();

    /// SOUNDCLOUD AUTHENTICATION ///
    SC.initialize({
        client_id: '19f527fc69b85cf2de94a95f9c538487',
        redirect_uri: 'https://tesen.firebaseapp.com/callback.html'
    });
    $("#soundcloudConnect").click(function() {
        // initiate auth popup //
        SC.connect().then(function() {
            return SC.get('/me');
        }).then(function(user) {
            SCConnected = true;
        }).then(function(me) {
            alert('Hello, ' + me.username);
        });
    });
    ///// end soundcloud init /////
    ///// AudioContext init /////

    window.addEventListener('load', init, false);
    //////// Load sounds into Buffer ////
    // Event Handler for changing soundBank //
    var sel;
    $("form").submit(function(event) {
        event.preventDefault();
        sel = $(".soundBank").val();
        context.close();
        $(".touchPad").off();
        $(document).off('keydown');
        init(); // must re-run init to change soundBank //

        //console.log(sel);
    });

    function init() {
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();
        } catch (e) {
            alert('Web Audio API is not supported in this browser');
        }

        delayNode = context.createDelay();
        gainNode = context.createGain();
        ////// Choose Sound Bank ////
        if ($(".soundBank").val() === 'tone1') {
            bufferLoader = new BufferLoader(
                context, [
                    '../samples/Bank 1/16.wav',
                    '../samples/Bank 1/17.wav',
                    '../samples/Bank 1/18.wav',
                    '../samples/Bank 1/19.wav',
                    '../samples/Bank 1/20.wav',
                    '../samples/Bank 1/21.wav',
                    '../samples/Bank 1/22.wav',
                    '../samples/Bank 1/23.wav',
                    '../samples/Bank 1/24.wav',
                    '../samples/Bank 1/25.wav',
                    '../samples/Bank 1/26.wav',
                    '../samples/Bank 1/27.wav',
                    '../samples/Bank 1/28.wav',
                    '../samples/Bank 1/29.wav',
                    '../samples/Bank 1/30.wav',
                    '../samples/Bank 1/31.wav',
                ],
                finishedLoading
            );
        } else {
            bufferLoader = new BufferLoader(
                context, [
                    '../samples/Bank 2/1.wav',
                    '../samples/Bank 2/2.wav',
                    '../samples/Bank 2/3.wav',
                    '../samples/Bank 2/4.wav',
                    '../samples/Bank 2/5.wav',
                    '../samples/Bank 2/6.wav',
                    '../samples/Bank 2/7.wav',
                    '../samples/Bank 2/8.wav',
                    '../samples/Bank 2/9.wav',
                    '../samples/Bank 2/10.wav',
                    '../samples/Bank 2/11.wav',
                    '../samples/Bank 2/12.wav',
                    '../samples/Bank 2/13.wav',
                    '../samples/Bank 2/14.wav',
                    '../samples/Bank 2/15.wav',
                    '../samples/Bank 2/16.wav',
                ],
                finishedLoading
            );
        }
        bufferLoader.load();
    }
    /////// playSound function declaration /////
    function playSound(buffer) {
        var source = context.createBufferSource();
        var oscGain = document.getElementById('oscGain').value;
        var delayAmount = document.getElementById('delayAmount').value;
        source.buffer = buffer;
        delayNode.delayTime.value = delayAmount;
        gainNode.gain.value = oscGain;
        source.connect(gainNode);
        source.connect(delayNode);
        delayNode.connect(gainNode);
        gainNode.connect(context.destination);
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
            var padID = str.replace("col-xs-3 touchPad ", "")
            var note = padID + ".buffer";
            //console.log(note);

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
        // $(document).keydown(function(event) {
        //     var note = event.keyCode;
        //     $(`#n${note}`).removeClass("touchPad");
        //     $(`#n${note}`).addClass("active");
        //     $(document).keyup(function(event) {
        //       $(`#n${note}`).removeClass("active");
        //       $(`#n${note}`).addClass("touchPad");
        //     })
        //   });
        $(document).keydown(function(event) {
            console.log(event.keyCode);
            var note = event.keyCode;
            switch (note) {
                case 81:
                    note = bufferList[0];
                    break;
                case 87:
                    note = bufferList[1];
                    break;
                case 69:
                    note = bufferList[2];
                    break;
                case 82:
                    note = bufferList[3];
                    break;
                case 89:
                    note = bufferList[4];
                    break;
                case 85:
                    note = bufferList[5];
                    break;
                case 73:
                    note = bufferList[6];
                    break;
                case 79:
                    note = bufferList[7];
                    break;
                case 65:
                    note = bufferList[8];
                    break;
                case 83:
                    note = bufferList[9];
                    break;
                case 68:
                    note = bufferList[10];
                    break;
                case 70:
                    note = bufferList[11];
                    break;
                case 72:
                    note = bufferList[12];
                    break;
                case 74:
                    note = bufferList[13];
                    break;
                case 75:
                    note = bufferList[14];
                    break;
                case 76:
                    note = bufferList[15];
                    break;
            }
            playSound(note);
        });

    };
    /// end of playing loaded buffers ///
    /// Recorder ///
    var record = document.querySelector('.record');
    var stop = document.querySelector('.stop');
    // disable stop button while not recording

    stop.disabled = true;
    $(".record").click(function() {
        if (SCConnected === false) {
            SC.connect().then(function() {
                return SC.get('/me');
            }).then(function(user) {
                SCConnected = true;
                recorder.start();
            }).catch(function(error) {
                alert('Error: ' + error.message);
            });
        } else {
            recorder.start();
        }
        stop.disabled = false;
        record.disabled = true;
        console.log("Rec Start");
    });
    ///stop code///
    $(".stop").click(function() {
        recorder.stop();
        recorder.play();
        stop.disabled = true;
        record.disabled = false;
        console.log('Rec Stop');
        var blob = recorder.getWAV();
        recorder.saveAs("New Song");
        console.log(recorder);
        recorder.getWAV().then(function(blob) {
            console.log('blobSaved');
            SC.upload({
                asset_data: blob,
                title: 'track' + " " + "tesen",
                sharing: 'public',
            })
            upload.request.addEventListener('progress', function(e) {
                console.log('progress: ', (e.loaded / e.total) * 100, '%');
            })
            upload.then(function(track) {
                alert('Upload is done! Check your sound at ' + track.permalink_url);
            })
        })
        upload.then(function(track) {
            alert('Upload is done! Check your sound at ' + track.permalink_url);
        });
        $('.scBox').show();
    });

});
//// End Doc Ready ///
