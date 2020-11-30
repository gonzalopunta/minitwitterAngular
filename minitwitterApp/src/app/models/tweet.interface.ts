import { Like } from './like.interface';
import { Usuario } from './usuario.interface';

export interface Tweet {
    id:number;
    mensaje:string;
    likes:Like[];
    usuario:Usuario;
}
