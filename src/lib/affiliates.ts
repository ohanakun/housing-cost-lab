// ★ ASP案件の一元管理 ★
// URLはASPから発行されたものに差し替えてください
// 報酬目安欄は管理用（サイト上には表示されません）

export type AffiliateEntry = {
  readonly url: string
  readonly name: string       // サービス名（管理用）
  readonly label: string      // CTAコピー A（メイン）
  readonly labelB: string     // CTAコピー B（A/Bテスト用）
  readonly sub: string        // CTA補足テキスト
  readonly reward?: string    // 報酬目安（管理用・非表示）
  readonly features: string[] // 信頼ポイント（CTAに表示）
}

export const AFFILIATE = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━
  // 最優先：注文住宅 一括資料請求
  // ━━━━━━━━━━━━━━━━━━━━━━━━━

  housingPrimary: {
    url: 'https://www.town-life.jp/',  // ★ A8.net承認後、アフィリエイトURLに差し替えてください
    name: 'タウンライフ家づくり',
    label: '無料でハウスメーカーを比較する',
    labelB: '間取り・見積もりを無料で取り寄せる',
    sub: '1分・完全無料・しつこい営業なし',
    reward: '最大5,000円/件 (A8.net)',
    features: ['掲載600社以上', '間取り図を無料作成', '資金計画書プレゼント'],
  } as AffiliateEntry,

  housingSecondary: {
    url: 'https://www.homes.co.jp/',   // ★ バリューコマース承認後、アフィリエイトURLに差し替えてください
    name: 'LIFULL HOME\'S',
    label: 'ハウスメーカーのカタログを一括請求',
    labelB: '無料でカタログをまとめてもらう',
    sub: 'カタログ無料・全国対応',
    reward: '最大3,000円/件 (バリューコマース)',
    features: ['国内最大級の住宅情報', 'カタログ無料', 'FP相談オプションあり'],
  } as AffiliateEntry,

  // ━━━━━━━━━━━━━━━━━━━━━━━━━
  // サブ：外壁・リフォーム見積もり
  // ━━━━━━━━━━━━━━━━━━━━━━━━━

  reform: {
    url: 'https://www.homepro.co.jp/', // ★ A8.net承認後、アフィリエイトURLに差し替えてください
    name: 'ホームプロ（リフォーム）',
    label: '無料でリフォーム見積もりを取る',
    labelB: '複数社のリフォーム費用を比較する',
    sub: '最大5社に同時依頼・完全無料',
    reward: '最大20,000円/件 (A8.net)',
    features: ['最大5社比較', '完全無料', '優良業者のみ掲載'],
  } as AffiliateEntry,

  gaiheki: {
    url: 'https://gaiheki-madoguchi.com/', // ★ afb承認後、アフィリエイトURLに差し替えてください
    name: '外壁塗装の窓口',
    label: '外壁塗装の費用を無料で比較する',
    labelB: '外壁塗装の相場を無料チェック',
    sub: '地域の優良業者を最大3社比較',
    reward: '最大15,000円/件 (afb)',
    features: ['地域密着業者を厳選', '工事保証あり', '見積もり後でも断れる'],
  } as AffiliateEntry,

  // 旧コード後方互換エイリアス
  get housing() { return this.housingPrimary },
  get satei() { return this.housingSecondary },

} as const

// ━━━━━━━━━━━━━━━━━━━━━━━━━
// ASP運用メモ（URLを変更する際の参照）
// ━━━━━━━━━━━━━━━━━━━━━━━━━
//
// 【推奨登録ASP】
// A8.net       : https://www.a8.net/     主力。タウンライフ家づくり取扱いあり
// バリューコマース : https://vc.valuecommerce.com/
// afb          : https://www.afb.co.jp/
//
// 【報酬目安（2024年時点）】
// 注文住宅 資料請求 : 1,000〜5,000円/件
// リフォーム見積もり: 3,000〜20,000円/件
// 外壁塗装        : 5,000〜15,000円/件
//
// 【A/Bテスト運用メモ】
// label  = 比較訴求型（理性・お得感）
// labelB = 具体的成果型（感情・イメージ）
// 週次でクリック率を比較してどちらが優れているか確認する
