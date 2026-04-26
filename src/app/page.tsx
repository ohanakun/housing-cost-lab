import type { Metadata } from 'next'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: '注文住宅の総額比較・ハウスメーカー比較｜住まいの数字研究所',
  description:
    '注文住宅の総額・ハウスメーカー比較・40年維持費を徹底比較。土地＋建物＋諸費用＋維持費の本当のコストがわかります。',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE.url + '/' }],
}

const killerPages = [
  { href: '/articles/juutaku-sougaku-ranking/', icon: '🏆', badge: '人気No.1',
    title: '注文住宅の総額比較ランキング', desc: 'コスパの良いハウスメーカーがわかる' },
  { href: '/articles/housemaker-selection/', icon: '🏠', badge: '必読',
    title: 'ハウスメーカーの選び方', desc: '失敗しない判断基準を解説' },
  { href: '/articles/nenshu-simulation/', icon: '📊', badge: '計算ツール',
    title: '年収別・総額シミュレーション', desc: '無理のない予算がわかる' },
]

const valuePoints = [
  { icon: '💸', title: '初期費用が安くても維持費で逆転する',
    body: '10〜15年ごとの塗装・修繕が積み重なり、40年で逆転するケースが多い。' },
  { icon: '🔨', title: '外壁・屋根・修繕で数百万円の差',
    body: '外壁材・塗料の選択ひとつで、40年の維持費は100〜300万円変わる。' },
  { icon: '📈', title: '売却時の価値にも影響する',
    body: '外壁の状態・メンテ履歴は不動産査定に直結。資産価値を守る戦略が重要。' },
]

type ArticleData = { slug: string; title: string; insight: string; nextSlug: string; readTime: string }
const categories: { label: string; icon: string; articles: ArticleData[]; comingSoon: boolean }[] = [
  { label: '総額・予算', icon: '💰', articles: [], comingSoon: true },
  { label: 'ハウスメーカー比較', icon: '🏠', articles: [], comingSoon: true },
  {
    label: 'コスト削減', icon: '✂️', comingSoon: false,
    articles: [
      { slug: 'gaiheki-40nen-cost', title: '外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較',
        insight: 'どの外壁材が40年で最も安くなるかがわかる', nextSlug: 'gaiheki-tosou-200m2', readTime: '8分' },
      { slug: 'gaiheki-tosou-200m2', title: '外壁塗装200㎡の費用相場｜総額いくら？安くする方法',
        insight: '相場より30万円安くする相見積もりの方法', nextSlug: 'gaiheki-40nen-cost', readTime: '7分' },
    ],
  },
  {
    label: '外壁・外構・メンテナンス', icon: '🏡', comingSoon: false,
    articles: [
      { slug: 'chiku-30nen-koshigaya', title: '築30年戸建て売却相場（越谷エリア）2025年版',
        insight: '越谷の実相場と査定前にやるべきことがわかる', nextSlug: 'gaiheki-40nen-cost', readTime: '9分' },
    ],
  },
]

const allArticles = categories.flatMap((c) => c.articles)

