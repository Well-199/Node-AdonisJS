
export default class HomeController {

  async index ({ view }){
    return view.render('painel/homepage')
  }

  async sobre (){
    return 'Sobre Nós'
  }
}
