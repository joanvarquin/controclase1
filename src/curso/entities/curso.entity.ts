import { Grado } from "src/grado/entities/grado.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actividad } from "src/actividad/entities/actividad.entity";

@Entity()
export class curso {
    @PrimaryGeneratedColumn()
    id: number;
  
    

    @ManyToOne(() => Grado, (Grado) => Grado.curso)
    Grado: Grado
    Actividades: any;
}