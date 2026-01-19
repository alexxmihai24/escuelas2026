import { insertarEstudiante } from '@/lib/action'
import React from 'react'

function Form() {
    return (
        <form action={insertarEstudiante} className='flex flex-col gap-4 max-w-md mb-10 p-6 rounded-xl border border-(--card-border) bg-(--card-bg) glass'>
            <h2 className='text-2xl font-bold text-pink-500'>Nuevo Estudiante</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <div className='flex flex-col gap-1'>
                <label className='text-sm opacity-70 ml-1'>Fecha de Nacimiento</label>
                <input
                    type="date"
                    name="fecha_nacimiento"
                    className='p-2 rounded border border-(--card-border) bg-(--background)'
                    required
                />
            </div>
            <input
                type="text"
                name="tutor_legal"
                placeholder="Tutor Legal"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <input
                type="url"
                name="foto"
                placeholder="URL de la Foto (opcional)"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
            />
            <button
                type="submit"
                className='bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition-colors font-bold'
            >
                Guardar Estudiante
            </button>
        </form>
    )
}

export default Form
