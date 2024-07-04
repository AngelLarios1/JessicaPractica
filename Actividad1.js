const mongoose = require("mongoose");

const url_bd = "mongodb://localhost:27017Actividad1"; 
mongoose.connect(url_bd, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conexión exitosa a la base de datos");
    })
    .catch((error) => {
        console.log("Error al conectar a la base de datos", error);
    });


const esquema_biblioteca = new mongoose.Schema({
    client_name: {
        type: String,
        required: true
    },
    ID_client: {
        type: Number,
        required: true
    },
    name_book: {
        type: String,
        required: true
    },
    gender_book: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Biblioteca = mongoose.model("Biblioteca", esquema_biblioteca);

Biblioteca.create({
    client_name: "Josue Pancracio de Luna",
    ID_client: 1234567890,
    name_book: "El Principito",
    gender_book: "Literatura infantil",
    author: "Antoine de Saint-Exupéry"
}).then(() => console.log("Documento creado en Biblioteca"))
  .catch((error) => console.log("Error al crear documento en Biblioteca", error));
                                    
const esquema_floreria = new mongoose.Schema({
    client_name: {
        type: String,
        required: true
    },
    num_order: {
        type: Number,
        required: true
    },
    type_flower: {
        type: String,
        required: true
    },
    depurate_date: {
        type: Date,
        required: true
    },
    number_flowers: {
        type: Number,
        required: true
    }
});

const Floreria = mongoose.model("Floreria", esquema_floreria);

Floreria.create({
    client_name: "Jenni Rivera",
    num_order: 54,
    type_flower: "Floripondios",
    depurate_date: new Date("2024-03-12"),
    number_flowers: 12
}).then(() => console.log("Documento creado en Floreria"))
  .catch((error) => console.log("Error al crear documento en Floreria", error));
