import type { Currency } from '../types/product';

// Axel's Official Amazon Associates Store Tracking ID
export const AMAZON_AFFILIATE_TAG = 'axeltech0b-20';

/**
 * Builds an official Amazon Associates URL with tag, region handling, and proper query parameters
 */
export function getAmazonAffiliateUrl(asin: string, currency: Currency = 'USD'): string {
  const domain = currency === 'EUR' ? 'amazon.es' : 'amazon.com';
  return `https://www.${domain}/dp/${asin}?tag=${AMAZON_AFFILIATE_TAG}&linkCode=ogi&th=1&psc=1`;
}

/**
 * Format price according to currency
 */
export function formatPrice(amountUSD: number, amountEUR: number, currency: Currency = 'USD'): string {
  if (currency === 'EUR') {
    return `€${amountEUR.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `$${amountUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
