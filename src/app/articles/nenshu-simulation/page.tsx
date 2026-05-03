import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTASection from '@/components/CTASection'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '年収別 住宅購入シミュレーション｜年収400〜800万円の現実的な予算と月返済額',
  description:
    '年収400〜800万円別に、注文住宅の現実的な購入予算・借入可能額・月々の返済額を試算。無理のない家づくり予算の考え方と、ハウスメーカー選びのコツを解説します。',
  keywords: ['年収別 住宅購入 シミュレーション', '年収 住宅ローン 借入可能額', '住宅購入 月返済額 試算', '注文住宅 予算 年収'],
}

// ★ 試算条件：フラット35・金利1.8%・返済期間35年・頭金10%を想定した概算値 ★
const simulations = [
  {
    income: '400万円',
    borrowing: '約2,400〜2,600万円',
    monthlyPayment: '約77,000〜84,000円',
    totalBudget: '約2,700〜2,900万円',
    ratio: '約23〜25%',
    point: '土地代込みでこの予算内に収めるには、郊外・地方エリアが現実的。都市部では建物のみでこの金額になるケースが多い。',
    suitable: '地方移住・郊外を検討している方、共働きでさらに返済力を高められる方',
  },
  {
    income: '500万円',
    borrowing: '約3,000〜3,200万円',
    monthlyPayment: '約96,000〜103,000円',
    totalBudget: '約3,300〜3,600万円',
    ratio: '約23〜25%',
    point: '注文住宅の全国平均的な価格帯。郊外ならゆとりある間取りが実現できる。都市部でも土地条件次第で対応可能。',
    suitable: '標準的な注文住宅を検討している方、余裕を持った返済計画を重視する方',
  },
  {
    income: '600万円',
    borrowing: '約3,600〜3,900万円',
    monthlyPayment: '約116,000〜125,000円',
    totalBudget: '約4,000〜4,300万円',
    ratio: '約23〜25%',
    point: '都市近郊エリアでも土地＋建物で対応できる価格帯。仕様のグレードアップや住宅性能（ZEH・断熱）へのこだわりも選択肢に入る。',
    suitable: '都市近郊エリアで建てたい方、住宅性能・デザインにもこだわりたい方',
  },
  {
    income: '700万円',
    borrowing: '約4,200〜4,500万円',
    monthlyPayment: '約135,000〜145,000円',
    totalBudget: '約4,700〜5,000万円',
    ratio: '約23〜25%',
    point: '大手ハウスメーカーのハイグレード仕様も視野に入る価格帯。都市部でも比較的自由度が高くなる。',
    suitable: '大手ハウスメーカーの高品質な住宅を検討している方、都市部での建築を希望する方',
  },
  {
    income: '800万円',
    borrowing: '約4,800〜5,200万円',
    monthlyPayment: '約154,000〜167,000円',
    totalBudget: '約5,300〜5,800万円',
    ratio: '約23〜25%',
    point: '都市部での土地＋高品質な注文住宅が現実的な予算内に収まる。外構・インテリアにもこだわれる余裕がある。',
    suitable: '都市部で土地から購入を検討している方、建物の質・仕様を最優先したい方',
  },
]

