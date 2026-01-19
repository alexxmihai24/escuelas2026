'use client'
import Link from 'next/link'
import { use } from 'react'


export default function Lista({ promesaGrupos }) {

    const grupos = use(promesaGrupos)


    return (
        <div className='flex flex-wrap gap-10'>
            {grupos.map((grupo) => <Item grupo={grupo} key={grupo.id} />)}
            <button onClick={() => alert('hola')}>Boton</button>
        </div>
    )
}




function Item({ grupo }) {

    return (
        <Link href={`/grupos/${grupo.id}`} >
            <div className='p-6 rounded-xl border border-(--card-border) bg-(--card-bg) hover:shadow-lg transition-all'>
                <p className='font-bold text-xl mb-2'>Grupo: {grupo.nombre} </p>
                <div className='opacity-80'>
                    <p>Tutor: {grupo.tutor}</p>
                    <p>Aula: {grupo.aula}</p>
                </div>
            </div>
        </Link>
    )
}