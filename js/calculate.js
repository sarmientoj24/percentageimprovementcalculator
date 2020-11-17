calculate = function()
{
    if (document.getElementById('inputPrevious').value == "" || document.getElementById('inputCurrent').value == ""){
        return;
    }

    var prev = parseFloat(document.getElementById('inputPrevious').value);
    var curr = parseFloat(document.getElementById('inputCurrent').value); 
    var xtime = ((prev - curr) / prev) * 100;
    var xperf = ((prev - curr) / curr) * 100;
    var xspeed = prev/curr;

    if (xtime < 0){
        xtime = -1 * xtime;
        document.getElementById('time').innerText = xtime.toFixed(2) + "% increase in time";
        document.getElementById('time').setAttribute("class", "badge badge-danger");
    }
    else {
        document.getElementById('time').innerText = xtime.toFixed(2) + "% reduction in time";
        document.getElementById('time').setAttribute("class", "badge badge-primary");
    }

    if (xperf < 0){
        xperf = -1 * xperf;
        document.getElementById('perf').innerText = xperf.toFixed(2) + "% decrease in performance";
        document.getElementById('perf').setAttribute("class", "badge badge-danger");
    }
    else {
        document.getElementById('perf').innerText = xperf.toFixed(2) + "% increase in performance";
        document.getElementById('perf').setAttribute("class", "badge badge-primary");
    }

    if (prev < curr){
        document.getElementById('speed').innerText = xspeed.toFixed(2) + "x slower";
        document.getElementById('speed').setAttribute("class", "badge badge-danger");
    }
    else {
        document.getElementById('speed').innerText = xspeed.toFixed(2) + "x faster";
        document.getElementById('speed').setAttribute("class", "badge badge-primary");
    }

    // document.getElementById('a3').value = parseFloat(resources)*parseFloat(minutes);

}
