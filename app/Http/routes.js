'use strict'

const Route = use('Route')

// Route.on('/').render('welcome')
//Route.on('/').render('main')

Route.get('/', 'RecipeController.list');
Route.get('/create', 'RecipeController.create');
Route.post('/create', 'RecipeController.createNew');
Route.get('/recipe/:id', 'RecipeController.show');