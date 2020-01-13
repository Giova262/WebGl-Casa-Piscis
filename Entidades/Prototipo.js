class Prototipo{

    constructor(){

        /**Plano de referencia */
        var geometria = new Plano(200,200,[0.9,0.9,0.9]);
        this.plano = new Objeto(geometria);

        /**Escaleras */

        var geometria_esc_1_1 = new Rectangulo(70,5,8,[1,1,1],50,50);
            this.escalera_1_1 = new Objeto(geometria_esc_1_1)
        var geometria_esc_1_2 = new Rectangulo(70,5,6,[1,1,1],50,50);
            this.escalera_1_2 = new Objeto(geometria_esc_1_2)
        var geometria_esc_1_3 = new Rectangulo(70,5,4,[1,1,1],50,50);
            this.escalera_1_3 = new Objeto(geometria_esc_1_3)
        var geometria_esc_1_4 = new Rectangulo(70,5,2,[1,1,1],50,50);
            this.escalera_1_4 = new Objeto(geometria_esc_1_4)

        var geometria_esc_2 = new Rectangulo(10,8,50,[1,1,1],50,50);
            this.escalera_2_1 = new Objeto(geometria_esc_2)
            this.escalera_2_2 = new Objeto(geometria_esc_2)
            this.escalera_2_3 = new Objeto(geometria_esc_2)
            this.escalera_2_4 = new Objeto(geometria_esc_2)
            this.escalera_2_5 = new Objeto(geometria_esc_2)
            this.escalera_2_6 = new Objeto(geometria_esc_2)
            this.escalera_2_7 = new Objeto(geometria_esc_2)
            this.escalera_2_8 = new Objeto(geometria_esc_2)
            this.escalera_2_9 = new Objeto(geometria_esc_2)
            this.escalera_2_10 = new Objeto(geometria_esc_2)
            this.escalera_2_11 = new Objeto(geometria_esc_2)
            this.escalera_2_12 = new Objeto(geometria_esc_2)
            this.escalera_2_13 = new Objeto(geometria_esc_2)
            this.escalera_2_14 = new Objeto(geometria_esc_2)
            this.escalera_2_15 = new Objeto(geometria_esc_2)
            this.escalera_2_16 = new Objeto(geometria_esc_2)
            this.escalera_2_17 = new Objeto(geometria_esc_2)
            this.escalera_2_18 = new Objeto(geometria_esc_2)
            this.escalera_2_19 = new Objeto(geometria_esc_2)
            this.escalera_2_20 = new Objeto(geometria_esc_2)
            this.escalera_2_21 = new Objeto(geometria_esc_2)
            this.escalera_2_22 = new Objeto(geometria_esc_2)
            this.escalera_2_23 = new Objeto(geometria_esc_2)
            this.escalera_2_24 = new Objeto(geometria_esc_2)
            this.escalera_2_25 = new Objeto(geometria_esc_2)
            this.escalera_2_26 = new Objeto(geometria_esc_2)
            this.escalera_2_27 = new Objeto(geometria_esc_2)
            this.escalera_2_28 = new Objeto(geometria_esc_2)
            this.escalera_2_29 = new Objeto(geometria_esc_2)
            this.escalera_2_30 = new Objeto(geometria_esc_2)
            this.escalera_2_31 = new Objeto(geometria_esc_2)
            this.escalera_2_32 = new Objeto(geometria_esc_2)
            this.escalera_2_33 = new Objeto(geometria_esc_2)

        /**Pisos */
        var geometria_Base = new Rectangulo(120,160,20,[1,1,1],50,50);
        this.base = new Objeto(geometria_Base)      
        var geometria_Base_2 = new Rectangulo(80,80,10,[1,1,1],50,50);
        this.base_2 = new Objeto(geometria_Base_2)

        /**Techo */
        var geometria_techo_2 = new Triangulo(50,50,80,[1,1,1]);
        this.techo_1 = new Objeto(geometria_Base_2)
        this.techo_2 = new Objeto(geometria_techo_2)
            
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

        /**Ecaleras Gigante 1 */
        var geometria_esc_central = new Triangulo(175,280,5,[1,1,1]);
        this.base_esc_1_1 = new Objeto(geometria_esc_central)
        this.base_esc_1_2 = new Objeto(geometria_esc_central)
        var geometria_esc_central_2 = new Triangulo(120,160,45,[1,1,1]);
        this.base_esc_2_1 = new Objeto(geometria_esc_central_2)

        
        /**Agregar Hijos */

        //this.plano.addChildren(this.base_esc_1_1)

        this.base.addChildren(this.escalera_1_1)
        this.base.addChildren(this.escalera_1_2)
        this.base.addChildren(this.escalera_1_3)
        this.base.addChildren(this.escalera_1_4)
        this.base.addChildren(this.base_2)

        this.base_2.addChildren(this.col_1)
        this.base_2.addChildren(this.col_2)
        this.base_2.addChildren(this.col_3)
        this.base_2.addChildren(this.col_4)
        this.base_2.addChildren(this.col_5)
        this.base_2.addChildren(this.col_6)
        this.base_2.addChildren(this.col_7)
        this.base_2.addChildren(this.col_8)
        this.base_2.addChildren(this.col_9)
        this.base_2.addChildren(this.col_10)
        this.base_2.addChildren(this.col_11)
        this.base_2.addChildren(this.col_12)
        this.base_2.addChildren(this.col_13)
        this.base_2.addChildren(this.col_14)
        this.base_2.addChildren(this.col_15)
        this.base_2.addChildren(this.col_16)
        this.base_2.addChildren(this.col_17)
        this.base_2.addChildren(this.col_18)
        this.base_2.addChildren(this.casa)

        this.casa.addChildren(this.techo_1)

        this.techo_1.addChildren(this.techo_2)

        this.base_esc_1_1.addChildren(this.escalera_2_1)
        this.base_esc_1_1.addChildren(this.escalera_2_2)
        this.base_esc_1_1.addChildren(this.escalera_2_3)
        this.base_esc_1_1.addChildren(this.escalera_2_4)
        this.base_esc_1_1.addChildren(this.escalera_2_5)
        this.base_esc_1_1.addChildren(this.escalera_2_6)
        this.base_esc_1_1.addChildren(this.escalera_2_7)
        this.base_esc_1_1.addChildren(this.escalera_2_8)
        this.base_esc_1_1.addChildren(this.escalera_2_9)
        this.base_esc_1_1.addChildren(this.escalera_2_10)
        this.base_esc_1_1.addChildren(this.escalera_2_11)
        this.base_esc_1_1.addChildren(this.escalera_2_12)
        this.base_esc_1_1.addChildren(this.escalera_2_13)
        this.base_esc_1_1.addChildren(this.escalera_2_14)
        this.base_esc_1_1.addChildren(this.escalera_2_15)
        this.base_esc_1_1.addChildren(this.escalera_2_16)
        this.base_esc_1_1.addChildren(this.escalera_2_17)
        this.base_esc_1_1.addChildren(this.escalera_2_18)
        this.base_esc_1_1.addChildren(this.escalera_2_19)
        this.base_esc_1_1.addChildren(this.escalera_2_20)
        this.base_esc_1_1.addChildren(this.escalera_2_21)
        this.base_esc_1_1.addChildren(this.escalera_2_22)
        this.base_esc_1_1.addChildren(this.escalera_2_23)
        this.base_esc_1_1.addChildren(this.escalera_2_24)
        this.base_esc_1_1.addChildren(this.escalera_2_25)
        this.base_esc_1_1.addChildren(this.escalera_2_26)
        this.base_esc_1_1.addChildren(this.escalera_2_27)
        this.base_esc_1_1.addChildren(this.escalera_2_28)
        this.base_esc_1_1.addChildren(this.escalera_2_29)
        this.base_esc_1_1.addChildren(this.escalera_2_30)
        this.base_esc_1_1.addChildren(this.escalera_2_31)
        this.base_esc_1_1.addChildren(this.escalera_2_32)
        this.base_esc_1_1.addChildren(this.escalera_2_33)

        /**Configuracion inicial */
        this.configuracion();
    }

    configuracion(){

        /** Valores de mapas */
        this.plano.setMapaDifuso(ejemplo_textura);
        this.plano.setMapaNormal(ejemplo_normal);
        this.plano.setMapaRelieve(ejemplo_normal);
        this.plano.coheficienteRelieve(280.0);

        /** Estilo */
        this.plano.textura(true);
        this.plano.normalMap(true);
        this.plano.relieve(true);
        this.plano.animacion(false);
        
        /** Iluminacion */
        this.plano.phongCoheficientes(0.5,1,1,60);
        
        /**Escalar */
        this.plano.escalar([3,3,1]);

        /**Rotacion */
        this.techo_2.rotarZ(Math.PI/4);
        this.techo_2.rotarX(-Math.PI/2);

        this.base_esc_1_1.rotarX(Math.PI/2);
        this.base_esc_1_1.rotarY(-Math.PI/2);
        this.base_esc_1_2.rotarX(Math.PI/2);
        this.base_esc_1_2.rotarY(-Math.PI/2);

        this.base_esc_2_1.rotarX(Math.PI/2);
        this.base_esc_2_1.rotarY(-Math.PI/2);
       
        /**Translacion */
        this.plano.trasladar([0,0,0]);

        this.base.trasladar([0,80,150]);

        this.base_esc_1_1.trasladar([0,0,-24]);
        this.base_esc_1_2.trasladar([0,0,24]);
        this.base_esc_2_1.trasladar([-300,150,-24]);

        this.escalera_1_1.trasladar([0,-22,20]);
        this.escalera_1_2.trasladar([0,-27,20]);
        this.escalera_1_3.trasladar([0,-32,20]);
        this.escalera_1_4.trasladar([0,-37,20]);

        this.escalera_2_1.trasladar([0,160,2.5]);
        this.escalera_2_2.trasladar([8,155,2.5]);
        this.escalera_2_3.trasladar([16,150,2.5]);
        this.escalera_2_4.trasladar([24,145,2.5]);
        this.escalera_2_5.trasladar([32,140,2.5]);
        this.escalera_2_6.trasladar([40,135,2.5]);
        this.escalera_2_7.trasladar([48,130,2.5]);
        this.escalera_2_8.trasladar([56,125,2.5]);
        this.escalera_2_9.trasladar([64,120,2.5]);
        this.escalera_2_10.trasladar([72,115,2.5]);
        this.escalera_2_11.trasladar([80,110,2.5]);
        this.escalera_2_12.trasladar([88,105,2.5]);
        this.escalera_2_13.trasladar([96,100,2.5]);
        this.escalera_2_14.trasladar([104,95,2.5]);
        this.escalera_2_15.trasladar([112,90,2.5]);
        this.escalera_2_16.trasladar([120,85,2.5]);
        this.escalera_2_17.trasladar([128,80,2.5]);
        this.escalera_2_18.trasladar([136,75,2.5]);
        this.escalera_2_19.trasladar([144,70,2.5]);
        this.escalera_2_20.trasladar([152,65,2.5]);
        this.escalera_2_21.trasladar([160,60,2.5]);
        this.escalera_2_22.trasladar([168,55,2.5]);
        this.escalera_2_23.trasladar([176,50,2.5]);
        this.escalera_2_24.trasladar([184,45,2.5]);
        this.escalera_2_25.trasladar([192,40,2.5]);
        this.escalera_2_26.trasladar([200,35,2.5]);
        this.escalera_2_27.trasladar([208,30,2.5]);
        this.escalera_2_28.trasladar([216,25,2.5]);
        this.escalera_2_29.trasladar([224,20,2.5]);
        this.escalera_2_30.trasladar([232,15,2.5]);
        this.escalera_2_31.trasladar([240,10,2.5]);
        this.escalera_2_32.trasladar([248,5,2.5]);
        this.escalera_2_33.trasladar([256,0,2.5]);

        this.base_2.trasladar([0,20,20]);

        this.col_1.trasladar([-35,-35,0]);
        this.col_2.trasladar([-21,-35,0]);
        this.col_3.trasladar([-7,-35,0]);
        this.col_4.trasladar([7,-35,0]);
        this.col_5.trasladar([21,-35,0]);
        this.col_6.trasladar([35,-35,0]);
        this.col_7.trasladar([-35,35,0]);
        this.col_8.trasladar([-21,35,0]);
        this.col_9.trasladar([-7,35,0]);
        this.col_10.trasladar([7,35,0]);
        this.col_11.trasladar([21,35,0]);
        this.col_12.trasladar([35,35,0]);
        this.col_13.trasladar([-35,-17.5,0]);
        this.col_14.trasladar([-35,0,0]);
        this.col_15.trasladar([-35,17.5,0]);
        this.col_16.trasladar([35,-17.5,0]);
        this.col_17.trasladar([35,0,0]);
        this.col_18.trasladar([35,17.5,0]);

        this.techo_1.trasladar([0,0,60]);
        this.techo_2.trasladar([-32,-32,-40]);

        /** Formato de vetices */
        this.plano.setDrawType(gl.TRIANGLES);
        this.base.setDrawType(gl.TRIANGLES);
        this.base_2.setDrawType(gl.TRIANGLES);
        this.techo_2.setDrawType(gl.TRIANGLES);

        
    }

    update(){
        //Posibles movimientos con el tiempo
    }

    dibujar(){
         
        this.plano.dibujar();
        this.base.dibujar();

       this.base_esc_2_1.dibujar()
       this.base_esc_1_1.dibujar()
       this.base_esc_1_2.dibujar()
 
    }
}