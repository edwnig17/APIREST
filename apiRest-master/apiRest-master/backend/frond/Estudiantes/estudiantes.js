
import { getEstudaintes, nuewEstudiante, deleteEstudiante, actualizarNota } from "./API.js";

let idEstudinateGlobal;
let imagenGlobal;
let nombreteGlobal;
let edadeGlobal;
let promedioGlobal;
let nivelGlobal;
let nivelIngleGlobal;
let EspecialidadGlobal;
let direcionGlobal;
let celularGlobal;

addEventListener('DOMContentLoaded',cargaEstudiantes)

async function cargaEstudiantes (){
  const tablaEstudiantes = document.querySelector('#tabla')
  const estudintes = await getEstudaintes ()
  console.log(estudintes);
  estudintes.forEach(element => {
    tablaEstudiantes.innerHTML+=`
          <tr class="cards" idd="${element.id}" imagen="${element.imagen}" nombre="${element.nombre}" edad="${element.edad}" promemdio="${element.promedio}" nivelCAmpus="${element.nivelCAmpus}"nivelIngles="${element.nivelIngles}"especialidad="${element.especialidad}"direcion="${element.direccion}" celular="${element.celular}"ingles="${element.ingles}" Ser="${element.Ser}"Review="${element.Review}"Skills="${element.Skills}"Asitencia="${element.Asitencia}"  >
          <th scope="row"id="${element.id}">${element.id}</th>
          <td id="${element.id}">${element.nombre}</td>
          <td id="${element.id}">${element.especialidad}</td>
          <td id="${element.id}"> <img src="images/${element.imagen}" alt=""></td>
          <td > <button type="button"  id="${element.id}" imagen="${element.imagen}" nombre="${element.nombre}" edad="${element.edad}" promemdio="${element.promedio}" nivelCAmpus="${element.nivelCAmpus}"nivelIngles="${element.nivelIngles}"especialidad="${element.especialidad}"direcion="${element.direccion}" celular="${element.celular}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal1" >Notas</button></td>
        </tr>

    
    `
    

    
     


  
});


tablaEstudiantes.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
     idEstudinateGlobal = e.target.getAttribute('id');
     imagenGlobal= e.target.getAttribute('imagen');
     nombreteGlobal= e.target.getAttribute('nombre');
     edadeGlobal= e.target.getAttribute('edad');
     promedioGlobal= e.target.getAttribute('promemdio');
     nivelGlobal= e.target.getAttribute('nivelCAmpus');
     nivelIngleGlobal= e.target.getAttribute('nivelIngles');
     EspecialidadGlobal= e.target.getAttribute('especialidad');
     direcionGlobal= e.target.getAttribute('direcion');
     celularGlobal= e.target.getAttribute('celular');
   
    cargarIdEstudiante();
  }
});

detalles();
}

function cargarIdEstudiante() {

}




function detalles (){
  const tablaEstudiantes = document.querySelector('#tabla')
  tablaEstudiantes.addEventListener('click',(e)=>{
    console.log(e.target);
    if (e.target.getAttribute('id')) {
      const atributos = e.target.getAttribute('id');
      const elemento = document.getElementById(atributos); 
      const padre = elemento.parentNode;
      console.log(padre);
      


        const imagen = padre.getAttribute("imagen");
        const edad = padre.getAttribute("edad");
        const nombre = padre.getAttribute("nombre");
        const promemdio = padre.getAttribute("promemdio");
        const nivelCAmpus = padre.getAttribute("nivelCAmpus");
        const nivelIngles = padre.getAttribute("nivelIngles");
        const especialidad = padre.getAttribute("especialidad");
        const direcion = padre.getAttribute("direcion");
        const celular = padre.getAttribute("celular");
        const Ingles = padre.getAttribute("ingles");
        const Ser = padre.getAttribute("Ser");
        const Review = padre.getAttribute("Review");
        const Skills = padre.getAttribute("Skills");
        const Asitencia = padre.getAttribute("Asitencia");
        const id = padre.getAttribute("idd");

        const detalles = document.querySelector('#detalles')
        detalles.innerHTML=``
        detalles.innerHTML=`
        <div class="contanerDetalles">
        <div class="datos">
        <div class=" d-flex" ><img src="images/${imagen}" alt="" class="m-2"> 
        <button type="button" class="delete btn btn-danger m-2"style="height: 40px;" data-prope="${id}">Eliminar</button></div>         
          <h5>${nombre}</h5>
          <h5>Edad:${edad} </h5>
          <h5>Promedio: ${promemdio}</h5>
          <h5>Nivel: ${nivelCAmpus} </h5>
          <h5>Ingles: ${nivelIngles} </h5>
          <h5>Especialidad: ${especialidad} </h5>
          <h5>Direccion: ${direcion} </h5>
          <h5 style="background-color: rgb(255, 198, 9);">Celular: ${celular}</h5>
        </div>
      </div>
      <div id="charts1" class="charts"> </div>
    </div> 
        
        `

      // inicar charts 


const getOptionCharts1 = () => {
  let topValue = '5%';
  let value1 = (Ingles*(Ingles/5)*100);
  let value2 =(Ser*(Ser/5)*100);
  let value3 = (Review*(Review/5)*100);
  let value4 = (Skills*(Skills/5)*100);
  let value5 = (Asitencia*(Asitencia/5)*100);

    return {
      
        trigger: 'item',
      
      legend: {
        top: topValue,
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          // adjust the start angle
          startAngle: 180,
          label: {
            show: true,
            formatter(param) {
              // correct the percentage
              return param.name + ' (' + param.percent * 2 + '%)';
            }
          },
          data: [
            { value: value1, name: 'Ingles' },
            { value: value2, name: 'Ser' },
            { value: value3, name: 'Review' },
            { value: value4, name: 'Skills' },
            { value: value5, name: 'Asitencia' },
            {
              // make an record to fill the bottom 50%
              value: value1 + value2 + value3 + value4 + value5,
              itemStyle: {
                // stop the chart from rendering this piece
                color: 'none',
                decal: {
                  symbol: 'none'
                }
              },
              label: {
                show: false
              }
            }
          ]
        }
      ]
    };
        };    
        const chart1= echarts.init(document.getElementById('charts1'))
        chart1.setOption(getOptionCharts1())  
    }
  })
}

