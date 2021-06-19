const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

//configurando a abertura do db
module.exports = () => open({
  //aqui informa onde vai salvar oo db
  filename: "./database.sqlite",
  driver: sqlite3.Database//driver vai trabalhar e guardar nesse arquivo
  });
