import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '注文住宅の総額・ハウスメーカー比較・外壁塗装費用・戸建て売却相場など、家づくりの費用に関する記事一覧です。',
}

const articles = [
  {
    slug: 'juutaku-sougaku-ranking',
    category: '注文住宅 比較',
    title: '【2026年版】注文住宅の総額比較ランキング｜40年コストで本当に安い会社は？',
    description: 'ハウスメーカー選びで総額は300万円以上変わります。初期費用＋40年維持費を含む「総コスト」で5社を比較ランキング。',
    publishedAt: '2026年4月',
    badge: '人気No.1',
  },
  {
    slug: 'juutaku-sougaku-ikura',
    category: '注文住宅 総額',
    title: '注文住宅の総額はいくら？土地＋建物＋諸費用の内訳と平均を解説',
    description: '注文住宅の総額は土地込みで3,000万〜5,000万円が目安。諸費用・外構費・維持費まで含めた5項目の内訳と、年収別の予算目安を解説。',
    publishedAt: '2026年4月',
    badge: '新着',
  },
  {
    slug: 'gaiheki-40nen-cost',
    category: '外壁材比較',
    title: '外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較',
    description: '外壁材の「初期費用」だけで選ぶと40年で100万円以上損する。総コストが一番安い選択肢とは？',
    publishedAt: '2025年4月',
    badge: null,
  },
  {
    slug: 'gaiheki-tosou-200m2',
    category: '外壁塗装',
    title: '外壁塗装200㎡の費用相場｜総額いくら？相場と安くする方法',
    description: '200㎡の外壁塗装、相場は70〜130万円。1社見積もりで30万円損した事例と、適正価格で頼む方法。',
    publishedAt: '2025年4月',
    badge: null,
  },
  {
    slug: 'chiku-30nen-koshigaya',
    category: '戸建て売却',
    title: '築30年戸建て売却相場（越谷エリア）｜現実の査定額と売れる条件',
    description: '越谷エリアの築30年戸建ての実相場は1,500〜2,800万円。外壁ボロボロでも売れる？査定前に知るべきこと。',
    publishedAt: '2025年4月',
    badge: null,
  },
]

export default function ArticlesPage() {
  return (
    <div className="bg-site-bg min-h-screen">
      <div className="max-w-site mx-auto px-4 sm:px-6 py-10">

        {/* ヘッダー */}
        <div className="mb-8">
          <p className="text-brand text-xs font-bold tracking-widest uppercase mb-2">Articles</p>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-3">記事一覧</h1>
          <p className="text-site-muted text-sm">
            注文住宅の総額・ハウスメーカー比較・外壁塗装・戸建て売却など、家づくりの費用に関する情報をまとめています。
          </p>
        </div>

        {/* 記事カード */}
        <div className="flex flex-col gap-4 max-w-3xl">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}/`}
              className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group p-6 block"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-medium">
                  {a.category}
                </span>
                {a.badge && (
                  <span className="text-xs bg-brand text-white px-2 py-0.5 rounded-full font-bold">
                    {a.badge}
                  </span>
                )}
                <span className="text-xs text-site-muted">{a.publishedAt}</span>
              </div>
              <h2 className="font-serif font-bold text-navy group-hover:text-brand transition-colors mb-2 leading-snug text-base sm:text-lg">
                {a.title}
              </h2>
              <p className="text-site-muted text-sm leading-relaxed">{a.description}</p>
              <p className="text-brand text-xs font-bold mt-3">続きを読む →</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
