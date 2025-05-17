import mongoose, { type Document, Schema } from 'mongoose';

// Interface para o modelo de usuário
export interface IUser extends Document {
  nome: string;
  genero: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema do usuário
const UserSchema: Schema = new Schema(
  {
    nome: {
      type: String,
      required: [true, 'O nome é obrigatório'],
      trim: true
    },
    genero: {
      type: String,
      required: [true, 'O gênero é obrigatório'],
      trim: true,
      enum: ['masculino', 'feminino', 'outro', 'prefiro não informar']
    }
  },
  {
    timestamps: true
  }
);

// Exportando o modelo
export default mongoose.model<IUser>('User', UserSchema);
