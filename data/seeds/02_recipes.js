exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{recipe_name: "Green Bean Cassarole", instructions: "Just make it"}
	])
}