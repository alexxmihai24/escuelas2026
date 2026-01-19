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
        <Link href={`/grupos/${grupo.id}`} className='group'>
            <div className='glass p-8 rounded-3xl border border-(--card-border) bg-(--card-bg) group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300 w-80'>
                <div className='bg-blue-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-blue-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <h3 className='text-2xl font-black mb-4'>Grupo: {grupo.nombre}</h3>
                <div className='space-y-3 opacity-70 font-medium'>
                    <p className='flex items-center gap-2'>
                        <span className='text-xs uppercase tracking-widest text-blue-500'>Tutor</span>
                        {grupo.tutor}
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='text-xs uppercase tracking-widest text-blue-500'>Aula</span>
                        {grupo.aula}
                    </p>
                </div>
            </div>
        </Link>
    )
}