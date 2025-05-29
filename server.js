const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/user', async (req, res) => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        console.log('Respuesta completa de randomuser.me:', data);

        const user = data.results[0];

        res.json({
            nombre: `${user.name.first} ${user.name.last}`,
            genero: user.gender,
            ubicacion: `${user.location.city}, ${user.location.country}`,
            correo: user.email,
            nacimiento: user.dob.date,
            foto: user.picture.large
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
