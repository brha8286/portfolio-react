import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * A custom hook that builds on useLocation to parse the query string for you.
 * @returns {URLSearchParams}
 */
export function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
