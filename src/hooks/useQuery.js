import { useLocation } from 'react-router-dom';

/**
 * A custom hook that builds on useLocation to parse the query string for you.
 * See https://reactrouter.com/web/example/query-parameters
 * @returns {URLSearchParams}
 */
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
