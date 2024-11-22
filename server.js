// Importa o framework Express, que será utilizado para criar a nossa aplicação web.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express para iniciar o servidor.
const app = express();
app.use(express.static("uploads"));
routes(app)

app.listen(3000, () => {
  // Inicia o servidor Express na porta 3000 e exibe uma mensagem no console indicando que o servidor está ouvindo.
  console.log("Server escutando na porta 3000...");
});