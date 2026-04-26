import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較',
  description:
    '外壁材のトータルコスト（初期費用＋塗装・交換費用）を40年で比較。ガルバリウム・窯業系サイディング・ALCパネルの差を数字で解説。',
}

export default function GaihekiCostPage() {
  return (
    <ArticleLayout
      title="外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較"
      description="外壁材は「初期費用」で選ぶと損する。40年間のメンテナンス費を含めたトータルコストで比較すると、選ぶべき素材が変わってくる。"
      category="外壁材比較"
      publishedAt="2025年4月"
      slug="gaiheki-40nen-cost"
    >
      {/* ① 結論 */}
      <h2 className="article-h2">結論：40年トータルコストが一番安いのはガルバリウム鋼板</h2>
      <p className="article-p">
        先に結論を言う。外壁材の40年トータルコストが最も安いのは<strong className="text-white">ガルバリウム鋼板（金属系サイディング）</strong>で、
        目安は<strong className="text-orange-400">約150〜180万円</strong>（初期費用＋メンテナンス費込み）。
      </p>
      <p className="article-p">
        一方、最も多く使われている窯業系サイディングは初期費用こそ安いが、
        10〜15年ごとに塗装が必要で、40年間では<strong className="text-orange-400">約200〜280万円</strong>になることも珍しくない。
      </p>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📊 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 主要4素材の40年トータルコスト比較表</li>
          <li>• コストに差が出る3つの理由</li>
          <li>• 「安い外壁材を選んで失敗した」実例</li>
          <li>• あなたの家に合う目安の調べ方</li>
        </ul>
      </div>

      {/* ② 比較表 */}
      <h2 className="article-h2">外壁材4種類の40年コスト比較表</h2>
      <p className="article-p">
        以下は延床面積30坪（外壁面積約120㎡）の戸建てを想定した試算。
        初期費用は新築時の工事費、メンテは塗装・交換費用の累計。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>外壁材</th>
              <th>初期費用</th>
              <th>塗装頻度</th>
              <th>40年メンテ費</th>
              <th className="text-orange-300">40年総コスト</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-white">ガルバリウム鋼板</td>
              <td>100〜130万円</td>
              <td>20〜30年に1回</td>
              <td>50〜60万円</td>
              <td className="text-green-400 font-bold">約150〜190万円 ◎</td>
            </tr>
            <tr>
              <td className="font-bold text-white">窯業系サイディング</td>
              <td>70〜100万円</td>
              <td>10〜15年に1回</td>
              <td>140〜180万円</td>
              <td className="text-yellow-400 font-bold">約210〜280万円 △</td>
            </tr>
            <tr>
              <td className="font-bold text-white">ALCパネル</td>
              <td>130〜170万円</td>
              <td>10〜15年に1回</td>
              <td>120〜160万円</td>
              <td className="text-yellow-400 font-bold">約250〜330万円 △</td>
            </tr>
            <tr>
              <td className="font-bold text-white">木製サイディング</td>
              <td>120〜160万円</td>
              <td>5〜8年に1回</td>
              <td>200〜300万円</td>
              <td className="text-red-400 font-bold">約320〜460万円 ✕</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-xs mt-2">※試算は2024年の施工相場。立地・業者・塗料グレードによって変動あり。</p>

      {/* 中間CTA */}
      <CTABanner
        url={AFFILIATE.reform.url}
        label="外壁の見積もりを無料で比較する"
        sub="複数社に同時依頼・完全無料"
        variant="reform"
      />

      {/* ③ ロジック */}
      <h2 className="article-h2">なぜ「初期費用が安い」と40年で損するのか</h2>
      <h3 className="article-h3">理由1：塗装サイクルの差が積み重なる</h3>
      <p className="article-p">
        窯業系サイディングは水を吸うため、塗装が劣化すると内部から腐食が進む。
        そのため10〜15年ごとの再塗装が必須。120㎡の外壁塗装は1回あたり60〜90万円。
        40年で2〜3回繰り返せば、それだけで150〜270万円になる。
      </p>
      <h3 className="article-h3">理由2：ガルバリウムは素材自体が防水・防錆</h3>
      <p className="article-p">
        ガルバリウム鋼板はアルミと亜鉛の合金コーティングで腐食しにくく、
        塗装なしでも20〜30年は耐久性を維持できる。メンテ間隔が長い分、
        40年での出費が大幅に少なくなる。
      </p>
      <h3 className="article-h3">理由3：ALCは断熱性◎だがコスト高</h3>
      <p className="article-p">
        ALCパネル（軽量気泡コンクリート）は断熱・防火に優れる一方、
        素材自体が水を吸いやすく塗装サイクルが短い。初期費用が高い上にメンテも頻繁で、
        コスパの観点ではガルバリウムに劣る。
      </p>

      {/* ④ 失敗例 */}
      <h2 className="article-h2">失敗例：「窯業系で安く建てたら10年後に悲劇」</h2>
      <div className="callout-warning">
        <p className="text-red-300 font-bold mb-2">⚠️ 実例（30代 Aさん・埼玉県）</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          新築時に「外壁は窯業系で安く抑えた」と満足していたが、
          築12年で点検業者に「塗装が完全に剥がれていて雨漏りリスクがある」と指摘される。
          見積もりを取ると<strong className="text-white">外壁塗装・コーキング打ち替えで計83万円</strong>。
          「最初にガルバにしておけば20年は放置できたのに」と後悔。
        </p>
      </div>
      <p className="article-p">
        塗装の劣化は素人には気づきにくい。築10年を過ぎたら必ず外壁点検を行い、
        早めの対処でコストを抑えることが重要だ。
      </p>

      {/* ⑤ 目安 */}
      <h2 className="article-h2">あなたの家のコストを試算する方法</h2>
      <p className="article-p">
        おおまかな外壁面積は「延床面積 × 1.6」で計算できる。
        30坪の家なら約120㎡、40坪なら約160㎡が目安。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>延床面積</th>
              <th>外壁面積（目安）</th>
              <th>ガルバ40年総コスト</th>
              <th>窯業系40年総コスト</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25坪</td>
              <td>約100㎡</td>
              <td className="text-green-400">約130〜160万円</td>
              <td className="text-yellow-400">約180〜240万円</td>
            </tr>
            <tr>
              <td>30坪</td>
              <td>約120㎡</td>
              <td className="text-green-400">約150〜190万円</td>
              <td className="text-yellow-400">約210〜280万円</td>
            </tr>
            <tr>
              <td>40坪</td>
              <td>約160㎡</td>
              <td className="text-green-400">約190〜240万円</td>
              <td className="text-yellow-400">約280〜370万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        ただし上記はあくまで目安。実際の費用は業者・使用する塗料・地域・足場費用によって大きく変わる。
        正確な金額は複数社から見積もりを取るのが確実だ。
      </p>

      {/* ⑥ CTA */}
      <h2 className="article-h2">外壁塗装の適正価格を知る方法</h2>
      <p className="article-p">
        外壁塗装は「相見積もり（複数社に同時依頼）」が最も効果的なコスト削減策。
        1社だけに頼むと相場より20〜30万円高くなることも珍しくない。
        複数社の見積もりを比較することで適正価格がわかる。
      </p>
      <CTABanner
        url={AFFILIATE.reform.url}
        label="外壁塗装の見積もりを無料で比較する"
        sub="最大5社まで同時依頼・完全無料・しつこい営業なし"
        variant="reform"
      />

      <div className="card mt-8">
        <p className="text-slate-400 text-sm font-bold mb-2">関連記事</p>
        <Link
          href="/articles/gaiheki-tosou-200m2/"
          className="text-orange-400 hover:text-orange-300 transition-colors text-sm"
        >
          → 外壁塗装200㎡の費用相場｜総額いくら？相場と安くする方法
        </Link>
      </div>
    </ArticleLayout>
  )
}
