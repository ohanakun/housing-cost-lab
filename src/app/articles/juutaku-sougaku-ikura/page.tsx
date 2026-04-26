import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTASection from '@/components/CTASection'
import { AFFILIATE } from '@/lib/affiliates'

const SLUG = 'juutaku-sougaku-ikura'

export const metadata: Metadata = {
  title: '注文住宅の総額はいくら？土地＋建物＋諸費用の内訳と平均を解説',
  description:
    '注文住宅の総額は土地込みで平均3,000〜5,000万円。土地・建物・諸費用・外構・維持費の内訳と年収別予算目安を解説。複数社比較で総額を大幅に抑える方法も紹介します。',
  keywords: ['注文住宅 総額', '注文住宅 いくら', '家づくり 費用', '注文住宅 内訳', '家づくり 総額 平均'],
}

export default function JuutakuSougakuIkuraPage() {
  return (
    <ArticleLayout
      title="注文住宅の総額はいくら？土地＋建物＋諸費用の内訳と平均を解説"
      description="注文住宅の総額は「思っていたより高い」と感じる人が多いです。土地代・建物・諸費用・外構まですべて含めると実際いくらになるのか、全体像をやさしく解説します。"
      category="注文住宅 総額"
      publishedAt="2026年4月26日"
      slug={SLUG}
    >

      {/* ── リード ── */}
      <div className="bg-navy/5 border-l-4 border-navy rounded-r-xl p-5 mb-6">
        <p className="font-bold text-navy mb-2 text-sm">この記事でわかること</p>
        <ul className="space-y-1.5">
          {[
            '注文住宅の総額（土地込み）の全国平均と地域別の目安',
            '土地・建物・諸費用・外構・維持費、5つの内訳',
            '年収別の無理のない予算ライン',
            '総額を抑えるための具体的な3つの方法',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-site-text">
              <span className="text-brand flex-shrink-0 mt-0.5">✓</span>{t}
            </li>
          ))}
        </ul>
      </div>

      <p className="article-p">
        注文住宅の総額は、<strong className="text-navy">土地代を含めると3,000万〜5,000万円</strong>が一般的な目安です。
        ただし建てる地域・ハウスメーカー・仕様の違いで、同じ「30坪・4LDK」でも
        <strong className="text-brand">1,000万円以上の差が出ることは珍しくありません。</strong>
      </p>
      <p className="article-p">
        多くの人が見落とすのが「諸費用」と「外構費」です。
        建物の坪単価だけで計算していると、実際の総額を300〜500万円以上低く見積もる落とし穴があります。
      </p>

      {/* ── CTA① ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug={SLUG}
        position="top"
      />

      {/* ── H2：総額の目安 ── */}
      <h2 className="article-h2">注文住宅の総額の目安</h2>

      <h3 className="article-h3">全国平均と地域別の目安</h3>
      <p className="article-p">
        国土交通省の住宅市場動向調査などをもとにした参考値として、注文住宅の総額（土地取得費含む）は以下のとおりです。
      </p>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>地域</th>
              <th>土地代の目安</th>
              <th>建物費用の目安</th>
              <th className="text-brand bg-navy">総額の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">首都圏（東京・神奈川等）</td>
              <td>2,000〜4,000万円</td>
              <td>2,500〜4,000万円</td>
              <td className="font-black text-navy">4,500〜7,000万円</td>
            </tr>
            <tr>
              <td className="font-bold">関西（大阪・京都等）</td>
              <td>1,200〜2,500万円</td>
              <td>2,000〜3,500万円</td>
              <td className="font-black text-navy">3,500〜5,500万円</td>
            </tr>
            <tr>
              <td className="font-bold">地方中核都市</td>
              <td>500〜1,500万円</td>
              <td>1,800〜3,000万円</td>
              <td className="font-black text-navy">2,500〜4,500万円</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="font-bold text-brand">全国平均（参考）</td>
              <td>800〜1,500万円</td>
              <td>2,000〜3,500万円</td>
              <td className="font-black text-brand">3,000〜4,500万円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2 mb-6">※土地の条件・建物の仕様・ハウスメーカーによって大きく異なります。あくまで目安です。</p>

      <h3 className="article-h3">「坪単価」だけで判断してはいけない理由</h3>
      <div className="callout-box">
        <p className="font-bold text-navy mb-2">📌 坪単価×面積 ≠ 支払う総額</p>
        <p className="text-sm text-site-text">
          ハウスメーカーが提示する「坪単価50万円」は<strong>建物本体のみ</strong>の価格です。
          付帯工事費・外構費・諸費用を加算すると、支払う総額は坪単価の
          <strong>1.5〜2倍</strong>になることがほとんどです。
          「坪単価45万円で安い！」と思ったのに、総額では4,000万円を超えた——というのはよくあるケースです。
        </p>
      </div>

      {/* ── H2：内訳（最重要） ── */}
      <h2 className="article-h2">注文住宅 総額の内訳（5つの費用）</h2>
      <p className="article-p">
        注文住宅の総額は大きく5つの費用から成り立っています。
        「建物代だけ」で計算していると、実際に払う金額を大幅に見誤ります。
      </p>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>費用項目</th>
              <th>目安金額</th>
              <th>総額に占める割合</th>
              <th>見落とし度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">① 土地代</td>
              <td>500〜3,000万円</td>
              <td>15〜45%</td>
              <td className="text-green-700">低（認知あり）</td>
            </tr>
            <tr>
              <td className="font-bold">② 建物本体工事費</td>
              <td>1,500〜3,500万円</td>
              <td>50〜65%</td>
              <td className="text-green-700">低（認知あり）</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="font-bold text-brand">③ 諸費用</td>
              <td>150〜400万円</td>
              <td>5〜10%</td>
              <td className="text-red-600 font-bold">⚠️ 高（見落とし多）</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="font-bold text-brand">④ 外構費用</td>
              <td>100〜300万円</td>
              <td>3〜8%</td>
              <td className="text-red-600 font-bold">⚠️ 高（見落とし多）</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="font-bold text-brand">⑤ 40年維持費</td>
              <td>500〜1,000万円以上</td>
              <td>—</td>
              <td className="text-red-600 font-bold">⚠️ 最も見落とし多</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="article-h3">① 土地代</h3>
      <p className="article-p">
        土地代は地域・駅距離・地形によって大きく異なります。
        同じ「首都圏30分圏内」でも、駅距離や地盤状態で数百万〜数千万円の差が出ます。
      </p>
      <ul className="space-y-2 mb-6 ml-1">
        {[
          ['東京23区内', '2,000万〜5,000万円以上'],
          ['首都圏郊外（駅徒歩15分以内）', '800万〜2,500万円'],
          ['地方主要都市', '300万〜1,200万円'],
          ['地方郊外・農村部', '50万〜500万円'],
        ].map(([area, price]) => (
          <li key={area} className="flex items-start gap-3 text-sm text-site-text">
            <span className="text-brand flex-shrink-0 font-bold">•</span>
            <span><strong className="text-navy">{area}：</strong>{price}</span>
          </li>
        ))}
      </ul>

      <h3 className="article-h3">② 建物本体工事費</h3>
      <p className="article-p">
        「坪単価×延べ床面積」で計算する部分です。30坪・坪単価60万円なら1,800万円が目安。
        ただし断熱材・外壁材・設備グレードによって、10〜20年後の<strong>維持費が大きく変わります。</strong>
        初期費用の安さだけで選ぶのは危険です。
      </p>

      <h3 className="article-h3">③ 諸費用（見落とし注意）</h3>
      <p className="article-p">
        土地・建物の購入に伴う各種手続き費用の総称です。
        <strong>総額の5〜10%</strong>が目安で、3,000万円の家なら150〜300万円かかります。
      </p>
      <div className="bg-site-bg rounded-xl border border-gray-100 p-5 mb-4">
        <p className="font-bold text-navy text-sm mb-3">諸費用の主な内訳</p>
        <div className="space-y-2">
          {[
            ['不動産取得税・登録免許税', '30〜80万円'],
            ['司法書士費用', '10〜30万円'],
            ['住宅ローン手数料・保証料', '50〜100万円'],
            ['火災・地震保険（長期）', '20〜60万円'],
            ['地盤調査・改良費', '0〜150万円'],
            ['引越し費用', '10〜30万円'],
          ].map(([item, cost]) => (
            <div key={item} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
              <span className="text-site-text">{item}</span>
              <span className="font-bold text-navy">{cost}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="article-h3">④ 外構費用（見落とし注意）</h3>
      <p className="article-p">
        庭・駐車場・塀・玄関アプローチなど建物の外側の工事費用です。
        <strong>100万〜300万円</strong>が一般的で、こだわると500万円超えも。
      </p>
      <div className="callout-warning">
        <p className="font-bold text-red-700 mb-1.5">⚠️ ほとんどのハウスメーカーの見積もりに外構費は含まれていません</p>
        <p className="text-sm">
          「建物代2,500万円で収まった」と思っても、外構込みで2,800万円になるのはよくあることです。
          見積もりに外構が含まれているかを必ず確認しましょう。
        </p>
      </div>

      <h3 className="article-h3">⑤ 40年維持費（最も見落とされる費用）</h3>
      <p className="article-p">
        外壁塗装・屋根修繕・設備交換などを40年積み上げると<strong>500万〜1,000万円以上</strong>になります。
        建材・断熱材のグレードで維持費は大きく変わり、
        初期費用が安くても維持費が高いと40年トータルでは逆転することがあります。
      </p>
      <p className="article-p">
        詳しくは
        <Link href="/articles/juutaku-sougaku-ranking/" className="text-brand hover:text-brand-dark underline font-bold">
          注文住宅の総額比較ランキング（40年コスト）
        </Link>
        で各社を比較しています。
      </p>

      {/* ── CTA② ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug={SLUG}
        position="mid"
        size="large"
      />

      {/* ── H2：年収別 ── */}
      <h2 className="article-h2">年収別の予算目安</h2>
      <p className="article-p">
        住宅ローンは一般的に<strong>年収の6〜7倍まで</strong>が無理のないラインとされています。
        ただし「借りられる額」と「無理なく返せる額」は別物です。
      </p>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>世帯年収</th>
              <th>無理のない借入上限</th>
              <th>頭金20%の場合の購入目安</th>
              <th>月々の返済目安</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['400万円', '2,400〜2,800万円', '2,800〜3,200万円', '7〜8万円', false],
              ['500万円', '3,000〜3,500万円', '3,500〜4,000万円', '8〜10万円', false],
              ['600万円', '3,600〜4,200万円', '4,200〜4,800万円', '10〜12万円', true],
              ['700万円', '4,200〜4,900万円', '4,900〜5,600万円', '12〜14万円', false],
              ['800万円以上', '4,800〜5,600万円', '5,600〜6,400万円', '14〜16万円', false],
            ].map(([nenshu, kariire, medashi, tsuki, highlight]) => (
              <tr key={nenshu as string} className={highlight ? 'bg-orange-50' : ''}>
                <td className={`font-bold ${highlight ? 'text-brand' : ''}`}>{nenshu}</td>
                <td>{kariire}</td>
                <td>{medashi}</td>
                <td className="font-bold">{tsuki}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2 mb-4">
        ※35年ローン・金利1.0%前後の概算。固定資産税・維持費は別途かかります。
      </p>

      <div className="callout-warning">
        <p className="font-bold text-red-700 mb-1.5">⚠️ 借りられる額と「返せる額」は違います</p>
        <p className="text-sm">
          金融機関が貸してくれる上限額まで借りると、教育費・老後資金の準備が難しくなります。
          月々の返済は<strong>手取り月収の25〜30%以内</strong>を目安にしましょう。
        </p>
      </div>

      <p className="article-p">
        より詳しい計算は
        <Link href="/articles/nenshu-simulation/" className="text-brand hover:text-brand-dark underline font-bold">
          年収別・総額シミュレーション記事
        </Link>
        で確認できます。
      </p>

      {/* ── H2：総額が変わる3要因 ── */}
      <h2 className="article-h2">総額が変わる3つの要因</h2>

      <div className="space-y-5 mb-10">
        {[
          {
            num: '01',
            title: 'ハウスメーカー・工務店の選択',
            body: '同じ30坪・同じ仕様でも、ハウスメーカーによって建物本体価格は500万〜1,500万円以上変わることがあります。大手ハウスメーカーは品質・保証が安定している一方、費用は高め。地域工務店は価格が抑えられますが品質にバラつきがあります。複数社から見積もりを取って比較することが最大の節約策です。',
            point: '同仕様で最大1,500万円の差が出ることも',
          },
          {
            num: '02',
            title: '土地の条件と隠れコスト',
            body: '土地代は地域・立地・広さで大きく変わります。また地盤の状態によって「地盤改良費」が0〜150万円追加でかかることも。旗竿地や変形地は安くても建築費が上がる場合があり、「土地が安い＝総額が安い」とは限りません。',
            point: '地盤改良だけで100万円以上の追加も',
          },
          {
            num: '03',
            title: '仕様・設備のグレード',
            body: '標準仕様からオプションを追加するほど建物費用は上がります。キッチン・浴室・外壁材・断熱材などのグレードアップは1つで数十万〜数百万円の差になります。ただし高断熱仕様は光熱費削減につながるため、長期コストで判断することが重要です。',
            point: 'オプション選択で総額が300万円以上変わることも',
          },
        ].map((item) => (
          <div key={item.num} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex gap-5">
            <div className="font-serif font-black text-4xl text-brand/20 w-14 flex-shrink-0 leading-none pt-1">
              {item.num}
            </div>
            <div>
              <p className="font-serif font-bold text-navy text-base mb-2">{item.title}</p>
              <p className="text-site-text text-sm leading-relaxed mb-3">{item.body}</p>
              <div className="bg-brand/10 rounded-lg px-3 py-1.5 inline-block">
                <p className="text-brand text-xs font-bold">→ {item.point}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── H2：よくある失敗 ── */}
      <h2 className="article-h2">注文住宅でよくある失敗3選</h2>

      <div className="space-y-4 mb-10">
        <div className="callout-warning">
          <p className="font-bold text-red-700 mb-2">❌ 失敗① 坪単価だけで比較してしまう</p>
          <p className="text-sm">
            「坪単価45万円で安い！」と思ったのに、付帯工事・諸費用・外構を足したら4,000万円になった——これは非常によくあるパターンです。
            坪単価はあくまで建物本体費用の一部。<strong>必ず「総額」で比較しましょう。</strong>
          </p>
        </div>
        <div className="callout-warning">
          <p className="font-bold text-red-700 mb-2">❌ 失敗② 諸費用・外構費を予算に入れていない</p>
          <p className="text-sm">
            「建物3,000万円まで」と決めていても、諸費用200万円＋外構150万円で350万円の追加が発生。
            住宅ローンに組み込める費用と組み込めない費用もあるため、
            <strong>余裕を持って総額で計画する</strong>ことが大切です。
          </p>
        </div>
        <div className="callout-warning">
          <p className="font-bold text-red-700 mb-2">❌ 失敗③ 40年の維持費を計算に入れていない</p>
          <p className="text-sm">
            初期費用が安いメーカーを選んだ結果、10年後の外壁塗装・設備交換費用が膨らみ「結局高くついた」というケースがあります。
            <strong>40年トータルコストで比較する</strong>ことが本当の節約につながります。
          </p>
        </div>
      </div>

      {/* ── H2：総額を抑える方法 ── */}
      <h2 className="article-h2">総額を抑える3つの方法</h2>

      <div className="space-y-5 mb-10">
        {[
          {
            icon: '📋',
            title: '必ず複数社から見積もりを取る',
            body: '1社だけで決めてしまうのが最大の失敗原因です。同条件で3〜5社に依頼するだけで相場感がつかめ、価格交渉の材料にもなります。一括資料請求サービスを使えば1回の入力で複数社に同時依頼でき、手間がかかりません。',
          },
          {
            icon: '🎯',
            title: '「必要なもの」と「あったらいいもの」を分ける',
            body: '間取り・設備・仕様の優先順位を最初に決めることで、不要なオプションを削れます。「とりあえず全部追加」だと総額が膨らみ後から削りにくくなります。標準仕様でもクオリティが高いメーカーを選ぶのがコスパの良い選択です。',
          },
          {
            icon: '📊',
            title: '長期コストで選ぶ（初期費用だけで判断しない）',
            body: '初期費用が高くても、高断熱・高耐久の家は光熱費・修繕費を大幅に削減できます。年間20万円の光熱費削減が40年続けば800万円の節約。初期投資を長期コストで回収できるかどうかで判断しましょう。',
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-serif font-bold text-navy text-base">{item.title}</p>
            </div>
            <p className="text-site-text text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      {/* ── H2：まとめ ── */}
      <h2 className="article-h2">まとめ：注文住宅の総額は「比較」で変わる</h2>
      <p className="article-p">
        注文住宅の総額は土地込みで<strong>3,000万〜5,000万円</strong>が目安ですが、
        ハウスメーカー・土地・仕様の選択次第で1,000万円以上の差が出ます。
      </p>
      <p className="article-p">
        特に重要な3点は「<strong>坪単価だけで判断しない</strong>」「<strong>諸費用・外構費まで含めて計算する</strong>」
        「<strong>複数社を比較してから決める</strong>」です。
      </p>
      <p className="article-p">
        複数のハウスメーカーから同条件で見積もりを取るだけで、
        <strong className="text-brand">300万円以上の差が出ることは普通にあります。</strong>
        「比較してから決める」か「1社だけで決める」か——この違いが家づくりの総額を大きく左右します。
      </p>

      <div className="bg-navy/5 border border-navy/20 rounded-2xl p-6 mt-6 mb-2">
        <p className="font-serif font-bold text-navy text-base mb-3">
          40年トータルコストで比較したランキングも見てみましょう
        </p>
        <p className="text-sm text-site-text mb-4">
          当サイトでは主要ハウスメーカーの「初期費用＋40年維持費」を比較したランキングを公開しています。
          どのメーカーが本当にコスパが良いか、数字で確認できます。
        </p>
        <Link
          href="/articles/juutaku-sougaku-ranking/"
          className="btn-primary inline-block text-sm px-6 py-3"
        >
          【ランキング】40年総コストで本当に安い会社を見る →
        </Link>
      </div>

      {/* ── CTA③ ── */}
      <CTASection
        affiliate={AFFILIATE.housingPrimary}
        secondary={AFFILIATE.housingSecondary}
        pageSlug={SLUG}
        position="bottom"
        size="large"
      />

      {/* ── 内部リンク ── */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-site-muted text-xs font-bold tracking-widest mb-4 uppercase">関連記事</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/articles/juutaku-sougaku-ranking/"
            className="bg-white rounded-xl border border-gray-100 shadow-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
          >
            <p className="text-xs text-site-muted mb-2">比較ランキング</p>
            <p className="font-serif font-bold text-navy text-sm group-hover:text-brand transition-colors leading-snug">
              【2026年版】注文住宅の総額比較ランキング｜40年コストで本当に安い会社は？ →
            </p>
          </Link>
          <Link
            href="/articles/nenshu-simulation/"
            className="bg-white rounded-xl border border-gray-100 shadow-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
          >
            <p className="text-xs text-site-muted mb-2">予算シミュレーション</p>
            <p className="font-serif font-bold text-navy text-sm group-hover:text-brand transition-colors leading-snug">
              年収別・総額シミュレーション｜無理のない予算の目安 →
            </p>
          </Link>
        </div>
      </div>

    </ArticleLayout>
  )
}
