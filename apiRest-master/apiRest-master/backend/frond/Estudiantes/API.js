/* const ulrEstudiantes = "http://localhost:4000/campers" */
/* const ulrEstudiantes = "http://localhost/apiCampers/controllers/camper.php?op=GetAll" */
const ulrEstudiantes = "http://localhost/SkylAb-147/Pilasconelcode/apiRest-master/apiRest-master/backend/controles/campers.php?op=GetAll"
const ulrEstudiantesPost = "http://localhost/SkylAb-147/Pilasconelcode/apiRest-master/apiRest-master/backend/controles/campers.php?op=insert"
const ulrEstudiantesUpdate = "http://localhost/SkylAb-147/Pilasconelcode/apiRest-master/apiRest-master/backend/controles/campers.php?op=update"
const ulrEstudiantesDelete = "http://localhost/SkylAb-147/Pilasconelcode/apiRest-master/apiRest-master/backend/controles/campers.php?op=delete"




export const getEstudaintes = async () =>{
    try{
        const result = await fetch (ulrEstudiantes);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}

export const nuewEstudiante = async (registro) =>{
    console.log(registro);
    try {
        await fetch(ulrEstudiantesPost,{
            method: 'POST',
            body: JSON.stringify(registro),
            headers:{
                'Content-Type': 'application/json'
            }

        });
          window.location.href='Estudiantes.php'

    } catch (error) {
        console.log(error);
    }
}


export const deleteEstudiante = async id => {
    try {
       await fetch (`${ulrEstudiantesDelete}&id=${id}`,{
            method: 'DELETE'
       })
       window.location.href='Estudiantes.php'
    } catch (error) {
        console.log(error);
        
    }


}

export const actualizarNota = async (data) => {
  console.log(data.id);
    try {
      await fetch (`${ulrEstudiantesUpdate}&id=${data.id}&imagen=${data.imagen}&nombre=${data.nombre}&edad=${data.edad}&promedio=${data.promedio}&nivelCAmpus=${data.nivelCAmpus}&nivelIngles=${data.nivelIngles}&especialidad=${data.especialidad}&direccion=${data.direccion}&celular=${data.celular}&ingles=${data.ingles}&Ser=${data.Ser}&Review=${data.Review}&Skills=${data.Skills}&Asitencia=${data.Asitencia}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(updatedData => {
          console.log('Datos actualizados:', updatedData);
          
        })
        window.location.href='Estudiantes.php'
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  }



