const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

app.set("view engine", "ejs");

// Escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta Home
app.get("/", (req, res) => {
  res.render("home");
});
// Ruta Carrito
app.get("/cart", (req, res) => {
  res.render("cart");
});
// Ruta login
app.get("/login", (req, res) => {
  res.render("login");
});

// Ruta productDetail
app.get("/productDetail", (req, res) => {
  res.render("productDetail");
});

// Ruta signUp
app.get("/signUp", (req, res) => {
  res.render("signUp");
});
