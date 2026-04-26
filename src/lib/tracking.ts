// UTM URL builder — safe to call from server or client components
export function buildUtmUrl(
  baseUrl: string,
  params: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
  }
): string {
  try {
    const url = new URL(baseUrl)
    if (params.source)   url.searchParams.set('utm_source',   params.source)
    if (params.medium)   url.searchParams.set('utm_medium',   params.medium)
    if (params.campaign) url.searchParams.set('utm_campaign', params.campaign)
    if (params.content)  url.searchParams.set('utm_content',  params.content)
    return url.toString()
  } catch {
    // Invalid URL (placeholder before ASP setup) — return unchanged
    return baseUrl
  }
}

// GA4 affiliate click event — client-only, safe to call anywhere (no-ops on server)
export function trackAffiliateClick(params: {
  affiliateName: string
  variant: string
  pageSlug: string
  position: string
}): void {
  if (typeof window === 'undefined') return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  if (typeof w.gtag !== 'function') return
  w.gtag('event', 'affiliate_click', {
    affiliate_name: params.affiliateName,
    cta_variant:    params.variant,
    page_slug:      params.pageSlug,
    cta_position:   params.position,
  })
}
