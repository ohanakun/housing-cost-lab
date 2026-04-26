type CTABannerProps = {
  url: string
  label: string
  sub?: string
  variant?: 'housing' | 'reform' | 'satei'
  size?: 'default' | 'large'
}

export default function CTABanner({ url, label, sub, variant = 'housing', size = 'default' }: CTABannerProps) {
  const isLarge = size === 'large'

  return (
    <div className={`my-8 bg-brand/5 border-2 border-brand/20 rounded-2xl ${isLarge ? 'p-10' : 'p-6'} text-center`}>
      <p className="text-brand text-xs font-bold tracking-widest mb-4 uppercase">
        {variant === 'reform' ? '🔨 リフォーム・見積もり' : '🏠 無料で確認できます'}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`btn-primary ${isLarge ? 'text-lg px-12 py-5' : 'text-base px-8 py-4'}`}
      >
        {label} →
      </a>
      {sub && (
        <p className="mt-3 text-site-muted text-xs">{sub}</p>
      )}
    </div>
  )
}
