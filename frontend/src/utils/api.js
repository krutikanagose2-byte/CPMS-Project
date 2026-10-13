// Robust API Client with intelligent connection resolution & caching

let resolvedBaseUrl = null;

function getCandidateUrls() {
  const host = typeof window !== 'undefined' && window.location ? window.location.hostname : 'localhost';
  const urls = [
    `http://${host}:5000`,
    'http://localhost:5000',
    'http://127.0.0.1:5000',
    '' // Vite proxy fallback
  ];
  // Remove duplicates while preserving order
  return [...new Set(urls)];
}

export async function apiFetch(endpoint, options = {}) {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  // If we already know the working backend URL, try it first
  const candidates = resolvedBaseUrl
    ? [resolvedBaseUrl, ...getCandidateUrls().filter(u => u !== resolvedBaseUrl)]
    : getCandidateUrls();

  let lastError = null;

  for (const base of candidates) {
    try {
      const url = `${base}${path}`;
      // Deep clone headers and body if present
      const reqOptions = {
        ...options,
        headers: {
          'Accept': 'application/json',
          ...(options.headers || {})
        }
      };

      const response = await fetch(url, reqOptions);
      
      // If we got any HTTP response (even 400/401/404), the server connection itself succeeded!
      resolvedBaseUrl = base;
      return response;
    } catch (err) {
      // Network error (server down on this candidate URL, try next candidate)
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to connect to the backend server. Please verify the backend is running.");
}

export const API_BASE = resolvedBaseUrl || 'http://localhost:5000';
