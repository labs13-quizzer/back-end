exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("username");
    tbl.string("email");
    tbl.string("role");
    tbl.boolean("is_payment");
    tbl.integer("access_code");
  });
  console.log("created teachers table");
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
 