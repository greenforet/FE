import axios from "axios";

export const fetchUserInfo = async (email) => {
  // 회원 정보를 가져오는 API 함수
  //   const response = await axios.get(`/api/user?email=${email}`);
  const response = await axios.get(`/api/user`, { params: { email } });
  return response.data; // 서버에서 가져온 데이터를 반환
};

export const fetchOrderItems = async (items) => {
  const itemIds = items.map((item) => item.id);
  // 상품 정보를 가져오는 API 함수
  //   const response = await axios.post("/api/order/items", { book_ids: itemIds });
  const response = await axios.get(`/api/order/items`, {
    params: { book_ids: itemIds.join(",") }, // 상품 ID를 쿼리 파라미터로 전달
  });
  return response.data;
};

export const sendPayment = async (payload) => {
  // 결제를 처리하는 API 함수
  const response = await axios.post(`/api/payment`, payload);
  return response.data;
};
