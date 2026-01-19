import { obtenerEstudiante } from '@/lib/data'
import { Suspense } from 'react'


async function PaginaEstudiante({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className='text-4xl'>Detalle del Estudiante</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Estudiante id={id} />
            </Suspense>

        </div>
    )
}

export default PaginaEstudiante




async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)

    return (
        <div className='mt-10 p-8 rounded-2xl border border-(--card-border) bg-(--card-bg) max-w-2xl'>
            <h2 className='text-3xl font-bold mb-4'>{estudiante.nombre}</h2>
            <div className='space-y-4 opacity-90'>
                {estudiante.foto && (
                    <img
                        src={estudiante.foto}
                        alt={estudiante.nombre}
                        className='w-48 h-48 object-cover rounded-xl border border-(--card-border)'
                    />
                )}
                <div className='space-y-2'>
                    <p><span className='font-semibold'>Fecha de Nacimiento:</span> {new Date(estudiante.fecha_nacimiento).toLocaleDateString()}</p>
                    <p><span className='font-semibold'>Tutor Legal:</span> {estudiante.tutor_legal}</p>
                </div>
            </div>
        </div>
    )
}
