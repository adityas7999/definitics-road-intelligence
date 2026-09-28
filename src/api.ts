import type { DashboardData } from './data'

const base = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '')
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${base}${path}`, { credentials: 'include', headers: { 'Content-Type': 'application/json', ...init?.headers }, ...init })
  if (!response.ok) {
    const payload = await response.json().catch(() => ({})) as { message?: string }
    throw new Error(payload.message || `Request failed (${response.status})`)
  }
  return response.json() as Promise<T>
}
export type User = { id: string; name: string; email: string; role: string }
export const api = {
  login: (email: string, password: string) => request<User>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  me: () => request<User>('/auth/me'),
  logout: () => request<void>('/auth/logout', { method: 'POST' }),
  dashboard: () => request<DashboardData>('/dashboard'),
}
