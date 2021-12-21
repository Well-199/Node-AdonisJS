
export default class PainelsController {

  protected users = [{
      id: 1,
      slug: 'well',
      name: 'Wellington Lira'
    },
    {
      id: 2,
      slug: 'Fe',
      name: 'Fernanda Lira'
    }
  ]

  async index ({response}){

    let json = { hello: 'world'}

    response.send(json)
  }

  async usuario ({ params }) {

    let id = params['id']

    if(!params['id']){
      return {users: this.users}
    }

    let myUser = this.users.find(user => user.id == id)

    if(!myUser){
      return {result: `Usuario com id ${id} não encontrado`}
    }

    return myUser
  }

  async usuarioBySlug ({ params }) {

    let slug = params['slug']

    console.log(slug)

    let myUser = this.users.find(user => user.slug == slug)

    if(!myUser){
      return {result: `Usuario com slug ${slug} não encontrado`}
    }

    return myUser
  }

  async docs ({params}) {

    return params
  }
}
