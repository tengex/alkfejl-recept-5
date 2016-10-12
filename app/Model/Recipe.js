'use strict'

const Lucid = use('Lucid')

class Recipe extends Lucid {
  category () {
    return this.hasMany('App/Model/Category')
  }
}

module.exports = Recipe
