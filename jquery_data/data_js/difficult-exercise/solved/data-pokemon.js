var pokemon = [{
	name: "squirtle",
	evolvesTo: "wartortle",
	evolvedFrom: null,
	img: "squirtle.png"
},{
	name: "bulbasaur",
	evolvesTo: "ivysaur",
	evolvedFrom: null,
	img: "bulbasaur.png"
},{
	name: "wartortle",
	evolvesTo: "blastoise",
	evolvedFrom: "squirtle",
	img: "wartortle.png"
},{
	name: "ivysaur",
	evolvesTo: "venusaur",
	evolvedFrom: "bulbasaur",
	img: "ivysaur.png"
},{
	name: "blastoise",
	evolvesTo: null,
	evolvedFrom: "wartortle",
	img: "blastoise.png"
},{
	name: "venusaur",
	evolvesTo: null,
	evolvedFrom: "bulbasaur",
	img: "venusaur.png"
}]

for(var i = 0; i < pokemon.length; i++){
	if(!pokemon[i].evolvedFrom){
		var image = $("<img>", {
			class: 'pokemon-img',
			src: pokemon[i].img,
			height: 300,
			width: 300
		});
		image.data("pokemon-name", pokemon[i].name);
		image.data("evolves-to", pokemon[i].evolvesTo);
		image.css("padding", "15px");

		$("#append-to-me").append(image)
	}
}

$(document).on("click", ".pokemon-img", function(){
	var pokemonName = $(this).data("pokemon-name");
	var evolvesTo = $(this).data("evolves-to");

	if(evolvesTo){
		for(var i = 0; i < pokemon.length; i++){
			if(pokemon[i].name == evolvesTo){
				$(this).attr("src", pokemon[i].img);
				$(this).data("pokemon-name", pokemon[i].name);
				$(this).data("evolves-to", pokemon[i].evolvesTo);
			}
		}
	} else {
		alert("No more evolution")
	}
});
