import { insertarGrupos } from '@/lib/action'
import React from 'react'

function Form() {
    return (
        <form action={insertarGrupos} className='flex flex-col gap-4 max-w-sm mb-10 p-6 rounded-xl border border-(--card-border) bg-(--card-bg) glass'>
            <h2 className='text-2xl font-bold'>Nuevo Grupo</h2>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del grupo"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <input
                type="text"
                name="tutor"
                placeholder="Tutor"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <input
                type="text"
                name="aula"
                placeholder="Aula"
                className='p-2 rounded border border-(--card-border) bg-(--background)'
                required
            />
            <button
                type="submit"
                className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors font-bold'
            >
                Guardar Grupo
            </button>
        </form>
    )
}

export default Form
