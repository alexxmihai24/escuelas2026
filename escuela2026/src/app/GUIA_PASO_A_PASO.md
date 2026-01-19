# 🏫 Guía Paso a Paso: Proyecto Escuela 2026

Esta guía te ayudará a recrear este proyecto desde cero o a entender cómo funciona cada parte.

---

## 1. 📂 Inicialización del Proyecto
Primero, creamos un proyecto Next.js limpio.

```bash
npx create-next-app@latest escuela2026
```
> [!TIP]
> Durante la instalación, elige **App Router**, **Tailwind CSS** y **ESLint**.

---

## 2. 🗄️ Configuración de la Base de Datos (Prisma)
Prisma es nuestro ORM para hablar con la base de datos.

1. **Instalar Prisma**:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```
2. **Inicializar**:
   ```bash
   npx prisma init
   ```
3. **Definir el Esquema** (`prisma/schema.prisma`):
   ```prisma
   model Grupo {
     id     Int    @id @default(autoincrement())
     nombre String @unique
     tutor  String
     aula   String
   }
   
   model Asignatura {
     id           Int     @id @default(autoincrement())
     nombre       String
     profesor     String?
     horas_semana Int
   }
   ```
4. **Sincronizar**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

---

## 3. 🏗️ Arquitectura de Componentes (Patrón Maestro)
Usamos un patrón de 3 niveles para que las páginas carguen rápido y con "Loading States".

### Nivel 1: Capa de Datos (`src/lib/data.js`)
Aquí definimos funciones que consultan la base de datos.

```javascript
'use server'
import prisma from '@/lib/prisma'

export async function obtenerGrupos() {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simula red lenta
    return await prisma.grupo.findMany()
}
```

### Nivel 2: Componente Cliente (`src/app/components/grupo/lista.jsx`)
Usa `React.use()` para esperar una promesa enviada desde el servidor.

```javascript
'use client'
import { use } from 'react'

export default function Lista({ promesaGrupos }) {
    const grupos = use(promesaGrupos)
    return (
        <div>{grupos.map(g => <div key={g.id}>{g.nombre}</div>)}</div>
    )
}
```

### Nivel 3: Página Servidor (`src/app/grupos/page.jsx`)
Combina todo usando **Suspense**.

```javascript
import Lista from '@/app/components/grupo/lista'
import { obtenerGrupos } from '@/lib/data'
import { Suspense } from 'react'

export default async function Pagina() {
    const promesa = obtenerGrupos() // No usamos await aquí
    return (
        <Suspense fallback={<p>Cargando...</p>}>
            <Lista promesaGrupos={promesa} />
        </Suspense>
    )
}
```

---

## 4. ⚡ Acciones del Servidor (Server Actions)
Para insertar datos sin recargar la página.

1. **Crear Acción** (`src/lib/action.js`):
   ```javascript
   'use server'
   import { revalidatePath } from 'next/cache'
   
   export async function insertarGrupo(formData) {
       // ... lógica de prisma.create ...
       revalidatePath('/grupos') // Refresca la lista automáticamente
   }
   ```

---

## 5. 🎨 Estilos Premium (Glassmorphism)
En `globals.css` usamos variables CSS para el modo oscuro y efectos de cristal:

```css
.glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 🚀 Comandos Útiles
- `npm run dev`: Inicia el proyecto.
- `npx prisma studio`: Abre un panel visual para ver y editar tus datos.
- `npx prisma generate`: Actualiza el cliente de Prisma tras cambiar el esquema.
