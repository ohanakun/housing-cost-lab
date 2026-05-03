import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTASection from '@/components/CTASection'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '注文住宅の見積もりは何社比較すべき？無料で効率よく比較する方法',
  description:
    '注文住宅の見積もりを何社取るべきか、どう比較すればいいかを解説。1社だけで決めると損する理由と、無料で複数社の見積もりを効率よく取り寄せる方法をまとめました。',
  keywords: ['注文住宅 見積もり 何社', '注文住宅 見積もり 比較', '注文住宅 見積もり 無料', 'ハウスメーカー 見積もり 比較'],
}

export default function HousemakerMitsumoriHikakuPage() {
  return (
    <ArticleLayout
      title="注文住宅の見積もりは何社比較すべき？無料で効率よく比較する方法"
      description="注文住宅の見積もりは何社取ればいいのか？同じ条件でも会社によって数百万円の差が出ます。無料で複数社を効率よく比較する方法と、見積もりで必ず確認すべき項目を解説します。"
      category="ハウスメーカー 見積もり"
      publishedAt="2026年5月"
      slug="housemaker-mitsumori-hikaku"
    >
      {/* ── 結論 ── */}
      <h2 className="article-h2">注文住宅の見積もりは最低3社・できれば5社と比較すべき</h2>
      <p className="article-p">
        結論から言う。注文住宅の見積もりは<strong className="text-orange-400">最低3社、できれば5社と比較する</strong>べきだ。
        1社だけで決めると「それが適正価格かどうか」を判断する基準がなく、
        同じ条件でも会社によって<strong className="text-orange-400">200〜400万円以上の差が出る</strong>ことが珍しくないからだ。
      </p>
      <p className="article-p">
        なぜそこまで差が出るのか？どうやって効率よく比較するのか？
        このページで詳しく解説する。
      </p>

      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">📋 この記事でわかること</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 注文住宅の見積もりを何社取るべきか</li>
          <li>• 同じ条件でも見積もりに大きな差が出る理由</li>
          <li>• 見積もりで必ず確認すべき5項目</li>
          <li>• 無料で複数社の見積もりを効率よく取る方法</li>
        </ul>
      </div>

      {/* ── CTA①：冒頭 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-mitsumori-hikaku"
        position="intro"
      />

      {/* ── 差が出る理由 ── */}
      <h2 className="article-h2">注文住宅の見積もりで何百万円もの差が出る理由</h2>
      <p className="article-p">
        同じ「30坪・注文住宅・標準仕様」でも、会社によって見積もりが大きく変わる理由は主に3つだ。
      </p>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr><th>差が出る要因</th><th>内容</th><th>影響額の目安</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>施工方法・工法</td>
              <td>鉄骨・木造・ユニット工法で材料費・工期が異なる</td>
              <td>100〜300万円</td>
            </tr>
            <tr>
              <td>標準仕様の設備グレード</td>
              <td>キッチン・浴室・窓のグレードで本体価格が変動</td>
              <td>50〜150万円</td>
            </tr>
            <tr>
              <td>諸費用の計上方法</td>
              <td>付帯工事・外構・税金の含め方で総額が変わる</td>
              <td>80〜200万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="article-p">
        「本体価格が安い会社」が実際の総額も安いとは限らない。
        <strong className="text-orange-400">諸費用込みの総額で比較する</strong>ことが必須だ。
        ハウスメーカーの40年総コスト比較は
        <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand underline">総額比較ランキング</Link>
        も参考にしてほしい。
      </p>

      {/* ── 確認項目 ── */}
      <h2 className="article-h2">注文住宅の見積もりで必ず確認すべき5項目</h2>

      <h3 className="article-h3">確認項目①：建物本体工事費</h3>
      <p className="article-p">
        広告の「〇〇万円〜」はほぼここだけの価格だ。
        他社との比較の起点になる数字なので、まずここを確認する。
      </p>

      <h3 className="article-h3">確認項目②：付帯工事費（含まれているか要確認）</h3>
      <p className="article-p">
        基礎工事・屋外給排水・電気引込などの費用。
        本体工事費の15〜20%程度かかるが、見積もり書に含まれていないケースがある。
        <strong className="text-orange-400">「付帯工事費は含まれていますか？」と必ず確認する。</strong>
      </p>

      <h3 className="article-h3">確認項目③：外構工事費</h3>
      <p className="article-p">
        駐車場・フェンス・玄関アプローチなどは別途費用になることが多い。
        30坪程度の家で50〜150万円かかることも珍しくない。
      </p>

      <h3 className="article-h3">確認項目④：諸費用（税・手続き費用）</h3>
      <p className="article-p">
        登記費用・住宅ローン手数料・火災保険・地鎮祭など。
        建物価格の5〜8%程度になる。
        注文住宅の総額の内訳と平均については
        <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline">注文住宅の総額はいくら？</Link>
        で詳しく解説している。
      </p>

      <h3 className="article-h3">確認項目⑤：40年維持費の試算</h3>
      <p className="article-p">
        初期費用が安くても外壁塗装・修繕コストが高い建材を選ぶと、
        長期で見ると逆転することがある。
        できれば<strong className="text-orange-400">40年の総コストまで含めた試算書</strong>を出してもらおう。
      </p>

      {/* ── CTA②：中盤 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-mitsumori-hikaku"
        position="middle"
      />

      {/* ── 比較方法 ── */}
      <h2 className="article-h2">注文住宅の見積もりを無料で複数社から取り寄せる方法</h2>

      <h3 className="article-h3">方法①：展示場を1社ずつ回る（時間がかかる）</h3>
      <p className="article-p">
        最も確実だが、1社あたり2〜3時間・5社比較で10〜15時間の休日が消える。
        全社の見積もりが揃うまでに1〜2ヶ月かかることもある。
      </p>

      <h3 className="article-h3">方法②：一括プラン請求サービスを使う（効率的）</h3>
      <p className="article-p">
        希望条件を一度入力するだけで、複数社からまとめて
        <strong className="text-orange-400">間取りプラン・資金計画書・見積もりを無料で受け取れる</strong>サービスがある。
        自宅にいながら複数社の提案を同時に比較でき、時間コストが大幅に下がる。
      </p>

      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">💡 一括サービスを使うメリット</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 入力3〜5分で複数社に一括申請できる</li>
          <li>• 間取りプランと資金計画書を無料で同時取得できる</li>
          <li>• 「同じ条件で出してもらって比較」がやりやすい</li>
          <li>• 気に入った会社だけ個別に打合せを進められる</li>
        </ul>
      </div>

      {/* ── 注意点 ── */}
      <h2 className="article-h2">見積もり比較サービスを使う際の注意点</h2>
      <div className="callout-warning">
        <p className="text-red-300 font-bold text-sm mb-2">⚠️ 事前に知っておく注意点</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• 複数社から電話・メールが来る場合がある（備考欄で「メールのみ」と指定可）</li>
          <li>• 一括サービスの見積もりはあくまで「概算」。詳細は個別打合せで確認が必要</li>
          <li>• 対応エリア外の会社が表示されることがあるので確認する</li>
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
            ：ハウスメーカー別40年総コストを数字で比較
          </li>
          <li>
            <Link href="/articles/juutaku-sougaku-ikura/" className="text-brand underline font-bold">
              注文住宅の総額はいくら？
            </Link>
            ：土地＋建物＋諸費用の内訳と平均を解説
          </li>
        </ul>
      </div>

      {/* ── CTA③：末尾 ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug="housemaker-mitsumori-hikaku"
        position="bottom"
        size="large"
      />

      <h2 className="article-h2">まとめ：注文住宅の見積もり比較は「総額で・何社も」が鉄則</h2>
      <div className="callout-box">
        <p className="text-orange-300 font-bold text-sm mb-2">✅ 見積もり比較の鉄則</p>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• <strong>何社取るべきか</strong>：最低3社、できれば5社</li>
          <li>• <strong>何で比較するか</strong>：本体＋付帯工事＋外構＋諸費用の総額</li>
          <li>• <strong>どう取るか</strong>：一括プラン請求サービスで効率よく</li>
        </ul>
      </div>
      <p className="article-p">
        この3つを守るだけで、数百万円の「損」を防げる可能性がある。
        まずは無料の一括サービスで比較をスタートしよう。
      </p>
    </ArticleLayout>
  )
}
