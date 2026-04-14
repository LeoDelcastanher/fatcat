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
            description: "Expondo meu gato gordo ao mundo",
            imageName: "cat (1)",
            footer: "o melhor gato gordo do mundo 🧡"
        },
        {
            name: "Gato Gordo Nanando em cima de plantas fake",
            description: "Expondo meu gato gordo ao mundo",
            imageName: "cat (2)",
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
