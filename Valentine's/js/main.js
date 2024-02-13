function buttonFunc()
{
    var x = document.getElementById("mainwrapper");
    var z = document.getElementById("parallaxlanding");
    if(x.style.display === "none" || x.style.display === "")
    {
        z.style.backgroundImage = "url('img/mail1.gif')";
        setTimeout(parallaxlandingRemover, 5100);
        setTimeout(anchor, 4450);
        setTimeout(mainwrapperShower, 4400);
    }
}


function parallaxlandingRemover()
{
    var y = document.getElementById("parallaxlanding");
    y.style.display = "none";
}


function mainwrapperShower()
{
    var x = document.getElementById("mainwrapper");
    x.style.display = "block";
}

function alertUser(msg)
{
    alert(msg);
}

function anchor()
{
    window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#mainwrapper";
}