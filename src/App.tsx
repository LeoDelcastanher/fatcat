// Import the component. The path is relative to this file.
// No need to type ".tsx" — TypeScript resolves it automatically.
import CatCard from './components/CatCard'

type FatCatFrame = {
  name: string;
  description: string;
  imageName: string;
  footer: string;
}

export default function App() {
    const fatCatFrames: FatCatFrame[] = [
        {
            name: "O Babador Profissional",
            description: "babando enquanto nana na perna do seu dono chato.",
            imageName: "cat (1)",
            footer: "a perna do dono é o travesseiro oficial 😴"
        },
        {
            name: "Amante da Natureza (Falsa)",
            description: "nanado em cima de plantas fake",
            imageName: "cat (2)",
            footer: "não distingue plástico de verdade 🌿"
        },
        {
            name: "O Caçador de Moscas",
            description: "nanando de boca aberta pra catar moscas",
            imageName: "cat (6)",
            footer: "técnica avançada de caça: dormir de boca aberta 🦟"
        },
        {
            name: "Mestre da Postura",
            description: "sentado errado e se limpando",
            imageName: "cat (3)",
            footer: "a ergonomia é opcional 🧼"
        },
        {
            name: "O Inovador",
            description: "deitado de uma forma completamente não convencional",
            imageName: "cat (4)",
            footer: "redefinindo o conceito de conforto 🛌"
        },
        {
            name: "Cara de Tolo Fofo",
            description: "nanado com cara de tolo fofo",
            imageName: "cat (5)",
            footer: "não é feio, é charmoso 😚"
        },
        {
            name: "O Jardineiro",
            description: "sentado estranho em sua grama que ele palntou com suas proprias patas",
            imageName: "cat (7)",
            footer: "planta, colhe e senta em cima 🌱"
        },
        {
            name: "Em Seu Habitat Natural",
            description: "em seu habitat natural",
            imageName: "cat (8)",
            footer: "se coube, é meu 🪣"
        },
    ];

  return (
    <main className="min-h-screen bg-[#fdf6ec] flex flex-wrap justify-center content-start gap-8 p-8 font-serif">
        {fatCatFrames.map((frame, index) => (
            <CatCard
                key={index}
                name={frame.name}
                description={frame.description}
                imageSrc={frame.imageName}
                footer={frame.footer}
            />
        ))}
    </main>
  )
}
