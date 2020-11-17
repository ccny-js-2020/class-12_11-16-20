var explanationsDiv = $("#explanations-div");

console.log(explanationsDiv.data("ying"));

explanationsDiv.attr("blee", "blah");

console.log(explanationsDiv.attr("blee"));

var mythicalCreatures = [
	{
		name: "bigfoot",
		picture: "./bigfoot.jpg",
		displayName: "Bigfoot",
		explanation: "In North American folklore, Bigfoot or Sasquatch are said to be hairy, upright-walking, ape-like creatures that dwell in the wilderness and leave footprints. Depictions often portray them as a missing link between humans and human ancestors or other great apes. They are strongly associated with the Pacific Northwest (particularly Oregon, Washington and British Columbia), and individuals claim to see the creatures across North America. Over the years, these creatures have inspired numerous commercial ventures and hoaxes. The plural nouns 'Bigfoots' and 'Bigfeet' are both acceptable."
	},{
		name: "abominable",
		picture: "./abominable.jpg",
		displayName: "Abominable+Snowman",
		explanation: "The Yeti (/ˈjɛti/) or Abominable Snowman is a folkloric ape-like creature taller than an average human, that is said to inhabit the Himalayan mountains. The names Yeti and Meh-Teh are commonly used by the people indigenous to the region, and are part of their history and mythology. Stories of the Yeti first emerged as a facet of Western popular culture in the 19th century."
	},{
		name: "nessie",
		picture: "./nessie.jpg",
		displayName: "Loch+Ness+Monster",
		explanation: "In Scottish folklore, the Loch Ness Monster or Nessie is a creature said to inhabit Loch Ness in the Scottish Highlands. It is often described as large in size with a long neck and one or more humps protruding from the water. Popular interest and belief in the creature have varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a few disputed photographs and sonar readings."
	}
];

for(var i = 0; i < mythicalCreatures.length; i++){
	var image = $("<img>", {
		class: 'creature-image',
		height: 300,
		width: 300,
		src: mythicalCreatures[i].picture
	});
	image.data("creature", mythicalCreatures[i].name);
	image.data("creature-display", mythicalCreatures[i].displayName)
	$("#append-to-me").append(image);
}

$(document).on("click", '.creature-image', function(){
	var creatureDisplayData = $(this).data("creature-display");
	var creatureName = $(this).data("creature");

	console.log(creatureDisplayData)

	$("#creature-h3").text(creatureDisplayData.split("+").join(" "));

	for(var i = 0; i < mythicalCreatures.length; i++){
		if(mythicalCreatures[i].displayName == creatureDisplayData){
			$("#explanations-div").text(mythicalCreatures[i].explanation)
		}
	}

})
