// Порожній кореневий макет: справжній <html> малює [lang]/layout.
// Потрібен лише для того, щоб існувала сторінка 404 верхнього рівня
// (app/not-found.jsx) для адрес, яким не відповідає жоден маршрут.
export default function RootLayout({ children }) {
  return children;
}
