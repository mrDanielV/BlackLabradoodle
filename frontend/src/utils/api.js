const API_TOKEN = 'Brier blv001';

export async function apiRequest(endpoint) {
  const response = await fetch(endpoint, {
    headers: {
      'Authorization': API_TOKEN,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || 'Unknown error');
  }

  return result.data;
}