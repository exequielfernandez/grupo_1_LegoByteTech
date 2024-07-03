const express = require("express");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"), (err) => {
        if (err) {
            console.error(`Error al enviar el archivo home.html: ${err}`);
            res.status(err.status || 500).send('Error interno del servidor');
        }
    });
});
// Ruta Carrito
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "cart.html"), (err) => {
        if (err) {
            console.error(`Error al enviar el archivo cart.html: ${err}`);
            res.status(err.status || 500).send('Error interno del servidor');
        }
    });
});
// Ruta productDetail
app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "productDetail.html"), (err) => {
        if (err) {
            console.error(`Error al enviar el archivo productDetail.html: ${err}`);
            res.status(err.status || 500).send('Error interno del servidor');
        }
    });
});

