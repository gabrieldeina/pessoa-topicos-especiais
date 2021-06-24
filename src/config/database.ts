import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@clustertopicosavancados.dkpuw.mongodb.net/TopicosEspeciais?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada com o banco de dados!");
  })
  .catch((err) => {
    console.log(`Erro ao conectar no banco de dados: ${err}`);
  });

export { mongoose };
