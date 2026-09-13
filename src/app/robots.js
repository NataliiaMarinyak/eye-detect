const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;

// Усім ботам дозволено все. ШІ-краулери названі явно, щоб сайт потрапляв
// у відповіді ChatGPT, Claude, Perplexity і Google AI. Опис для них: /llms.txt
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "anthropic-ai", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export default async function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
