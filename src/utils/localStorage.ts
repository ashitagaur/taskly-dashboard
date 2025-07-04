export const load = <T>(key: string): T | null => {
  try {
    const d = localStorage.getItem(key);
    return d ? JSON.parse(d) : null;
  } catch {
    return null;
  }
};
export const save = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
};
