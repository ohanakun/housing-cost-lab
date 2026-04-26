import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '記事一覧',
  description: '外壁塗装・リフォーム費用・戸建て売却相場に関する記事の一覧です。',
}

const articles = [
  {
    slug: 'gaiheki-40nen-cost',
    category: '外壁材比較',
    title: '外壁材40年コスト比較｜ガルバリウム・窯業系・ALCを徹底比較',
    description: '外壁材の「初期費用」だけで選ぶと40年で100万円以上損する。総コストが一番安い選択肢とは？',
    publishedAt: '2025年4月',
  },
  {
    slug: 'gaiheki-tosou-200m2',
    category: '外壁塗装',
    title: '外壁塗装200㎡の費用相場｜総額いくら？相場と安くする方法',
    description: '200㎡の外壁塗装、相場は70〜130万円。1社見積もりで30万円損した事例と、適正価格で頼む方法。',
    publishedAt: '2025年4月',
  },
  {
    slug: 'chiku-30nen-koshigaya',
    category: '戸建て売却',
    title: '築30年戸建て売却相場（越谷エリア）｜現実の査定額と売れる条件',
    description: '越谷エリアの築30年戸建ての実相場は1,500〜2,800万円。外壁ボロボロでも売れる？査定前に知るべきこと。',
    publishedAt: '2025年4月',
  },
]

export default function ArticlesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-black text-white mb-2">記事一覧</h1>
      <p className="text-slate-400 text-sm mb-8">
        外壁・リフォーム・戸建て売却の費用情報をまとめています。
      </p>

      <div className="flex flex-col gap-5">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}/`}
            className="card hover:border-orange-700/50 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-[#0d2240] text-orange-400 border border-[#1e3a5f] px-2 py-0.5 rounded-full font-medium">
                {a.category}
              </span>
              <span className="text-xs text-slate-500">{a.publishedAt}</span>
            </div>
            <h2 className="font-bold text-white group-hover:text-orange-300 transition-colors mb-1 leading-snug">
              {a.title}
            </h2>
            <p className="text-slate-400 text-sm">{a.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
