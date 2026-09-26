import { notFound } from "next/navigation";

// Будь-яка адреса, для якої немає маршруту (/xyz, /ru/xyz, /blog/xyz…),
// потрапляла на стандартну англійську сторінку Next.js без дизайну і меню.
// Цей маршрут перехоплює такі адреси і показує нашу сторінку 404 з [lang]/not-found.
export default function CatchAll() {
  notFound();
}
