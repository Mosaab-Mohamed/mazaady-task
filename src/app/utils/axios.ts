import axios from "axios";

// These should be added in .env when working on real application
const baseURL = "https://staging.mazaady.com/api/v1";
const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";

// Create axios instance with the reused configs in all requests
const axiosInstance = axios.create({
	baseURL,
	timeout: 5000,
	headers: { "private-key": privateKey },
});

// Intercept response to return response.data object instead of AxiosResponse
axiosInstance.interceptors.response.use((response) => {
	return response.data;
});

export default axiosInstance;
