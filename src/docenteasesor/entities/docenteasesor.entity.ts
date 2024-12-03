import { Actividad } from "src/actividad/entities/actividad.entity";
import { Institucion } from "src/institucion/entities/institucion.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class docenteasesor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string

    @Column()
    RUT: string;

    @Column()
    email: string

    @Column()
    celular: string

    @ManyToOne(() => Institucion, (institucion) => institucion.docenteasesor)
    institucion: Institucion
    @OneToMany(() => Actividad, actividad => actividad.docenteasesor) 
    actividades: Actividad[];
}
