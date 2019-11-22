exports.up = function(knex) {
  return knex.schema
    .createTable("recipeBook", tbl => {
      tbl.increment();
      tbl.string("dishes", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increment();
      tbl.string("ingredientItem", 128);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        // this table must exist already
        .inTable("recipeBook");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipeBook");
};
