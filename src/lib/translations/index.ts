import { Language, Translations } from '@/types/translations'
import { en } from './en'
import { fr } from './fr'

export const translations: Record<Language, Translations> = {
  en,
  fr
}

export const defaultLanguage: Language = 'en'
export const supportedLanguages: Language[] = ['en', 'fr']

export { en, fr }
