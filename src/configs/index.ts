export function getBaseUrl() {
  try {
    const baseUrl = process.env.BASE_URL_V1;

    if (baseUrl) return baseUrl;
    else throw new Error('BASE_URL_V1 need to config at .env');
  } catch (error) {
    console.error(error);
  }
}

export const baseUrl = getBaseUrl();
