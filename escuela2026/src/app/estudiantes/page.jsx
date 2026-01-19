import Lista from '@/app/components/estudiantes/lista'
import Form from '@/app/components/estudiantes/form'
import { obtenerEstudiantes } from '@/lib/data'
import { Suspense } from 'react'

async function PaginaEstudiantes() {

    const promesaEstudiantes = obtenerEstudiantes()

    return (
        <div>
            <h1 className='text-4xl mb-8'>Estudiantes</h1>
            <Form />

            <Suspense fallback={<p className='text-2xl text-blue-300'>Cargando...</p>}>
                <Lista
                    promesaEstudiantes={promesaEstudiantes}
                />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiantes
