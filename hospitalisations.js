/*--Travail Fait par Kamba Balanganayi-->
<!--P1113891-->
<!--IFT 1142 -- Automne 2020-->*/

var tabPatients; //accessible partout


function chargerXML(){
	$.ajax({
		url:"Patient.xml",
		type:"GET",
		dataType:"xml",
	}).done (function(liste){
			tabPatients=liste;


	}).fail (function(){
			alert("ERREUR DURANT LE CHARGEMENT DE XML");
	});
}


function listerPatients(){
	var dossier, nom, prénom, naissance, sexe;
	var tableauPatients=tabPatients.getElementsByTagName("Patient");
	var taille=tableauPatients.length;
	var rep="";
	rep+="<table border=1  id='tablerow'>";
	rep+="<tr><th>Dossier</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Sexe</th></tr>";
		for (var i=0;i<taille;i++){
		dossier=tableauPatients[i].getElementsByTagName("dossier")[0].firstChild.nodeValue;
		nom=tableauPatients[i].getElementsByTagName("nom")[0].firstChild.nodeValue;
		prénom=tableauPatients[i].getElementsByTagName("prénom")[0].firstChild.nodeValue;
		naissance=tableauPatients[i].getElementsByTagName("naissance")[0].firstChild.nodeValue;
		sexe=tableauPatients[i].getElementsByTagName("sexe")[0].firstChild.nodeValue;
		rep+="<tr><td>"+dossier+"</td><td>"+nom+"</td><td>"+prénom+"</td><td>"+naissance+"</td><td>"+sexe+"</td></tr>";
	}
	rep+="</table>";
	$('#contenu').html(rep);
	$('#contenu1').hide("fast");
	$('#contenu').show("fast");
	$('#fenetre').show("fast");
	$('#selPatient').hide("fast");
	$('#selSpecialite').hide("fast");
	$('#selEtablissement').hide("fast");
	document.getElementById('status').style.color="orange";
	document.getElementById('status').innerHTML="Il y a "+taille+" Patients";
}
function listerÉtablissements(){
	var établissement, nom, adresse, codePostal, téléphone;
	var tableauÉtablissements=tabPatients.getElementsByTagName("Hopital");
	var taille=tableauÉtablissements.length;
	var rep="";
	rep+="<table border=1 id='tablerow'>";
	rep+="<tr><th>Établissement</th><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Téléphone</th></tr>";
		for (var i=0;i<taille;i++){
		établissement=tableauÉtablissements[i].getElementsByTagName("établissement")[0].firstChild.nodeValue;
		nom=tableauÉtablissements[i].getElementsByTagName("nom")[0].firstChild.nodeValue;
		adresse=tableauÉtablissements[i].getElementsByTagName("adresse")[0].firstChild.nodeValue;
		codePostal=tableauÉtablissements[i].getElementsByTagName("codePostal")[0].firstChild.nodeValue;
		téléphone=tableauÉtablissements[i].getElementsByTagName("téléphone")[0].firstChild.nodeValue;
		rep+="<tr><td>"+établissement+"</td><td>"+nom+"</td><td>"+adresse+"</td><td>"+codePostal+"</td><td>"+téléphone+"</td></tr>";
	}
	rep+="</table>";
	$('#contenu').html(rep);
	$('#contenu1').hide("fast");
	$('#contenu').show("fast");
	$('#fenetre').show("fast");
	$('#selPatient').hide("fast");
	$('#selSpecialite').hide("fast");
	$('#selEtablissement').hide("fast");
	document.getElementById('status').style.color="orange";
	document.getElementById('status').innerHTML="Il y a "+taille+" Établissements";
}
function listerHospitalisations(){
	var codeÉtablissement, noDossierPatient, dateAdmission, dateSortie, spécialité;
	var tableauHospitalisations=tabPatients.getElementsByTagName("Hospitalisation");
	var taille=tableauHospitalisations.length;
	var rep="";
	rep+="<table border=1 id='tablerow'>";
	rep+="<tr><th>Code Établissment</th><th>No Dossier Patient</th><th>Date Admission</th><th>Date Sortie</th><th>Spécialité</th></tr>";
		for (var i=0;i<taille;i++){
		codeÉtablissement=tableauHospitalisations[i].getElementsByTagName("codeÉtablissement")[0].firstChild.nodeValue;
		noDossierPatient=tableauHospitalisations[i].getElementsByTagName("noDossierPatient")[0].firstChild.nodeValue;
		dateAdmission=tableauHospitalisations[i].getElementsByTagName("dateAdmission")[0].firstChild.nodeValue;
		dateSortie=tableauHospitalisations[i].getElementsByTagName("dateSortie")[0].firstChild.nodeValue;
		spécialité=tableauHospitalisations[i].getElementsByTagName("spécialité")[0].firstChild.nodeValue;
		rep+="<tr><td>"+codeÉtablissement+"</td><td>"+noDossierPatient+"</td><td>"+dateAdmission+"</td><td>"+dateSortie+"</td><td>"+spécialité+"</td></tr>";
	}
	rep+="</table>";
	$('#contenu').html(rep);
	$('#contenu1').hide("fast");
	$('#contenu').show("fast");
	$('#fenetre').show("fast");
	$('#selPatient').hide("fast");
	$('#selSpecialite').hide("fast");
	$('#selEtablissement').hide("fast");
	document.getElementById('status').style.color="orange";
	document.getElementById('status').innerHTML="Il y a "+taille+" Hospitalisations";
}
function chargerListePatient(){
	var selPatient=document.getElementById('selPatient');
	var tableauPatients=tabPatients.getElementsByTagName("Patient");
	var rep="<select id='selPatient'>";
	selPatient.options.length=0;
	selPatient.options[0]=new Option("Choisir le patient");
	var taille=tableauPatients.length;
		for (var i=0; i<taille; i++){
		selPatient.options[selPatient.options.length] = new Option(tableauPatients[i].getElementsByTagName("dossier")[0].firstChild.nodeValue+"("+tableauPatients[i].getElementsByTagName("prénom")[0].firstChild.nodeValue+tableauPatients[i].getElementsByTagName("nom")[0].firstChild.nodeValue+")");
	}
	rep+="</select>";
	$('#contenu').html(rep);
	$('#contenu1').hide("fast");
	$('#contenu').hide("fast");
	$('#fenetre').show("fast");
	$('#selPatient').show("fast");
	$('#selEtablissement').hide("fast");
	$('#selSpecialite').hide("fast");
}
function chargerListeEtablissement(){
	var selEtablissement=document.getElementById('selEtablissement');
	var tableauÉtablissements=tabPatients.getElementsByTagName("Hopital");
	var rep="<select id='selEtablissement'>";
	selEtablissement.options.length=0;
	selEtablissement.options[0]=new Option("Choisir l'établissement");
	var taille=tableauÉtablissements.length;
		for (var i=0; i<taille; i++){
		selEtablissement.options[selEtablissement.options.length] = new Option(tableauÉtablissements[i].getElementsByTagName("établissement")[0].firstChild.nodeValue+"("+tableauÉtablissements[i].getElementsByTagName("nom")[0].firstChild.nodeValue+")");
	}
	rep+="</select>";
	$('#contenu').html(rep);
	$('#contenu1').hide("fast");
	$('#contenu').hide("fast");
	$('#fenetre').show("fast");
	$('#selPatient').hide("fast");
	$('#selEtablissement').show("fast");
	$('#selSpecialite').show("fast");
}
function genererListSpecialite(){
	var selEtablissement=document.getElementById('selEtablissement');
	var tableauHospitalisations=tabPatients.getElementsByTagName("Hospitalisation");
    var etablSelectione=selEtablissement.options[selEtablissement.selectedIndex].text;
    var numEtab1=etablSelectione.substring(0,etablSelectione.indexOf("(",0));
    var verifier;
    var rep="<select id='selSpecialite'>";
    var taille=tableauHospitalisations.length;
    var tab=new Array();
    var j=0;
        for(var i=0; i<taille;i++){
            if(numEtab1==tableauHospitalisations[i].getElementsByTagName("codeÉtablissement")[0].firstChild.nodeValue){
                tab[j]=tableauHospitalisations[i].getElementsByTagName("spécialité")[0].firstChild.nodeValue;
                j++;}
                }
    var tailleTab=tab.length;
    var selSpecialite=document.getElementById('selSpecialite');
                selSpecialite.options.length=0;
                selSpecialite.options[0]=new Option("Choisir la spécialitée");
                for (var i=0; i<tailleTab; i++){verifier=true;
                    for (var j=0; j<i; j++){
                        if(tab[i]==tab[j]){verifier=false;}
                    }
                if(verifier){selSpecialite.options[selSpecialite.options.length]= new Option(tab[i]);}
                }
    rep+="</select>";
    $('#contenu').html(rep);
	$('#contenu').show("fast");
	$('#contenu1').hide("fast");
	$('#fenetre').show("fast");
	$('#selSpecialite').show("fast");
	$('#selPatient').hide("fast");
}
function hospParPatient(){
	var selPatient=document.getElementById('selPatient');
	var tableauHospitalisations=tabPatients.getElementsByTagName("Hospitalisation");
    var patientSelectione=selPatient.options[selPatient.selectedIndex].text;
	var numPatient=patientSelectione.substring(0,patientSelectione.indexOf("(",0));
	var verifier=true;
    var taille1=tabPatients.length;
    var tableau1="";
        for(var i=0; i<taille1; i++){if(tableauPatients[i].getElementsByTagName("dossier")[0].firstChild.nodeValue==numPatient)
        tableau1="<table border=1 id='tablerow1'><tr><td> Dossier No :"+tableauPatients[i].getElementsByTagName("dossier")[0].firstChild.nodeValue+"</td><td> Nom: "+tableauPatients[i].getElementsByTagName("nom")[0].firstChild.nodeValue+"</td><td> Prenom: "+tableauPatients[i].getElementsByTagName("prénom")[0].firstChild.nodeValue+"</td><td> Date de Naissance: "+tableauPatients[i].getElementsByTagName("naissance")[0].firstChild.nodeValue+"</td><td> Sexe: "+tableauPatients[i].getElementsByTagName("sexe")[0].firstChild.nodeValue+"</td></tr></table>";
        }
        var taille=tableauHospitalisations.length;
        for (var i=0; i<taille; i++){
            if(numPatient==tableauHospitalisations[i].getElementsByTagName("noDossierPatient")[0].firstChild.nodeValue){verifier=true;}
        }
        if(verifier){
    tableau="<table border=1 id='tablerow'>"
    tableau+="<tr><th>Code Établissment</th><th>No Dossier Patient</th><th>Date Admission</th><th>Date Sortie</th><th>Spécialité</th></tr>"}
    var taille=tableauHospitalisations.length;
    var n=0;
    for (var i=0; i<taille; i++){
        if(numPatient==tableauHospitalisations[i].getElementsByTagName("noDossierPatient")[0].firstChild.nodeValue){
            n++,
            tableau+="<tr><td>"+tableauHospitalisations[i].getElementsByTagName("codeÉtablissement")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("noDossierPatient")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("dateAdmission")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("dateSortie")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("spécialité")[0].firstChild.nodeValue+"</td></tr>";
        }}
        tableau+="</table>";
		$('#contenu1').html(tableau1);
		$('#contenu').html(tableau);
		$('#contenu1').show("fast");
		$('#contenu').show("fast");
		$('#fenetre').show("fast");
		$('#selPatient').hide("fast");
		$('#selSpecialite').hide("fast");
		$('#selEtablissement').hide("fast");
		document.getElementById('status').style.color="orange";
		document.getElementById('status').innerHTML="Il y a "+n+" Hospitalisations pour le patient "+patientSelectione;
}
function hospParSpecialite(){
    var selEtablissement=document.getElementById('selEtablissement');
	var selSpecialite=document.getElementById('selSpecialite');
	var tableauHospitalisations=tabPatients.getElementsByTagName("Hospitalisation");
	var tableauÉtablissements=tabPatients.getElementsByTagName("Hopital");
    var etablSelectione=selEtablissement.options[selEtablissement.selectedIndex].text;
    var numEtab1=etablSelectione.substring(0,etablSelectione.indexOf("(",0));
    var specialSelectione=selSpecialite.options[selSpecialite.selectedIndex].text;
    var taille1=tableauÉtablissements.length;
    var tableau1="";
        for (var i=0; i<taille1; i++){if(numEtab1==tableauÉtablissements[i].getElementsByTagName("établissement")[0].firstChild.nodeValue){
            tableau1="<table border=1 id='tablerow1'><tr><td> Code d'établissement: "+tableauÉtablissements[i].getElementsByTagName("établissement")[0].firstChild.nodeValue+"</td><td> Nom: "+tableauÉtablissements[i].getElementsByTagName("nom")[0].firstChild.nodeValue+"</td><td> Adresse: "+tableauÉtablissements[i].getElementsByTagName("adresse")[0].firstChild.nodeValue+"</td><td> Code Postal: "+tableauÉtablissements[i].getElementsByTagName("codePostal")[0].firstChild.nodeValue+"</td><td> Telephone: "+tableauÉtablissements[i].getElementsByTagName("téléphone")[0].firstChild.nodeValue+"</td></tr></table>";
        }}
    
    var tableau="";
    tableau="<table border=1 id='tablerow'>";
    tableau+="<tr><th>Code Établissment</th><th>No Dossier Patient</th><th>Date Admission</th><th>Date Sortie</th><th>Spécialité</th></tr>";
    var taille=tableauHospitalisations.length;
    var n=0;
        for(var i=0; i<taille; i++){
            if(numEtab1==tableauHospitalisations[i].getElementsByTagName("codeÉtablissement")[0].firstChild.nodeValue&&specialSelectione==tableauHospitalisations[i].getElementsByTagName("spécialité")[0].firstChild.nodeValue)
            {n++;tableau+="<tr><td>"+tableauHospitalisations[i].getElementsByTagName("codeÉtablissement")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("noDossierPatient")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("dateAdmission")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("dateSortie")[0].firstChild.nodeValue+"</td><td>"+tableauHospitalisations[i].getElementsByTagName("spécialité")[0].firstChild.nodeValue+"</td></tr>";

            }           
            }
        tableau+="</table>";
        $('#contenu1').html(tableau1);
		$('#contenu').html(tableau);
		$('#contenu1').show("fast");
		$('#contenu').show("fast");
		$('#fenetre').show("fast");
		$('#selPatient').hide("fast");
		document.getElementById('status').style.color="orange";
		document.getElementById('status').innerHTML="Il y a "+n+" Hospitalisations dans l'établissement "+etablSelectione+" pour la spécialité: "+specialSelectione;
}
