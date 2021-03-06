import { Router } from "express";
import { PessoaController } from "../controller/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

router.post("/pessoa/cadastrar", pessoaController.cadastrar);
router.get("/pessoa/listar", pessoaController.listar);
router.get("/pessoa/buscar/:cpf", pessoaController.buscarPorCpf);
router.put("/pessoa/alterar", pessoaController.alterar);
router.delete("/pessoa/remover/:cpf", pessoaController.removerPorCpf);

export { router };
