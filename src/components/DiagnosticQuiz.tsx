'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AFFILIATE, AffiliateEntry } from '@/lib/affiliates'

// ─── 型定義 ───────────────────────────────────────────────
type LandAnswer    = 'yes' | 'looking'
type IncomeAnswer  = 'under600' | '600-800' | '800plus'
type TypeAnswer    = 'land' | 'plan' | 'fp' | 'compare'
type QuizStep      = 1 | 2 | 3 | 'loading' | 'result'

interface Answers {
  land?:   LandAnswer
  income?: IncomeAnswer
  type?:   TypeAnswer
}

interface CtaDef {
  label:     string
  affiliate: AffiliateEntry
}

interface ResultDef {
  emoji:        string
  tag:          string
  headline:     string
  body:         string
  ctaMain:      CtaDef
  ctaSub:       CtaDef
  articleHref:  string
  articleTitle: string
}

// ─── 選択肢データ ─────────────────────────────────────────
const Q1 = [
  { value: 'yes'     as LandAnswer,   label: 'すでに持っている',         icon: '🏠' },
  { value: 'looking' as LandAnswer,   label: 'これから探したい',         icon: '🔍' },
]
const Q2 = [
  { value: 'under600' as IncomeAnswer, label: '〜600万円',             icon: '💴' },
  { value: '600-800'  as IncomeAnswer, label: '600〜800万円',          icon: '💴' },
  { value: '800plus'  as IncomeAnswer, label: '800万円以上',           icon: '💴' },
]
const Q3 = [
  { value: 'land'    as TypeAnswer,   label: '土地を探したい',          icon: '🏡' },
  { value: 'plan'    as TypeAnswer,   label: '間取りプランを作りたい',  icon: '📐' },
  { value: 'fp'      as TypeAnswer,   label: '予算・ローンを相談したい', icon: '💰' },
  { value: 'compare' as TypeAnswer,   label: 'ハウスメーカーを比較したい', icon: '🏆' },
]

// ─── 結果データ ───────────────────────────────────────────
const RESULTS: Record<TypeAnswer, ResultDef> = {
  land: {
    emoji: '🏡',
    tag:   'あなたにおすすめ：土地探し＋住宅比較',
    headline: '土地探しから始めるなら\n住宅会社も同時に比較が正解',
    body: '土地と建物の総額は一緒に比較しないと予算オーバーしやすい。複数社に無料で相談できます。',
    ctaMain: { label: '土地＋ハウスメーカーをまとめて比較する', affiliate: AFFILIATE.housingPrimary },
    ctaSub:  { label: 'ハウスメーカー比較を見る',             affiliate: AFFILIATE.housingSecondary },
    articleHref:  '/articles/juutaku-sougaku-ranking/',
    articleTitle: '注文住宅の総額比較ランキング',
  },
  plan: {
    emoji: '📐',
    tag:   'あなたにおすすめ：間取りプラン作成',
    headline: '無料でプロに間取りを\n作ってもらえます',
    body: '複数社に依頼すれば比較もできる。要望を伝えるだけで、無料でプランが届きます。',
    ctaMain: { label: '無料で間取りプランを作る',   affiliate: AFFILIATE.housingPrimary },
    ctaSub:  { label: 'ハウスメーカーも比較する',   affiliate: AFFILIATE.housingSecondary },
    articleHref:  '/articles/housemaker-selection/',
    articleTitle: 'ハウスメーカーの選び方',
  },
  fp: {
    emoji: '💰',
    tag:   'あなたにおすすめ：資金計画相談',
    headline: '予算を正確に把握してから\n動くのが損しないコツ',
    body: '無理なローン・予算オーバーを防ぐには、プロへの相談が効果的。完全無料で試せます。',
    ctaMain: { label: '無料で資金計画を相談する',   affiliate: AFFILIATE.housingSecondary },
    ctaSub:  { label: 'ハウスメーカーを比較する',   affiliate: AFFILIATE.housingPrimary },
    articleHref:  '/articles/nenshu-simulation/',
    articleTitle: '年収別・総額シミュレーション',
  },
  compare: {
    emoji: '🏆',
    tag:   'あなたにおすすめ：ハウスメーカー比較',
    headline: '同じ条件でも\n300万円以上差が出ることがある',
    body: '1社だけで判断するのは危険。無料で複数社の見積もり・間取りを比較できます。',
    ctaMain: { label: '無料でハウスメーカーを比較する',  affiliate: AFFILIATE.housingPrimary },
    ctaSub:  { label: 'カタログをまとめて取り寄せる',    affiliate: AFFILIATE.housingSecondary },
    articleHref:  '/articles/juutaku-sougaku-ranking/',
    articleTitle: '注文住宅の総額比較ランキング',
  },
}

