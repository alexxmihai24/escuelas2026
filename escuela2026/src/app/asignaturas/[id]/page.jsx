import { obtenerAsignatura } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaAsignatura({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Asignatura</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Asignatura id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaAsignatura




async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)

    return (
        <div className='mt-10 p-8 rounded-2xl border border-(--card-border) bg-(--card-bg) max-w-2xl'>
            <h2 className='text-3xl font-bold mb-4'>{asignatura.nombre}</h2>
            <p className='text-xl opacity-90'><span className='font-semibold'>Horas semanales:</span> {asignatura.horas}</p>
        </div>
    )
}
