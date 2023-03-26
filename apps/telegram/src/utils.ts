export function telegramFormat(markdown: string) {
  return markdown.replace(/[.|-]/g, "\\$&");
}
