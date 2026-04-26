import type { Metadata } from 'next'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'
import { SITE } from '@/lib/site'
import CTASection from '@/components/CTASection'
import { buildUtmUrl } from '@/lib/tracking'

export const metadata: Metadata = {
  title: '【2026年版】注文住宅の総額比較ランキング｜40年コストで本当に安い会社は？',
  description:
    'ハウスメーカー選びで総額は300万円以上変わります。初期費用＋40年維持費を含む「総コスト」で5社を比較ランキング。無料で一括資料請求できます。',
  keywords: ['注文住宅 総額 比較', 'ハウスメーカー 比較', '注文住宅 ランキング', '総額 安い ハウスメーカー'],
}

// ★ 以下のデータはサンプルです。実際の取材・ASPデータに差し替えてください ★
const companies = [
  {
    rank: 1,
    name: 'Aホーム',
    type: 'コスパ重視型',
    initial: '2,400万円',
    maintenance: '480万円',
    total: '2,880万円',
    totalNum: 2880,
    feature: '独自工法で維持費を業界最安水準に抑制',
    rating: 5,
    highlights: [
      '高耐久外壁材を標準採用。塗装頻度が一般的な窯業系の約半分',
      '高断熱仕様で光熱費を年間20〜30万円削減。40年で600〜900万円の節約',
      '耐震等級3を標準仕様で取得（追加費用なし）',
    ],
    suitableFor: ['40年トータルコストを最優先したい方', '月々の返済額を抑えたい方', '性能重視でシンプルなデザインで十分な方'],
    notSuitableFor: ['外観デザインに強いこだわりがある方', '特定の高級ブランドを求める方'],
    breakdown: [
      { item: '建物本体工事費', cost: '1,800万円' },
      { item: '付帯工事費', cost: '300万円' },
      { item: '諸費用（税・手続き）', cost: '180万円' },
      { item: '外構・設備', cost: '120万円' },
      { item: '40年維持費（塗装・修繕）', cost: '480万円' },
    ],
  },
  {
    rank: 2,
    name: 'Bハウス',
    type: 'バランス型',
    initial: '2,700万円',
    maintenance: '540万円',
    total: '3,240万円',
    totalNum: 3240,
    feature: '品質・コスト・保証の三拍子が揃った定番',
    rating: 4,
    highlights: [
      '30年長期保証（延長制度あり）で修繕コストが読みやすい',
      '全国主要都市でのアフターサービス網が充実',
      'ZEH（ゼロエネルギーハウス）対応プランで光熱費ゼロを目指せる',
    ],
    suitableFor: ['品質とコストのバランスを重視する方', '充実した保証・アフターを求める方', '全国どこでも建てたい方'],
    notSuitableFor: ['極限まで初期費用を抑えたい方', '特殊な間取りや設計を希望する方'],
    breakdown: [
      { item: '建物本体工事費', cost: '2,050万円' },
      { item: '付帯工事費', cost: '320万円' },
      { item: '諸費用（税・手続き）', cost: '210万円' },
      { item: '外構・設備', cost: '120万円' },
      { item: '40年維持費（塗装・修繕）', cost: '540万円' },
    ],
  },
  {
    rank: 3,
    name: 'Cホームズ',
    type: '自由設計型',
    initial: '2,600万円',
    maintenance: '680万円',
    total: '3,280万円',
    totalNum: 3280,
    feature: '設計自由度の高さが魅力。ただし維持費はやや高め',
    rating: 4,
    highlights: [
      '完全自由設計で間取り・外観のカスタマイズが可能',
      'デザイン賞受賞実績のある設計チームが担当',
      '太陽光発電・蓄電池の導入オプションが充実',
    ],
    suitableFor: ['間取り・外観デザインにこだわりたい方', '趣味室や特殊な空間が必要な方', '省エネ設備を積極導入したい方'],
    notSuitableFor: ['とにかく総コストを抑えたい方', '早めの竣工（入居）を希望する方'],
    breakdown: [
      { item: '建物本体工事費', cost: '1,960万円' },
      { item: '付帯工事費', cost: '290万円' },
      { item: '諸費用（税・手続き）', cost: '200万円' },
      { item: '外構・設備', cost: '150万円' },
      { item: '40年維持費（塗装・修繕）', cost: '680万円' },
    ],
  },
]

