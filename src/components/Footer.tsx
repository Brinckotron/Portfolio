'use client'

import { useTranslation } from '@/contexts/TranslationContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold gradient-text font-mono">
              &lt;GameDev/&gt;
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              {t.footer.brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t.footer.quickLinks}</h3>
            <div className="space-y-2">
              {              [
                { href: '#about', label: t.nav.about },
                { href: '#skills', label: t.nav.skills },
                { href: '#projects', label: t.nav.projects },
                { href: '#contact', label: t.nav.contact }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t.footer.getInTouch}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 f.brinck.boucher@gmail.com</p>
              <p>🌍 {t.footer.contact.worldwide}</p>
              <p>💼 {t.footer.contact.opportunities}</p>
            </div>
            <div className="flex space-x-3">
              {['🔗', '💼', '🐦', '💬'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {t.footer.copyright}
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
