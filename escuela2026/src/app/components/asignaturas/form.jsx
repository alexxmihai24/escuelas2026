import { insertarAsignatura } from '@/lib/action'
import React from 'react'

function Form() {
    return (
        <form action={insertarAsignatura} className='flex flex-col gap-4 max-w-sm mb-10 p-6 rounded-xl border border-(--card-border) bg-(--card-bg) glass'>
            <h2 className='text-2xl font-bold text-green-500'>Nueva Asignatura</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre de la asignatura"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <input
                type="number"
                name="horas_semana"
                placeholder="Horas semanales"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <button
                type="submit"
                className='bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors font-bold'
            >
                Guardar Asignatura
            </button>
        </form>
    )
}

export default Form
