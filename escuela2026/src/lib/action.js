'use server'

import prisma from "@/lib/prisma"

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
}