const allCompanies = [
  ...companies,
  { rank: 4, name: 'Dリビング', type: '大手ブランド型', initial: '3,100万円', maintenance: '720万円', total: '3,820万円', totalNum: 3820, feature: '大手ブランドの安心感と充実の保証', rating: 3 },
  { rank: 5, name: 'Eハウス', type: 'ハイエンド型', initial: '3,500万円', maintenance: '950万円', total: '4,450万円', totalNum: 4450, feature: '最高品質・デザイン特化。総コストは最高水準', rating: 3 },
]

const Stars = ({ n }: { n: number }) => (
  <span className="text-yellow-500 text-sm tracking-tight">
    {'★'.repeat(n)}
    <span className="text-gray-300">{'★'.repeat(5 - n)}</span>
  </span>
)

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE.url + '/' },
    { '@type': 'ListItem', position: 2, name: '記事一覧', item: SITE.url + '/articles/' },
    { '@type': 'ListItem', position: 3, name: '注文住宅の総額比較ランキング', item: SITE.url + '/articles/juutaku-sougaku-ranking/' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '資料請求すると営業電話がかかってきますか？', acceptedAnswer: { '@type': 'Answer', text: '一括資料請求サービスでは、連絡方法・希望日時を指定できます。「メールのみ希望」と記入すれば電話営業を断ることができます。' } },
    { '@type': 'Question', name: 'なぜ無料で使えるのですか？', acceptedAnswer: { '@type': 'Answer', text: '資料請求サービスはハウスメーカーが広告費を負担しています。ユーザーは完全無料で利用できます。' } },
    { '@type': 'Question', name: '資料請求後に断っても大丈夫ですか？', acceptedAnswer: { '@type': 'Answer', text: '問題ありません。資料を受け取った後でも、「検討を中断した」と伝えるだけで断れます。強引な勧誘があった場合はサービス窓口に連絡できます。' } },
  ],
}

