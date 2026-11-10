import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaExchangeAlt, FaSpinner, FaMoneyBillWave, FaShieldAlt, FaClock } from 'react-icons/fa'

// ---------------------------------------------------------------------------
// Data — edit these to your real services/prices
// ---------------------------------------------------------------------------
interface RateItem {
  id: string
  service: string
  priceUSD: number
  unit: string
  description: string
}

const rateData: RateItem[] = [
  { id: 'landing-site', service: 'Landing / Static Site', priceUSD: 200, unit: 'project', description: 'Static Single/two-page site, responsive, up to 5 sections, basic SEO.' },
  { id: 'business-site', service: 'Business Website', priceUSD: 1000, unit: 'project', description: 'Multi-page site, CMS-ready content, contact forms, on-page SEO.' },
  { id: 'web-app', service: 'Full-Stack Web App', priceUSD: 2000, unit: 'project (from)', description: 'Custom app with auth, database, and API — final quote scoped per requirements.' },
  { id: 'hourly-dev', service: 'Hourly Development', priceUSD: 20, unit: 'hour', description: 'General frontend/backend work billed hourly, minimum 2-hour block.' },
  { id: 'hourly-consult', service: 'Consulting / Code Review', priceUSD: 30, unit: 'hour', description: 'Architecture review, debugging support, code audits.' },
  { id: 'retainer', service: 'Monthly Retainer', priceUSD: 700, unit: 'month', description: 'Ongoing maintenance and feature work, ~20 hours/month reserved.' },
]

// Only two currencies in this page: USD and KES.
const CURRENCIES = ['USD', 'KES'] as const
type Currency = typeof CURRENCIES[number]

const FALLBACK_KES_PER_USD = 129.2 // used only if the live fetch fails

