exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([   
		{ recipe_id: 1, ingredient_id: 1, quantity: 4.45 }
	])
}