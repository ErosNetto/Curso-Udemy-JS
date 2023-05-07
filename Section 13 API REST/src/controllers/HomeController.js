import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Miranda',
      email: 'luiz@gmail.com',
      idade: 43,
      peso: 84,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
