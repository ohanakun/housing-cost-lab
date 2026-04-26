import Link from 'next/link'
import { SITE } from '@/lib/site'
import { AFFILIATE } from '@/lib/affiliates'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-site mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif font-bold text-navy text-lg sm:text-xl tracking-tight group-hover:text-brand transition-colors">
            {SITE.name}
          </span>
          <span className="hidden sm:block text-xs text-site-muted">{SITE.catchcopy}</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/articles/"
            className="text-sm text-site-muted hover:text-navy transition-colors hidden sm:block"
          >
            記事一覧
          </Link>
          <Link
            href="/articles/juutaku-sougaku-ranking/"
            className="text-sm text-site-muted hover:text-navy transition-colors hidden md:block"
          >
            総額比較
          </Link>
          <Link
            href="/articles/housemaker-selection/"
            className="text-sm text-site-muted hover:text-navy transition-colors hidden md:block"
          >
            HM比較
          </Link>
          <a
            href={AFFILIATE.housing.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-brand hover:bg-brand-dark text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            無料で比較する
          </a>
        </nav>
      </div>
    </header>
  )
}
