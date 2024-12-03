import { curso } from "src/curso/entities/curso.entity";
import { docenteasesor } from "src/docenteasesor/entities/docenteasesor.entity";
import { Docenteformacion } from "src/docenteformacion/entities/docenteformacion.entity";
import { Docentetutor } from "src/docentetutor/entities/docentetutor.entity";
import { Tipoactividad } from "src/tipoactividad/entities/tipoactividad.entity";
import { Estadoactividad } from "src/estadoactividad/entities/estadoactividad.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actividad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tema: string;

    @Column()
    fecha: Date;

    @Column()
    inicio_semana: Date;

    @Column()
    fin_semana: Date;
    
    @Column()
    hora_inicio: Date;

    @Column()
    hora_fin: Date;

    @Column()
    numero_horas: Date;

    @Column()
    grado_grupo: string;

    @ManyToOne(() => docenteasesor) 
    @JoinColumn({ name: 'docenteasesorId' }) 
    docenteasesor: docenteasesor;

    @ManyToOne(() => Docentetutor) 
    @JoinColumn({ name: 'docentetutorId' }) 
    docentetutor: Docentetutor;

    @ManyToOne(() => Docenteformacion) 
    @JoinColumn({ name: 'docenteformacionId' }) 
    docenteformacion: Docenteformacion

    @ManyToOne(() => curso, curso => curso.Actividades) 
    @JoinColumn({ name: 'cursoId' }) 
    curso: curso;
    @ManyToOne(() => Tipoactividad) 
    @JoinColumn({ name: 'tipoActividadId' }) 
    tipoActividad: Tipoactividad

    @ManyToOne(() => Estadoactividad) 
    @JoinColumn({ name: 'estadoActividadId' }) 
    estadoActividad: Estadoactividad

}
