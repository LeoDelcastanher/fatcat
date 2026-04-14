export default function App() {
    return (
        <main className="min-h-screen bg-[#fdf6ec] flex flex-col items-center justify-center p-8 font-serif">
            <div className="bg-white rounded-[2rem] shadow-lg p-12 max-w-sm w-full text-center">
                <span className="text-[1.6rem]">🐾</span>
                <h1 className="text-5xl text-[#c0392b] tracking-wide mt-1 mb-1">
                    Gato Gordo
                </h1>
                <p className="text-lg text-[#7f5e3c] italic mb-8">
                    Expondo meu gato gordo ao mundo
                </p>
                <div className="rounded-[1.5rem] overflow-hidden border-[5px] border-[#e67e22] shadow-md">
                    <img
                        src="/cat.webp"
                        alt="Meu gato gordo"
                        className="w-full h-auto block"
                    />
                </div>
                <footer className="mt-10 text-sm text-[#bfa98a]">
                    o melhor gato gordo do mundo 🧡
                </footer>
            </div>
        </main>
    )
}