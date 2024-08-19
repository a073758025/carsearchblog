var carimage = [6];

var carindexlabel = ["2007年三菱得利卡"
                    ];

var carindexsmall = ["有四錄行車記錄器,新的後斗,正時皮帶17萬公哩剛換"
                    ];
                            
var carshopdetail = ["無重大事故,無泡水,無顧車,保證公里數"
                    ];

var carindexprice = [138];
var carindexyear = [2007];
var carindexcc = [2000];
var carindexkm = [196];

var carindexpricechar = new Array(carindexlabel.length).fill(0);
var carindexkmchar = new Array(carindexlabel.length).fill(0);
var carpricecopy = new Array(carindexlabel.length).fill(0);
var caryearcopy = new Array(carindexlabel.length).fill(0);
var carcccopy = new Array(carindexlabel.length).fill(0);
var carkmcopy = new Array(carindexlabel.length).fill(0);
var carpricesort = new Array(carindexlabel.length).fill(0);
var caryearsort = new Array(carindexlabel.length).fill(0);
var carccsort = new Array(carindexlabel.length).fill(0);
var carkmsort = new Array(carindexlabel.length).fill(0);
var cargoodspage = document.getElementById('cargoodspage');

function start()
{
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) 
    {
        button.addEventListener('click', function() 
        {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectionfunction(this.id);
        });
    });

    for (var i = 0; i < carindexlabel.length; i++)
    {
        carpricecopy[i]=carindexprice[i];
        caryearcopy[i]=carindexyear[i];
        carcccopy[i]=carindexcc[i];
        carkmcopy[i]=carindexkm[i];
        carpricesort[i]=i;
        caryearsort[i]=i;
        carccsort[i]=i;
        carkmsort[i]=i;
        carindexpricechar[i]=(carindexprice[i] / 10).toFixed(1);
        if((carindexkm[i]/10)>=1)
        {
            carindexkmchar[i]=(carindexkm[i] / 10).toFixed(1)+"萬";
        }
        else
        {
            carindexkmchar[i]=carindexkm[i]*1000;
        }
    }

    var newstring="";
    for (var i = carindexlabel.length-1; i >= 0; i--) 
    {
        newstring+=printgoodsfunction(i);
    }
    cargoodspage.innerHTML=newstring;

    for (var j=(carindexlabel.length-1); j>0;j--)
    {
        for (var i=0; i<j;i++)
        {
            var temp=0,tempdata=0;
            if(carpricecopy[i+1]<carpricecopy[i])
            {
                tempdata=carpricecopy[i];
                carpricecopy[i]=carpricecopy[i+1];
                carpricecopy[i+1]=tempdata;
                temp=carpricesort[i];
                carpricesort[i]=carpricesort[i+1];
                carpricesort[i+1]=temp;
            }
            if(caryearcopy[i+1]<caryearcopy[i])
            {
                tempdata=caryearcopy[i];
                caryearcopy[i]=caryearcopy[i+1];
                caryearcopy[i+1]=tempdata;
                temp=caryearsort[i];
                caryearsort[i]=caryearsort[i+1];
                caryearsort[i+1]=temp;
            }
            if(carcccopy[i+1]<carcccopy[i])
            {
                tempdata=carcccopy[i];
                carcccopy[i]=carcccopy[i+1];
                carcccopy[i+1]=tempdata;
                temp=carccsort[i];
                carccsort[i]=carccsort[i+1];
                carccsort[i+1]=temp;
            }
            if(carkmcopy[i+1]<carkmcopy[i])
            {
                tempdata=carkmcopy[i];
                carkmcopy[i]=carkmcopy[i+1];
                carkmcopy[i+1]=tempdata;
                temp=carkmsort[i];
                carkmsort[i]=carkmsort[i+1];
                carkmsort[i+1]=temp;
            }
        }
                
    }
}

function printgoodsfunction(counter)
{
    var newstring = '<center><div class="goodsout"><div class="goodsin"><a href="carshop.html?carimage='+carimage[counter]+'&carindexlabel='+carindexlabel[counter]+'&carindexsmall='+carindexsmall[counter]+'&carindexprice='+carindexprice[counter]+'&carindexyear='+carindexyear[counter]+'&carindexcc='+carindexcc[counter]+'&carindexkm='+carindexkm[counter]+'&carshopdetail='+carshopdetail[counter]+'">'
                    + '<div class="goodsimage"><img src="carimage/' + carindexprice[counter] + carindexyear[counter] + carindexcc[counter] +carindexkm[counter] +'_1.jpg" width="200px" height="150px"/></div>'
                    + '<div class="goodscontent">'
                    + '<div class="goodslabelout"><div class="goodslabel">' + carindexlabel[counter] + '</div></div>'
                    + '<div class="goodssmallout"><div class="goodssmall">' + carindexsmall[counter] + '</div></div>'
                    + '<div class="goodspriceout"><div class="goodsprice">' + carindexpricechar[counter] + '萬</div></div>'
                    + '<div class="goodsyearout"><div class="goodsyear">' + carindexyear[counter] + '年</div></div>'
                    + '<div class="goodsccout"><div class="goodscc">' + carindexcc[counter] + 'cc</div></div>'
                    + '<div class="goodskmout"><div class="goodskm">約' + carindexkmchar[counter] + '公里</div></div>'
                    + '</div>'
                    + '</a></div></div><div class="goodscut"></div></center>';
    return newstring;
}

function selectionfunction(buttonid) 
{
    var newstring;
    if(buttonid=="button1")
    {
        newstring="";
        for (var i = carindexlabel.length-1; i >= 0; i--) 
        {
            newstring+=printgoodsfunction(i);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button2")
    {
        newstring="";
        for (var i = 0; i < carindexlabel.length; i++) 
        {
            newstring+=printgoodsfunction(carpricesort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button3")
    {
        newstring="";
        for (var i = carindexlabel.length-1; i >= 0; i--) 
        {
            newstring+=printgoodsfunction(carpricesort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button4")
    {
        newstring="";
        for (var i = 0; i < carindexlabel.length; i++) 
        {
            newstring+=printgoodsfunction(caryearsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button5")
    {
        newstring="";
        for (var i = carindexlabel.length-1; i >= 0; i--) 
        {
            newstring+=printgoodsfunction(caryearsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button6")
    {
        newstring="";
        for (var i = 0; i < carindexlabel.length; i++) 
        {
            newstring+=printgoodsfunction(carccsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button7")
    {
        newstring="";
        for (var i = carindexlabel.length-1; i >= 0; i--) 
        {
            newstring+=printgoodsfunction(carccsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button8")
    {
        newstring="";
        for (var i = 0; i < carindexlabel.length; i++) 
        {
            newstring+=printgoodsfunction(carkmsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
    if(buttonid=="button9")
    {
        newstring="";
        for (var i = carindexlabel.length-1; i >= 0; i--) 
        {
            newstring+=printgoodsfunction(carkmsort[i]);
        }
        cargoodspage.innerHTML=newstring;
    }
}
window.addEventListener("load",start,false);