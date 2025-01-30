var carsindexlist=[];
var smallphoto = document.getElementById('smallphoto');
var activebutton=1;
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var carid = parseInt(urlParams.get('carid'), 10);

const jsonUrl = "carindexlist.json";
fetch(jsonUrl)
    .then(response => {
        if (!response.ok) 
        {
            throw new Error("HTTP 錯誤：" + response.status);
        }
        return response.json();
    })
    .then(data => {
        carsindexlist = data.cars;
        start();
    })
    .catch(error => console.error("無法獲取資料:", error));

function start()
{
    var foundcar = carsindexlist.find(v => v.id === carid);
    var carimage = foundcar.carimage;
    var carindexlabel = foundcar.carindexlabel;
    var carindexsmall = foundcar.carindexsmall;
    var carshopdetail = foundcar.carshopdetail;
    var carindexprice = foundcar.carindexprice;
    var carindexyear = foundcar.carindexyear;
    var carindexcc = foundcar.carindexcc;
    var carindexkm = foundcar.carindexkm;
    var carindexkmchar = "0";
    if(carindexkm>=1)
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
                                                        +'<div class="goodpricespace"><div class="goodpriceword">好車入手價&nbsp;&nbsp;'+carindexprice+'萬</div></div>'
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

    var newstring='<button id="button1" onclick="changeImage(1)" class="buttonphoto active"><div class="smallbuttonin"><img src="carimage/' + carid +'_1.jpg" width="120px" height="90px"/></div></button>';
    for(var i=2;i<=carimage;i++)
    {
            newstring += '<button id="button'+i+'" onclick="changeImage('+i+')" class="buttonphoto"><div class="smallbuttonin"><img src="carimage/' + carid +'_'+i+'.jpg" width="120px" height="90px"/></div></button>';
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
    image.innerHTML  = '<img src="carimage/' + carid +'_'+counter+'.jpg" width="520px" height="390px"/>'; // 更改为新图片的路径
}