'use strict'

const Route = use('Route')

// Route.on('/').render('welcome')
//Route.on('/').render('main')

Route.get('/', 'RecipeController.list');
Route.get('/create', 'RecipeController.create');
Route.post('/create', 'RecipeController.createNew');
Route.get('/recipe/:id', 'RecipeController.show');
Route.get('/recipe/:id/edit', 'RecipeController.edit');
Route.post('/recipe/:id/edit', 'RecipeController.editSubmit');
Route.post('/recipe/:id/delete', 'RecipeController.delete');

Route.get('/register', 'UserController.register');
Route.post('/register', 'UserController.registerSubmit');
Route.get('/login', 'UserController.login');
Route.post('/login', 'UserController.loginSubmit');
Route.get('/logout', 'UserController.logout');