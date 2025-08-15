import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex h-screen items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Bienvenido a Doc SETPay</h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl">
                    La forma más sencilla de consultar documentación de soporte y otros temas
                </p>
                <Link href="/docs" className="mt-8 inline-block bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">
                    Revisar Documentación
                </Link>
            </div>
        </main>
    );
}
