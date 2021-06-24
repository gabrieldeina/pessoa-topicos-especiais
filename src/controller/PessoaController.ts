import { Request, Response } from "express";
import PessoaSchema from "../model/PessoaSchema";

class PessoaController {
  async cadastrar(req: Request, res: Response) {
    if (!req.body) {
      res.status(404).json({
        error: true,
        msg: "Está faltando o body da request!",
      });
    }
    const { cpf } = req.body;
    try {
      const pessoa = await PessoaSchema.findOne({ cpf: cpf });
      if (!pessoa) {
        const novapessoa = await PessoaSchema.create(req.body);
        res.status(201).json({
          data: novapessoa,
          error: false,
          msg: "Pessoa cadastrada com sucesso!",
        });
      }
      res.status(201).json({
        data: pessoa,
        error: false,
        msg: "Esse CPF já está cadastrado!",
      });
    } catch (err) {
      res.status(400).json({
        data: err,
        error: true,
        msg: "Falha ao cadastrar pessoa!",
      });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const pessoas = await PessoaSchema.find();
      res.status(200).json({
        data: pessoas,
        error: false,
        msg: "Lista de pessoas atualizada!",
      });
    } catch (err) {
      res.status(400).json({
        data: err,
        error: true,
        msg: "Não foi possível listar as pessoas!",
      });
    }
  }

  async buscarPorCpf(req: Request, res: Response) {
    const { cpf } = req.params;
    try {
      const pessoa = await PessoaSchema.findOne({ cpf: cpf });
      if (pessoa != null) {
        res.status(200).json({
          data: pessoa,
          error: false,
          msg: "Pessoa encontrada!",
        });
      }
      res.status(404).json({
        data: pessoa,
        error: false,
        msg: "Pessoa não encontrada!",
      });
    } catch (err) {
      res.status(200).json({
        data: err,
        error: true,
        msg: "Pessoa não encontrada!",
      });
    }
  }

  async alterar(req: Request, res: Response) {
    if (!req.body) {
      res.status(404).json({
        error: true,
        msg: "Está faltando o body da request!",
      });
    }
    const { nome, cpf, idade } = req.body;

    try {
      const pessoa = await PessoaSchema.findOne({ cpf: cpf });
      if (pessoa != null) {
        const result = await PessoaSchema.updateOne(
          { cpf: cpf },
          {
            $set: {
              nome: nome,
              cpf: cpf,
              idade: idade,
            },
          }
        );
        res.status(200).json({
          data: result,
          error: false,
          msg: "Pessoa atualizada com sucesso!",
        });
      }
      res.status(404).json({
        data: pessoa,
        error: true,
        msg: "Pessoa não encontrada!",
      });
    } catch (err) {
      res.status(200).json({
        data: err,
        error: true,
        msg: "Pessoa não encontrada!",
      });
    }
  }

  async removerPorCpf(req: Request, res: Response) {
    const { cpf } = req.params;
    try {
      const pessoa = await PessoaSchema.findOne({ cpf: cpf });
      if (pessoa != null) {
        const remover = await PessoaSchema.findOneAndDelete({ cpf: cpf });
        res.status(200).json({
          data: remover,
          error: false,
          msg: "Pessoa encontrada e removida!",
        });
      }
      res.status(404).json({
        data: pessoa,
        error: false,
        msg: "Pessoa não encontrada!",
      });
    } catch (err) {
      res.status(200).json({
        data: err,
        error: true,
        msg: "Pessoa não encontrada!",
      });
    }
  }
}

export { PessoaController };
