'use client'
import Link from 'next/link'
import { use } from 'react'


export default function Lista({ promesaEstudiantes }) {

    const estudiantes = use(promesaEstudiantes)


    return (
        <div className='flex flex-wrap gap-10'>
            {estudiantes.map((estudiante) => <Item estudiante={estudiante} key={estudiante.id} />)}
        </div>
    )
}




function Item({ estudiante }) {

    return (
        <Link href={`/estudiantes/${estudiante.id}`} className='group'>
            <div className='glass p-8 rounded-3xl border border-(--card-border) bg-(--card-bg) group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300 w-80'>
                <div className='bg-pink-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-pink-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 className='text-2xl font-black mb-4'>{estudiante.nombre}</h3>
                <p className='flex items-center gap-2 opacity-70 font-medium'>
                    <span className='text-xs uppercase tracking-widest text-pink-500'>Tutor</span>
                    {estudiante.tutor_legal}
                </p>
            </div>
        </Link>
    )
}
