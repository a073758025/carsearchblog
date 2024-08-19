var carindexlabel = "";
var carindexsmall = "";
var carimage,carindexprice,carindexyear,carindexcc,carindexkm;
var carindexkmchar="";
var carindexpricechar="";
var carshopdetail="";
var smallphoto = document.getElementById('smallphoto');
var activebutton=1;

function start()
{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    carimage = parseInt(urlParams.get('carimage'), 10);
    carindexlabel = urlParams.get('carindexlabel');
    carindexsmall = urlParams.get('carindexsmall');
    carshopdetail = urlParams.get('carshopdetail');
    carindexprice = parseInt(urlParams.get('carindexprice'), 10);
    carindexyear = parseInt(urlParams.get('carindexyear'), 10);
    carindexcc = parseInt(urlParams.get('carindexcc'), 10);
    carindexkm = parseInt(urlParams.get('carindexkm'), 10);

    carindexpricechar=(carindexprice / 10).toFixed(1);
    if((carindexkm/10)>=1)
    {
        carindexkmchar=(carindexkm / 10).toFixed(1)+"萬";
    }
    else
    {
        carindexkmchar=carindexkm*1000;
    }

    document.getElementById('goodcontent').innerHTML  = '<div class="goodlabelspace"><div class="goodlabelword">'+carindexlabel+'</div></div>'
                                                        +'<div class="goodspacecut"></div>'
                                                        +'<div class="goodsmallspace"><div class="goodsmallword">'+carindexsmall+'</div></div>'
                                                        +'<div class="goodpricecut"></div>'
                                                        +'<div class="goodpricespace"><div class="goodpriceword">好車入手價&nbsp;&nbsp;'+carindexpricechar+'萬</div></div>'
                                                        +'<div class="goodpricecut"></div>'
                                                        +'<div class="goodyscspace">'
                                                        +    '<div class="goodyearspace"><div class="goodyearword">'+carindexyear+'年</div></div>'
                                                        +    '<div class="goodsmallcut"></div>'
                                                        +    '<div class="goodccspace"><div class="goodccword">'+carindexcc+'cc</div></div>'
                                                        +    '<div class="goodsmallcut"></div>'
                                                        +   '<div class="goodkmspace"><div class="goodkmword">約'+carindexkmchar+'公里</div></div>'
                                                        +'</div>'
                                                        +'<div class="goodspacecut"></div>'
                                                        +'<div class="gooddetailspace"><div class="gooddetailword">'+carshopdetail+'</div></div>';

    var newstring='<button id="button1" onclick="changeImage(1)" class="buttonphoto active"><div class="smallbuttonin"><img src="carimage/' + carindexprice + carindexyear + carindexcc +carindexkm +'_1.jpg" width="120px" height="90px"/></div></button>';
    for(var i=2;i<=carimage;i++)
    {
            newstring += '<button id="button'+i+'" onclick="changeImage('+i+')" class="buttonphoto"><div class="smallbuttonin"><img src="carimage/' + carindexprice + carindexyear + carindexcc +carindexkm +'_'+i+'.jpg" width="120px" height="90px"/></div></button>';
    }
    smallphoto.innerHTML=newstring;

    document.querySelectorAll('.buttonphoto').forEach(button => 
    {
        button.addEventListener('click', function() 
        {
            document.querySelectorAll('.buttonphoto').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('buttonsubtract').addEventListener('click', function() 
    {
        if (activebutton > 1) 
        {
            activebutton--;
        }
        else
        {
            activebutton=carimage;
        }
        changeImage(activebutton);
        document.querySelectorAll('.buttonphoto').forEach(b => b.classList.remove('active'));
        document.getElementById('button' + activebutton).classList.add('active');
    });
    document.getElementById('buttonplus').addEventListener('click', function() 
    {
        if (activebutton < carimage) 
        {
            activebutton++;
        }
        else
        {
            activebutton=1;
        }
        changeImage(activebutton);
        document.querySelectorAll('.buttonphoto').forEach(b => b.classList.remove('active'));
        document.getElementById('button' + activebutton).classList.add('active');
    });

    changeImage(1);
}
function changeImage(counter) 
{
    activebutton=counter;
    var image = document.getElementById('mainphoto');
    image.innerHTML  = '<img src="carimage/' + carindexprice + carindexyear + carindexcc +carindexkm +'_'+counter+'.jpg" width="520px" height="390px"/>'; // 更改为新图片的路径
}
window.addEventListener("load",start,false);