import { Candidate } from "../models/candidate";
import {  Response } from "express";
import { candidateService } from "../service/candidateService";
import { AuthenticatedRequest } from "../middleware/auth";

export const candidatesController = {
  index: async (req: AuthenticatedRequest, res: Response) => {
    try {
      const candidates = await Candidate.findAll();
      return res.json(candidates);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  update: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.candidate!;
    const { name, bio, phone, openToWork,birth,curriculum } = req.body;

    try {
      const candidate = await Candidate.findByPk(id);

      if (candidate === null) {
        return res.status(404).json({ message: "Candidato não encontrado" });
      }

      const candidateUpdate = await candidateService.update(id,{
        name,
        birth,
        curriculum,
        bio,
        phone,
        openToWork,
      })

      return res.status(200).json(candidateUpdate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  show: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.candidate!;

    try {
      const candidate = await candidateService.findUniqueCandidate(id);
      return res.json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.candidate!;

    try {
      await candidateService.delete(id)
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
