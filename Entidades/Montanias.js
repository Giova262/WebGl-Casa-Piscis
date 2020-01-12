class Montanias{

    constructor(){

        /**Montaña */
        var geometria_1 = new Rectangulo(70,70,70,[1,1,1],50,50);
        this.montania_1 = new Objeto(geometria_1);

        /**Agregar Hijos */
       
        /**Configuracion inicial */
        this.configuracion();
    }

    configuracion(){

        /** Valores de mapas */
        this.montania_1.setMapaDifuso(piedra_textura);
        this.montania_1.setMapaNormal(piedra_normal);
        this.montania_1.setMapaRelieve(piedra_normal);

      
        /** Estilo */
        this.montania_1.textura(true);
        this.montania_1.normalMap(false);
        this.montania_1.relieve(false);
        this.montania_1.animacion(false);


        /** Iluminacion */
       
        
        /**Escalar */
        

        /**Rotacion */
      
    
        /**Translacion */
        this.montania_1.trasladar([0,0,160]);

        /** Formato de vetices */
        this.montania_1.setDrawType(gl.TRIANGLES);
    }

    update(){
        //Posibles movimientos con el tiempo
    }

    dibujar(){

        this.montania_1 .dibujar()
 
    }
}