import { obtenerGrupo } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaGrupo({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Grupo</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Grupo id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaGrupo





async function Grupo({ id }) {
    const grupo = await obtenerGrupo(id)

    return (
        <div className='mt-10 p-8 rounded-2xl border border-(--card-border) bg-(--card-bg) max-w-2xl'>
            <h2 className='text-3xl font-bold mb-4'>{grupo.nombre}</h2>
            <div className='space-y-2 opacity-90'>
                <p><span className='font-semibold'>Tutor:</span> {grupo.tutor}</p>
                <p><span className='font-semibold'>Aula:</span> {grupo.aula}</p>
            </div>
        </div>
    )
}