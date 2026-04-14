// 1. Define the shape of the props this component accepts.
//    This is TypeScript doing its job — if you forget a prop or
//    pass the wrong type, the editor will warn you instantly.
type CatCardProps = {
  name: string
  description: string
  imageSrc: string
  footer: string
}

// 2. The component itself — a plain function that receives props
//    and returns JSX. The "{ name, description, ... }" syntax is
//    called destructuring: it unpacks the props object into variables.
export default function CatCard({ name, description, imageSrc, footer }: CatCardProps) {
  return (
    <div className="bg-white rounded-[2rem] shadow-lg p-8 max-w-md w-full text-center">
      <span className="text-[1.6rem]">🐾</span>

      {/* 3. Curly braces {} let you drop a JS variable into JSX */}
      <h1 className="text-5xl text-[#c0392b] tracking-wide mt-1 mb-1">
        Gato gordo {name}
      </h1>

      <p className="text-lg text-[#7f5e3c] italic mb-8">
        Expondo meu gato gordo {description}
      </p>

      <div className="rounded-[1.5rem] overflow-hidden border-[5px] border-[#e67e22] shadow-md">
        <img
          src={'/fatCatFrames/' + imageSrc + '.webp'}
          alt={name}
          className="w-full h-auto block"
        />
      </div>

      <footer className="mt-10 text-sm text-[#bfa98a]">
          O melhor gato gordo do mundo 🧡 - {footer}
      </footer>
    </div>
  )
}
