# 🚀 Guía Universal: Proyectos Full-Stack con Next.js + Prisma

Esta es una guía genérica para que puedas montar cualquier aplicación web moderna desde cero, paso a paso.

---

## 1. 📂 Inicio del Proyecto
Crea la carpeta y el proyecto base:
```bash
npx create-next-app@latest nombre-de-tu-proyecto
# Elige: App Router (Sí), Tailwind CSS (Sí), TypeScript (Opcional).
```

---

## 2. 🗄️ Base de Datos (Prisma ORM)
Prisma es el traductor entre tu código y la base de datos.
1. **Instalación**:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```
2. **Inicializar**: `npx prisma init` (Crea la carpeta `prisma` y el archivo `.env`).
3. **El Modelo** (`prisma/schema.prisma`): Define tus tablas.
   ```prisma
   model Articulo {
     id      Int    @id @default(autoincrement())
     titulo  String
     precio  Float
   }
   ```
4. **Sincronizar**:
   - `npx prisma db push`: Crea las tablas en la DB real.
   - `npx prisma generate`: Crea las funciones en JavaScript.

---

## 3. 🏗️ Arquitectura de 3 Capas (El Patrón de Oro)
Para que tu web sea rápida y profesional, divide el código en estas 3 partes:

### Capa A: El "Corazón" de Datos (`src/lib/data.js`)
Aquí solo van funciones que leen de la base de datos.
```javascript
import prisma from '@/lib/prisma'

export async function obtenerArticulos() {
    return await prisma.articulo.findMany()
}
```

### Capa B: El Visualizador Cliente (`src/app/components/lista.jsx`)
Es el componente que pinta los datos. Usa `'use client'` para poder usar interacciones.
```javascript
'use client'
import { use } from 'react'

export default function Lista({ promesa }) {
    const datos = use(promesa) // Desenvuelve la promesa que viene del servidor
    return (
        <div>
            {datos.map(item => <div key={item.id}>{item.titulo}</div>)}
        </div>
    )
}
```

### Capa C: La Ruta del Navegador (`src/app/articulos/page.jsx`)
Es la página que une todo. Usa `Suspense` para mostrar un mensaje de carga.
```javascript
import { obtenerArticulos } from '@/lib/data'
import Lista from '@/app/components/lista'
import { Suspense } from 'react'

export default async function Pagina() {
    const promesa = obtenerArticulos() // ¡No uses await aquí!
    return (
        <Suspense fallback={<p>Cargando datos...</p>}>
            <Lista promesa={promesa} />
        </Suspense>
    )
}
```

---

## ⚡ 4. Insertar Datos (Server Actions)
Crea un archivo `src/lib/actions.js` para las funciones de guardar/borrar datos.
```javascript
'use server'
import { revalidatePath } from 'next/cache'

export async function guardarDato(formData) {
    const titulo = formData.get('titulo') // Coge el dato del input "name='titulo'"
    await prisma.articulo.create({ data: { titulo } })
    revalidatePath('/articulos') // Obliga a la web a refrescar la lista
}
```

---

## 🎨 5. Estilos (Tailwind CSS)
- **Modo Oscuro**: Usa variables en `globals.css` dentro de `@media (prefers-color-scheme: dark)`.
- **Efectos**: Usa `glass` o `backdrop-blur` para diseños modernos.

---

## 🛠️ Comandos de "Supervivencia"
- `npm run dev`: Inicia el servidor de desarrollo.
- `npx prisma studio`: Abre un panel excel para editar tus datos a mano.
- `npx prisma db push`: Usa esto CADA VEZ que cambies algo en `schema.prisma`.
- `npx prisma generate`: Úsalo si el código no reconoce un modelo nuevo.
