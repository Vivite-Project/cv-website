const getBaseUrl = (fullUrl: string) => {
  try {
    const url = new URL(fullUrl);
    let baseUrl = url.hostname;

    if (baseUrl.startsWith("www.")) {
      baseUrl = baseUrl.substring(4);
    }
    return baseUrl;
  } catch (error) {
    return "error-invalid-url";
  }
};

export default getBaseUrl;
