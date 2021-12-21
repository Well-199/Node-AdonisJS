import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.group(() => {

    Route.get('/', 'PainelsController.index')

    Route.get('/usuarios/:id?', 'PainelsController.usuario')
    .where('id', Route.matchers.number())

    Route.get('/usuarios/:slug', 'PainelsController.usuarioBySlug')
    .where('slug', /^[A-Z_-][a-z_-]+$/)

    Route.get('/docs/*', 'PainelsController.docs')

  }).prefix('/painel')


}).prefix('/api')

