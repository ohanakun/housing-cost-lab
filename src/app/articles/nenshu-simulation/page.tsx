import type { Metadata } from 'next'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: '年収別 住宅購入シミュレーション｜年収400〜800万円の現実的な予算',
  description: '年収別の住宅ローン・購入予算シミュレーション。年収400〜800万円の方が現実的に建てられる家の総額を解説（準備中）。',
}

export default function NenshuSimulationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <span className="text-xs bg-[#0d2240] text-orange-400 border border-[#1e3a5f] px-3 py-1 rounded-full font-medium">
        近日公開予定
      </span>
      <h1 className="text-2xl font-black text-white mt-6 mb-4">
        年収別 住宅購入シミュレーション
      </h1>
      <p className="text-slate-400 mb-8 leading-relaxed">
        年収400〜800万円別の現実的な購入予算と月返済額を試算するページを準備中です。<br />
        今すぐ予算感を知りたい方は、無料の比較サービスをご活用ください。
      </p>
      <a
        href={AFFILIATE.housing.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="btn-primary"
      >
        無料でハウスメーカーを比較する →
      </a>
      <div className="mt-8">
        <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm transition-colors">
          ← トップページに戻る
        </Link>
      </div>
    </div>
  )
}
