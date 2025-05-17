import type { Request, Response } from 'express';
import User, { IUser } from '../models/User';

// Criar um novo usuário
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, genero } = req.body;
    
    const newUser = new User({
      nome,
      genero
    });
    
    const savedUser = await newUser.save();
    
    res.status(201).json({
      success: true,
      data: savedUser
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Obter todos os usuários
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Obter um usuário específico
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      res.status(404).json({
        success: false,
        error: 'Usuário não encontrado'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Atualizar um usuário
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, genero } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { nome, genero },
      { new: true, runValidators: true }
    );
    
    if (!user) {
      res.status(404).json({
        success: false,
        error: 'Usuário não encontrado'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Excluir um usuário
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      res.status(404).json({
        success: false,
        error: 'Usuário não encontrado'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