function formatMoney(amount: number, currency: Currency) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency', currency, maximumFractionDigits: amount >= 100 ? 0 : 2,
    }).format(amount)
  } catch {
    return `${currency} ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
  }
}

// ---------------------------------------------------------------------------
// Live FX hook — just the USD -> KES rate
// ---------------------------------------------------------------------------
function useExchangeRate() {
  const [kesPerUsd, setKesPerUsd] = useState(FALLBACK_KES_PER_USD)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD')
        if (!res.ok) throw new Error('fx failed')
        const data = await res.json()
        if (!cancelled && data?.rates?.KES) {
          setKesPerUsd(data.rates.KES)
          setLastUpdated(data.time_last_update_utc ?? null)
        }
      } catch {
        if (!cancelled) setError('Live rate unavailable — showing an approximate rate.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [])

  return { kesPerUsd, lastUpdated, loading, error }
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
interface PayratesProps {
  onBack?: () => void
}

type Tab = 'overview' | 'card' | 'convert'
const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'card', label: 'Rate Card' },
  { id: 'convert', label: 'Converter' },
]

const Payrates: React.FC<PayratesProps> = ({ onBack }) => {
  const [tab, setTab] = useState<Tab>('overview')
  const { kesPerUsd, lastUpdated, loading, error } = useExchangeRate()

  const usdToKes = (usd: number) => usd * kesPerUsd
  const kesToUsd = (kes: number) => kes / kesPerUsd

  // --- Rate Card state ---
  const [cardCurrency, setCardCurrency] = useState<Currency>('KES')

  // --- Converter state ---
  const [amount, setAmount] = useState('1')
  const [from, setFrom] = useState<Currency>('USD')
  const [to, setTo] = useState<Currency>('KES')
  const numericAmount = parseFloat(amount) || 0
  const result = from === to
    ? numericAmount
    : from === 'USD'
      ? usdToKes(numericAmount)
      : kesToUsd(numericAmount)
  const unitRate = from === to ? 1 : from === 'USD' ? kesPerUsd : 1 / kesPerUsd

  return (
    <div className="min-h-screen px-4 py-12" style={{ background: 'linear-gradient(to bottom, #080810, #0a0a0f)' }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {onBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-white/40 hover:text-emerald-400 text-xs transition-colors duration-200"
            >
              <FaArrowLeft size={11} />
              Back to portfolio
            </button>
          ) : <div />}
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl w-fit mb-8"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2 rounded-lg text-sm transition-colors duration-150"
              style={{
                background: tab === t.id ? 'rgba(16,185,129,0.15)' : 'transparent',
                color: tab === t.id ? '#34d399' : 'rgba(255,255,255,0.4)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ---------------- Overview ---------------- */}
        {tab === 'overview' && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">How pricing works</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                All rates are quoted in USD. Check the Rate Card for individual services,
                and the Converter to see what a price works out to in Kenyan Shillings today.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <FaMoneyBillWave className="text-emerald-400" size={18} />, title: 'Quoted in USD', body: 'Base prices are set in US dollars for consistency across clients.' },
                { icon: <FaShieldAlt className="text-emerald-400" size={18} />, title: 'Fixed vs. hourly', body: 'Fixed-price work is scoped upfront; hourly work is billed and invoiced per block.' },
                { icon: <FaClock className="text-emerald-400" size={18} />, title: 'Live conversion', body: "The USD/KES rate is pulled live, not hardcoded — check the Converter tab for today's rate." },
              ].map((c) => (
                <div key={c.title} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
                  {c.icon}
                  <h3 className="text-white text-sm font-medium">{c.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- Rate Card ---------------- */}
        {tab === 'card' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-white text-xl font-semibold">Rate Card</h2>
              <div className="flex items-center gap-2">
                <label className="text-white/40 text-xs">Show prices in</label>
                <select
                  value={cardCurrency}
                  onChange={(e) => setCardCurrency(e.target.value as Currency)}
                  className="bg-black/40 text-emerald-400 text-xs rounded-lg px-2 py-1.5 outline-none"
                  style={{ border: '1px solid rgba(16,185,129,0.25)' }}
                >
                  {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {rateData.map((item) => {
                const displayed = cardCurrency === 'USD' ? item.priceUSD : usdToKes(item.priceUSD)
                return (
                  <div
                    key={item.id}
                    className="rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex flex-col gap-1 min-w-[180px]">
                      <h3 className="text-white text-sm font-medium">{item.service}</h3>
                      <p className="text-white/40 text-xs leading-relaxed max-w-md">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 text-lg font-semibold">
                        {formatMoney(displayed, cardCurrency)}
                      </div>
                      <div className="text-white/30 text-[11px]">
                        per {item.unit}{cardCurrency !== 'USD' && ` · $${item.priceUSD}`}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-white/25 text-[11px]">
              {loading && 'Fetching live exchange rate...'}
              {!loading && error && <span className="text-amber-400/70">{error}</span>}
              {!loading && !error && lastUpdated && `Rate updated ${lastUpdated}`}
            </div>
          </div>
        )}

        {/* ---------------- Converter ---------------- */}
        {tab === 'convert' && (
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-xl font-semibold">Currency Converter</h2>

            <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs">Amount</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={0}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-black/40 text-white text-lg rounded-lg px-3 py-2 outline-none"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value as Currency)}
                    className="bg-black/40 text-emerald-400 text-sm rounded-lg px-2 outline-none"
                    style={{ border: '1px solid rgba(16,185,129,0.25)' }}
                  >
                    {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => { setFrom(to); setTo(from) }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  style={{ border: '1px solid rgba(16,185,129,0.25)' }}
                  aria-label="Swap currencies"
                >
                  <FaExchangeAlt size={13} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white/40 text-xs">Converted to</label>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 bg-black/20 text-emerald-400 text-2xl font-semibold rounded-lg px-3 py-2">
                    {loading ? (
                      <FaSpinner className="animate-spin text-white/30" size={16} />
                    ) : (
                      formatMoney(result, to)
                    )}
                  </div>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value as Currency)}
                    className="bg-black/40 text-emerald-400 text-sm rounded-lg px-2 py-2 outline-none"
                    style={{ border: '1px solid rgba(16,185,129,0.25)' }}
                  >
                    {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="text-white/30 text-xs text-center pt-1">
                1 {from} ≈ {unitRate.toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}
              </div>
            </div>

            <div className="text-white/25 text-[11px] text-center">
              {loading && 'Fetching live exchange rate...'}
              {!loading && error && <span className="text-amber-400/70">{error}</span>}
              {!loading && !error && lastUpdated && `Rate updated ${lastUpdated}`}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Payrates