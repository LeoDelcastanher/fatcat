import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const toggle = () => {
    i18n.changeLanguage(current === 'pt' ? 'en' : 'pt')
  }

  return (
    <button
      onClick={toggle}
      className="text-xs text-[#bfa98a] border border-[#d4c4b0] rounded-full px-3 py-1 hover:bg-[#e8ddd0] transition-colors"
    >
      {current === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
