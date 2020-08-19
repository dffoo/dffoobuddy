var bannerFile,selectedBannerValues;function loadDefaultBanner(e){document.getElementById("img-banner").src="img/banner/"+e+".jpg",selectedBannerValues=getBannerValues(e),updateAutopullLabels()}function selectBanner(e){var n=`img/banner/${e}.jpg`;document.getElementById("img-banner").src=n,document.getElementById("img-banner").classList.remove("animation"),document.getElementById("img-banner").offsetWidth,document.getElementById("img-banner").classList.add("animation"),document.getElementById("select-banner").blur(),selectedBannerValues=getBannerValues(e),console.log(selectedBannerValues),updateAutopullLabels()}function getBannerValues(e){var n;for(n=0;n<bannerFile.length;n++)if(bannerFile[n].includes(e))return bannerFile[n].split(",")}function updateAutopullLabels(){document.getElementById("label-burst").innerHTML=selectedBannerValues[5]+" Burst",document.getElementById("label-ld").innerHTML=selectedBannerValues[4]+" LD",document.getElementById("auto-label1").innerHTML=selectedBannerValues[1],document.getElementById("auto-label2").innerHTML=selectedBannerValues[2],document.getElementById("auto-label3").innerHTML=selectedBannerValues[3]}function toggleRates(){$("#container-rates").toggle(500)}function toggleAutopull(){$("#container-autopull").toggle(500)}function toggleWeaponLabels(){$(".label-pull-multi").toggle(250),$(".label-pull").toggle(250)}$(function(){var e=new XMLHttpRequest;e.open("GET","banner.csv",!0),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){e.responseText;bannerFile=e.responseText.split("\n")}loadDefaultBanner("342"),console.log(selectedBannerValues)}},e.send()});var counter={countSingle:0,countSingleBronze:0,countSingleSilver:0,countSingle15:0,countSingle35:0,countSingleEx:0,countSingleLd:0,countSingleBurst:0,countMulti:0,countMultiBronze:0,countMultiSilver:0,countMulti15:0,countMulti35:0,countMultiEx:0,countMultiLd:0,countMultiBurst:0,countBonus15:0,countBonus35:0,countBonusEx:0,countBonusLd:0,countBonusBurst:0,autopull:0,count15a:0,count35a:0,countExa:0,count15b:0,count35b:0,countExb:0,count15c:0,count35c:0,countExc:0,countLd:0,countBurst:0};function addToCounter(e){window.counter[e]++}function updateCounters(e){document.getElementById("counter-single").innerHTML="Single Draw: "+e.countSingle,document.getElementById("counter-tickets").innerHTML=e.countSingle+" Draw Tickets consumed",document.getElementById("counter-single-bronze").innerHTML=e.countSingleBronze,document.getElementById("counter-single-silver").innerHTML=e.countSingleSilver,document.getElementById("counter-single-15cp").innerHTML=e.countSingle15,document.getElementById("counter-single-35cp").innerHTML=e.countSingle35,document.getElementById("counter-single-ex").innerHTML=e.countSingleEx,document.getElementById("counter-single-ld").innerHTML=e.countSingleLd,document.getElementById("counter-single-burst").innerHTML=e.countSingleBurst,document.getElementById("counter-multi").innerHTML="Multi Draw: "+e.countMulti,document.getElementById("counter-gems").innerHTML=5e3*e.countMulti+" Gems consumed",document.getElementById("counter-multi-bronze").innerHTML=e.countMultiBronze,document.getElementById("counter-multi-silver").innerHTML=e.countMultiSilver,document.getElementById("counter-multi-15cp").innerHTML=e.countMulti15+" ("+e.countBonus15+")",document.getElementById("counter-multi-35cp").innerHTML=e.countMulti35+" ("+e.countBonus35+")",document.getElementById("counter-multi-ex").innerHTML=e.countMultiEx+" ("+e.countBonusEx+")",document.getElementById("counter-multi-ld").innerHTML=e.countMultiLd+" ("+e.countBonusLd+")",document.getElementById("counter-multi-burst").innerHTML=e.countMultiBurst+" ("+e.countBonusBurst+")"}function resetStats(){updateCounters(counter={countSingle:0,countSingleBronze:0,countSingleSilver:0,countSingle15:0,countSingle35:0,countSingleEx:0,countSingleLd:0,countSingleBurst:0,countMulti:0,countMultiBronze:0,countMultiSilver:0,countMulti15:0,countMulti35:0,countMultiEx:0,countMultiLd:0,countMultiBurst:0,countBonus15:0,countBonus35:0,countBonusEx:0,countBonusLd:0,countBonusBurst:0,autopull:0,count15a:0,count35a:0,countExa:0,count15b:0,count35b:0,countExb:0,count15c:0,count35c:0,countExc:0,countLd:0,countBurst:0})}function toggleSingleStats(){$("#single-pull-stats").toggle(500)}function toggleMultiStats(){$("#multi-pull-stats").toggle(500)}function pullSingle(e){e&&(counter.autopull+=1),$(".label-pull").css("opacity",0),document.getElementById("div-pull-single").style.opacity=0,1==getComputedStyle(document.getElementById("div-pull-multi"),null).opacity&&(document.getElementById("div-pull-multi").style.opacity=0,document.getElementById("div-pull-multi").style.display="none",document.getElementById("div-pull-single").style.display="flex"),"flex"!=document.getElementById("div-pull-single").style.display&&setTimeout(()=>{document.getElementById("div-pull-single").style.display="flex"},100);var n=Math.floor(1e4*Math.random())+1,t=getWeaponType(n);"bronze"==t?(document.getElementById("pull-single").src="img/eq/bronze.png",addToCounter("countSingleBronze"),document.getElementById("label-pull-single").innerHTML=""):"silver"==t?(document.getElementById("pull-single").src="img/eq/silver.png",addToCounter("countSingleSilver"),document.getElementById("label-pull-single").innerHTML=""):t=generateGoldWeapon(n,"pull-single","label-pull-single","countSingle"),addToCounter("countSingle"),updateCounters(counter),$(".btn-gacha-all").prop("disabled",!0),$(".pull-img").css("opacity",0),setTimeout(()=>{drawSingle(e)},250)}function drawSingle(e){$("#div-pull-single").animate({opacity:1}),$(".label-pull").animate({opacity:1}),$("#pull-single").delay(150).animate({opacity:1},500,function(){0==e&&$(".btn-gacha-all").prop("disabled",!1)})}function pullMulti(e){e&&(counter.autopull+=1),$(".label-pull-multi").css("opacity",0),document.getElementById("div-pull-multi").style.display="flex",document.getElementById("div-pull-multi").style.opacity=0,1==getComputedStyle(document.getElementById("div-pull-single"),null).opacity&&(document.getElementById("div-pull-single").style.opacity=0,document.getElementById("div-pull-single").style.display="none"),generateMultiPull(),addToCounter("countMulti"),updateCounters(counter),$(".btn-gacha-all").prop("disabled",!0),$(".pull-img").css("opacity",0),setTimeout(()=>{drawMulti(e)},250)}function drawMulti(e){$("#div-pull-multi").animate({opacity:1});var n=0;$(".pull-img").each(function(t){$(this).delay(n).animate({opacity:1},500,function(){10==t&&($(".label-pull-multi").animate({opacity:1}),0==e&&$(".btn-gacha-all").prop("disabled",!1))}),n+=250})}function generateMultiPull(){const e={bronze:0,silver:1,gold:2,burst:3};var n,t=[];for(n=0;n<10;n++){var l=Math.floor(1e4*Math.random())+1;t.push(getWeaponType(l))}const u=t.sort((n,t)=>e[n]-e[t]);for(n=0;n<10;n++)if("bronze"==u[n])document.getElementById("pull"+n).src="img/eq/bronze.png",document.getElementById("label-pull-multi"+n).innerHTML="",addToCounter("countMultiBronze");else if("silver"==u[n])document.getElementById("pull"+n).src="img/eq/silver.png",document.getElementById("label-pull-multi"+n).innerHTML="",addToCounter("countMultiSilver");else if("gold"==u[n]){generateGoldWeapon(l=Math.floor(1001*Math.random()+8990),"pull"+n,"label-pull-multi"+n,"countMulti")}else generateGoldWeapon(1e4,"pull"+n,"label-pull-multi"+n,"countMulti");var o=Math.floor(1e4*Math.random())+1;o<1317?(generateGoldWeapon(8990,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus15")):o<2634?(generateGoldWeapon(9132,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus15")):o<3951?(generateGoldWeapon(9274,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus15")):o<4951?(generateGoldWeapon(9416,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus35")):o<5951?(generateGoldWeapon(9516,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus35")):o<6951?(generateGoldWeapon(9616,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonus35")):o<7701?(generateGoldWeapon(9716,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonusEx")):o<8451?(generateGoldWeapon(9791,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonusEx")):o<9201?(generateGoldWeapon(9866,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonusEx")):o<9701?(generateGoldWeapon(9941,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonusLd")):(generateGoldWeapon(1e4,"pull10","label-pull-multi10","countMulti"),addToCounter("countBonusBurst"))}function getWeaponType(e){return e<5990?"bronze":e<8990?"silver":e<9991?"gold":"burst"}function getGoldWeapon(e){return e<9132?"15a":e<9274?"15b":e<9416?"15c":e<9516?"35a":e<9616?"35b":e<9716?"35c":e<9791?"exa":e<9866?"exb":e<9941?"exc":e<9991?"ld":"burst"}function generateGoldWeapon(e,n,t,l){e<9132?(document.getElementById(n).src="img/eq/"+selectedBannerValues[1]+"/15.png",document.getElementById(t).innerHTML=selectedBannerValues[1]+" 15CP",addToCounter(l+"15"),addToCounter("count15a")):e<9274?(document.getElementById(n).src="img/eq/"+selectedBannerValues[2]+"/15.png",document.getElementById(t).innerHTML=selectedBannerValues[2]+" 15CP",addToCounter(l+"15"),addToCounter("count15b")):e<9416?(document.getElementById(n).src="img/eq/"+selectedBannerValues[3]+"/15.png",document.getElementById(t).innerHTML=selectedBannerValues[3]+" 15CP",addToCounter(l+"15"),addToCounter("count15c")):e<9516?(document.getElementById(n).src="img/eq/"+selectedBannerValues[1]+"/35.png",document.getElementById(t).innerHTML=selectedBannerValues[1]+" 35CP",addToCounter(l+"35"),addToCounter("count35a")):e<9616?(document.getElementById(n).src="img/eq/"+selectedBannerValues[2]+"/35.png",document.getElementById(t).innerHTML=selectedBannerValues[2]+" 35CP",addToCounter(l+"35"),addToCounter("count35b")):e<9716?(document.getElementById(n).src="img/eq/"+selectedBannerValues[3]+"/35.png",document.getElementById(t).innerHTML=selectedBannerValues[3]+" 35CP",addToCounter(l+"35"),addToCounter("count35c")):e<9791?(document.getElementById(n).src="img/eq/"+selectedBannerValues[1]+"/ex.png",document.getElementById(t).innerHTML=selectedBannerValues[1]+" EX",addToCounter(l+"Ex"),addToCounter("countExa")):e<9866?(document.getElementById(n).src="img/eq/"+selectedBannerValues[2]+"/ex.png",document.getElementById(t).innerHTML=selectedBannerValues[2]+" EX",addToCounter(l+"Ex"),addToCounter("countExb")):e<9941?(document.getElementById(n).src="img/eq/"+selectedBannerValues[3]+"/ex.png",document.getElementById(t).innerHTML=selectedBannerValues[3]+" EX",addToCounter(l+"Ex"),addToCounter("countExc")):e<9991?(document.getElementById(n).src="img/eq/"+selectedBannerValues[4]+"/ld.png",document.getElementById(t).innerHTML=selectedBannerValues[4]+" LD",addToCounter(l+"Ld"),addToCounter("countLd")):(document.getElementById(n).src="img/eq/"+selectedBannerValues[5]+"/burst.png",document.getElementById(t).innerHTML=selectedBannerValues[5]+" Burst",addToCounter(l+"Burst"),addToCounter("countBurst"))}function getBonusWeaponType(e){return e<98?"gold":"burst"}var isDone=!1;function autoSinglePull(){0!=$(".cb:checked").length?($(".cb").prop("disabled",!0),0==isDone&&(pullSingle(!0),document.getElementById("autopull-bottom-note").innerHTML="Auto Pull will stop once you have obtained at least one copy of each marked weapon, kupo!",setTimeout(()=>{validateAutoPull(),0==isDone?autoSinglePull():(document.getElementById("autopull-bottom-note").innerHTML="Success! Auto Pull stopped after "+counter.autopull+" Single Draws, kupo!",resetAutoPull())},1250))):document.getElementById("autopull-bottom-note").innerHTML="Please mark one or more banner weapons to use Auto Pull, kupo!"}function autoMultiPull(){0!=$(".cb:checked").length?($(".cb").prop("disabled",!0),0==isDone&&(pullMulti(!0),document.getElementById("autopull-bottom-note").innerHTML="Auto Pull will stop once you have obtained at least one copy of each marked weapon, kupo!",setTimeout(()=>{validateAutoPull(),0==isDone?autoMultiPull():(document.getElementById("autopull-bottom-note").innerHTML="Success! Auto Pull stopped after "+counter.autopull+" Multi Draws, kupo!",resetAutoPull())},4750))):document.getElementById("autopull-bottom-note").innerHTML="Please mark one or more banner weapons to use Auto Pull, kupo!"}function validateAutoPull(){return isDone=!0,$(".cb").each(function(e){if(this.checked&&0==counter[this.name])return isDone=!1,!1}),isDone}function resetAutoPull(){isDone=!1,$(".cb").prop("disabled",!1),$(".btn-gacha-all").prop("disabled",!1),counter.autopull=0,counter.count15a=0,counter.count35a=0,counter.countExa=0,counter.count15b=0,counter.count35b=0,counter.countExb=0,counter.count15c=0,counter.count35c=0,counter.countExc=0,counter.countLd=0,counter.countBurst=0}