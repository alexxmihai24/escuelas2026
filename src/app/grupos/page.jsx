import { PrismaClient } from "@prisma/client"
import Link from "next/link"

async function PaginaGrupos() {
  const prisma = new PrismaClient()

  const grupos = await prisma.grupo.findMany()

  console.log(grupos)
  return (
    <div>
      <h1 className="text-4xl">Grupos</h1>

      
      {grupos.map((grupo) => <Grupo grupo={grupo} key={grupo.id}  />)}
    </div>
  )
}

export default PaginaGrupos

function Grupo({grupo}) {
  return (
   < Link href={`/grupos/${grupo.id}`}>
    <div className="mt-10 bg-green-500 p-5">
      <p>Nombre de grupo: {grupo.nombre}</p>
      <p>Tutor del grupo: {grupo.tutor}</p>
      <p>Nombre de aula: {grupo.aula}</p>
      
    </div>
</Link>
  )
}