import React, { Fragment, useState } from 'react';

export function TodoItem({ todo, CambiarEstado, EditarTarea }) {
    const { id, task, completed } = todo;
    const [modoEdicion, setModoEdicion] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(task);

    const fnCambiarEstado = () => {
        CambiarEstado(id);
    };

    const fnGuardarEdicion = () => {
        if (nuevoTexto.trim() === '') return;
        EditarTarea(id, nuevoTexto.trim());
        setModoEdicion(false);
    };

    if (modoEdicion) {
        return (
            <Fragment>
                <li className="list-group-item">
                    <input
                        type="text"
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                fnGuardarEdicion();
                            }
                        }}/>
                    <button onClick={fnGuardarEdicion}>Guardar</button>
                </li>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <li className="list-group-item">
                <input onChange={fnCambiarEstado} type="checkbox" checked={completed}className='form-check-input me-2'/>    
                {task}
                <button onClick={() => setModoEdicion(true)} className="btn btn-sm btn-outline-secondary ms-2">Edittar</button>
            </li>
        </Fragment>
    );
}
