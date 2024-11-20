import express from "express";

const posts = [
  {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 2,
      descricao: "Paisagem deslumbrante",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 3,
      descricao: "Cachorro fofo",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 4,
      descricao: "Comida deliciosa",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 5,
      descricao: "Citação inspiradora",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 6,
      descricao: "Gráfico interessante",
      imagem: "https://placecats.com/millie/300/150"
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server escutando na porta 3000...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

// exemplo: http://localhost:3000/posts/2
app.get("/posts/:id", (req, res) => {
  const index= buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
