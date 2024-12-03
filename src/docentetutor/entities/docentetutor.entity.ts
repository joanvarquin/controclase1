import { Actividad } from "src/actividad/entities/actividad.entity";
import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Docentetutor {
@PrimaryGeneratedColumn()
id: number;

@Column()
nombre: string;

@Column()
apellido: string;

@Column()
RUT: string;

@Column()
telefono: string;

@Column()
email: string;

@ManyToOne(() => Institucion, (Institucion) => Institucion.docentetutor)
institucion:Institucion

@OneToMany(() => Actividad, actividad => actividad.docentetutor) 
actividades: Actividad[];

}
