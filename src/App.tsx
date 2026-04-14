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
            name: "Gato Gordo Babando",
            description: "babando enquanto nana na perna do seu dono chato.",
            imageName: "cat (1)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo Nanando em cima de plantas fake",
            description: "nanado em cima de plantas fake",
            imageName: "cat (2)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "nanando de boca aberta pra catar moscas",
            imageName: "cat (6)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "sentado errado e se limpando",
            imageName: "cat (3)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "deitado de uma forma completamente não convencional",
            imageName: "cat (4)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "nanado com cara de tolo fofo",
            imageName: "cat (5)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "sentado estranho em sua grama que ele palntou com suas proprias patas",
            imageName: "cat (7)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo",
            description: "em seu habitat natural",
            imageName: "cat (8)",
            footer: "o melhor gato gordo do mundo 🧡"
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
