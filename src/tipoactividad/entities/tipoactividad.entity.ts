import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tipoactividad {
    @PrimaryColumn()
    id:number;
}
