// Import the component. The path is relative to this file.
// No need to type ".tsx" — TypeScript resolves it automatically.
import { useTranslation } from 'react-i18next'
import CatCard from './components/CatCard'
import LanguageSwitcher from './components/LanguageSwitcher'

type FatCatFrame = {
  key: string;
  imageName: string;
}

export default function App() {
  const { t } = useTranslation()

  const fatCatFrames: FatCatFrame[] = [
    { key: 'drooler',    imageName: 'cat (1)' },
    { key: 'fakeplants', imageName: 'cat (2)' },
    { key: 'flycatcher', imageName: 'cat (6)' },
    { key: 'posture',    imageName: 'cat (3)' },
    { key: 'innovator',  imageName: 'cat (4)' },
    { key: 'derpy',      imageName: 'cat (5)' },
    { key: 'gardener',   imageName: 'cat (7)' },
    { key: 'habitat',    imageName: 'cat (8)' },
  ];

  return (
    <div className="min-h-screen bg-[#fdf6ec] flex flex-col font-serif">
      <header className="flex items-center justify-between px-8 pt-8 pb-2">
        <div>
          <h1 className="text-3xl text-[#c0392b] tracking-wide">🐾 {t('site.title')}</h1>
          <p className="text-sm text-[#7f5e3c] italic">{t('site.tagline')}</p>
        </div>
        <LanguageSwitcher />
      </header>

      <main className="flex-1 flex flex-wrap justify-center content-start gap-8 p-8">
        {fatCatFrames.map((frame) => (
          <CatCard
            key={frame.key}
            name={t(`cats.${frame.key}.name`)}
            description={t(`cats.${frame.key}.description`)}
            imageSrc={frame.imageName}
            footer={t(`cats.${frame.key}.footer`)}
          />
        ))}
      </main>

      <footer className="w-full border-t border-[#e8ddd0] py-4 px-8 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
        {(t('footer.tech', { returnObjects: true }) as string[]).map((tech, index, arr) => (
          <>
            <span key={tech} className="text-xs text-[#bfa98a]">{tech}</span>
            {index < arr.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-[#d4c4b0]" />
            )}
          </>
        ))}
      </footer>
    </div>
  )
}
