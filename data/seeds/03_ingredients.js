exports.seed = async function(knex) {
	await knex("ingredients").insert([   
		{ingredient_name: 'green beans'}
	])
}