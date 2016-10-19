'use strict'
const Category = use('App/Model/Category')
const Recipe = use('App/Model/Recipe')
const Validator = use('Validator')

class RecipeController {
    * list(req, res) {

        const categories = yield Category.with('recipes').fetch();

        yield res.sendView('main', {
            categories: categories.toJSON(),
        });
    }

    * create(req, res) {
        const categories = yield Category.all();

        yield res.sendView('create', {
            categories: categories.toJSON(),
        });
    }

    * createNew(req, res) {
        var post = req.post();
        var userData={
            name:post.name,
            description:post.description,
            category_id:post.category_id
        };

        const validation = yield Validator.validateAll(userData, Recipe.rules)

         if (validation.fails()) {
             yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('back')
            return
         }

        var recipe = yield Recipe.create(userData);
        yield recipe.save();
        res.redirect('/')
    }

    * show(req, res) {

        var recipe=yield Recipe.findBy('id', req.param('id'));
        console.log(recipe);
        yield res.sendView('create', {
            //categories: categories.toJSON(),
        });
    }
}

module.exports = RecipeController
