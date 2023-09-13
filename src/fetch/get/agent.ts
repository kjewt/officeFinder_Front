import { authInstance } from "../common/axiosApi";
import type { DetailData, MyOfficeResponse, ShortReview } from "../../type/agentTypes";

export const fetchMyOfficeData = async (): Promise<MyOfficeResponse> => {
  try {
    const res = await authInstance.get<MyOfficeResponse>("api/agents/offices");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchShortReviewsData = async (officeId: number): Promise<ShortReview> => {
  try {
    const res = await authInstance.get(`/api/offices/${officeId}/review-overviews`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
// 상세 데이터 불러오기
export const fetchdetailOfficeData = async (officeId: number): Promise<DetailData> => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//선형 차트
export const fetchRevenueData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/revenue`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
export const fetchTotalRevenueData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/total-revenue");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
//도넛 차트
export const fetchRentalRateData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/rental-status`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
export const fetchOverallRentalData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/overall-rental-status");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};


export const fetchAgentBookMarkData = (page: number, size: number) => {
  const response = authInstance
    .get("api/bookmarks", {
      params: {
        page,
        size,
      },
    })
    .then(res => res.data);
  return response;
};
export const fetchMyPageData = () => {
  const response = authInstance.get("api/customers/info").then(res => res.data);
  return response;

};

//예약자 명단 불러오기
export const fetchRequestListData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/lease-requests`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//특정 오피스 리뷰 불러오기
export const fetchReviewsData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/offices/${officeId}/reviews`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchOriginOfficeData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/offices/${officeId}`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};


