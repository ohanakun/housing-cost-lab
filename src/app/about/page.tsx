import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: '運営者情報',
  description: `${SITE.name}の運営者情報です。`,
}

const OPERATOR_NAME = '住まい数字研究所 管理人'
const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdBeGL_r-1ffdQ_cIRGt7dfSkanq5T1ZxST65PYzNhQ6tA_nA/viewform'

export default function AboutPage() {
  return (
    <div className="bg-site-bg min-h-screen py-14 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-2">
          運営者情報
        </h1>
        <p className="text-site-muted text-sm mb-10">最終更新日：2026年5月</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 mb-10">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-4 pr-6 font-bold text-navy w-28 align-top">サイト名</td>
                <td className="py-4 text-site-text">{SITE.name}</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-bold text-navy align-top">サイトURL</td>
                <td className="py-4 text-site-text">
                  <a href={SITE.url} className="text-brand underline">{SITE.url}</a>
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-bold text-navy align-top">運営者</td>
                <td className="py-4 text-site-text">{OPERATOR_NAME}</td>
              </tr>
              <tr>
                <td className="py-4 pr-6 font-bold text-navy align-top">お問い合わせ</td>
                <td className="py-4">
                  <a
                    href={CONTACT_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand hover:bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    お問い合わせフォームへ →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-8 text-site-text text-sm leading-relaxed">

          <section>
            <h2 className="font-bold text-navy text-base mb-3">このサイトについて</h2>
            <p>
              「{SITE.name}」は、注文住宅の費用を「初期費用」だけでなく
              「40年トータルコスト」まで含めて比較・分析する情報サイトです。
            </p>
            <p className="mt-2">
              ハウスメーカー選びや外壁材の選択によって、40年間で数百万円の差が生まれることがあります。
              当サイトでは、数字ベースの情報を提供することで、住宅購入を検討している方が
              損のない選択ができるよう支援することを目的としています。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">掲載情報について</h2>
            <p>
              当サイトに掲載している費用・相場データは、執筆時点の調査・取材に基づいています。
              実際の費用は時期・地域・各社の状況により異なります。
              最終的なご判断は、必ず複数社への見積もりおよび専門家へのご相談の上、
              ご自身の責任においてお願いいたします。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">アフィリエイトについて</h2>
            <p>
              当サイトはアフィリエイトプログラムに参加しており、
              記事内のリンクからのお申し込みにより報酬を得ることがあります。
              ただし、報酬の有無によって掲載内容の評価や推薦を変えることはなく、
              読者の利益を最優先に情報を提供しています。
            </p>
            <p className="mt-2">
              詳細は
              <a href="/privacy-policy/" className="text-brand underline ml-1">プライバシーポリシー</a>
              をご覧ください。
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
