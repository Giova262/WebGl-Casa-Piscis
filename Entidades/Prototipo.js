class Prototipo{

    constructor(){

        /**Plano de referencia */
        var geometria = new Plano(200,200,[0.9,0.9,0.9]);
        this.plano = new Objeto(geometria);

        /**Pisos */
        var geometria_Base = new Rectangulo(100,120,20,[1,1,1],50,50);
        this.base = new Objeto(geometria_Base)

        var geometria_Base_2 = new Rectangulo(80,80,10,[1,1,1],50,50);
        this.base_2 = new Objeto(geometria_Base_2)

        /**Techo */
        this.techo_1 = new Objeto(geometria_Base_2)

        /**Casa */
        var geometria_Base_3 = new Rectangulo(60,60,60,[1,1,1],50,50);
        this.casa = new Objeto(geometria_Base_3)

        /**Columnas */
        var geometria_col_1 = new Cilindro(2,65,100,100,[1,1,1])
        this.col_1 = new Objeto(geometria_col_1)
        this.col_2 = new Objeto(geometria_col_1)
        this.col_3 = new Objeto(geometria_col_1)
        this.col_4 = new Objeto(geometria_col_1)
        this.col_5 = new Objeto(geometria_col_1)
        this.col_6 = new Objeto(geometria_col_1)

        this.col_7 = new Objeto(geometria_col_1)
        this.col_8 = new Objeto(geometria_col_1)
        this.col_9 = new Objeto(geometria_col_1)
        this.col_10 = new Objeto(geometria_col_1)
        this.col_11 = new Objeto(geometria_col_1)
        this.col_12 = new Objeto(geometria_col_1)

        this.col_13 = new Objeto(geometria_col_1)
        this.col_14 = new Objeto(geometria_col_1)
        this.col_15 = new Objeto(geometria_col_1)

        this.col_16 = new Objeto(geometria_col_1)
        this.col_17 = new Objeto(geometria_col_1)
        this.col_18 = new Objeto(geometria_col_1)
        

        /**Configuracion inicial */
        this.configuracion();
    }

    configuracion(){

        /** Valores de mapas */
        this.plano.setMapaDifuso(ejemplo_textura);
        this.plano.setMapaNormal(ejemplo_normal);
        this.plano.setMapaRelieve(ejemplo_normal);

      

        /** Estilo */
        this.plano.textura(false);
        this.plano.normalMap(false);
        this.plano.relieve(false);
        this.plano.animacion(false);

        this.base.textura(false);
        this.base.normalMap(false);
        this.base.relieve(false);
        this.base.animacion(false);

        

        /** Iluminacion */
        this.plano.phongCoheficientes(1,1,1,60);
        

        /** Movimientos iniciales */
        this.plano.escalar([1,1,1]);
        this.plano.rotar(0,[0,0,1]);
        this.plano.trasladar([0,0,0]);

        this.base_2.trasladar([0,20,20]);

        this.techo_1.trasladar([0,20,85]);
        
        this.casa.trasladar([0,20,30]);

        this.col_1.trasladar([-35,-15,27]);
        this.col_2.trasladar([-21,-15,27]);
        this.col_3.trasladar([-7,-15,27]);
        this.col_4.trasladar([7,-15,27]);
        this.col_5.trasladar([21,-15,27]);
        this.col_6.trasladar([35,-15,27]);

        this.col_7.trasladar([-35,55,27]);
        this.col_8.trasladar([-21,55,27]);
        this.col_9.trasladar([-7,55,27]);
        this.col_10.trasladar([7,55,27]);
        this.col_11.trasladar([21,55,27]);
        this.col_12.trasladar([35,55,27]);

        this.col_13.trasladar([-35,2.5,27]);
        this.col_14.trasladar([-35,20,27]);
        this.col_15.trasladar([-35,37.5,27]);

        this.col_16.trasladar([35,2.5,27]);
        this.col_17.trasladar([35,20,27]);
        this.col_18.trasladar([35,37.5,27]);

        /** Formato de vetices */
        this.plano.setDrawType(gl.TRIANGLES);
        this.base.setDrawType(gl.TRIANGLES);
        this.base_2.setDrawType(gl.TRIANGLES);
    }

    update(){
        //Posibles movimientos con el tiempo
    }

    dibujar(){
        this.plano.dibujar();

        this.base_2.dibujar();
        this.base.dibujar();

        this.techo_1.dibujar();

        this.casa.dibujar();

        this.col_1.dibujar();
        this.col_2.dibujar();
        this.col_3.dibujar();
        this.col_4.dibujar();
        this.col_5.dibujar();
        this.col_6.dibujar();

        this.col_7.dibujar();
        this.col_8.dibujar();
        this.col_9.dibujar();
        this.col_10.dibujar();
        this.col_11.dibujar();
        this.col_12.dibujar();

        this.col_13.dibujar();
        this.col_14.dibujar();
        this.col_15.dibujar();

        this.col_16.dibujar();
        this.col_17.dibujar();
        this.col_18.dibujar();
    }
}