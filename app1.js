alert("Ta aluurchni gert sersen. Ene gerees zugtaaj chadval ta hojno");
alert("Ta huleestei baigaa. Ta vaar esvel garaan ashiglaj bolno.")
var choise=prompt("vaar/gar?");
if(choise=="vaar" || choise=="Vaar"){
	alert("Ta vaariig hagalj huleese tailla. Hagarah duugar aluurchin shataar ogsoj bna.");
	var choise1=prompt("zugtah/dairah?");
	if(choise1=="zugtah" || choise1=="Zugtah"){
		alert("Ta zugtaaj oor oroond orlo. Oroond hutga bolon tulhuur bna.");
		var choise2=prompt("hutga/tulhuur?");
		if(choise2=="hutga" || choise2=="Hutga"){
			alert("Ta hutgatai bollo.");
			var choise3=prompt("dairah/ailgan surduuleh?");
			if(choise3=="dairah" || choise3=="Dairah"){
				alert("Ta aluurchnig alla. Ta aluurchni halaasnas tulhuur ollo.");
				var choise4=prompt("halaasand bsn tulhuur/oroond bsn tulhuur?");
				if(choise4=="halaasand bsn tulhuur" || choise4=="Halaasand bsn tulhuur"){
					alert("Ta gerees zugtaj hojlo.");
				}else if(choise4=="oroond bsn tulhuur" || choise4=="Oroond bsn tulhuur"){
					alert("Ene tulhuur zovhon zoiriin oroond taarch bn.");
					var choise5=prompt("zoirlu oroh/butsah?");
					if(choise5=="zoirlu oroh" || choise5=="Zoirlu oroh"){
						alert("Deed davhriin oroonoos ym duugarah shig bollo.");
						var choise6=prompt("zoiriin gunlu oroh/deeshe garj shalgah?");
						if(choise6=="zoiriin gunlu oroh" || choise6=="Zoiriin gunlu oroh"){
							alert("Ta garah garts olj zugtaj hojlo.");
						}else if(choise6=="deeshe garj shalgah" || choise6=="Deeshe garj shalgah"){
							alert("Aluurchin buren uheegui bsn ba ta alulav.");
						}else{
							alert("Iim songolt bhgui.");
						}
					}else if(choise5=="butsah" || choise5=="Butsah"){
						alert("Aluurchin buren uheegui bsn ba ta alulav.");
					}else{
						alert("Iim songolt bhgui.");
					}
				}else{
					alert("Iim songolt bhgui.");
				}
			}else if(choise3=="ailgan surduuleh" || choise3=="Ailgan surduuleh"){
				alert("Aluurchin tanlu shuud dairav. Ta alulav.");
			}else{
				alert("Iim songolt bhgui.");
			}
		}else if(choise2=="tulhuur" || choise2=="Tulhuur"){
			alert("Ene tulhuur zovhon zoiriin oroond taarch bn.");
			var choise7=prompt("zoirlu oroh/butsah?");
			if(choise7=="zoirlu oroh" || choise7=="Zoirlu oroh"){
				alert("Ta garah garts olj zugtaj hojlo.");
			}else if(choise7=="butsah" || choise7=="Butsah"){
				alert("Aluurchind barigdaj alulav.");
			}else{
				alert("Iim songolt bhgui.");
			}
		}else{
			alert("Iim songolt bhgui.");
		}
	}else if(choise1=="dairah" || choise1=="Dairah"){
		alert("Ta dairsan bolovch alulav.");
	}else{
		alert("Iim songolt bhgui.");
	}
}else if(choise=="gar" || choise=="Gar"){
	alert("Ta huleese tailj chadalgui aluurchnd alulav.")
}else{
	alert("Iim songolt bhgui.");
}