import axios from "axios";
import BASE_URL from "../config/config";
import localStore from "./localStore";

export default function fireAjax(method, URL, data) {
  const url = BASE_URL + URL;
  let config = {};
  if (URL !== "user/register" || URL !== "user/login") {
    config = { headers: { token: localStore("token") } };
  }
  if (method === "POST") {
    return axios
      .post(url, data, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStore("clear");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } else if (method === "GET") {
    return axios
      .get(url, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStore("clear");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } else if (method === "PUT") {
    return axios
      .put(url, data, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStore("clear");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } else if (method === "DELETE") {
    return axios
      .delete(url, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStore("clear");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  }
}