// INGRESAR NUEVO ESTUDIANTE A LA API


(function () {
  const formulario = document.querySelector('#Registrar')
  formulario.addEventListener('submit',newCamper)
  function newCamper (e){
    
      e.preventDefault()
      
      const id = document.querySelector('#id').value
      const nombre = document.querySelector('#nombre').value
      const edad = document.querySelector('#edad').value
      const promedio = document.querySelector('#promedio').value
      const nivelCAmpus = document.querySelector('#nivelCAmpus').value
      const nivelIngles = document.querySelector('#nivelIngles').value
      const especialidad = document.querySelector('#especialidad').value
      const direccion = document.querySelector('#direccion').value
      const celular = document.querySelector('#celular').value
      

      
      console.log(nombre);
      

      const registro = {
        id,
        imagen: "defaull.jpg",
        nombre,
        edad,
        promedio,
        nivelCAmpus,
        nivelIngles,
        especialidad,
        direccion,
        celular,
        ingles:1,
        Ser:1,
        Review:1,
        Skills:1,
        Asitencia:1

      }
      if(validation(registro)){
          alert("todos los campos son Oblicagatorios") 

          return  
     
      }


      nuewEstudiante(registro) 

      
      
  }


  function validation (Objecto){
      return !Object.values(Objecto).every(element=>element !=='')
  }

  const borar = document.querySelector('#detalles')
  borar.addEventListener('click',confirmarBorrar)



  function confirmarBorrar(e){
      
      if(e.target.classList.contains('delete')){
          
          const idcamper = parseInt(e.target.dataset.prope)
          console.log(idcamper);
          const confir = confirm("Desea Eliminar al camper?")
          if(confir){
              deleteEstudiante(idcamper);
          }
          
      }

  }
// /////////////// ACTULIZACION DE NOTAS //////////////////////

const notasNuevas = document.querySelector('#notas');
notasNuevas.addEventListener('submit', actualizarNotas);

function actualizarNotas(e) {
  e.preventDefault();
  
  const ingles = document.querySelector('#ingles').value;
  const Ser = document.querySelector('#Ser').value;
  const Review = document.querySelector('#Review').value;
  const Skills = document.querySelector('#Skills').value;
  const Asitencia = document.querySelector('#Asitencia').value;
    
  const imagen = imagenGlobal;
  const nombre= nombreteGlobal; 
  const edad= edadeGlobal; 
  const promedio=  promedioGlobal; 
  const nivelCAmpus=nivelGlobal; 
  const nivelIngles=nivelIngleGlobal;
  const especialidad=EspecialidadGlobal;
  const direccion = direcionGlobal; 
  const celular =  celularGlobal;
   

  const idd = idEstudinateGlobal;
  console.log(idd);
  

  const data = {
    imagen,
    nombre,
    edad,
    promedio,
    nivelCAmpus,
    nivelIngles,
    especialidad,
    direccion,
    celular,
    ingles,
    Ser,
    Review,
    Skills,
    Asitencia,
    id: idd,
  };

  if (validar(data)) {
    alert("Todos los campos son obligatorios");
    return;
  }

  actualizarNota(data);
}

function validar(objeto) {
  return !Object.values(objeto).every(element => element !== '');
}


})();


















  




  