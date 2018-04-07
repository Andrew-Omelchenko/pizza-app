import { API } from "../utils/config";
import { processResponse } from "../utils/helper";
import { AUTH_SERVICE } from "./AuthService";

class AuthHttpService {
  get(endpoint, token) {
    const headers = new Headers()
      .append("accept", "application/json");
    
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(`${API.BASE_URL}${endpoint}`, { headers })
      .then(processResponse);
  }

  post(endpoint, payload) {
		return fetch(`${API.BASE_URL}${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: new Headers({ "content-type": "application/json" }),
		})
			.then(processResponse);
  }
  
  getStores() {
		return this.get(API.ENDPOINTS.STORE_LIST, null);
  }
  
  createUser(userData) {
		return this.post(API.ENDPOINTS.CREATE_USER, userData);
	}

	getMyInfo() {
		return this.get(API.ENDPOINTS.MY_INFO, AUTH_SERVICE.token);
	}
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();