var personas=[];
    function agregar(){
        var persona={};
        persona.nom=document.getElementById('nombre').value;
        persona.edad=document.getElementById('edad').value;
        persona.puntos=document.getElementById('puntos').value;
        personas.push(persona);
       // alert("Ingresaste el nombre: " + nom + "al array");
        document.getElementById('nombre').value="";
        document.getElementById('edad').value="";
        document.getElementById('puntos').value="";
        mostrar(personas);
        
    }

    function mostrar(personas){
        
        var tabla = "<table class='table table'> <tr> <th scope='col'>Nº</th> <th scope='col'>Puntos</th> <th scope='col'>Nombre</th> <th scope='col'>Edad</th> </tr>";
        for (i=0; i<personas.length; i++){

            tabla+="<tr> <th scope='row'>" + (i + 1) + "</th> <td align='center'>" + personas[i].puntos + "</td><td>"+ personas[i].nom + "</td><td>"+ personas[i].edad + "</td><td><img src='./img/borrar.gif' alt='borrar' width=30></td></tr>";
        }
        tabla+="</table>";
        document.getElementById('lista').innerHTML=tabla;

    }
    //Ordena la lista y la muestra ordenada
    function ordenar(){ //Ordenar por puntos y en forma ASCENDENTE
        personas.sort((a, b) => b.puntos - a.puntos);
        mostrar(personas);
    }
    function borrar(){
             //indexOf me devuelve la posición del elemento en el array
            //splice remueve el elemento indicado. 
            
            let nom = document.getElementById('nombre').value;//Tomo el nombre
            let pos = personas.findIndex(persona => persona.nom === nom); //lo busco en el arreglo
            if (pos === -1 ){
                Swal.fire("No encontré nada.")
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'No puedes borrar un nombre que no este en la lista!',
                    confirmButtonColor: "#2E8B57",
                  })
            }else{
                Swal.fire({
                    icon: 'info',
                    text: 'Se borrará la posición ' + (pos + 1) + ' correspondiente a '+ personas[pos].nom + '.',
                    confirmButtonColor: "#2E8B57",
                })
                personas.splice(pos,1); // pum! lo borro
                mostrar(personas);
            }
            
        }