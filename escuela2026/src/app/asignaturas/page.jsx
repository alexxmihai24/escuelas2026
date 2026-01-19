import Lista from '@/app/components/asignaturas/lista'
import Form from '@/app/components/asignaturas/form'
import { obtenerAsignaturas } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaAsignaturas() {

    const promesaAsignaturas = obtenerAsignaturas()  // Promesa, no usamos AWAIT

    return (
        <div>
            <h1 className='text-4xl mb-8'>Asignaturas</h1>
            <Form />

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>

                <Lista
                    promesaAsignaturas={promesaAsignaturas}
                />
            </Suspense>
        </div>
    )
}

export default PaginaAsignaturas