export default function NenshuSimulationPage() {
  return (
    <ArticleLayout
      title="年収別 住宅購入シミュレーション｜年収400〜800万円の現実的な予算と月返済額"
      description="年収別に注文住宅の現実的な購入予算・借入可能額・月々の返済額を試算。無理のない予算の考え方と、ハウスメーカー選びの判断基準を解説します。"
      category="予算シミュレーション"
      publishedAt="2026年5月"
      slug="nenshu-simulation"
    >
      {/* ── 結論 ── */}
      <h2 className="article-h2">年収別の住宅購入予算：まず「返済負担率25%以内」を目安にする</h2>
      <p className="article-p">
        住宅ローンの借入可能額は金融機関の審査基準によって異なるが、
        実際の家計を守るうえで重要な目安が<strong className="text-orange-400">「返済負担率25%以内」</strong>だ。
        年収に対して年間返済額が25%を超えると、生活費・教育費・老後資金に影響が出やすくなる。
      </p>
      <p className="article-p">
        このページでは年収400〜800万円ごとに、<strong className="text-orange-400">フラット35・金利1.8%・返済期間35年・頭金10%</strong>を前提とした
        現実的な購入予算と月々の返済額を試算している。
        あくまで概算のため、実際は複数のハウスメーカーから資金計画書を取り寄せて比較することを強く推奨する。
      </p>

      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📋 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 年収400〜800万円別の借入可能額・月返済額の試算</li>
          <li>• 「返済負担率」の正しい考え方</li>
          <li>• 年収別に無理のない家づくりを進めるポイント</li>
          <li>• 無料で自分の予算を複数社に試算してもらう方法</li>
        </ul>
      </div>

      <div className="callout-warning">
        <p className="text-red-300 font-bold text-sm mb-1">⚠️ 試算の前提条件</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 金利：フラット35 1.8%（2026年5月時点の目安）</li>
          <li>• 返済期間：35年</li>
          <li>• 頭金：購入総額の10%</li>
          <li>• 諸費用（税・登記・手数料等）：建物価格の約6%を別途用意する前提</li>
          <li>• 実際の借入額・返済額は金融機関の審査・変動金利の選択により異なります</li>
        </ul>
      </div>

      {/* ── CTA①：冒頭 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="nenshu-simulation"
        position="intro"
      />

      {/* ── 返済負担率の解説 ── */}
      <h2 className="article-h2">住宅ローンの返済負担率とは？年収別の安全ライン</h2>
      <p className="article-p">
        返済負担率とは、<strong className="text-orange-400">年収に対する年間返済額の割合</strong>のことだ。
        フラット35の審査基準では年収400万円以上で35%以下とされているが、
        実際の家計では以下のラインを目安にするのが現実的だ。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>返済負担率</th>
              <th>判定</th>
              <th>家計への影響</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-green-400">20%以下</td>
              <td className="text-green-400">◎ 余裕あり</td>
              <td>教育費・老後資金の積立が十分にできる</td>
            </tr>
            <tr>
              <td className="text-green-400">20〜25%</td>
              <td className="text-green-400">○ 現実的な目安</td>
              <td>ゆとりはあるが、固定費の管理が必要</td>
            </tr>
            <tr>
              <td>25〜30%</td>
              <td>△ 注意が必要</td>
              <td>急な支出・金利上昇に脆弱になりやすい</td>
            </tr>
            <tr>
              <td className="text-red-400">30%超</td>
              <td className="text-red-400">✕ 家計圧迫リスク</td>
              <td>生活費・教育費・老後資金に影響が出やすい</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        なお、共働き世帯の場合は2人の収入合算で試算するケースが多いが、
        <strong className="text-orange-400">育休・時短勤務・転職などを考慮して「主たる収入だけでも返済できる水準」</strong>を確認しておくことが重要だ。
      </p>

      {/* ── 年収別シミュレーション ── */}
      <h2 className="article-h2">年収400〜800万円別 住宅購入シミュレーション一覧</h2>
      <p className="article-p">
        以下は年収400〜800万円の5段階における購入予算・借入額・月返済額の概算だ。
        「いくら借りられるか」ではなく「無理なく返せる額」を基準に算出している。
      </p>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>年収</th>
              <th>現実的な借入額</th>
              <th>月々の返済額</th>
              <th>購入総額目安</th>
              <th>返済負担率</th>
            </tr>
          </thead>
          <tbody>
            {simulations.map((s) => (
              <tr key={s.income}>
                <td className="font-bold">{s.income}</td>
                <td>{s.borrowing}</td>
                <td className="text-orange-400 font-bold">{s.monthlyPayment}</td>
                <td>{s.totalBudget}</td>
                <td className="text-green-400">{s.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="article-p text-xs text-gray-400">
        ※フラット35・金利1.8%・返済期間35年・頭金10%を前提とした当サイト独自試算（概算）。実際の借入額・返済額は金融機関・金利タイプにより異なります。
      </p>

      {/* ── 年収別詳細 ── */}
      <h2 className="article-h2">年収別シミュレーション詳細</h2>

      {simulations.map((s) => (
        <div key={s.income} className="mb-8 bg-white rounded-2xl border border-gray-100 shadow-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-bold">年収{s.income}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { label: '借入額目安', value: s.borrowing },
              { label: '月返済額目安', value: s.monthlyPayment },
              { label: '購入総額目安', value: s.totalBudget },
              { label: '返済負担率', value: s.ratio },
            ].map((item) => (
              <div key={item.label} className="bg-site-bg rounded-xl p-3 text-center">
                <p className="text-xs text-site-muted mb-1">{item.label}</p>
                <p className="text-sm font-bold text-navy leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-site-text leading-relaxed mb-2">
            <span className="font-bold text-navy">ポイント：</span>{s.point}
          </p>
          <p className="text-xs text-site-muted">
            <span className="font-bold">向いている方：</span>{s.suitable}
          </p>
        </div>
      ))}

      {/* ── CTA②：中盤 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="nenshu-simulation"
        position="middle"
      />

      {/* ── 予算を抑えるポイント ── */}
      <h2 className="article-h2">年収別に「無理のない家づくり」を実現するポイント</h2>

      <h3 className="article-h3">ポイント①：「借りられる額」より「返せる額」で考える</h3>
      <p className="article-p">
        金融機関の審査では年収の7〜8倍まで借りられるケースもあるが、
        それが「返し続けられる額」とは限らない。
        子育て・車の買い替え・親の介護など、将来の支出を想定したうえで
        <strong className="text-orange-400">月返済額は「手取り収入の20〜25%以内」</strong>を目安にするのが安全だ。
      </p>

      <h3 className="article-h3">ポイント②：「初期費用」だけでなく40年の維持費も試算する</h3>
      <p className="article-p">
        外壁材・屋根材・設備の選択によって、10〜15年ごとの修繕コストは大きく変わる。
        同じ購入予算でも、40年の維持費まで含めると<strong className="text-orange-400">ハウスメーカーによって100〜300万円以上の差が出ることがある。</strong>
        初期費用の安さだけで選ばず、長期コストを比較することが重要だ。
      </p>
      <p className="article-p">
        各ハウスメーカーの40年総コスト比較は
        <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline">注文住宅の総額比較ランキング</Link>
        で詳しく解説している。
      </p>

      <h3 className="article-h3">ポイント③：複数社の資金計画書を比較する</h3>
      <p className="article-p">
        同じ年収・同じ希望でも、ハウスメーカーごとに出てくる「資金計画書（総額試算）」は大きく異なる。
        1社の数字だけを信じて予算を組むと、他社では同じ予算でより充実した家が建てられたという後悔につながる。
        <strong className="text-orange-400">無料で複数社の資金計画書を取り寄せて比較する</strong>ことが、
        予算オーバーを防ぐ最も確実な方法だ。
      </p>
      <p className="article-p">
        注文住宅の総額の内訳と平均については
        <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline">注文住宅の総額はいくら？</Link>
        も参考にしてほしい。
      </p>

      {/* ── よくある質問 ── */}
      <h2 className="article-h2">住宅ローン・予算に関するよくある質問</h2>

      <h3 className="article-h3">Q. 変動金利と固定金利、どちらを選べばよい？</h3>
      <p className="article-p">
        変動金利は現在の金利が低い分、将来の金利上昇リスクがある。
        固定金利（フラット35）は金利が固定されるため返済計画が立てやすい。
        金利上昇リスクに不安がある場合や、長期間安定した返済を希望する場合は固定金利が安心だ。
        最終的には金融機関・FPへの相談で自分の状況に合った選択をしてほしい。
      </p>

      <h3 className="article-h3">Q. 頭金はいくら用意すべき？</h3>
      <p className="article-p">
        一般的な目安は購入価格の10〜20%だ。
        頭金を多く入れると月返済額が下がる一方、手元資金がなくなると急な出費に対応できなくなるリスクがある。
        <strong className="text-orange-400">諸費用（建物価格の5〜8%）は頭金とは別に現金で用意する</strong>必要があることを忘れずに。
      </p>

      <h3 className="article-h3">Q. 共働きの場合、収入合算で借入額を増やせる？</h3>
      <p className="article-p">
        2人の収入を合算した「ペアローン」や「収入合算」を使うと借入可能額を増やせる。
        ただし、育休・転職・病気などで一方の収入が減ったときにも返済が続くリスクがある。
        「主たる収入だけでも返済できる水準」を確認したうえで活用することを推奨する。
      </p>

      {/* ── 内部リンク ── */}
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-3">📖 あわせて読みたい記事</p>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>
            <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline font-bold">
              【2026年版】注文住宅の総額比較ランキング
            </Link>
            ：年収別の予算でどのハウスメーカーが選べるかを数字で比較
          </li>
          <li>
            <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline font-bold">
              注文住宅の総額はいくら？
            </Link>
            ：土地＋建物＋諸費用の内訳と年収別の予算目安を詳しく解説
          </li>
        </ul>
      </div>

      {/* ── CTA③：末尾 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="nenshu-simulation"
        position="bottom"
        size="large"
      />

      <h2 className="article-h2">まとめ：年収別シミュレーションの活用方法</h2>
      <p className="article-p">
        年収別の住宅購入予算は、あくまでも出発点の目安だ。
        同じ年収でも家族構成・住むエリア・こだわり・将来計画によって最適な予算は変わる。
      </p>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">✅ 次のアクション</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>① このシミュレーションで大まかな予算感をつかむ</li>
          <li>② 複数のハウスメーカーに無料で資金計画書を依頼して比較する</li>
          <li>③ 実際の総額・月返済額をもとに最終的な予算を決定する</li>
        </ul>
      </div>
      <p className="article-p">
        <strong className="text-orange-400">無料で複数社の資金計画書を取り寄せて比較する</strong>のが、
        予算を正確に把握しながら損しない家づくりへの最短ルートだ。
      </p>
    </ArticleLayout>
  )
}
