'use client'

import { useState, useEffect } from 'react'
import type { AffiliateEntry } from '@/lib/affiliates'
import { buildUtmUrl, trackAffiliateClick } from '@/lib/tracking'

type Props = {
  affiliate: AffiliateEntry
  secondary?: AffiliateEntry
  pageSlug: string
  position: string
  size?: 'default' | 'large'
}

export default function CTASection({
  affiliate,
  secondary,
  pageSlug,
  position,
  size = 'default',
}: Props) {
  const [variant, setVariant] = useState<'A' | 'B'>('A')

  useEffect(() => {
    const stored = sessionStorage.getItem('cta_ab_variant')
    if (stored === 'A' || stored === 'B') {
      setVariant(stored)
    } else {
      const v: 'A' | 'B' = Math.random() < 0.5 ? 'A' : 'B'
      sessionStorage.setItem('cta_ab_variant', v)
      setVariant(v)
    }
  }, [])

  const isLarge = size === 'large'
  const label = variant === 'A' ? affiliate.label : affiliate.labelB
  const ctaUrl = buildUtmUrl(affiliate.url, {
    source:   'housing-lab',
    medium:   'cta',
    campaign: pageSlug,
    content:  `${position}_v${variant}`,
  })

  return (
    <div className={`my-8 bg-brand/5 border-2 border-brand/20 rounded-2xl ${isLarge ? 'p-10' : 'p-6'} text-center`}>
      <p className="text-brand text-xs font-bold tracking-widest mb-4 uppercase">
        🏠 無料で確認できます
      </p>

      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() =>
          trackAffiliateClick({
            affiliateName: affiliate.name,
            variant,
            pageSlug,
            position,
          })
        }
        className={`btn-primary inline-block ${isLarge ? 'text-lg px-12 py-5' : 'text-base px-8 py-4'}`}
      >
        {label} →
      </a>

      {affiliate.sub && (
        <p className="mt-3 text-site-muted text-xs">{affiliate.sub}</p>
      )}

      {affiliate.features.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {affiliate.features.map((f) => (
            <span key={f} className="text-xs text-site-muted flex items-center gap-1">
              <span className="text-brand">✓</span>
              {f}
            </span>
          ))}
        </div>
      )}

      {secondary && (
        <div className="mt-5 pt-4 border-t border-brand/10">
          <p className="text-xs text-gray-400 mb-2">他のサービスでも比較できます</p>
          <a
            href={buildUtmUrl(secondary.url, {
              source:   'housing-lab',
              medium:   'cta-secondary',
              campaign: pageSlug,
              content:  `${position}_secondary`,
            })}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={() =>
              trackAffiliateClick({
                affiliateName: secondary.name,
                variant:       'secondary',
                pageSlug,
                position,
              })
            }
            className="text-brand font-bold text-sm hover:text-brand-dark transition-colors"
          >
            {secondary.label} →
          </a>
          {secondary.sub && (
            <p className="text-xs text-gray-400 mt-1">{secondary.sub}</p>
          )}
        </div>
      )}
    </div>
  )
}
