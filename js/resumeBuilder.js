/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={"name":"Pedro Montero",
		 "role": "Second Level Support",
		 "contact": {
		 				"mobile":"620901387",
		 				"email":"mntr.pedro@gmail.com",
		 				"github":"https://github.com/prunk1al"
		 			},
		 "welcome":"Welcome to my Bio",
		 "image":"images/me.png",
		 "skills":["Windows","Linux","IANUS","SQL","Python","Multibase"]
		 };

var work={
	"works":[
		{
			"position":"Second Level Support",
			"years":"2015",
			"location":"Santiago de Compostela",
			"employer":"everis",
			"description":"Technical support, data explotation, IANUS coordinator, SIHGA developer"
		},
		{
			"position":"Second Level Support",
			"years":"2014-2015",
			"location":"Santiago de Compostela",
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

	"online":[	
		{
			"name":"Udacity",
			"dates":2015,
			"degree":"JavaScript Basics",
			"majors":"JavaScript",
			"url":"https://www.udacity.com/course/javascript-basics--ud804"
		}
	
	]
};

var project={
	"projects":[
		{
			"title":"yourlastube",
			"dates":"2013",
			"description":"Music Video web aplication over GAE",
			"image":"images/ylt.png",
			"url":"http://www.yourlastube.com"
	}]
};

//$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcome));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.image));
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));


for (tipe in bio.contact){
	$("#topContacts").append(this.window["HTML"+tipe].replace("%data%",bio.contact[tipe]));
}



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



project.display=function(){
	for(i in project["projects"]){
		$("#projects").append(HTMLprojectStart)
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[i].title).replace("#",project.projects[i].url))
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.projects[i].dates))
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.projects[i].description))
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.projects[i].image))
	}
}

education.display=function(){
	for(tipe in education){
		if (tipe==="schools"){
			
			for(i in education[tipe]){
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name))
				$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree))
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].year))
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors))
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].city))
			}
		}
		if (tipe==="online"){
			$("#education").append(HTMLonlineClasses);
			for(i in education[tipe]){
				$("#education").append(HTMLschoolStart);
				
				title=HTMLonlineTitle.replace("%data%",education.online[i].degree)+HTMLonlineSchool.replace("%data%",education.online[i].name);

				$(".education-entry:last").append(title);
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.online[i].dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.online[i].url));
				
			}
		}
	}

}

education.display()
project.display();
displayWork();