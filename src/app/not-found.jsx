// Сторінка 404 верхнього рівня. Головний макет сайту лежить у [lang]/layout,
// тому для невідомих адрес Next.js шукав 404 тут і показував свою англійську
// заглушку без дизайну. Самодостатня сторінка з тими ж посиланнями, що в [lang]/not-found.
import "@/app/globals.scss";
import Link from "next/link";

export const metadata = { title: "Сторінку не знайдено — EyeDetect", robots: { index: false } };

const links = [
  ["/", "Головна"],
  ["/online", "Онлайн-тест"],
  ["/locations", "Міста"],
  ["/prices", "Ціни"],
  ["/contacts", "Контакти"],
];

export default function RootNotFound() {
  return (
    <html lang="uk">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", background: "#f5f7fb", color: "#0f172a" }}>
        <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "16px 20px" }}>
          <Link href="/" style={{ color: "#1393CC", fontSize: 22, fontWeight: 700, textDecoration: "none" }}>EyeDetect</Link>
        </header>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "64px 20px", textAlign: "center" }}>
          <p style={{ fontSize: 64, fontWeight: 800, color: "#1e3a8a", margin: 0 }}>404</p>
          <h1 style={{ fontSize: 28, margin: "12px 0" }}>Такої сторінки немає</h1>
          <p style={{ color: "#475569", lineHeight: 1.6 }}>Можливо, адресу змінено або ви перейшли за старим посиланням. Оберіть, куди далі.</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 24 }}>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} style={{ display: "inline-block", padding: "10px 18px", borderRadius: 999, background: href === "/" ? "#1e3a8a" : "#fff", color: href === "/" ? "#fff" : "#1e3a8a", border: "1px solid #1e3a8a", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 32, color: "#475569" }}>Телефон: <a href="tel:+380686833368" style={{ color: "#1e3a8a" }}>+380 (68) 68 333 68</a></p>
        </main>
      </body>
    </html>
  );
}