// FV右側：比較モックアップデータ
const mockComparison = [
  { rank: 1, name: 'C建設',  initial: '2,500万円', total: '3,200万円', best: true },
  { rank: 2, name: 'Bホーム', initial: '2,800万円', total: '4,000万円', best: false },
  { rank: 3, name: 'Aハウス', initial: '3,100万円', total: '4,600万円', best: false },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ① ファーストビュー：左右分割 */}
      <section className="bg-site-bg border-b border-gray-200 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* 左：テキスト＋CTA */}
          <div>
            <p className="section-eyebrow">{SITE.name}｜{SITE.catchcopy}</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5">
              注文住宅の総額、<br />
              <span className="text-brand">いくらが正解？</span>
            </h1>
            <p className="text-navy font-bold text-base sm:text-lg mb-2 leading-relaxed">
              ハウスメーカー選びで<span className="text-brand">300万円以上</span>差が出る現実
            </p>
            <p className="text-site-muted text-sm sm:text-base mb-3 leading-relaxed">
              土地＋建物＋諸費用＋維持費まで、40年のトータルコストで比較
            </p>
            <p className="text-gray-400 text-sm mb-8 border-l-2 border-gray-200 pl-3">
              「初期費用」だけで選ぶと損する理由を、実例ベースで解説
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a
                href={AFFILIATE.housing.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-base sm:text-lg px-8 py-4"
              >
                無料でハウスメーカーを比較する →
              </a>
              <Link href="/articles/nenshu-simulation/" className="btn-secondary text-sm px-6 py-4">
                総額シミュレーション →
              </Link>
            </div>
            <p className="text-gray-400 text-xs">1分・完全無料・営業なし</p>
          </div>

          {/* 右：比較モックアップ */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-7">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-bold text-site-muted uppercase tracking-wider">
                  ハウスメーカー別 40年総コスト比較
                </p>
                <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full font-bold">30坪 目安</span>
              </div>

              <div className="space-y-3">
                {mockComparison.map((row) => (
                  <div
                    key={row.name}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      row.best ? 'bg-orange-50 border-2 border-brand/30' : 'bg-gray-50 border border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold w-8 text-center ${row.best ? 'text-brand' : 'text-gray-400'}`}>
                        {row.rank}位
                      </span>
                      <div>
                        <p className={`text-sm font-bold ${row.best ? 'text-navy' : 'text-site-text'}`}>{row.name}</p>
                        <p className="text-xs text-gray-400">初期費用 {row.initial}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-base ${row.best ? 'text-brand' : 'text-site-muted'}`}>
                        {row.total}
                      </p>
                      {row.best && <p className="text-xs text-brand font-bold">◎ 最安</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 text-center">
                <p className="text-sm font-bold text-navy">最大 <span className="text-brand text-lg font-black">約1,400万円</span> の差</p>
                <p className="text-xs text-gray-400 mt-1">※外壁塗装・修繕費・維持費を含む試算</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② キラーページ導線 */}
      <section className="bg-white py-14 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-site mx-auto">
          <div className="mb-8">
            <p className="section-eyebrow">📌 まずはここから</p>
            <h2 className="section-title mb-2">家づくりで損しないための必読ガイド</h2>
            <p className="text-site-muted text-sm">住宅購入を検討中の方にまず読んでほしい3記事</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {killerPages.map((p) => (
              <Link key={p.href} href={p.href} className="killer-card group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs bg-brand/10 text-brand border border-brand/20 px-2 py-0.5 rounded-full font-bold">
                    {p.badge}
                  </span>
                </div>
                <p className="font-serif font-bold text-navy text-base leading-snug mb-2 group-hover:text-brand transition-colors">
                  {p.title}
                </p>
                <p className="text-site-muted text-sm mb-4">{p.desc}</p>
                <p className="text-brand text-sm font-bold">詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FV直下CTA */}
      <section className="bg-brand py-10 px-4 sm:px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="text-white/80 text-sm mb-3">今すぐ無料で確認できます</p>
          <a
            href={AFFILIATE.housing.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-white text-brand hover:bg-gray-50 font-black text-base sm:text-lg px-10 py-4 rounded-lg transition-colors inline-block shadow-lg"
          >
            無料でハウスメーカーを比較する →
          </a>
          <p className="text-white/60 text-xs mt-3">1分・完全無料・営業なし</p>
        </div>
      </section>

      {/* ③ 価値訴求セクション */}
      <section className="bg-navy py-16 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand text-xs font-bold tracking-widest mb-2 uppercase">Why Total Cost</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              なぜ「総額」で考えないと<br className="sm:hidden" />損するのか？
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {valuePoints.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-3xl mb-4">{v.icon}</p>
                <p className="font-bold text-white text-sm mb-2 leading-snug">{v.title}</p>
                <p className="text-white/60 text-xs leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/80 text-base">
              だから当サイトでは
              <span className="text-brand font-black text-lg mx-1">「40年総コスト」</span>
              で比較します
            </p>
          </div>
        </div>
      </section>

      {/* ④ 目的別記事 */}
      <section className="bg-site-bg py-16 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <div className="mb-10">
            <p className="section-eyebrow">記事カテゴリ</p>
            <h2 className="section-title">目的から探す</h2>
          </div>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.label}>
                <div className="category-badge">
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>

                {cat.comingSoon ? (
                  <div className="bg-white border border-dashed border-gray-200 rounded-xl py-8 text-center">
                    <p className="text-gray-400 text-sm">このカテゴリの記事は近日公開予定です</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.articles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/articles/${a.slug}/`}
                        className="card card-hover group"
                      >
                        <p className="text-xs text-site-muted mb-2">{a.readTime}で読める</p>
                        <h3 className="font-serif font-bold text-navy mb-2 group-hover:text-brand transition-colors leading-snug">
                          {a.title}
                        </h3>
                        <p className="text-brand text-xs font-bold mb-3 flex items-center gap-1">
                          <span>✔</span>
                          <span>{a.insight}</span>
                        </p>
                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                          <p className="text-gray-400 text-xs">
                            次の記事：{allArticles.find((x) => x.slug === a.nextSlug)?.title?.slice(0, 18) ?? '関連記事'}…
                          </p>
                          <span className="text-brand text-sm font-bold">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 記事後CTA */}
      <section className="bg-white py-12 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-site mx-auto text-center">
          <p className="section-eyebrow">今すぐ始められます</p>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2">
            無料でハウスメーカーを比較する（1分・完全無料）
          </h2>
          <p className="text-site-muted text-sm mb-6">営業なし・費用ゼロで複数社を比較できます</p>
          <a
            href={AFFILIATE.housing.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-primary text-base px-10 py-4"
          >
            {AFFILIATE.housing.label} →
          </a>
        </div>
      </section>

      {/* ⑤ 信頼性セクション */}
      <section className="bg-site-bg py-16 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <div className="mb-8">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">{SITE.name}とは</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
            <p className="text-site-text text-base leading-relaxed mb-8 max-w-2xl">
              当サイトは注文住宅にかかる費用を「初期費用」だけでなく
              「長期コスト」まで含めて分析する情報サイトです。
              すべて数字ベースで判断できるよう設計しています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🏠', label: 'ハウスメーカー比較', desc: '複数社の総額・坪単価・保証を比較' },
                { icon: '📊', label: '総額シミュレーション', desc: '年収・土地代・諸費用を含む試算' },
                { icon: '🔧', label: '維持費分析', desc: '40年の修繕・塗装・交換費まで算出' },
              ].map((item) => (
                <div key={item.label} className="bg-site-bg rounded-xl p-5 border border-gray-100">
                  <p className="text-2xl mb-3">{item.icon}</p>
                  <p className="font-bold text-navy text-sm mb-1">{item.label}</p>
                  <p className="text-site-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ フッターCTA */}
      <section className="bg-navy py-20 px-4 sm:px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="text-brand text-xs font-bold tracking-widest mb-4 uppercase">今すぐ始められます</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            損しない家づくりは<br />
            <span className="text-brand">「比較」</span>から始まる
          </h2>
          <p className="text-white/60 text-sm mb-8">
            1社だけで決めると300万円以上損することも。まず複数社を比較しよう。
          </p>
          <a
            href={AFFILIATE.housing.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-brand hover:bg-brand-dark text-white font-black text-lg px-12 py-5 rounded-lg transition-colors inline-block shadow-xl"
          >
            無料でハウスメーカーを比較する →
          </a>
          <p className="text-white/30 text-xs mt-4">1分・完全無料・営業なし</p>
        </div>
      </section>

      {/* リフォームCTA（優先度低・フッター直前） */}
      <section className="bg-white py-6 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-site mx-auto text-center">
          <p className="text-gray-400 text-xs mb-2">リフォーム・外壁塗装の見積もりはこちら</p>
          <a
            href={AFFILIATE.reform.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-brand hover:text-brand-dark text-sm font-bold transition-colors"
          >
            {AFFILIATE.reform.label} →
          </a>
          <span className="text-gray-300 text-xs ml-3">{AFFILIATE.reform.sub}</span>
        </div>
      </section>

      {/* スマホ固定CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-3"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <a
          href={AFFILIATE.housing.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-lg text-center text-sm transition-colors"
        >
          無料でハウスメーカーを比較する →
        </a>
      </div>
    </>
  )
}
