const catBuilder = (name, color, toys) => {
	return {"name": name, "color": color, "toys": [...toys]}
}


console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]))
