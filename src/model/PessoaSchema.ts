import { model, Schema } from "mongoose";

const PessoaSchema = new Schema(
  {
    nome: {
      type: String,
      require: [true, "O campo nome é obrigatório!"],
    },
    cpf: {
      type: String,
      require: [true, "O campo CPF é obrigatório!"],
    },
    idade: {
      type: Number,
      require: [true, "O campo idade é obrigatório!"],
    },
  },
  { timestamps: true }
);

export default model("pessoas", PessoaSchema);
