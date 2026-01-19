'use client'
import Link from 'next/link'
import { use } from 'react'


export default function Lista({ promesaAsignaturas }) {

    const asignaturas = use(promesaAsignaturas)


    return (
        <div className='flex flex-wrap gap-10'>
            {asignaturas.map((asignatura) => <Item asignatura={asignatura} key={asignatura.id} />)}
        </div>
    )
}




function Item({ asignatura }) {

    return (
        <Link href={`/asignaturas/${asignatura.id}`} >
            <div className='p-6 rounded-xl border border-(--card-border) bg-(--card-bg) hover:shadow-lg transition-all'>
                <p className='font-bold text-xl mb-2'>Asignatura: {asignatura.nombre} </p>
                <p className='opacity-80'>Horas: {asignatura.horas}</p>
            </div>
        </Link>
    )
}
