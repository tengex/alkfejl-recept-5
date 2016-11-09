'use strict'

const Lucid = use('Lucid')

class Recipe extends Lucid {
    static get rules () {
        return {
            name: 'required|unique:recipes',
            description: 'required',
            category_id: 'required',
        }        
    }      

  category () {
    return this.belongsTo('App/Model/Category')
  }
}

module.exports = Recipe
