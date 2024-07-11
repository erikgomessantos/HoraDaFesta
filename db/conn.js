const mongoose = require("mongoose");

async function main() {

    try {

        await mongoose.connect (
            "mongodb+srv://erik:erik123@cluster1.wmdegzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
        );

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
};

module.exports = main;