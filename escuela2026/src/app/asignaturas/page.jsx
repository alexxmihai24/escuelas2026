import Lista from '@/app/components/asignaturas/lista'
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaAsignaturas() {

    const promesaAsignaturas = obtenerAsignaturas()  // Promesa, no usamos AWAIT

    return (
        <div>
            <h1 className='text-4xl'>Asignaturas</h1>

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Lista
                    promesaAsignaturas={promesaAsignaturas}
                />
            </Suspense>
        </div>
    )
}

export default PaginaAsignaturas
