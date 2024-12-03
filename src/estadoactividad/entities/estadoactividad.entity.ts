import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estadoactividad {
    @PrimaryGeneratedColumn()
    id: number;

    
}
