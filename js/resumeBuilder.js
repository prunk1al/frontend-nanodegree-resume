/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={"name":"Pedro Montero",
		 "role": "Second Level Support",
		 "contact": {
		 				"mobile":"620901387",
		 				"email":"mntr.pedro@gmail.com"
		 			},
		 "welcome":"Welcome to my Bio",
		 "skills":["Windows","Linux","IANUS","SQL","Python","Multibase"]};

var work={
	"works":[
		{
			"position":"Second Level Support",
			"years":"2015",
			"city":"Santiago de Compostela",
			"employer":"everis",
			"description":"Technical support, data explotation, IANUS coordinator, SIHGA developer"
		},
		{
			"position":"Second Level Support",
			"years":"2014-2015",
			"city":"Santiago de Compostela",
			"employer":"Zemsania",
			"description":""
		}
	]};

var education={
	"schools":[
		{"name":"IES Armando Cotarelo",
		 "year":"2001-2003",
		 "degree":"Tecnico en Administación de Sistemas Informáticos",
		 "majors":["SQL","Windows","Programing"],
		 "city":"Vilagarcía de Arousa"
		}],

	"onlineCourses":[	
		{
			"name":"Udacity",
			"year":2015,
			"degree":"JavaScript Basics",
			"majors":"JavaScript"
		}
	]
};

var project={
	"projects":[
		{
			"title":"yourlastube",
			"dates":"2013",
			"description":"Music Video web aplication over GAE"
	}]
};


$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role))
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name))


if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	//
	for(skil in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skil]))
	}
}

function displayWork(){
	for(w in work.works){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.works[w].employer) + HTMLworkTitle.replace("%data%",work.works[w].position));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.works[w].years));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.works[w].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.works[w].description))
	}
}


function inName(){
	var arrayName=name.split(" ");
	var first=arrayName[0][0].toUpperCase()+arrayName[0].slice(1).toLowerCase();
	var second=arrayName[1].toUpperCase();
	return first + " " + second;
}
var name = $("#name").text();

//$("#main").append(internationalizeButton);

project.display=function(){
	for(i in project["projects"]){
		$("#projects").append(HTMLprojectStart)
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[i].title))
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.projects[i].dates))
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.projects[i].description))
	}
}

project.display();