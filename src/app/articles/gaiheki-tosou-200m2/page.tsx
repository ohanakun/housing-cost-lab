import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '外壁塗装200㎡の費用相場｜総額いくら？安くする方法と失敗しない業者選び',
  description:
    '外壁塗装200㎡の費用相場は70〜130万円。塗料グレード別の内訳・相見積もりで安くする方法・悪徳業者の見分け方を解説。',
}

export default function GaihekiTosouPage() {
  return (
    <ArticleLayout
      title="外壁塗装200㎡の費用相場｜総額いくら？安くする方法と失敗しない業者選び"
      description="200㎡の外壁塗装、相場は70〜130万円。1社見積もりで30万円損した事例と、適正価格で頼む方法を解説。"
      category="外壁塗装"
      publishedAt="2025年4月"
      slug="gaiheki-tosou-200m2"
    >
      {/* ① 結論 */}
      <h2 className="article-h2">結論：外壁塗装200㎡の相場は70〜130万円</h2>
      <p className="article-p">
        先に結論。外壁面積200㎡（延床面積約40〜50坪の戸建て）の外壁塗装費用の相場は
        <strong className="text-orange-400">70〜130万円</strong>。
        使用する塗料のグレードによって大きく変わる。
      </p>
      <p className="article-p">
        「1社に頼んだら150万円請求された」という事例もある一方、
        「複数社から見積もりを取ったら80万円に抑えられた」というケースも多い。
        塗装工事は「相見積もりをしたかどうか」で30万円以上変わることがある。
      </p>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📊 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 塗料グレード別の費用内訳</li>
          <li>• 足場代・高圧洗浄・コーキングの相場</li>
          <li>• 「1社見積もりで損した」実例</li>
          <li>• 悪徳業者のチェックリスト</li>
        </ul>
      </div>

      {/* ② 比較表 */}
      <h2 className="article-h2">塗料グレード別・費用比較表（200㎡基準）</h2>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>塗料グレード</th>
              <th>塗料費（200㎡）</th>
              <th>耐用年数</th>
              <th className="text-orange-300">工事総額（目安）</th>
              <th>年間コスト</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-white">アクリル塗料</td>
              <td>15〜20万円</td>
              <td>5〜7年</td>
              <td className="text-yellow-400 font-bold">55〜75万円</td>
              <td className="text-red-400">約10万円/年</td>
            </tr>
            <tr>
              <td className="font-bold text-white">シリコン塗料</td>
              <td>20〜30万円</td>
              <td>10〜15年</td>
              <td className="text-green-400 font-bold">70〜100万円 ◎</td>
              <td className="text-green-400">約6〜8万円/年</td>
            </tr>
            <tr>
              <td className="font-bold text-white">フッ素塗料</td>
              <td>30〜45万円</td>
              <td>15〜20年</td>
              <td className="text-green-400 font-bold">90〜120万円 ◎</td>
              <td className="text-green-400">約5〜7万円/年</td>
            </tr>
            <tr>
              <td className="font-bold text-white">無機塗料</td>
              <td>40〜60万円</td>
              <td>20〜25年</td>
              <td className="text-blue-400 font-bold">110〜150万円</td>
              <td className="text-blue-400">約5〜6万円/年</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-xs mt-2">※足場・高圧洗浄・コーキングを含む総額試算。2024年相場。</p>

      {/* 内訳 */}
      <h3 className="article-h3">費用の内訳：塗料以外にかかるもの</h3>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>相場（200㎡）</th>
              <th>メモ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>足場設置・撤去</td>
              <td className="font-bold">20〜30万円</td>
              <td>外壁塗装で最大の固定費</td>
            </tr>
            <tr>
              <td>高圧洗浄</td>
              <td className="font-bold">2〜5万円</td>
              <td>省くと塗料が剥がれやすくなる</td>
            </tr>
            <tr>
              <td>コーキング打ち替え</td>
              <td className="font-bold">10〜20万円</td>
              <td>窯業系サイディングは必須</td>
            </tr>
            <tr>
              <td>下地補修</td>
              <td className="font-bold">3〜15万円</td>
              <td>劣化状況による</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        足場代だけで20〜30万円かかるため、屋根塗装と同時施工すると足場代を一回分節約できる。
        屋根の劣化も気になる場合は同時見積もりを推奨。
      </p>

      {/* 中間CTA */}
      <CTABanner
        url={AFFILIATE.reform.url}
        label="複数社に一括見積もり依頼する（無料）"
        sub="最大5社比較・完全無料"
        variant="reform"
      />

      {/* ③ ロジック */}
      <h2 className="article-h2">なぜ見積もりで30万円差が出るのか</h2>
      <p className="article-p">
        外壁塗装の価格差が生まれる主な理由は3つ。
      </p>
      <h3 className="article-h3">① 塗料の希釈率を調整している</h3>
      <p className="article-p">
        塗料を薄めて塗布量を増やすと材料費を抑えられるが、耐久性が著しく低下する。
        「格安業者」がやりがちな手口で、塗装後5年以内に剥がれが起きることも。
      </p>
      <h3 className="article-h3">② 下地処理を省いている</h3>
      <p className="article-p">
        高圧洗浄や旧塗膜の除去を省略すると施工費は下がるが、
        新しい塗料がすぐ剥がれる原因になる。見積書に「高圧洗浄」の記載があるか確認を。
      </p>
      <h3 className="article-h3">③ 自社施工か下請けかの差</h3>
      <p className="article-p">
        ハウスメーカーや大手に頼むと協力業者に丸投げするケースがある。
        中間マージンが20〜30%乗ることも。地域の直接施工業者を選ぶとコストを抑えやすい。
      </p>

      {/* ④ 失敗例 */}
      <h2 className="article-h2">失敗例：「1社見積もりで150万円払った」</h2>
      <div className="callout-warning">
        <p className="text-red-300 font-bold mb-2">⚠️ 実例（50代 Bさん・埼玉県）</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          大手ハウスメーカーのメンテナンス担当から「そろそろ塗り替えどきですよ」と言われ、
          そのまま1社だけで見積もり。外壁約200㎡の塗装で<strong className="text-white">総額150万円</strong>で契約。
          後日、別の業者に聞いたら「フッ素塗料でも100万円以内」と判明。
          相見積もりをしなかったことを大いに後悔。
        </p>
      </div>

      {/* ⑤ 目安 */}
      <h2 className="article-h2">あなたの家の外壁面積を調べる方法</h2>
      <p className="article-p">
        外壁面積の簡易計算式：<strong className="text-white">外壁面積 ≒ 延床面積 × 1.6</strong>
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>延床面積</th>
              <th>外壁面積（目安）</th>
              <th>シリコン塗装 相場</th>
              <th>フッ素塗装 相場</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30坪（99㎡）</td>
              <td>約150〜160㎡</td>
              <td>55〜80万円</td>
              <td>70〜95万円</td>
            </tr>
            <tr>
              <td>40坪（132㎡）</td>
              <td>約200〜210㎡</td>
              <td>70〜100万円</td>
              <td>90〜120万円</td>
            </tr>
            <tr>
              <td>50坪（165㎡）</td>
              <td>約250〜270㎡</td>
              <td>90〜130万円</td>
              <td>110〜150万円</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 悪徳業者チェック */}
      <h2 className="article-h2">悪徳業者の見分け方チェックリスト</h2>
      <div className="card space-y-2">
        {[
          '「今だけ」「近くで工事があるのでついでに」と飛び込み営業してくる',
          '見積書が手書き・項目が曖昧で「一式」でまとめられている',
          '塗料のメーカー名・製品名が書かれていない',
          '高圧洗浄・コーキング打ち替えの記載がない',
          '保証書の発行条件がはっきりしない',
          '工事中は業者任せで進捗報告がない',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* ⑥ CTA */}
      <h2 className="article-h2">適正価格で外壁塗装を頼む方法</h2>
      <p className="article-p">
        最も確実なのは、複数の業者から見積もりを取って比較すること。
        3社以上から見積もりを取ると「相場感」がわかり、高い業者・怪しい業者を見抜きやすくなる。
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
          href="/articles/gaiheki-40nen-cost/"
          className="text-orange-400 hover:text-orange-300 transition-colors text-sm block"
        >
          → 外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較
        </Link>
      </div>
    </ArticleLayout>
  )
}
