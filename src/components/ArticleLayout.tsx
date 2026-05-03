import type { ReactNode } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/site'

type Props = {
  title: string
  description: string
  category: string
  publishedAt: string
  slug: string
  children: ReactNode
}

export default function ArticleLayout({ title, description, category, publishedAt, slug, children }: Props) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE.url + '/' },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: SITE.url + '/articles/' },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE.url}/articles/${slug}/` },
    ],
  }

  return (
    <div className="bg-site-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-site mx-auto px-4 sm:px-6 py-10">
        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-site-muted flex-wrap">
            <li><Link href="/" className="hover:text-brand transition-colors">{SITE.name}</Link></li>
            <li className="text-gray-300">›</li>
            <li><Link href="/articles/" className="hover:text-brand transition-colors">記事一覧</Link></li>
            <li className="text-gray-300">›</li>
            <li className="text-gray-400 truncate max-w-[220px] sm:max-w-none">{title}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          {/* ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-medium">
                {category}
              </span>
              <time className="text-xs text-site-muted">{publishedAt}</time>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight mb-4">
              {title}
            </h1>
            <p className="text-site-text leading-relaxed border-l-4 border-brand pl-4 bg-orange-50 py-3 rounded-r-xl text-sm">
              {description}
            </p>
          </div>

          {/* PR表記（景品表示法ステマ規制対応） */}
          <div className="mb-6 flex items-center gap-2 text-xs text-gray-400">
            <span className="bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded">PR</span>
            <span>本記事はアフィリエイトリンクを含みます。詳細は<Link href="/privacy-policy/" className="underline hover:text-brand transition-colors">プライバシーポリシー</Link>をご確認ください。</span>
          </div>

          {/* 本文 */}
          {children}

          {/* 記事末尾ナビ */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link href="/articles/" className="text-brand hover:text-brand-dark transition-colors text-sm font-medium">
              ← 記事一覧に戻る
            </Link>
            <Link href="/" className="text-site-muted hover:text-navy transition-colors text-xs">
              {SITE.name} トップ →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
