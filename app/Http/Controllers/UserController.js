'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {
    * login(req, res) {
        yield res.sendView('login');
    }

    * loginSubmit(req, res) {
        try{
            var post = req.post();
            yield req.auth.attempt(post.username, post.password);
            res.redirect('/');
        }catch(e){
            yield req
                .withOut('password')
                .andWith({ errors: [{
                    message:'Bad credentials'
                }] })
                .flash()
            res.redirect('back')
            console.log(e);
            return
        }
    }

    * logout(req, res) {
        yield req.auth.logout();
        res.redirect('/');
    }

    * register(req, res) {
        yield res.sendView('register');
    }

    * registerSubmit(req, res) {
        var post = req.post();
        var userData = {
            username:post.username,
            email:post.email,
            password:post.password,
            password2:post.password2
        };

        const validation = yield Validator.validateAll(userData, User.rules)

         if (validation.fails()) {
             yield req
                .withOut('password','password2')
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('back')
            return
         }

        delete userData.password2;
        userData.password = yield Hash.make(userData.password);

        var user = yield User.create(userData);
        yield user.save();

        req.auth.login(user);

        res.redirect('/')
    }
}

module.exports = UserController
