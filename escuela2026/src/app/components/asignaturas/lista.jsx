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
        <Link href={`/asignaturas/${asignatura.id}`} className='group'>
            <div className='glass p-8 rounded-3xl border border-(--card-border) bg-(--card-bg) group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300 w-80'>
                <div className='bg-green-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h3 className='text-2xl font-black mb-1'>{asignatura.nombre}</h3>
                <p className='text-sm opacity-60 mb-4 font-medium'>{asignatura.profesor || 'Sin profesor asignado'}</p>
                <p className='flex items-center gap-2 opacity-70 font-medium'>
                    <span className='text-xs uppercase tracking-widest text-green-500'>Horas</span>
                    {asignatura.horas_semana}h semanales
                </p>
            </div>
        </Link>
    )
}
