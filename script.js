
var S = ["Fear", "Torture", "Splatter", "Cannibal", "Madness & Paranoia", "Home Invasion", "Crime", "Neo-Monster", "Nature", "Small Creatures", "Giant Monsters" , "Classic Mythology", "Human-animal hybrid", "Scientific Fiction", "Undead", "Virus", "Ghosts & Spirits", "Haunted houses","Possession","Devil, Demons, Hell", "Witches and Occult","Supernatural Powers", "Romance", "Family Reunion","Sitcom","Work-com","Satire","Farce","Unrequited Love","Farmhand Romance","Action","Adventure","Isikai"]
var N = ["Acceptance", "Curiousity", "Eating", "Family", "Honour", "Idealism", "Independence", "Order"]
var VN = ["Acceptance", "Curiousity", "Eating", "Family", "Honour", "Idealism", "Independence", "Order"]
var F = ["death", "suffocation", "paralysis", "rejection", "being shunned", "losing self", "abandonment", "imprisonment","being restricted", "blindness", "deafness", "tastelessness", "immobility", "memory loss", "breakup", "being enveloped", "deafness","being numb", "being alone"]
var VF = ["death", "suffocation", "paralysis", "rejection", "being shunned", "losing self", "abandonment", "imprisonment","being restricted", "blindness", "deafness", "tastelessness", "immobility", "memory loss", "breakup", "being enveloped", "deafness","being numb", "being alone"]




function readText (form) {
    TestVar =form.inputbox.value;
    alert ("You typed: " + TestVar);
}

function writeText (form) {
    form.inputbox.value = "Have a nice day!"
}

function pickRandom (form){


var randInt = Math.floor(Math.random() * (S.length) ) ;
var Sitem = S[randInt]

var randInt = Math.floor(Math.random() * (N.length) ) ;
var Nitem = N[randInt]

var randInt = Math.floor(Math.random() * (N.length) ) ;
var VNitem = VN[randInt]

var randInt = Math.floor(Math.random() * (F.length) ) ;
var Fitem = F[randInt]

var randInt = Math.floor(Math.random() * (F.length) ) ;
var VFitem = VF[randInt]

var randInt = Math.floor(Math.random() * (N.length) ) ;
var Nitem = N[randInt]

				
				form.Settings.value = "Genre: " + Sitem
				form.Needs.value = "Protag Desires: "+Nitem
form.VNeeds.value = "Vill Desires: "+VNitem
			form.fears.value = "Protag fears: " + Fitem
form.Vfears.value = "Vill fears: " + VFitem 
form.Textblock.value = "Genre: \n " + Sitem +  " Protag Desires: "+Nitem +" Vill Desires: "+VNitem+ " Protag fears: " + Fitem+" Vill fears: " + VFitem 
}
