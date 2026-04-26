import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: `注文住宅の総額比較｜${SITE.name}`,
    template: `%s｜${SITE.name}`,
  },
  description:
    '注文住宅の総額・ハウスメーカー比較・40年維持費を徹底比較。土地＋建物＋諸費用＋維持費の本当のコストがわかります。',
  keywords: ['注文住宅 総額', 'ハウスメーカー比較', '住宅コスト', '40年コスト', '外壁塗装', '戸建て売却'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SITE.name,
  },
}

const GA_ID = 'G-3JENRXSB49'

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  description: '注文住宅の総額・ハウスメーカー比較・40年コストを徹底比較する情報サイト',
  url: SITE.url,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics — gtag直貼り */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
