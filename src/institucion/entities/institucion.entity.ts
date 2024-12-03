import { Docenteformacion } from "src/docenteformacion/entities/docenteformacion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Institucion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre_institucion: string;
  
    @Column()
    RBD: string;

    @Column()
    direccion: string;
  
    @Column()
    telefono: string;

    @Column()
    email: string;
  
    @OneToMany(() => Docenteformacion, (docenteformacion) => docenteformacion.institucion)
    docenteformacion: Docenteformacion[]
    docenteasesor: any;
    docentetutor: any;
}