// ─── URLパラメータ解析 ───────────────────────────────────
function parseParams(p: URLSearchParams): Partial<Answers> {
  const out: Partial<Answers> = {}
  const land = p.get('land')
  if (land === 'yes') out.land = 'yes'
  else if (land === 'no' || land === 'looking') out.land = 'looking'
  const income = p.get('income')
  if (income === '600') out.income = 'under600'
  else if (income === '800') out.income = '600-800'
  else if (income === '800plus') out.income = '800plus'
  const type = p.get('type')
  if (type === 'land' || type === 'plan' || type === 'fp' || type === 'compare') out.type = type
  return out
}

// ─── 選択ボタン ───────────────────────────────────────────
function ChoiceBtn({
  label, icon, selected, onClick,
}: {
  label: string; icon: string; selected: boolean; onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 rounded-xl border-2 text-left transition-all duration-200 ${
        selected
          ? 'border-brand bg-orange-50 text-navy font-bold shadow-sm'
          : 'border-gray-200 bg-white text-site-text hover:border-brand/40 hover:bg-orange-50/20'
      }`}
      style={{ minHeight: 56 }}
    >
      <span className="text-2xl flex-shrink-0 py-3">{icon}</span>
      <span className="text-sm sm:text-base font-medium leading-snug flex-1">{label}</span>
      {selected && <span className="text-brand font-bold text-lg leading-none">✓</span>}
    </button>
  )
}

// ─── プログレスバー ───────────────────────────────────────
function ProgressBar({ step }: { step: QuizStep }) {
  const n = (step === 'loading' || step === 'result') ? 3 : (step as number)
  return (
    <div className="mb-5">
      <div className="flex justify-between text-xs text-site-muted mb-1.5">
        <span>{step === 'result' || step === 'loading' ? '診断完了' : `${n} / 3`}</span>
        {typeof step === 'number' && (
          <span>{step === 1 ? 'あと2問' : step === 2 ? 'あと1問' : 'あと0問'}</span>
        )}
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand rounded-full transition-all duration-500"
          style={{ width: `${(n / 3) * 100}%` }}
        />
      </div>
    </div>
  )
}

// ─── クイズ本体（useSearchParams使用→Suspense必須） ──────
function QuizInner() {
  const searchParams = useSearchParams()
  const resultRef   = useRef<HTMLDivElement>(null)
  const [step,    setStep]    = useState<QuizStep>(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [visible, setVisible] = useState(true)

  // URLパラメータで初期化
  useEffect(() => {
    const preset = parseParams(searchParams)
    if (!Object.keys(preset).length) return
    setAnswers(preset)
    if (preset.type) {
      setStep('result')
    } else if (preset.land !== undefined && preset.income !== undefined) {
      setStep(3)
    } else if (preset.land !== undefined) {
      setStep(2)
    }
  }, [searchParams])

  // 結果表示時にスクロール
  useEffect(() => {
    if (step === 'result') {
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150)
    }
  }, [step])

  // フェードトランジション汎用
  const fade = (fn: () => void) => {
    setVisible(false)
    setTimeout(() => { fn(); setVisible(true) }, 200)
  }

  const pick1 = (v: LandAnswer)   => { setAnswers(p => ({ ...p, land: v }));   fade(() => setStep(2)) }
  const pick2 = (v: IncomeAnswer) => { setAnswers(p => ({ ...p, income: v })); fade(() => setStep(3)) }
  const pick3 = (v: TypeAnswer)   => {
    setAnswers(p => ({ ...p, type: v }))
    // Q3選択 → ローディング → 結果 の演出
    setVisible(false)
    setTimeout(() => { setStep('loading'); setVisible(true) }, 200)
    setTimeout(() => {
      setVisible(false)
      setTimeout(() => { setStep('result'); setVisible(true) }, 200)
    }, 900)
  }

  const back = () => {
    if      (step === 2)        fade(() => setStep(1))
    else if (step === 3)        fade(() => setStep(2))
    else if (step === 'result') { setAnswers(p => ({ ...p, type: undefined })); fade(() => setStep(3)) }
  }

  const reset = () => { setAnswers({}); fade(() => setStep(1)) }

  const result = answers.type ? RESULTS[answers.type] : null

  return (
    <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 overflow-hidden">

      {/* ヘッダー */}
      <div className="bg-navy px-6 py-5">
        <p className="text-brand text-xs font-bold tracking-widest uppercase mb-1">無料診断</p>
        <h2 className="font-serif text-white text-lg sm:text-xl font-bold leading-snug">
          あなたに最適な家づくりプランを診断
        </h2>
        <p className="text-white/60 text-xs mt-1">3つの質問に答えるだけ・選択のみ・1分以内</p>
      </div>

      {/* ボディ */}
      <div className="px-6 py-6">

        {/* ローディング */}
        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-14">
            <div className="w-10 h-10 border-[3px] border-brand border-t-transparent rounded-full animate-spin mb-4" />
            <p className="font-bold text-navy">診断中...</p>
            <p className="text-site-muted text-xs mt-1">あなたに最適なプランを選んでいます</p>
          </div>
        )}

        {/* Q1 / Q2 / Q3 */}
        {(step === 1 || step === 2 || step === 3) && (
          <div style={{
            opacity:   visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}>
            <ProgressBar step={step} />

            <p className="font-bold text-navy text-base sm:text-lg mb-4">
              {step === 1 && 'Q1　土地の状況を教えてください'}
              {step === 2 && 'Q2　世帯年収はどのくらいですか？'}
              {step === 3 && 'Q3　今一番やりたいことは？'}
            </p>

            <div className="space-y-3">
              {step === 1 && Q1.map(o => (
                <ChoiceBtn key={o.value} label={o.label} icon={o.icon}
                  selected={answers.land === o.value} onClick={() => pick1(o.value)} />
              ))}
              {step === 2 && Q2.map(o => (
                <ChoiceBtn key={o.value} label={o.label} icon={o.icon}
                  selected={answers.income === o.value} onClick={() => pick2(o.value)} />
              ))}
              {step === 3 && Q3.map(o => (
                <ChoiceBtn key={o.value} label={o.label} icon={o.icon}
                  selected={answers.type === o.value} onClick={() => pick3(o.value)} />
              ))}
            </div>

            {step > 1 && (
              <button onClick={back} className="mt-5 text-site-muted text-sm hover:text-navy transition-colors">
                ← 前の質問に戻る
              </button>
            )}
          </div>
        )}

        {/* 結果 */}
        {step === 'result' && result && (
          <div ref={resultRef} style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s' }}>

            {/* 結果ヘッダー */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
                {result.emoji} {result.tag}
              </span>
              <h3 className="font-serif text-navy text-xl sm:text-2xl font-bold leading-snug mb-3 whitespace-pre-line">
                {result.headline}
              </h3>
              <p className="text-site-muted text-sm leading-relaxed">{result.body}</p>
            </div>

            {/* CTA（メイン＋サブ 2ボタン必須） */}
            <div className="space-y-3 mb-4">
              <a
                href={result.ctaMain.affiliate.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 px-5 rounded-xl text-center text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {result.ctaMain.label} →
              </a>
              <a
                href={result.ctaSub.affiliate.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold py-3.5 px-5 rounded-xl text-center text-sm transition-all duration-200"
              >
                {result.ctaSub.label} →
              </a>
            </div>

            <p className="text-gray-400 text-xs text-center mb-5">
              1分・完全無料・しつこい営業なし
              <span className="ml-2 bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded">PR</span>
            </p>

            {/* 関連記事へのスクロール誘導 */}
            <div className="border-t border-gray-100 pt-4 mb-4">
              <p className="text-xs text-site-muted mb-2">📖 あわせて読みたい</p>
              <Link
                href={result.articleHref}
                className="flex items-center justify-between bg-site-bg hover:bg-gray-100 rounded-xl px-4 py-3 transition-colors group"
              >
                <p className="text-navy text-sm font-bold leading-snug group-hover:text-brand transition-colors">
                  {result.articleTitle}
                </p>
                <span className="text-brand font-bold ml-3 flex-shrink-0">→</span>
              </Link>
            </div>

            <div className="text-center">
              <button
                onClick={reset}
                className="text-gray-400 text-xs hover:text-navy transition-colors underline underline-offset-2"
              >
                もう一度診断する
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── エクスポート（Suspenseラップ済み） ──────────────────
export default function DiagnosticQuiz() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-10 text-center">
        <p className="text-site-muted text-sm">読み込み中...</p>
      </div>
    }>
      <QuizInner />
    </Suspense>
  )
}
