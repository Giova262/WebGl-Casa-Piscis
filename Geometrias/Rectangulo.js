/** Clase Rectangulo */

class Rectangulo extends Dibujable{

    constructor(_ancho,_alto,_profundidad,_color,_fila,_columnas){

        super();

        /** Datos */
        this.filas = _fila;
        this.columnas = _columnas;
        this.ancho = _ancho;
        this.alto = _alto;
        this.profundidad = _profundidad;
        this.color = _color;  

        /** Init */
        this.init();
    }

    init(){

        var x = this.ancho / 2;
		var y = this.alto / 2;
		var z = this.profundidad;
	
		this.position_list = [
		// Cara Frontal.
			-x, y,  0,
			 x, y,  0,
			 x, y,  z,
			-x, y,  z,

		// Cara Superior.
			-x, -y, z,
			-x, y,  z,
			 x, y,  z,
			 x, -y, z,

		// Cara Posterior.
			-x, -y, 0,
			-x, -y, z,
			 x, -y, z,
			 x, -y, 0,
					
		// Cara Lateral Derecha.
			 x, -y, 0,
			 x, -y, z,
			 x, y,  z,
			 x, y,  0,
					
		// Cara Inferior.
			-x, -y, 0,
			 x, -y, 0,
			 x, y,  0,
			-x, y,  0,
					
		// Cara Lateral Izquierda.
			-x, -y, 0,
			-x, y,  0,
			-x, y,  z,
			-x, -y, z,
        ];
        
        this.normal_list = [
            // Cara Frontal.
                0,1,0,
                0,1,0,
                0,1,0,
                0,1,0,
                            
            // Cara Superior.
                0,0,1,
                0,0,1,
                0,0,1,
                0,0,1,
                
            // Cara Posterior.
                0,-1,0,
                0,-1,0,
                0,-1,0,
                0,-1,0,
                            
            // Cara Lateral Derecha.
                1,0,0,
                1,0,0,
                1,0,0,
                1,0,0,
                
            // Cara Inferior.
                0,0,-1,
                0,0,-1,
                0,0,-1,
                0,0,-1,
                            
            // Cara Lateral Izquierda.
                -1,0,0,
                -1,0,0,
                -1,0,0,
                -1,0,0,
            ];

            this.tangente_list = [
                // Cara Frontal.
                    0,1,0,
                    0,1,0,
                    0,1,0,
                    0,1,0,
                                
                // Cara Superior.
                    0,0,1,
                    0,0,1,
                    0,0,1,
                    0,0,1,
                    
                // Cara Posterior.
                    0,-1,0,
                    0,-1,0,
                    0,-1,0,
                    0,-1,0,
                                
                // Cara Lateral Derecha.
                    1,0,0,
                    1,0,0,
                    1,0,0,
                    1,0,0,
                    
                // Cara Inferior.
                    0,0,-1,
                    0,0,-1,
                    0,0,-1,
                    0,0,-1,
                                
                // Cara Lateral Izquierda.
                    -1,0,0,
                    -1,0,0,
                    -1,0,0,
                    -1,0,0,
                ];

                this.texture_list = [
                    // Cara Frontal.
                       
                        0.8,0.8,
                        0.8,1,
                        1,1,
                        1,0.8,
                                    
                    // Cara Superior.
                    0.8,0.8,
                    0.8,1,
                    1,1,
                    1,0.8,
                   
                        
                    // Cara Posterior.
                    0,0,
                    0,0.5,
                    0.5,0.5,
                    ,0,
                                    
                    // Cara Lateral Derecha.
                    0.8,0.8,
                        0.8,1,
                        1,1,
                        1,0.8,
                   
                        
                    // Cara Inferior.
                    0.8,0.8,
                    0.8,1,
                    1,1,
                    1,0.8,
                                    
                    // Cara Lateral Izquierda.
                    0.8,0.8,
                    0.8,1,
                    1,1,
                    1,0.8
                    
                    ];

                  /*  this.index_list.push(0)
                    this.index_list.push(1)
                    this.index_list.push(2)

                    this.index_list.push(0)
                    this.index_list.push(2)
                    this.index_list.push(3)

                    this.index_list.push(4)
                    this.index_list.push(5)
                    this.index_list.push(6)

                    this.index_list.push(4)
                    this.index_list.push(6)
                    this.index_list.push(7)

                    this.index_list.push(8)
                    this.index_list.push(9)
                    this.index_list.push(10)
                    
                    this.index_list.push(8)
                    this.index_list.push(10)
                    this.index_list.push(11)

                    this.index_list.push(12)
                    this.index_list.push(14)
                    this.index_list.push(15)

                    this.index_list.push(12)
                    this.index_list.push(15)
                    this.index_list.push(16)

                    
                    this.index_list.push(16)
                    this.index_list.push(17)
                    this.index_list.push(18)

                    
                    this.index_list.push(16)
                    this.index_list.push(18)
                    this.index_list.push(19)

                    
                    this.index_list.push(20)
                    this.index_list.push(21)
                    this.index_list.push(22)

                    
                    this.index_list.push(20)
                    this.index_list.push(22)
                    this.index_list.push(23)*/

                    for(var i = 0; i < 24 ; i += 4){
			
                        this.index_list.push(...[i, (i + 1), (i + 2), i, (i + 2), (i + 3)]);
                    }
    
    }

}