export default function JuutakuSougakuRankingPage() {
  return (
    <div className="bg-site-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* パンくずリスト */}
      <div className="bg-white border-b border-gray-100">
        <nav className="max-w-site mx-auto px-4 sm:px-6 py-3" aria-label="パンくずリスト">
          <ol className="flex items-center gap-2 text-xs text-site-muted flex-wrap">
            <li><Link href="/" className="hover:text-brand transition-colors">{SITE.name}</Link></li>
            <li className="text-gray-300">›</li>
            <li><Link href="/articles/" className="hover:text-brand transition-colors">記事一覧</Link></li>
            <li className="text-gray-300">›</li>
            <li className="text-gray-400">注文住宅の総額比較ランキング</li>
          </ol>
        </nav>
      </div>

      {/* ① ファーストビュー */}
      <section className="bg-white border-b border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-site mx-auto max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-medium">注文住宅 総額 比較</span>
            <span className="text-xs text-site-muted">2026年4月 更新</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight mb-5">
            【2026年版】注文住宅の総額比較ランキング<br />
            <span className="text-brand">40年コストで本当に安い会社は？</span>
          </h1>
          <p className="text-site-text leading-relaxed border-l-4 border-brand pl-4 bg-orange-50 py-4 rounded-r-xl text-sm mb-6">
            ハウスメーカー選びで、総額は<strong className="text-brand">300万円以上</strong>変わります。
            当ページでは「初期費用＋40年維持費」を含めたトータルコストで比較し、
            本当にコスパの良い会社をランキング形式で解説します。
          </p>
          <CTASection
            affiliate={AFFILIATE.housingPrimary}
            secondary={AFFILIATE.housingSecondary}
            pageSlug="juutaku-sougaku-ranking"
            position="fv"
          />
        </div>
      </section>

      {/* ② 結論：TOP3 */}
      <section className="bg-site-bg py-14 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">📊 結論</p>
          <h2 className="section-title">迷ったらこの3社を比較すればOK</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {companies.map((c) => (
              <div key={c.rank}
                className={`bg-white rounded-2xl border-2 p-6 shadow-card ${c.rank === 1 ? 'border-brand shadow-card-hover' : 'border-gray-100'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-black ${c.rank === 1 ? 'bg-brand text-white' : 'bg-gray-100 text-navy'}`}>
                    {c.rank}
                  </div>
                  {c.rank === 1 && (
                    <span className="text-xs bg-brand text-white px-2 py-0.5 rounded-full font-bold">総コスト最安</span>
                  )}
                </div>
                <p className="font-serif font-bold text-navy text-lg mb-1">{c.name}</p>
                <p className="text-xs text-site-muted mb-3">{c.type}</p>
                <p className={`font-black text-2xl mb-1 ${c.rank === 1 ? 'text-brand' : 'text-navy'}`}>{c.total}</p>
                <p className="text-xs text-gray-400 mb-3">40年総コスト（30坪目安）</p>
                <p className="text-sm text-site-text leading-snug">{c.feature}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border-2 border-brand/20 p-6 text-center">
            <p className="text-navy font-bold mb-3">1位と3位の差：<span className="text-brand text-xl font-black">約400万円</span></p>
            <a
              href={buildUtmUrl(AFFILIATE.housingPrimary.url, { source: 'housing-lab', medium: 'cta', campaign: 'juutaku-sougaku-ranking', content: 'top3' })}
              target="_blank" rel="noopener noreferrer nofollow"
              className="btn-primary text-base px-10 py-4">
              無料で3社まとめて資料請求する →
            </a>
            <p className="text-gray-400 text-xs mt-2">1分・完全無料・営業なし</p>
          </div>
        </div>
      </section>

      {/* ③ 比較表 */}
      <section className="bg-white py-14 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">📋 比較表</p>
          <h2 className="section-title">主要ハウスメーカー 総額比較一覧</h2>
          <p className="text-site-muted text-sm mb-6">※30坪・標準仕様を想定した概算。土地代を除く。</p>

          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="w-16 text-center">順位</th>
                  <th>メーカー名</th>
                  <th>タイプ</th>
                  <th>初期費用</th>
                  <th>40年維持費</th>
                  <th className="text-brand bg-navy">40年総コスト</th>
                  <th>おすすめ度</th>
                </tr>
              </thead>
              <tbody>
                {allCompanies.map((c) => (
                  <tr key={c.rank} className={c.rank === 1 ? 'bg-orange-50' : ''}>
                    <td className="text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-black ${c.rank === 1 ? 'bg-brand text-white' : 'bg-gray-100 text-navy'}`}>
                        {c.rank}
                      </span>
                    </td>
                    <td className="font-bold text-navy">
                      {c.name}
                      {c.rank === 1 && <span className="ml-2 text-xs bg-brand/10 text-brand px-1.5 py-0.5 rounded font-bold">◎最安</span>}
                    </td>
                    <td className="text-xs text-site-muted">{c.type}</td>
                    <td>{c.initial}</td>
                    <td>{c.maintenance}</td>
                    <td className={`font-black text-base ${c.rank === 1 ? 'text-brand' : 'text-navy'}`}>{c.total}</td>
                    <td><Stars n={c.rating} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※上記はサンプルデータです。実際の見積もりは各社によって大きく異なります。必ず複数社から見積もりを取ってください。
          </p>
        </div>
      </section>

      {/* ④ ランキング詳細 */}
      <section className="bg-site-bg py-14 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">🏆 詳細解説</p>
          <h2 className="section-title">ランキング上位3社 詳細レビュー</h2>

          <div className="space-y-12">
            {companies.map((c) => (
              <div key={c.rank} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-card ${c.rank === 1 ? 'border-brand' : 'border-gray-100'}`}>
                {/* カードヘッダー */}
                <div className={`px-7 py-5 flex items-center gap-4 ${c.rank === 1 ? 'bg-brand' : 'bg-navy'}`}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-xl text-navy flex-shrink-0">
                    {c.rank}
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-bold mb-0.5">第{c.rank}位</p>
                    <p className="font-serif font-bold text-white text-xl">{c.name}（{c.type}）</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-white/70 text-xs">40年総コスト</p>
                    <p className="text-white font-black text-2xl">{c.total}</p>
                  </div>
                </div>

                <div className="p-7 space-y-7">
                  {/* 特徴3つ */}
                  <div>
                    <h3 className="font-serif font-bold text-navy text-base mb-3 border-b border-gray-100 pb-2">
                      ✦ {c.name} の特徴
                    </h3>
                    <div className="space-y-2">
                      {c.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 bg-brand text-white rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                          <p className="text-site-text text-sm leading-relaxed">{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 向き・不向き */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="font-bold text-green-700 text-sm mb-2">✓ こんな方に向いている</p>
                      <ul className="space-y-1">
                        {c.suitableFor.map((s, i) => (
                          <li key={i} className="text-green-800 text-xs flex items-start gap-1.5">
                            <span className="text-green-500 flex-shrink-0">•</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <p className="font-bold text-red-600 text-sm mb-2">✕ 向いていない方</p>
                      <ul className="space-y-1">
                        {c.notSuitableFor.map((s, i) => (
                          <li key={i} className="text-red-700 text-xs flex items-start gap-1.5">
                            <span className="text-red-400 flex-shrink-0">•</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 総額の内訳 */}
                  <div>
                    <h3 className="font-bold text-navy text-sm mb-3">総額の内訳（30坪・目安）</h3>
                    <div className="table-wrapper">
                      <table className="comparison-table text-xs">
                        <thead>
                          <tr>
                            <th>費用項目</th>
                            <th className="text-right">金額（目安）</th>
                          </tr>
                        </thead>
                        <tbody>
                          {c.breakdown.map((b, i) => (
                            <tr key={i}>
                              <td className={b.item.includes('維持費') ? 'font-bold text-brand' : ''}>{b.item}</td>
                              <td className={`text-right font-bold ${b.item.includes('維持費') ? 'text-brand' : 'text-navy'}`}>{b.cost}</td>
                            </tr>
                          ))}
                          <tr className="bg-navy/5">
                            <td className="font-black text-navy">合計（40年総コスト）</td>
                            <td className="text-right font-black text-brand text-base">{c.total}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* カードCTA */}
                  <CTASection
                    affiliate={AFFILIATE.housingPrimary}
                    pageSlug="juutaku-sougaku-ranking"
                    position={`company-${c.rank}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 中間CTA */}
      <section className="bg-brand py-10 px-4 sm:px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="text-white/80 text-sm mb-3">上位3社の資料をまとめて請求できます</p>
          <a
            href={buildUtmUrl(AFFILIATE.housingPrimary.url, { source: 'housing-lab', medium: 'cta', campaign: 'juutaku-sougaku-ranking', content: 'strip' })}
            target="_blank" rel="noopener noreferrer nofollow"
            className="bg-white text-brand hover:bg-gray-50 font-black text-base sm:text-lg px-10 py-4 rounded-lg transition-colors inline-block shadow-lg">
            無料でまとめて比較する →
          </a>
          <p className="text-white/60 text-xs mt-3">1分・完全無料・営業なし</p>
        </div>
      </section>

      {/* ⑤ なぜ差が出るか */}
      <section className="bg-white py-14 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">💡 知識編</p>
          <h2 className="section-title">なぜハウスメーカーで総額が変わるのか？</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '⚠️',
                title: '坪単価の「罠」',
                body: '「坪単価50万円」は建物本体のみの価格。付帯工事費・外構・諸費用を足すと、実際の総額は1.5〜2倍になることが多い。坪単価だけで比較すると必ず後悔する。',
                point: '坪単価 × 1.5〜2倍 = 現実の総額',
              },
              {
                icon: '🔧',
                title: '維持費の「差」',
                body: '使う外壁材・断熱材・屋根材によって、10〜15年後の塗装・修繕費が大きく変わる。安い建材を使うと初期費用は下がるが、40年で逆転する。',
                point: '維持費の差が最大300万円超',
              },
              {
                icon: '📋',
                title: '保証・構造の「違い」',
                body: '長期保証の有無・構造体の強度によって、将来の修繕コストが変わる。耐震等級3・長期保証付きの会社を選べば、突発的な出費リスクを下げられる。',
                point: '保証の有無で修繕コストが変わる',
              },
            ].map((item) => (
              <div key={item.title} className="bg-site-bg rounded-2xl border border-gray-100 p-6">
                <p className="text-3xl mb-4">{item.icon}</p>
                <p className="font-serif font-bold text-navy text-base mb-3">{item.title}</p>
                <p className="text-site-text text-sm leading-relaxed mb-4">{item.body}</p>
                <div className="bg-brand/10 rounded-lg px-3 py-2">
                  <p className="text-brand text-xs font-bold">{item.point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 失敗しない選び方 */}
      <section className="bg-site-bg py-14 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">✅ 実践ガイド</p>
          <h2 className="section-title">ハウスメーカー選びで失敗しない3つのポイント</h2>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: '必ず「複数社」から見積もりを取る',
                body: '1社だけで決めると、相場より300万円以上高くなることも。最低3社、できれば5社の見積もりを取って比較することが最大の節約策。無料の一括資料請求サービスを活用すれば手間なく比較できる。',
              },
              {
                num: '02',
                title: '「坪単価」ではなく「総額」で比較する',
                body: '坪単価は建物本体のみ。付帯工事・外構・諸費用・40年の維持費まで含めた「総額」で比較しないと正確な判断ができない。当サイトの比較表のように「40年総コスト」での比較が重要。',
              },
              {
                num: '03',
                title: '「維持費・光熱費」も計算に入れる',
                body: '断熱性能・外壁材・設備の質によって、毎年の光熱費や10〜20年後の修繕費が変わる。初期費用が高くても高性能な家を選んだ方が、40年トータルでは安くなるケースは多い。',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex gap-5">
                <div className="font-serif font-black text-4xl text-brand/20 w-14 flex-shrink-0 leading-none pt-1">
                  {item.num}
                </div>
                <div>
                  <p className="font-serif font-bold text-navy text-base mb-2">{item.title}</p>
                  <p className="text-site-text text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ FAQ */}
      <section className="bg-white py-14 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-site mx-auto">
          <p className="section-eyebrow">❓ よくある質問</p>
          <h2 className="section-title">資料請求前の不安を解消</h2>

          <div className="space-y-3 max-w-3xl">
            {[
              {
                q: '資料請求すると営業電話がかかってきますか？',
                a: '一括資料請求サービスでは、連絡方法・希望日時を指定できます。「メールのみ希望」と記入すれば電話営業を断ることができます。しつこい営業があった場合はサービス窓口に申告できます。',
              },
              {
                q: '無料なのはなぜですか？怪しくない？',
                a: '資料請求サービスはハウスメーカー側が広告費として費用を負担しています。ユーザーは完全無料で利用できます。大手・中堅メーカー多数が参加している信頼性の高いサービスです。',
              },
              {
                q: '資料請求後に「やっぱり要らない」と断ってもいいですか？',
                a: '問題ありません。資料を受け取った後でも、「現在は検討を中断しています」と伝えるだけで断れます。契約を迫られることはなく、キャンセル料等も一切かかりません。',
              },
              {
                q: '何社まで同時に資料請求できますか？',
                a: 'サービスによりますが、一般的に3〜10社まで同時に資料請求できます。まず気になる3〜5社に絞って依頼するのがおすすめです。',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-site-bg border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-bold text-navy text-sm flex items-center justify-between list-none hover:bg-gray-50 transition-colors">
                  <span>Q. {faq.q}</span>
                  <span className="text-brand font-black text-lg ml-3 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-gray-100">
                  <p className="text-site-text text-sm leading-relaxed">A. {faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="bg-site-bg py-10 px-4 sm:px-6">
        <div className="max-w-site mx-auto">
          <p className="text-site-muted text-xs font-bold tracking-widest mb-4 uppercase">関連記事</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Link href="/articles/housemaker-selection/"
              className="bg-white rounded-xl border border-gray-100 shadow-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
              <p className="text-xs text-site-muted mb-2">ハウスメーカー選び</p>
              <p className="font-serif font-bold text-navy text-sm group-hover:text-brand transition-colors leading-snug">
                ハウスメーカーの選び方｜失敗しない判断基準7つ →
              </p>
            </Link>
            <Link href="/articles/nenshu-simulation/"
              className="bg-white rounded-xl border border-gray-100 shadow-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
              <p className="text-xs text-site-muted mb-2">予算シミュレーション</p>
              <p className="font-serif font-bold text-navy text-sm group-hover:text-brand transition-colors leading-snug">
                年収別・総額シミュレーション｜無理のない予算の目安 →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ⑧ 最終CTA */}
      <section className="bg-navy py-20 px-4 sm:px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="text-brand text-xs font-bold tracking-widest mb-4 uppercase">今すぐ始められます</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
            損しない家づくりは<br />
            <span className="text-brand">「比較」</span>から始まる
          </h2>
          <p className="text-white/60 text-sm mb-4">
            複数社を比較して初めて「本当の相場」がわかります。
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 inline-block mb-8 text-left">
            <p className="text-white/80 text-xs font-bold mb-2">一括資料請求でわかること</p>
            {['各社の見積もり・坪単価', '40年保証・アフターサービスの内容', '実際の施工事例・外観デザイン集'].map((item, i) => (
              <p key={i} className="text-white/60 text-xs flex items-center gap-2">
                <span className="text-brand">✓</span>{item}
              </p>
            ))}
          </div>
          <div className="block">
            <a
              href={buildUtmUrl(AFFILIATE.housingPrimary.url, { source: 'housing-lab', medium: 'cta', campaign: 'juutaku-sougaku-ranking', content: 'final' })}
              target="_blank" rel="noopener noreferrer nofollow"
              className="bg-brand hover:bg-brand-dark text-white font-black text-lg px-12 py-5 rounded-lg transition-colors inline-block shadow-xl">
              無料でハウスメーカーを比較する →
            </a>
            <p className="text-white/30 text-xs mt-4">1分・完全無料・営業なし</p>
          </div>
        </div>
      </section>

      {/* 記事フッター */}
      <div className="bg-white py-6 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <Link href="/articles/" className="text-brand hover:text-brand-dark transition-colors text-sm font-medium">
            ← 記事一覧に戻る
          </Link>
          <Link href="/" className="text-site-muted hover:text-navy transition-colors text-xs">
            {SITE.name} トップ →
          </Link>
        </div>
      </div>

      {/* スマホ固定CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-3"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <a
          href={buildUtmUrl(AFFILIATE.housingPrimary.url, { source: 'housing-lab', medium: 'cta-fixed', campaign: 'juutaku-sougaku-ranking', content: 'mobile-fixed' })}
          target="_blank" rel="noopener noreferrer nofollow"
          className="block w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-lg text-center text-sm transition-colors">
          無料でハウスメーカーを比較する →
        </a>
      </div>
    </div>
  )
}
