import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTASection from '@/components/CTASection'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '注文住宅の間取りを無料でもらう方法｜複数社からプランを比較するコツ',
  description:
    '注文住宅の間取りを無料で複数社から取り寄せて比較する方法を解説。プロに無料で依頼できるサービスの活用法と、良い間取りを見分けるポイントをまとめました。',
  keywords: ['注文住宅 間取り 無料', '間取り 複数社 比較', '注文住宅 間取り もらう', '間取りプラン 無料'],
}

export default function MadoriMuroyoHikakuPage() {
  return (
    <ArticleLayout
      title="注文住宅の間取りを無料でもらう方法｜複数社からプランを比較するコツ"
      description="「間取りのプロに頼むとお金がかかる」は誤解です。複数社から無料で間取りプランを取り寄せて比較できます。依頼の手順と、良い間取りを見分けるポイントを解説します。"
      category="注文住宅 間取り"
      publishedAt="2026年5月"
      slug="madori-muryo-hikaku"
    >
      {/* ── 結論 ── */}
      <h2 className="article-h2">注文住宅の間取りは「複数社に無料で依頼」して比較するのが正解</h2>
      <p className="article-p">
        「間取りをプロに作ってもらうと費用がかかる」と思っている人は多い。
        しかし実際には、<strong className="text-orange-400">無料で複数のハウスメーカー・工務店に間取りプランを依頼できる</strong>方法がある。
      </p>
      <p className="article-p">
        1社の提案だけで間取りを決めると「あの部屋をもっと広くすればよかった」「収納が足りない」
        という後悔につながりやすい。複数社のプランを比較することで、
        選択肢と精度が大幅に上がる。
      </p>

      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📋 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 間取りを無料で複数社からもらう具体的な方法</li>
          <li>• 間取り依頼時に伝えるべき条件の整理方法</li>
          <li>• 複数の間取りプランを比較するときのポイント</li>
          <li>• よくある間取りの失敗パターンと防ぎ方</li>
        </ul>
      </div>

      {/* ── CTA①：冒頭 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="madori-muryo-hikaku"
        position="intro"
      />

      {/* ── なぜ複数社か ── */}
      <h2 className="article-h2">注文住宅の間取りを複数社に無料依頼すべき理由</h2>
      <p className="article-p">
        同じ土地・同じ予算・同じ希望条件を伝えても、会社によって提案される間取りは大きく異なる。
        各社が持つ設計ノウハウ・得意な間取りパターンが違うためだ。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr><th>1社だけに依頼した場合</th><th>複数社に依頼した場合</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>その会社の得意パターンに限定される</td>
              <td className="text-green-400">複数の設計アイデアから選べる</td>
            </tr>
            <tr>
              <td>「もっと良い間取りがあったかも」という後悔リスク</td>
              <td className="text-green-400">比較して納得感が高まる</td>
            </tr>
            <tr>
              <td>費用の妥当性が判断できない</td>
              <td className="text-green-400">価格と間取りを同時に比較できる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        ハウスメーカーごとの総額の差は
        <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline">注文住宅の総額比較ランキング</Link>
        で詳しく解説しているので参考にしてほしい。
      </p>

      {/* ── 手順 ── */}
      <h2 className="article-h2">注文住宅の間取りを無料でもらう手順</h2>

      <h3 className="article-h3">ステップ①：希望条件を事前に整理する</h3>
      <p className="article-p">
        間取り依頼前に以下を整理しておくと提案の質が上がる。
      </p>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📝 事前に整理すべき条件</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 延床面積の目安（例：30〜35坪）</li>
          <li>• 家族構成・将来の変化（子どもが増える予定など）</li>
          <li>• 絶対に欲しいスペース（書斎・ファミリークローゼットなど）</li>
          <li>• 土地の形状・面積・前面道路の方角</li>
          <li>• 予算の上限（建物本体のみ）</li>
        </ul>
      </div>

      <h3 className="article-h3">ステップ②：一括プラン請求サービスを利用する</h3>
      <p className="article-p">
        上記の条件を一括プラン請求サービスに入力するだけで、
        複数のハウスメーカー・工務店から<strong className="text-orange-400">間取りプランと資金計画書が無料で届く。</strong>
        展示場を何社も回る必要がなく、自分のペースで比較できる。
        注文住宅の総額の内訳については
        <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline">注文住宅の総額はいくら？</Link>
        も合わせて参考にしてほしい。
      </p>

      <h3 className="article-h3">ステップ③：届いたプランを比較する</h3>
      <p className="article-p">各社の間取りプランが揃ったら、以下の観点で比較しよう。</p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr><th>比較ポイント</th><th>チェック内容</th></tr>
          </thead>
          <tbody>
            <tr><td>LDKの広さ・採光</td><td>家族が集まりやすい配置か、日当たりは十分か</td></tr>
            <tr><td>収納量</td><td>各部屋の収納、家全体の収納面積は十分か</td></tr>
            <tr><td>家事動線</td><td>キッチン〜洗面〜浴室の動線が短いか</td></tr>
            <tr><td>将来の変更しやすさ</td><td>子ども部屋を後から仕切れるかなど</td></tr>
            <tr><td>費用対効果</td><td>同じ予算でどこが一番希望を叶えているか</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── CTA②：中盤 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="madori-muryo-hikaku"
        position="middle"
      />

      {/* ── 失敗パターン ── */}
      <h2 className="article-h2">注文住宅の間取りでよくある失敗パターンと防ぎ方</h2>

      <h3 className="article-h3">失敗①：収納スペースが足りなかった</h3>
      <p className="article-p">
        収納は後から増設しようとすると大規模工事になる。
        <strong className="text-orange-400">ウォークインクローゼット・シューズクローク・パントリー</strong>は
        間取り段階で確保すること。複数社の提案を比較すると「収納の取り方が上手な会社」が見えてくる。
      </p>

      <h3 className="article-h3">失敗②：日当たりを図面だけで判断した</h3>
      <p className="article-p">
        南向きの土地でも隣家との距離・高さによって日当たりが悪い場合がある。
        プランを受け取ったら、必ず現地で時間帯を変えて日当たりを確認しよう。
      </p>

      <h3 className="article-h3">失敗③：音・プライバシーを考慮しなかった</h3>
      <p className="article-p">
        子ども部屋と主寝室が隣接していると夜中の音が気になる。
        暮らしをイメージしながら各部屋の配置を確認することが重要だ。
      </p>

      {/* ── 依頼コツ ── */}
      <h2 className="article-h2">間取りを無料で依頼するときに「質の高い提案をもらう」コツ</h2>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">💡 提案の質が上がる記載例</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 「LDKは20帖以上確保したい」（具体的な広さ指定）</li>
          <li>• 「ファミリークローゼットを1階に設けたい」（具体的な要望）</li>
          <li>• 「在宅ワーク用の書斎スペースが欲しい」（ライフスタイルの共有）</li>
          <li>• 「将来、子ども部屋を2部屋に仕切れる設計にしたい」（将来計画）</li>
          <li>• 「メール連絡のみ希望」（営業連絡を絞りたい場合）</li>
        </ul>
      </div>

      {/* ── 内部リンク ── */}
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-3">📖 あわせて読みたい記事</p>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>
            <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline font-bold">
              【2026年版】注文住宅の総額比較ランキング
            </Link>
            ：ハウスメーカー別40年総コストの数字比較
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
        pageSlug="madori-muryo-hikaku"
        position="bottom"
        size="large"
      />

      <h2 className="article-h2">まとめ：注文住宅の間取りは複数社に無料依頼して比較する</h2>
      <p className="article-p">
        注文住宅の間取りは<strong className="text-orange-400">複数社に同じ条件で無料依頼して比較する</strong>のが後悔しない家づくりの基本だ。
        1社の提案だけで決めるリスクは大きく、比較することで気づく改善点・コスト差も多い。
        まず無料で複数の間取りプランを手元に揃えることから始めよう。
      </p>
    </ArticleLayout>
  )
}
