import  React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas]  = useState(citasIniciales);

  //usando Effect para revisar algun cambio
  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);
  //funcion para eliminar las citas por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }



  const crearCita = cita => {
    guardarCitas([
      ...citas,
         cita
    ]);
  }

  // titulo de las citas
  const titulo = citas.length === 0 ? 'Agrega tu cita'  : 'Administra tus citas';
  return (
    <Fragment>
        <h1>Creador de Cita Medica</h1>
        <div  className="container">
          <div className="row">
            <div className="one-half column">
                  <Formulario 
                    crearCita = {crearCita}
                   />
            </div>
            <div className="one-half column">
                  <h1>{titulo}</h1>
                  {citas.map(cita => (

                    <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita = {eliminarCita}
                    />
                  ) )}
            </div>

          </div>

        </div>

    </Fragment>
    

  );
}

export default App;
