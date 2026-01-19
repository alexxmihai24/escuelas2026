'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function insertarGrupos(formData) {
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    try {
        const grupo = await prisma.grupo.create({
            data: {
                nombre,
                tutor,
                aula
            }
        })
        return grupo
    } catch (error) {
        console.log(error)
    }

    revalidatePath('/grupo')
}


export async function insertarAsignatura(formData) {
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const horas_semana = Number(formData.get('horas_semana'))

    try {
        await prisma.asignatura.create({
            data: {
                nombre,
                profesor,
                horas_semana
            }
        })
    } catch (error) {
        console.log(error)
    }

    revalidatePath('/asignaturas')
}


export async function insertarEstudiante(formData) {
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))
    const tutor_legal = formData.get('tutor_legal')
    const foto = formData.get('foto')

    try {
        await prisma.estudiante.create({
            data: {
                nombre,
                fecha_nacimiento,
                tutor_legal,
                foto
            }
        })
    } catch (error) {
        console.log(error)
    }

    revalidatePath('/estudiantes')
}

