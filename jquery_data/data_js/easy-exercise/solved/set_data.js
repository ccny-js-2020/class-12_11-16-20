var explanationsDiv = $("#explanations-div");

var tvShows = [
	{
		name: "Breaking Bad",
		yearsRun: "2008-2013",
		premise: "Set in Albuquerque, New Mexico, between 2008 and 2010,[12] Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to provide for his family after being diagnosed with terminal lung cancer. Initially making only small batches of meth with his former student Jesse Pinkman in a rolling meth lab, Walter and Jesse eventually expand to make larger batches of a special blue meth that is incredibly pure and creates high demand. Walter takes on the name 'Heisenberg' to mask his identity. Because of his drug-related activities, Walter eventually finds himself at odds with his family, the Drug Enforcement Administration (DEA) through his brother-in-law Hank Schrader, the local gangs, the Mexican drug cartels and their regional distributors, putting his life at risk."
	},
	{
		name: "The Office",
		yearsRun: "2005-2013",
		premise: "The Office was filmed with a single-camera setup in cinéma vérité style to create the look of an actual documentary, with no studio audience or laugh track, allowing its 'deadpan' and 'absurd' humor to fully come across.[45] The show's primary premise that a camera crew is filming Dunder Mifflin and its employees, seemingly around the clock. The presence of the camera is acknowledged by the characters, especially Michael Scott, who enthusiastically participates in the filming. The characters, especially Jim and Pam, also look towards the camera when Michael creates an awkward situation. The main action of the show is supplemented with talking-head interviews or 'confessionals' in which characters speak one-on-one with the camera crew. Actor John Krasinski shot the footage of Scranton for the opening credits after he found out he was cast as Jim. He visited Scranton for research and interviewed employees at actual paper companies."
	},
	{
		name: "The Sopranos",
		yearsRun: "1999-2007",
		premise: "Set in New Jersey and New York City between 1999 and 2007, the series follows Tony Soprano, a New Jersey-based Italian-American mobster, who tries to balance his family life with his role as boss of the Soprano family. Suffering from panic attacks, Tony engages in therapy sessions with psychiatrist Jennifer Melfi off and on throughout the series. Tony eventually finds himself at odds with his uncle Junior, his wife Carmela, other mobsters within the Soprano family, and the New York City-based Lupertazzi family, putting his life at risk."
	}
];

for(var i = 0; i < tvShows.length; i++){
	var tvShowName = tvShows[i].name;

	var button = $("<button>", {
		class: 'tv-show-buttons',
		text: tvShows[i].name,
	});
	button.data("tvshow-display", tvShowName);
	$("#append-to-me").append(button);
}

$(document).on("click", '.tv-show-buttons', function(){
	var tvShowName = $(this).data("tvshow-display");

	$("#tvshow-h3").text(tvShowName);

	var htmlString = "";
	for(var i = 0; i < tvShows.length; i++){
		if(tvShows[i].name == tvShowName){
			var yearsRun = "<p>Years Run: " + tvShows[i].yearsRun + "</p>";
			var premise = "<p>Premise: " + tvShows[i].premise + "</p>";
			htmlString += yearsRun;
			htmlString += premise;
			$("#explanations-div").html(htmlString);
		}
	}

});
