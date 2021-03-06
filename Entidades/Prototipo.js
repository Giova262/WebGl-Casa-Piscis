class Prototipo{

    constructor(){

        /**Plano de referencia */
        var geometria = new Plano(200,200,[0.9,0.9,0.9]);
            this.plano = new Objeto(geometria);

        /**Escaleras */
        var geometria_esc_1 = new Rectangulo(70,5,8,[1,1,1],50,50);

            this.escalera_1_1 = new Objeto(geometria_esc_1)
            this.escalera_1_2 = new Objeto(geometria_esc_1)
            this.escalera_1_3 = new Objeto(geometria_esc_1)
            this.escalera_1_4 = new Objeto(geometria_esc_1)

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

            this.escalera_3_1 = new Objeto(geometria_esc_2)
            this.escalera_3_2 = new Objeto(geometria_esc_2)
            this.escalera_3_3 = new Objeto(geometria_esc_2)
            this.escalera_3_4 = new Objeto(geometria_esc_2)
            this.escalera_3_5 = new Objeto(geometria_esc_2)
            this.escalera_3_6 = new Objeto(geometria_esc_2)
            this.escalera_3_7 = new Objeto(geometria_esc_2)
            this.escalera_3_8 = new Objeto(geometria_esc_2)
            this.escalera_3_9 = new Objeto(geometria_esc_2)
            this.escalera_3_10 = new Objeto(geometria_esc_2)
            this.escalera_3_11 = new Objeto(geometria_esc_2)
            this.escalera_3_12 = new Objeto(geometria_esc_2)
            this.escalera_3_13 = new Objeto(geometria_esc_2)
            this.escalera_3_14 = new Objeto(geometria_esc_2)
            this.escalera_3_15 = new Objeto(geometria_esc_2)

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

        var geometria_esc_central_2 = new Triangulo(120,160,5,[1,1,1]);
            this.base_esc_2_1 = new Objeto(geometria_esc_central_2)
            this.base_esc_2_2 = new Objeto(geometria_esc_central_2)

        /** Campo de Flores */
        var geometria_campo_1 = new Plano(200,50,[1,1,1])
            this.campoRosas_1 = new Objeto(geometria_campo_1)
        var geometria_campo_2 = new Plano(30,150,[1,1,1])
            this.campoRosas_2 = new Objeto(geometria_campo_2)
            this.campoRosas_3 = new Objeto(geometria_campo_2)

        /**Afrodita */
        var geometria_afrodita= new Plano(20,60,[1,1,1])
        this.afrodita = new Objeto(geometria_afrodita)


        
        /**Agregar Hijos */

        this.base.addChildren(this.escalera_1_1)
        this.base.addChildren(this.escalera_1_2)
        this.base.addChildren(this.escalera_1_3)
        this.base.addChildren(this.escalera_1_4)
        this.base.addChildren(this.base_2)
        this.base.addChildren(this.afrodita)

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

        this.base_esc_2_1.addChildren(this.escalera_3_1)
        this.base_esc_2_1.addChildren(this.escalera_3_2)
        this.base_esc_2_1.addChildren(this.escalera_3_3)
        this.base_esc_2_1.addChildren(this.escalera_3_4)
        this.base_esc_2_1.addChildren(this.escalera_3_5)
        this.base_esc_2_1.addChildren(this.escalera_3_6)
        this.base_esc_2_1.addChildren(this.escalera_3_7)
        this.base_esc_2_1.addChildren(this.escalera_3_8)
        this.base_esc_2_1.addChildren(this.escalera_3_9)
        this.base_esc_2_1.addChildren(this.escalera_3_10)
        this.base_esc_2_1.addChildren(this.escalera_3_11)
        this.base_esc_2_1.addChildren(this.escalera_3_12)
        this.base_esc_2_1.addChildren(this.escalera_3_13)
        this.base_esc_2_1.addChildren(this.escalera_3_14)
        this.base_esc_2_1.addChildren(this.escalera_3_15)

        /**Configuracion inicial */
        this.configuracion();

    }


    configuracion(){

        /** Valores de mapas */
        this.plano.setMapaDifuso(piedra_textura);
        this.plano.setMapaNormal(piedra_normal);
        this.plano.setMapaRelieve(piedra_relieve);
        this.plano.coheficienteRelieve(280.0);

        this.campoRosas_1.setMapaDifuso(rosas_textura);
        this.campoRosas_1.setMapaNormal(rosas_normal);
        this.campoRosas_1.setMapaRelieve(rosas_relieve);
        this.campoRosas_1.coheficienteRelieve(1.0);

        this.campoRosas_2.setMapaDifuso(rosas_textura);
        this.campoRosas_2.setMapaNormal(rosas_normal);
        this.campoRosas_2.setMapaRelieve(rosas_relieve);
        this.campoRosas_2.coheficienteRelieve(8.0);

        this.campoRosas_3.setMapaDifuso(rosas_textura);
        this.campoRosas_3.setMapaNormal(rosas_normal);
        this.campoRosas_3.setMapaRelieve(rosas_relieve);
        this.campoRosas_3.coheficienteRelieve(8.0);

        this.techo_2.setMapaDifuso(marmol_textura);
        this.techo_2.setMapaNormal(marmol_normal);
        this.techo_2.setMapaRelieve(marmol_relieve);
       
        this.techo_1.setMapaDifuso(marmol_textura);
        this.techo_1.setMapaNormal(marmol_normal);
        this.techo_1.setMapaRelieve(marmol_relieve);
        
        this.techo_1.setMapaDifuso(marmol_textura);
        this.techo_1.setMapaNormal(marmol_normal);
        this.techo_1.setMapaRelieve(marmol_relieve);
        this.techo_1.coheficienteRelieve(2.0);

        this.base.setMapaDifuso(marmol_textura);
        this.base.setMapaNormal(marmol_normal);
        this.base.setMapaRelieve(marmol_relieve);
        this.base.coheficienteRelieve(2.0);

        this.casa.setMapaDifuso(casa_textura);
        this.casa.setMapaNormal(casa_normal);
        this.casa.setMapaRelieve(casa_relieve);
        this.casa.coheficienteRelieve(2.0);

        

        this.afrodita.setMapaDifuso(afrodita_textura);
        this.afrodita.setMapaNormal(afrodita_normal);
        this.afrodita.setMapaRelieve(afrodita_relieve);
        this.afrodita.coheficienteRelieve(2.0);



        /** Estilo */
        this.plano.textura(true);
        this.plano.normalMap(true);
        this.plano.relieve(true);
        this.plano.animacion(false);

        this.campoRosas_1.textura(true);
        this.campoRosas_1.normalMap(true);
        this.campoRosas_1.relieve(true);
        this.campoRosas_1.animacion(false);

        this.campoRosas_2.textura(true);
        this.campoRosas_2.normalMap(true);
        this.campoRosas_2.relieve(true);
        this.campoRosas_2.animacion(false);

        this.campoRosas_3.textura(true);
        this.campoRosas_3.normalMap(true);
        this.campoRosas_3.relieve(true);
        this.campoRosas_3.animacion(false);

        this.techo_2.textura(true);
        this.techo_2.normalMap(true);
        this.techo_2.relieve(false);
        this.techo_2.animacion(false);
        
        this.techo_1.textura(true);
        this.techo_1.normalMap(false);
        this.techo_1.relieve(false);
        this.techo_1.animacion(false);

        this.base.textura(true);
        this.base.normalMap(false);
        this.base.relieve(false);
        this.base.animacion(false);

        this.casa.textura(true);
        this.casa.normalMap(false);
        this.casa.relieve(false);
        this.casa.animacion(false);

        this.afrodita.textura(true);
        this.afrodita.normalMap(false);
        this.afrodita.relieve(false);
        this.afrodita.animacion(false);

        /** Iluminacion */
        this.plano.phongCoheficientes(0.1,2,0.2,50);
        this.techo_1.phongCoheficientes(1,1,0.5,1);
        
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
        this.base_esc_2_2.rotarX(Math.PI/2);
        this.base_esc_2_2.rotarY(-Math.PI/2);

        this.campoRosas_1.rotarX(Math.PI*0.22);
        this.campoRosas_2.rotarZ(Math.PI*0.5);
        this.campoRosas_3.rotarZ(Math.PI*0.5);

        this.afrodita.rotarX(-Math.PI*0.5);
        this.afrodita.rotarZ(-Math.PI*0.5);
       
        /**Translacion */
        this.plano.trasladar([0,0,0]);

        this.base.trasladar([0,80,150]);

        //this.casa.trasladar([0,0,150]);

        this.base_esc_1_1.trasladar([0,0,-24]);
        this.base_esc_1_2.trasladar([0,0,24]);
        this.base_esc_2_1.trasladar([-300,150,-24]);
        this.base_esc_2_2.trasladar([-300,150,24]);

        this.escalera_1_1.trasladar([0,-22,20]);
        this.escalera_1_2.trasladar([0,-27,18]);
        this.escalera_1_3.trasladar([0,-32,16]);
        this.escalera_1_4.trasladar([0,-37,14]);

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

        this.escalera_3_1.trasladar([0,110,0]);
        this.escalera_3_2.trasladar([10,102,0]);
        this.escalera_3_3.trasladar([20,94,0]);
        this.escalera_3_4.trasladar([30,86,0]);
        this.escalera_3_5.trasladar([40,78,0]);
        this.escalera_3_6.trasladar([50,70,0]);
        this.escalera_3_7.trasladar([60,62,0]);
        this.escalera_3_8.trasladar([70,54,0]);
        this.escalera_3_9.trasladar([80,46,0]);
        this.escalera_3_10.trasladar([90,38,0]);
        this.escalera_3_11.trasladar([100,30,0]);
        this.escalera_3_12.trasladar([110,22,0]);
        this.escalera_3_13.trasladar([120,14,0]);
        this.escalera_3_14.trasladar([130,10,0]);
        this.escalera_3_15.trasladar([140,10,0]);

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

        this.campoRosas_1.trasladar([75,230,14]);
        this.campoRosas_2.trasladar([20,20,168]);
        this.campoRosas_3.trasladar([20,100,168]);

        this.afrodita.trasladar([30,20,-30]);

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
       this.base_esc_2_2.dibujar()
       this.base_esc_1_1.dibujar()
       this.base_esc_1_2.dibujar()

       this.campoRosas_1.dibujar()
       this.campoRosas_2.dibujar()
       this.campoRosas_3.dibujar()

       this.afrodita .dibujar();
 
    }
}