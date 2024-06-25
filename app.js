const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static("public"));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/cart.html"));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
