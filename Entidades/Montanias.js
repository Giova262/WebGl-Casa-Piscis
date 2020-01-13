class Montanias{

    constructor(){

        /**Montaña */
        var geometria_1 = new Plano(200,100,[0.9,0.9,0.9]);

        this.montania_1 = new Objeto(geometria_1);
        this.montania_2 = new Objeto(geometria_1);

        /**Agregar Hijos */
       
        /**Configuracion inicial */
        this.configuracion();
    }

    configuracion(){

        /** Valores de mapas */
        this.montania_1.setMapaDifuso(piedra_textura);
        this.montania_1.setMapaNormal(piedra_normal);
        this.montania_1.setMapaRelieve(piedra_normal);
        this.montania_1.coheficienteRelieve(50.0);

        this.montania_2.setMapaDifuso(piedra_textura);
        this.montania_2.setMapaNormal(piedra_normal);
        this.montania_2.setMapaRelieve(piedra_normal);
        this.montania_2.coheficienteRelieve(50.0);

      
        /** Estilo */
        this.montania_1.textura(true);
        this.montania_1.normalMap(false);
        this.montania_1.relieve(true);
        this.montania_1.animacion(false);

        this.montania_2.textura(true);
        this.montania_2.normalMap(false);
        this.montania_2.relieve(true);
        this.montania_2.animacion(false);


        /** Iluminacion */
       
        
        /**Escalar */
        this.montania_1.escalar([2.5,3,1]);
        this.montania_2.escalar([2.5,3,1]);

        /**Rotacion */
      
    
        /**Translacion */
        this.montania_1.trasladar([-20,-50,0]);
        this.montania_2.trasladar([120,-50,0]);

        /** Formato de vetices */
        this.montania_1.setDrawType(gl.TRIANGLES);
        this.montania_2.setDrawType(gl.TRIANGLES);
    }

    update(){
        //Posibles movimientos con el tiempo
    }

    dibujar(){

       /* this.montania_1.dibujar()
        this.montania_2.dibujar()*/
 
    }
}