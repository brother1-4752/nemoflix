const apiClient = async <Response>(url: string): Promise<Response> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("알 수 없는 에러가 발생했습니다.");
    }
    return response.json();
  } catch (error) {
    alert(error);
    throw error;
  }
};

export default apiClient;
