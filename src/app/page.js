 import Image from "next/image";
 import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/grupos">Grupos</Link>
      <Link href="/estudiantes">Estudiantes</Link>
      <Link href="/asignaturas">Asignaturas</Link>
    </div>
  );
}
