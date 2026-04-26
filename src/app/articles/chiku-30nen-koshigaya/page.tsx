import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '築30年戸建て売却相場（越谷エリア）2025年版｜現実の査定額と売れる条件',
  description:
    '越谷市の築30年戸建ての売却相場は1,500〜2,800万円。外壁ボロボロでも売れる？査定額を上げる方法と、失敗しない売却の進め方を解説。',
}

export default function KoshigayaBaikyakuPage() {
  return (
    <ArticleLayout
      title="築30年戸建て売却相場（越谷エリア）2025年版｜現実の査定額と売れる条件"
      description="越谷エリアの築30年戸建ての実相場は1,500〜2,800万円。外壁ボロボロでも売れる？査定前に知るべきことを解説。"
      category="戸建て売却"
      publishedAt="2025年4月"
      slug="chiku-30nen-koshigaya"
    >
      {/* ① 結論 */}
      <h2 className="article-h2">結論：越谷の築30年戸建ては1,500〜2,800万円が相場</h2>
      <p className="article-p">
        結論から言う。越谷市の築30年戸建ての売却相場は
        <strong className="text-orange-400">1,500〜2,800万円</strong>が一つの目安。
        ただしこの幅は立地・土地面積・建物の状態によって大きく変わる。
      </p>
      <p className="article-p">
        築30年の戸建ては、一般的に「建物の評価はほぼゼロ」と判断され、
        実態として<strong className="text-white">売却価格の9割は土地値</strong>で決まる。
        そのため「駅からの距離」と「土地面積」が査定額を左右する最大要因だ。
      </p>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📊 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 越谷エリア別・築年数別の売却相場表</li>
          <li>• 土地値で査定される理由と建物評価の仕組み</li>
          <li>• 「外壁ボロボロ」「雨漏りあり」でも売れるか</li>
          <li>• 査定前にやるべきこと・やってはいけないこと</li>
        </ul>
      </div>

      {/* ② 比較表 */}
      <h2 className="article-h2">越谷エリア別・築30年戸建ての売却相場表（2025年）</h2>
      <p className="article-p">
        以下は土地面積30〜40坪・建物延床面積25〜35坪程度の一般的な戸建てを想定した目安。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>エリア（最寄り駅）</th>
              <th>駅徒歩</th>
              <th>土地相場（坪）</th>
              <th className="text-orange-300">築30年 売却相場</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-white">越谷駅周辺</td>
              <td>10分以内</td>
              <td>40〜55万円</td>
              <td className="text-green-400 font-bold">2,000〜2,800万円</td>
            </tr>
            <tr>
              <td className="font-bold text-white">南越谷・新越谷</td>
              <td>10分以内</td>
              <td>38〜52万円</td>
              <td className="text-green-400 font-bold">1,900〜2,700万円</td>
            </tr>
            <tr>
              <td className="font-bold text-white">北越谷・大袋</td>
              <td>10分以内</td>
              <td>30〜42万円</td>
              <td className="text-yellow-400 font-bold">1,600〜2,200万円</td>
            </tr>
            <tr>
              <td className="font-bold text-white">せんげん台</td>
              <td>10分以内</td>
              <td>28〜38万円</td>
              <td className="text-yellow-400 font-bold">1,500〜2,000万円</td>
            </tr>
            <tr>
              <td>各駅 徒歩15分超</td>
              <td>15分超</td>
              <td>22〜32万円</td>
              <td className="text-red-400 font-bold">1,200〜1,700万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-xs mt-2">
        ※2025年4月時点の概算。国土交通省・不動産取引価格情報等を参考に試算。実際の査定は不動産会社による。
      </p>

      {/* 建物評価の表 */}
      <h3 className="article-h3">築年数別の建物評価（木造の場合）</h3>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>築年数</th>
              <th>建物の法定耐用年数残</th>
              <th>建物評価</th>
              <th>査定への影響</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>築10年</td>
              <td>12年分</td>
              <td>約40〜60%</td>
              <td className="text-green-400">まだ評価される</td>
            </tr>
            <tr>
              <td>築20年</td>
              <td>2年分</td>
              <td>約10〜20%</td>
              <td className="text-yellow-400">ほぼ土地値</td>
            </tr>
            <tr>
              <td className="font-bold text-white">築30年</td>
              <td className="text-red-400">0（経過）</td>
              <td className="text-red-400 font-bold">ほぼゼロ〜微増</td>
              <td className="text-red-400 font-bold">土地値がメイン</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        木造住宅の法定耐用年数は22年。築30年では原則「建物価値ゼロ」とみなされるが、
        状態が良好・リフォーム済みであれば「加点要素」として査定額が上乗せされるケースもある。
      </p>

      {/* 中間CTA */}
      <CTABanner
        url={AFFILIATE.satei.url}
        label="越谷エリアの査定額を無料で確認する"
        sub="全国1,800社以上・一括依頼完全無料"
        variant="satei"
      />

      {/* ③ ロジック */}
      <h2 className="article-h2">なぜ築30年で建物評価がほぼゼロになるのか</h2>
      <p className="article-p">
        不動産の「建物評価」は主に税法上の「法定耐用年数」に基づいて計算される。
        木造住宅の法定耐用年数は22年のため、築30年時点では既に8年オーバー。
        銀行の住宅ローン審査でも「担保としての建物価値はゼロ」と扱われることが多い。
      </p>
      <p className="article-p">
        ただし「土地値＋更地にしたときの活用可能性」は別途評価される。
        越谷市内でも駅近・整形地・南向きなど条件の良い土地は、
        築30年の建物がついていても高値がつく。
      </p>

      {/* ④ 失敗例 */}
      <h2 className="article-h2">失敗例：「外壁ボロボロのまま売り出して半年間内覧ゼロ」</h2>
      <div className="callout-warning">
        <p className="text-red-300 font-bold mb-2">⚠️ 実例（60代 Cさん・越谷市）</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          「どうせ土地値だから外壁は関係ない」と思い込み、外壁塗装も修繕もせずに売り出し。
          ネット掲載写真で外壁のひび割れ・コケが目立ち、<strong className="text-white">6ヶ月間内覧申込がゼロ</strong>。
          結局、相場より250万円安値で売却。「最低限の清掃・補修をしておくべきだった」と後悔。
          外壁を50万円でリフォームしていれば、その倍以上の価格改善が見込めたはず。
        </p>
      </div>
      <p className="article-p">
        「どうせリフォームしても…」という考えは危険。
        内覧に来てもらえなければ交渉の機会もゼロ。最低限の「見た目の清潔感」は売却において非常に重要だ。
      </p>

      {/* ⑤ 目安 */}
      <h2 className="article-h2">査定前にやるべきこと・やってはいけないこと</h2>
      <h3 className="article-h3">✅ やるべきこと</h3>
      <div className="card space-y-2 mb-4">
        {[
          '建築確認済証・登記識別情報・固定資産税納税通知書を手元に用意する',
          'リフォーム歴（いつ・どこを・いくらかけたか）をまとめておく',
          '外壁・屋根の状態を写真で記録しておく',
          '駐車スペースの有無・隣地との境界を確認する',
          '複数の不動産会社に査定を依頼して相場感をつかむ',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <h3 className="article-h3">✕ やってはいけないこと</h3>
      <div className="card space-y-2">
        {[
          '1社だけの査定で即決する（必ず複数社で比較）',
          '高額査定の業者を無条件で信頼する（根拠を必ず確認）',
          '売り出し価格を相場より大幅に高く設定して長期塩漬けにする',
          '「瑕疵（雨漏り・シロアリ等）」を隠して売却する（後々トラブルの原因）',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* ⑥ CTA */}
      <h2 className="article-h2">まず査定額を知ることが第一歩</h2>
      <p className="article-p">
        「売るかどうかまだ決めていない」でも、査定は無料でできる。
        複数社の査定額を比較することで「今の相場」と「各社の売却戦略」の違いがわかる。
        早めに動くほど選択肢が広がる。
      </p>
      <CTABanner
        url={AFFILIATE.satei.url}
        label="越谷の査定額を無料で確認する"
        sub="全国1,800社以上・一括依頼完全無料・費用ゼロ"
        variant="satei"
      />

      <div className="card mt-8">
        <p className="text-slate-400 text-sm font-bold mb-2">関連記事</p>
        <Link
          href="/articles/gaiheki-40nen-cost/"
          className="text-orange-400 hover:text-orange-300 transition-colors text-sm block"
        >
          → 外壁材40年コスト比較｜売却前のリフォームを検討している方はこちら
        </Link>
      </div>
    </ArticleLayout>
  )
}
