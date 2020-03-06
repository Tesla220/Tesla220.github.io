/*=============================================================================*/
/* Липкое меню
/*=============================================================================*/
$(document).ready(function() {

var navPos, winPos, navHeight;

function refreshVar() {
  navPos = $('.header').offset().top;
  navHeight = $('.header').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);

  $('<div class="clone-nav"></div>').insertBefore('.header').css('height', navHeight).hide();

$(window).scroll(function() {
  winPos = $(window).scrollTop();

  if (winPos >= navPos) {
    $('.header').addClass('fixed shadow');
    $('.clone-nav').show();
  }
  else {
    $('.header').removeClass('fixed shadow');
    $('.clone-nav').hide();
  }
});

});

$(document).ready(function() {
  $('.mmenu').click(function() {
    $('.sub-menu').slideToggle(700);
  });

});

/*=============================================================================*/
/* Тест
/*=============================================================================*/

$(document).ready(function(){
    $("#filter").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".patents div").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
    });
});

/*=============================================================================*/
/* Вторичная катушка
/*=============================================================================*/
var d=10, n=10, w = 10, s = 10, h=6, i=0, cs=0, wl=0, pi=3.14159;

function gcoil() {
d=document.coilcalc.diameter.value;
n=document.coilcalc.turns.value;
w=document.coilcalc.wirediameter.value;
s=document.coilcalc.turnspacing.value;
h=n*(w*1+s*1);
}

function pcoil() {
document.coilcalc.diameter.value=d;
document.coilcalc.turns.value=n;
document.coilcalc.wirediameter.value=w;
document.coilcalc.turnspacing.value=s;
document.coilcalc.height.value=h;
calcinductance();
calccap();
}

function calcinductance() {
gcoil();
i=(0.1*n*n*d*d)/(d*45+h*100);
i=i*1e+3;
i=parseInt(i);
i=i/1e+3;
wl=n*pi*d/1000;
wl=wl*1e+3;
wl=parseInt(wl);
wl=wl/1e+3;
document.coilcalc.inductance.value=i;
document.coilcalc.height.value=h;
document.coilcalc.wirelength.value=wl;
}

function calccap() {
cs=0.1*d*(0.1126*(h/d)+0.08+0.27*Math.sqrt(h/d));
cs=cs*1e+3;
cs=parseInt(cs);
cs=cs/1e+3;
document.coilcalc.selfcap.value=cs
}

function changescoil() {
gcoil();
calcinductance();
pcoil();
}

/*=============================================================================*/
/* Тор
/*=============================================================================*/
var d1=100, d2=10, c=0;

function gtor() {
d1=document.toroidcalc.d1.value;
d2=document.toroidcalc.d2.value;
}
function ptor() {
document.toroidcalc.d1.value=d1;
document.toroidcalc.d2.value=d2;
calccapacitance();
document.toroidcalc.c.value=c;
}
function calccapacitance() {
c=2.8*(1.2781-(d2/d1))*Math.sqrt((2/25.4*pi*pi*(d1-d2)*(d2/25.4/2))/(4*pi));
c=c*1e+3;
c=parseInt(c);
c=c/1e+3;
}
function changestor() {
gtor();
ptor();
}

/*=============================================================================*/
/* LC контур
/*=============================================================================*/
function calculatef() {
var f=0;
f=1/(2*3.14159*Math.sqrt(document.resfreq.L.value*document.resfreq.C.value*1e-9));
f=parseInt(f);
f=f/1e+3;
document.resfreq.F.value=f;
}

/*=============================================================================*/
/* Конденсаторы
/*=============================================================================*/
var iCap=0.047, iVoltage=1600, perString=11, numOfStrings=3, totalNumOfCaps=0;

function initialise(){
	document.mmccalc.iCap.value=iCap;
	document.mmccalc.iVoltage.value=iVoltage;
	document.mmccalc.perString.value=perString;
	document.mmccalc.numOfStrings.value=numOfStrings;
	calc();
}
function calc(){
	iCap=document.mmccalc.iCap.value;
	iVoltage=document.mmccalc.iVoltage.value;
	perString=document.mmccalc.perString.value;
	numOfStrings=document.mmccalc.numOfStrings.value;
	document.mmccalc.totalNumOfCaps.value=perString*numOfStrings;
	mmcCapacitance=iCap/perString*numOfStrings;
	mmcCapacitance=mmcCapacitance*10e+3;
	mmcCapacitance=parseInt(mmcCapacitance);
	mmcCapacitance=mmcCapacitance/10e+3;
	document.mmccalc.mmcCapacitance.value=mmcCapacitance;
	mmcVoltage=iVoltage*perString;
	document.mmccalc.mmcVoltage.value=mmcVoltage;
}
function perStringUp(){
		perString=document.mmccalc.perString.value;
		perString=perString*1+1;
		document.mmccalc.perString.value=perString;
		calc();
}
function perStringDown(){
		perString=document.mmccalc.perString.value;
		perString=perString*1-1;
		if (perString*1<1) perString=1;
		document.mmccalc.perString.value=perString;
		calc();
}
function numOfStringsUp(){
		numOfStrings=document.mmccalc.numOfStrings.value;
		numOfStrings=numOfStrings*1+1;
		document.mmccalc.numOfStrings.value=numOfStrings;
		calc();
}
function numOfStringsDown(){
		numOfStrings=document.mmccalc.numOfStrings.value;
		numOfStrings=numOfStrings*1-1;
		if (numOfStrings*1<1) numOfStrings=1;
		document.mmccalc.numOfStrings.value=numOfStrings;
		calc();
}

/*=============================================================================*/
/* Первичная катушка
/*=============================================================================*/
var a=0, dout=6;

function greel() {
d=document.reel.diameter.value;
n=document.reel.turns.value;
w=document.reel.wirediameter.value;
s=document.reel.turnspacing.value;
}

function preel() {
document.reel.diameter.value=d;
document.reel.turns.value=n;
document.reel.wirediameter.value=w;
document.reel.turnspacing.value=s;
calcinductancereel();
document.reel.height.value=dout;
document.reel.inductance.value=i;
document.reel.wirelength.value=wl;
}

function calcinductancereel() {
dout=d*1+2*n*(w*1+s*1);
dout=dout*1e+3;
dout=parseInt(dout);
dout=dout/1e+3;
a=(d/25.4+n*(w/25.4+s/25.4))/2;
i=(n*n*a*a)/(a*30-d/25.4*11);
i=i*1e+3;
i=parseInt(i);
i=i/1e+3;
wl=((dout-d)/2+d*1)*n*pi;
wl=wl/1000;
wl=wl*1e+3;
wl=parseInt(wl);
wl=wl/1e+3;
}

function changesreel() {
greel();
preel();
}
