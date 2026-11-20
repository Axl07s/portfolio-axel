import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';
import { LanguageProvider } from './context/LanguageContext';
import type { Language } from './context/LanguageContext';

export function render(url: string, lang: Language = 'es') {
  const helmetContext: { helmet?: any } = {};

  const fullHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <LanguageProvider initialLang={lang}>
          <AppContent />
        </LanguageProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  // In React 19, hoisted <title>, <meta>, and <link> elements are prepended to the output.
  // We separate any hoisted tags from the root application element (<div class="min-h-screen...").
  const rootDivIndex = fullHtml.indexOf('<div class="min-h-screen');
  let headTags = '';
  let bodyHtml = fullHtml;

  if (rootDivIndex !== -1) {
    headTags = fullHtml.slice(0, rootDivIndex);
    bodyHtml = fullHtml.slice(rootDivIndex);
  }

  return { html: bodyHtml, headTags, helmet: helmetContext.helmet };
}
