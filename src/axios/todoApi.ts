import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

// 공통된 에러 처리 함수
const handleError = (error: any) => {
  console.log(error);
  throw error;
};

// 공통된 요청 함수
const axiosRequest = async (method: string, url: string, data?: any) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    handleError(error);
  }
};

// export const axiosAddTodo = async (payload: string) => {
//   try {
//     const response = await axiosInstance("http://localhost:4000/todos", {
//       text: payload,
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const axiosDeleteTodo = async (payload: string) => {
//   try {
//     const response = await axios.delete(
//       `http://localhost:4000/todos/${payload}`
//     );
//     console.log("response", response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const axiosToggleTodo = async (payload: string) => {
//   try {
//     const response = await axios.patch(
//       `http://localhost:4000/todos/${payload}`
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const axiosGetTodo = async () => {
  return await axiosRequest("get", "/");
};

// 할 일 추가
export const axiosAddTodo = async (payload: string) => {
  return await axiosRequest("post", "/", { text: payload });
};

// 할 일 삭제
export const axiosDeleteTodo = async (payload: string) => {
  return await axiosRequest("delete", `/${payload}`);
};

// 할 일 토글
export const axiosToggleTodo = async (payload: string) => {
  return await axiosRequest("patch", `/${payload}`);
};
