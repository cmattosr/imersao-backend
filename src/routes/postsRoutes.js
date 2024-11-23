import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";


const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
  };

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });

const upload = multer({ storage: storage });

const routes = (app) => {
    // Habilita o middleware `express.json()` para que o Express possa entender requisições com corpo no formato JSON.
    app.use(express.json());
    app.use(cors(corsOptions));
    // Define uma rota GET para a URL "/posts".
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;