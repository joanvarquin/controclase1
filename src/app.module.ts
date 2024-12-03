import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocenteformacionModule } from './docenteformacion/docenteformacion.module';
import { InstitucionModule } from './institucion/institucion.module';
import { GradoModule } from './grado/grado.module';
import { DocenteasesorModule } from './docenteasesor/docenteasesor.module';
import { DocentetutorModule } from './docentetutor/docentetutor.module';
import { CursoModule } from './curso/curso.module';
import { ActividadModule } from './actividad/actividad.module';
import { EstadoactividadModule } from './estadoactividad/estadoactividad.module';
import { TipoactividadModule } from './tipoactividad/tipoactividad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12152011',
      database: 'practdocente',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DocenteformacionModule,
    InstitucionModule,
    GradoModule,
    DocenteasesorModule,
    DocentetutorModule,
    CursoModule,
    ActividadModule,
    EstadoactividadModule,
    TipoactividadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
