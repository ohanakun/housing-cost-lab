import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${SITE.name}のプライバシーポリシー・免責事項です。`,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-site-bg min-h-screen py-14 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-site-muted text-sm mb-10">最終更新日：2026年5月</p>

        <div className="space-y-10 text-site-text text-sm leading-relaxed">

          <section>
            <h2 className="font-bold text-navy text-base mb-3">個人情報の収集について</h2>
            <p>
              当サイト「{SITE.name}」（以下「当サイト」）は、お問い合わせフォームなどを通じて
              お名前・メールアドレス等の個人情報をご提供いただく場合があります。
              収集した個人情報は、お問い合わせへの回答・ご連絡のみに使用し、
              第三者への提供は行いません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">アクセス解析ツールについて</h2>
            <p>
              当サイトでは、サイトの利用状況を把握するためにGoogle Analytics（Googleが提供するアクセス解析ツール）を利用しています。
              Google Analyticsはトラフィックデータ収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-2">
              Google Analyticsの利用規約・プライバシーポリシーについては、
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline ml-1"
              >
                Googleのプライバシーポリシー
              </a>
              をご確認ください。
              ブラウザの設定でCookieを無効にすることで、データ収集を拒否することも可能です。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">アフィリエイトプログラムについて</h2>
            <p>
              当サイトは、A8.net・バリューコマース・afbなどのアフィリエイトプログラムに参加しています。
              記事内のリンクからサービスのお申し込みや資料請求が行われた場合、
              当サイトに報酬が発生することがあります。
            </p>
            <p className="mt-2">
              ただし、報酬の有無によって掲載内容の評価や推薦を変えることはありません。
              利用者の利益を最優先に、正確な情報提供を心がけています。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">Cookieについて</h2>
            <p>
              当サイトでは、利便性の向上やアクセス解析のためにCookieを使用しています。
              Cookieとは、ウェブサイトがブラウザに保存する小さなデータファイルです。
              ブラウザの設定からCookieの使用を拒否することができますが、
              その場合、一部の機能が正常に動作しないことがあります。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">免責事項</h2>
            <p>
              当サイトに掲載している情報は、執筆時点の相場・調査に基づくものです。
              実際の費用・サービス内容は各社・時期によって異なります。
              最終的なご判断は、必ず複数社への見積もり・専門家へのご相談の上、
              ご自身の責任においてお願いいたします。
            </p>
            <p className="mt-2">
              当サイトの情報を参考にしたことによる損害・トラブルについて、
              当サイトは一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">著作権について</h2>
            <p>
              当サイトに掲載しているテキスト・画像・データ等の著作権は、
              当サイト運営者に帰属します。
              無断転載・複製・改変はお断りしています。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーを改定することがあります。
              変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-navy text-base mb-3">お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、
              <a href="/about/" className="text-brand underline ml-1">運営者情報ページ</a>
              に記載の連絡先までお願いいたします。
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
