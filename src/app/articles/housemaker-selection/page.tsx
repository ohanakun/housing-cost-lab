import type { Metadata } from 'next'
import Link from 'next/link'
import { AFFILIATE } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'ハウスメーカーの選び方｜失敗しない比較ポイント7つ',
  description: 'ハウスメーカーの選び方と失敗しない比較ポイントを解説。坪単価・保証・アフターサービスの見方など準備中。',
}

export default function HousemakerSelectionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <span className="text-xs bg-[#0d2240] text-orange-400 border border-[#1e3a5f] px-3 py-1 rounded-full font-medium">
        近日公開予定
      </span>
      <h1 className="text-2xl font-black text-white mt-6 mb-4">
        ハウスメーカーの選び方
      </h1>
      <p className="text-slate-400 mb-8 leading-relaxed">
        失敗しない比較ポイント7つと注意点を解説するページを準備中です。<br />
        まずは無料でカタログを取り寄せて、各社の違いを比較してみてください。
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
