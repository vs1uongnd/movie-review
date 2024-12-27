const API_URL = 'https://api.themoviedb.org/3';
const API_BEARER_TOKEN = `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`;

const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_BEARER_TOKEN,
  },
};

export const fetchMovies = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const url = new URL(`${API_URL}${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url.toString(), defaultOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Hàm để lấy danh sách phim phổ biến
export const fetchPopularMovies = () => fetchMovies('/movie/popular');
