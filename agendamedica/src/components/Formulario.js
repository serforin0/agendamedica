import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        pasiente:'',
        doctor: '',
        fecha: '',
        hora: '',
        sintomas: ''



    });

    const [error, actualizarError] = useState(false)

    //capturando los datos del formulario
    const actualizarData = e => {
        // console.log('escribiendo...');
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //estrael la data (distractor)
    const   {pasiente, doctor, fecha, hora, sintomas } = cita;

    //submit cita
    const submitCita = e => {
        e.preventDefault();

        console.log(pasiente);
        if(pasiente.trim() === '' || doctor.trim() === '' || fecha.trim() === '' || hora.trim() === ''){
            actualizarError(true)
            return;
        }

        //eliminando el mensaje de error
        actualizarError(false);

        cita.id = uuid();
        

        //creando la cita
        crearCita(cita);


        //limpiando el formulario 
        actualizarCita ({
            pasiente:'',
            doctor: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        
    }

    return (
        <Fragment>
            <h1> Crear Citas  </h1>

            {error ? <p className="alerta-error">Todos los campos son Obligatorios</p> : null }
            <form onSubmit={submitCita}>
                <label>Nombre del pasiente</label>
                <input
                    type="text"
                    name="pasiente"
                    className="u-full-width"
                    placeholder=" Pasiente "
                    onChange={actualizarData}
                    value={pasiente}
                />
                <label>Nombre del Doctor</label>
                <input 
                    type="text"
                    name="doctor"
                    className="u-full-width"
                    placeholder="Doctor"
                    onChange={actualizarData}
                    value={doctor}                    
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarData}
                    value={fecha}
                />

                <label>Hola</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarData}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarData}
                    value={sintomas}
                >                   
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar

                </button>
            </form>

        </Fragment>
        

    );
}

export default Formulario;