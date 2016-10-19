'use strict'

const Schema = use('Schema')

class RecipesSchema extends Schema {

  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.integer('category_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }

}

module.exports = RecipesSchema
