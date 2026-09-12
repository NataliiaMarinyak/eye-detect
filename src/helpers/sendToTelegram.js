// Надсилає заявку на серверний маршрут /api/lead. Токен бота в браузер не потрапляє.
// Повертає true, якщо заявка доставлена, інакше false.
export const sendToTelegram = async (formData) => {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    return Boolean(data.ok);
  } catch {
    return false;
  }
};
