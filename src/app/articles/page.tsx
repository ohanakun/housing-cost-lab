import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '注文住宅の総額・ハウスメーカー比較・間取り・外壁塗装など、家づくりの費用に関する記事一覧です。',
}

const articles = [
  // ── キラーページ・CV直結 ──────────────────────────
  {
    slug: 'juutaku-sougaku-ranking',
    category: '注文住宅 比較',
    title: '【2026年版】注文住宅の総額比較ランキング｜40年コストで本当に安い会社は？',
    description: 'ハウスメーカー選びで総額は300万円以上変わります。初期費用＋40年維持費を含む「総コスト」で5社を比較ランキング。',
    publishedAt: '2026年4月',
    badge: '人気No.1',
  },
  {
    slug: 'townlife-kuchikomi',
    category: '一括資料請求',
    title: 'タウンライフ家づくりの評判・口コミは？メリット・デメリットを徹底解説',
    description: '無料で複数社の間取り・見積もりを取り寄せられるタウンライフ家づくりの評判・口コミをメリット・デメリット含め正直に解説。',
    publishedAt: '2026年5月',
    badge: 'CV直結',
  },
  // ── 総額・予算 ────────────────────────────────────
  {
    slug: 'juutaku-sougaku-ikura',
    category: '注文住宅 総額',
    title: '注文住宅の総額はいくら？土地＋建物＋諸費用の内訳と平均を解説',
    description: '注文住宅の総額は土地込みで3,000万〜5,000万円が目安。諸費用・外構費・維持費まで含めた5項目の内訳と年収別の予算目安を解説。',
    publishedAt: '2026年4月',
    badge: null,
  },
  {
    slug: 'nenshu-simulation',
    category: '予算シミュレーション',
    title: '年収別 住宅購入シミュレーション｜年収400〜800万円の現実的な予算',
    description: '年収400〜800万円別に借入可能額・月返済額・購入総額を試算。返済負担率25%以内で無理のない家づくり予算の考え方を解説。',
    publishedAt: '2026年5月',
    badge: null,
  },
  // ── ハウスメーカー比較 ────────────────────────────
  {
    slug: 'housemaker-selection',
    category: 'ハウスメーカー選び',
    title: 'ハウスメーカーの選び方｜失敗しない比較ポイント7つ',
    description: '失敗しない判断基準を解説。坪単価・保証・アフターサービスの見方など。',
    publishedAt: '2026年5月',
    badge: null,
  },
  {
    slug: 'housemaker-hikaku-pointo',
    category: 'ハウスメーカー選び',
    title: 'ハウスメーカー比較のやり方｜失敗しない7つのチェックポイント',
    description: '坪単価だけで選ぶと損する理由と、総額・保証・アフターなど失敗しない7つの比較チェックポイントを解説。',
    publishedAt: '2026年5月',
    badge: null,
  },
  {
    slug: 'housemaker-mitsumori-hikaku',
    category: 'ハウスメーカー 見積もり',
    title: '注文住宅の見積もりは何社比較すべき？無料で効率よく比較する方法',
    description: '見積もりは最低3社・できれば5社と比較すべき理由と、無料で複数社の見積もりを効率よく取り寄せる方法を解説。',
    publishedAt: '2026年5月',
    badge: null,
  },
  // ── 間取り・後悔対策 ──────────────────────────────
  {
    slug: 'madori-muryo-hikaku',
    category: '注文住宅 間取り',
    title: '注文住宅の間取りを無料でもらう方法｜複数社からプランを比較するコツ',
    description: '注文住宅の間取りは無料で複数社から取り寄せて比較できます。依頼の手順と良い間取りを見分けるポイントを解説。',
    publishedAt: '2026年5月',
    badge: null,
  },
  {
    slug: 'chumon-juutaku-kokai',
    category: '注文住宅 注意点',
    title: '注文住宅で後悔する人の共通点10選｜失敗しないための対策も解説',
    description: '注文住宅で後悔・失敗した人に共通するパターン10選と、比較不足を防ぐための具体的な対策を解説。',
    publishedAt: '2026年5月',
    badge: null,
  },
  // ── コスト削減 ────────────────────────────────────
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
            注文住宅の総額・ハウスメーカー比較・間取り・外壁塗装など、家づくりの費用に関する情報をまとめています。
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
