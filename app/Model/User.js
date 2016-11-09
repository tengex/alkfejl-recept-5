'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
    static get rules () {
        return {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required',
            password2: 'required|same:password',
        }        
    }      

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User
