import { createClient } from './generated/client/client.gen';

export const apiClient = createClient({
  baseUrl: import.meta.env.BASE_URL,
  credentials: 'include',
});
