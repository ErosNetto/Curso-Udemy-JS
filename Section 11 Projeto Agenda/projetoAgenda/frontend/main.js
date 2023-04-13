import 'core-js/stable';  // Navegadores mais antigos
import 'regenerator-runtime/runtime';  // Navegadores mais antigos

import Login from './modules/Login';
import Contato from './modules/Contato';

// Form Login e Cadastro
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

// Form criar contato
const contato = new Contato('.form-contato');
contato.init();

// import './assets/css/style.css';  // CSS

