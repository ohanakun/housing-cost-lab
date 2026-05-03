import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-0">
      <div className="max-w-site mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-serif font-bold text-white text-lg mb-1">{SITE.name}</p>
            <p className="text-white/50 text-xs mb-4">{SITE.catchcopy}</p>
            <p className="text-white/60 text-xs leading-relaxed">
              注文住宅の費用を「長期コスト」まで含めて分析する情報サイトです。
            </p>
          </div>

          <div>
            <p className="font-bold text-white/80 text-sm mb-3">カテゴリ</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li><Link href="/articles/juutaku-sougaku-ranking/" className="hover:text-white transition-colors">注文住宅 総額比較</Link></li>
              <li><Link href="/articles/housemaker-selection/" className="hover:text-white transition-colors">ハウスメーカーの選び方</Link></li>
              <li><Link href="/articles/nenshu-simulation/" className="hover:text-white transition-colors">年収別シミュレーション</Link></li>
              <li><Link href="/articles/gaiheki-40nen-cost/" className="hover:text-white transition-colors">外壁材コスト比較</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white/80 text-sm mb-3">このサイトについて</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li><Link href="/about/" className="hover:text-white transition-colors">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
            </ul>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              掲載情報は執筆時点の相場です。最終的な判断は複数社の見積もりをご確認ください。
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="text-white/30 text-xs">
            当サイトはアフィリエイトプログラムに参加しています。
          </p>
        </div>
      </div>
    </footer>
  )
}
