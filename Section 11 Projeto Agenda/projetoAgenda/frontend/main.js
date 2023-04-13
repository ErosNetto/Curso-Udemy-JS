import 'core-js/stable';  // Navegadores mais antigos
import 'regenerator-runtime/runtime';  // Navegadores mais antigos

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

import './assets/css/style.css';  // CSS