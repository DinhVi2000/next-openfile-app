import axios from "axios";

import config from "../env/lcl.json";

class Http {
  instance: any = null;

  get http() {
    return this.instance !== null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: config["API_URL"],
    });

    http.interceptors.response.use(
      (response) => response?.data,
      (error) => this.handleError(error?.response?.data?.error || error)
    );

    this.instance = http;
    return http;
  }

  request(config: any) {
    return this.http.request(config);
  }

  get(url: string, config?: any) {
    return this.http.get(url, config);
  }

  post(url: string, data?: any, config?: any) {
    return this.http.post(url, data, config);
  }

  put(url: string, data?: any, config?: any) {
    return this.http.put(url, data, config);
  }

  delete(url: string, config?: any) {
    return this.http.delete(url, config);
  }

  handleError(error: any) {
    console.log("error :", error);
    return Promise.reject(error?.response?.data);
  }
}

export const http = new Http();
