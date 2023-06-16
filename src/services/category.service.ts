import { baseUrl } from '@/configs';
import { ApiResponseList } from '@/types/http/api.response';
import { Category } from '@/types/models/category.interface';

export async function getCategories(): Promise<ApiResponseList<Category>> {
  const res = await fetch(`${baseUrl}/categories`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
