'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import { Language } from '@/types/translations'
import { supportedLanguages } from '@/lib/translations'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languageLabels: Record<Language, { name: string; flag: string }> = {
    en: { name: 'English', flag: '🇺🇸' },
    fr: { name: 'Français', flag: '🇫🇷' }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 text-white"
        aria-label="Language selector"
      >
        <span className="text-sm">{languageLabels[language].flag}</span>
        <span className="text-sm font-medium hidden sm:block">
          {languageLabels[language].name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-lg shadow-xl z-50 overflow-hidden">
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                language === lang
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <span className="text-lg">{languageLabels[lang].flag}</span>
              <span className="font-medium">{languageLabels[lang].name}</span>
              {language === lang && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
