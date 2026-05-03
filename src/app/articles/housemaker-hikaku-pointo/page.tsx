import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTASection from '@/components/CTASection'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'ハウスメーカー比較のやり方｜失敗しない7つのチェックポイント',
  description:
    'ハウスメーカーを比較するときの正しいやり方と7つのチェックポイントを解説。坪単価だけで選ぶと損する理由・総額・保証・アフターなど失敗しない比較軸を解説します。',
  keywords: ['ハウスメーカー 比較 やり方', 'ハウスメーカー チェックポイント', 'ハウスメーカー 選び方 失敗しない'],
}

export default function HousemakerHikakuPointoPage() {
  return (
    <ArticleLayout
      title="ハウスメーカー比較のやり方｜失敗しない7つのチェックポイント"
      description="ハウスメーカーを「坪単価」だけで比較してはいけません。後悔しないための7つのチェックポイントと、複数社を効率よく比較するやり方を解説します。"
      category="ハウスメーカー 選び方"
      publishedAt="2026年5月"
      slug="housemaker-hikaku-pointo"
    >
      {/* ── 結論 ── */}
      <h2 className="article-h2">ハウスメーカー比較で失敗する最大の原因：坪単価だけで選ぶこと</h2>
      <p className="article-p">
        ハウスメーカーを比較するとき、多くの人が最初に見るのが「坪単価」だ。
        しかし坪単価は建物本体のみの概算であり、付帯工事・外構・諸費用・40年の維持費は
        一切含まれていない。坪単価だけで選ぶと<strong className="text-orange-400">総額で大きく損するリスクがある。</strong>
      </p>
      <p className="article-p">
        本当に損しない選択をするには、以下の7つのチェックポイントで比較する必要がある。
        ハウスメーカーの40年総コスト比較は
        <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline">総額比較ランキング</Link>
        で詳しく解説しているので合わせて参考にしてほしい。
      </p>

      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📋 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• ハウスメーカー比較で見るべき7つのチェックポイント</li>
          <li>• 坪単価だけで選ぶと損する理由</li>
          <li>• 複数社を効率よく比較するやり方</li>
        </ul>
      </div>

      {/* ── CTA①：冒頭 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-hikaku-pointo"
        position="intro"
      />

      {/* ── 7つのポイント ── */}
      <h2 className="article-h2">ハウスメーカー比較で失敗しない7つのチェックポイント</h2>

      <h3 className="article-h3">チェック①：諸費用込みの総額で比較する</h3>
      <p className="article-p">
        比較すべきは「坪単価」ではなく<strong className="text-orange-400">建物本体＋付帯工事＋外構＋諸費用の総額だ。</strong>
        坪単価が安い会社が、総額では高くなるケースは頻繁に起きている。
        必ず同じ条件で「総額いくらか」を各社から出してもらおう。
        注文住宅の総額の内訳は
        <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline">注文住宅の総額はいくら？</Link>
        で詳しく解説している。
      </p>

      <h3 className="article-h3">チェック②：40年の維持費まで含めて比較する</h3>
      <p className="article-p">
        初期費用が同じでも、外壁材・屋根材によって10〜15年ごとの修繕コストは変わる。
        40年で見ると<strong className="text-orange-400">維持費だけで100〜300万円の差</strong>が出ることもある。
        長期保証の内容と合わせて、維持費の試算を各社に依頼しよう。
      </p>

      <h3 className="article-h3">チェック③：保証年数・延長条件を書面で確認する</h3>
      <p className="article-p">
        大手ハウスメーカーは30〜60年の長期保証を提供しているが、
        工務店では10年保証のみのケースもある。
        「有償メンテナンスを受けた場合のみ延長」という条件付きが多いので、
        <strong className="text-orange-400">延長の条件・費用を契約前に書面で確認</strong>することが重要だ。
      </p>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr><th>会社タイプ</th><th>一般的な保証年数</th><th>注意点</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>大手ハウスメーカー</td>
              <td className="text-green-400">30〜60年（延長可）</td>
              <td>有償メンテ条件あり</td>
            </tr>
            <tr>
              <td>中堅ハウスメーカー</td>
              <td>10〜30年</td>
              <td>内容に差が大きい</td>
            </tr>
            <tr>
              <td>地域工務店</td>
              <td className="text-red-400">10年（法定最低限）</td>
              <td>倒産リスクも考慮を</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="article-h3">チェック④：工法・構造の特徴を理解する</h3>
      <p className="article-p">
        鉄骨・木造・RC・ユニット工法によって、耐震性・断熱性・間取りの自由度・修繕のしやすさが異なる。
        自分の優先事項（デザイン・コスト・耐震性）に合う工法を選ぼう。
      </p>

      {/* ── CTA②：中盤 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-hikaku-pointo"
        position="middle"
      />

      <h3 className="article-h3">チェック⑤：アフターサービスの充実度</h3>
      <p className="article-p">
        入居後の不具合・修繕対応の速さ・地域の拠点数はハウスメーカーによって大きく異なる。
        「拠点が近くにある会社」「定期点検の仕組みが整っている会社」を選ぶと入居後の安心感が違う。
      </p>

      <h3 className="article-h3">チェック⑥：担当者との相性を確認する</h3>
      <p className="article-p">
        注文住宅は打合せ回数が10〜20回に及ぶ。担当者と相性が合わないと毎回のやり取りがストレスになる。
        <strong className="text-orange-400">「この担当者と家を建てたいか」</strong>も重要な判断基準だ。
        複数社に接触することで、担当者の質を比較できる。
      </p>

      <h3 className="article-h3">チェック⑦：設計力・間取り提案の柔軟性</h3>
      <p className="article-p">
        「希望の間取りをどれだけ実現してくれるか」は会社によって大きく差がある。
        吹き抜け・大開口・変形間取りなど特殊な希望がある場合は、
        実際に間取りプランを作ってもらって設計力を見極めよう。
      </p>

      {/* ── まとめ比較表 ── */}
      <h2 className="article-h2">7つのチェックポイントまとめ一覧</h2>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr><th>チェックポイント</th><th>なぜ重要か</th><th>確認方法</th></tr>
          </thead>
          <tbody>
            <tr><td>① 総額（諸費用込み）</td><td>坪単価との乖離が大きい</td><td>見積もり書で確認</td></tr>
            <tr><td>② 40年維持費</td><td>100〜300万円の差が出る</td><td>長期費用試算を依頼</td></tr>
            <tr><td>③ 保証年数・条件</td><td>入居後の修繕コストに直結</td><td>書面で確認</td></tr>
            <tr><td>④ 工法・構造</td><td>耐震・断熱・間取りに影響</td><td>カタログ・説明で確認</td></tr>
            <tr><td>⑤ アフターサービス</td><td>入居後の安心感が違う</td><td>口コミ・拠点数で確認</td></tr>
            <tr><td>⑥ 担当者の相性</td><td>打合せの質・満足度に影響</td><td>実際に接触して判断</td></tr>
            <tr><td>⑦ 設計・提案力</td><td>希望の間取りが実現できるか</td><td>間取りプランを依頼</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── 比較のやり方 ── */}
      <h2 className="article-h2">ハウスメーカー比較を効率よく進めるやり方</h2>
      <p className="article-p">
        7つのポイントで複数社を比較しようとすると、展示場を1社ずつ回るだけで相当な時間がかかる。
        効率よく進めるには<strong className="text-orange-400">一括プラン請求サービスで複数社から同時に間取り・資金計画を取り寄せる</strong>のが合理的だ。
      </p>
      <p className="article-p">
        提案書が手元に揃った状態で展示場に行くと打合せが格段に充実する。
        「他社からはこういう提案が来ているが、あなたの会社ではどうか」という
        具体的な比較ができるようになるからだ。
      </p>

      {/* ── 内部リンク ── */}
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-3">📖 あわせて読みたい記事</p>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>
            <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline font-bold">
              【2026年版】注文住宅の総額比較ランキング
            </Link>
            ：ハウスメーカー別40年総コストを数字で比較
          </li>
          <li>
            <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline font-bold">
              注文住宅の総額はいくら？
            </Link>
            ：土地＋建物＋諸費用の内訳と年収別の予算目安
          </li>
        </ul>
      </div>

      {/* ── CTA③：末尾 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-hikaku-pointo"
        position="bottom"
        size="large"
      />

      <h2 className="article-h2">まとめ：ハウスメーカー比較は7つのチェックポイントで</h2>
      <p className="article-p">
        ハウスメーカー比較のやり方で最も重要なのは、坪単価ではなく
        <strong className="text-orange-400">総額・維持費・保証・工法・アフター・担当者・設計力の7点を複数社で比較する</strong>ことだ。
        まずは無料で複数社の提案を手元に揃えることから始めよう。
      </p>
    </ArticleLayout>
  )
}
