
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", table=>{
        table.increments();
        table.string("recipe_name").notNull();
        table.string("instructions").notNull();
    })
    await knex.schema.createTable("ingredients", table=>{
        table.increments();
        table.string("ingredient_name").notNull().unique();
    })
    await knex.schema.createTable("recipe_ingredients", table=>{
        table.integer("recipe_id").unsigned().notNull().references("id").inTable("recipes").onUpdate("CASCADE").onDelete("CASCADE");
        table.integer("ingredient_id").unsigned().notNull().references("id").inTable("ingredients").onUpdate("CASCADE").onDelete("CASCADE");
        table.float("quantity").notNull();
        table.unique(["recipe_id", "ingredient_id"]);
    });
};

exports.down = async function(knex) {
    await knex.dropTableIfExists("recipe_ingredients")
    await knex.dropTableIfExists("ingredients")
    await knex.dropTableIfExists("recipes");
};
