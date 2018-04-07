export const API = {
  BASE_URL: "https://pizza-tele.ga/api/v1/",
  ENDPOINTS: {
    STORE_LIST: "store/list",
    CREATE_USER: "user/create",
    LOGIN: "user/login",
    MY_INFO: "user/my_info",
    PIZZA_LIST: "pizza/list",
    CREATE_PIZZA: "pizza/create",
    INGREDIENT_LIST: "ingredient/list",
    TAG_LIST: "tag/list"
  }
};

export const STATUS_CODES = {
  OK: "200",
  BAD_REQUEST: "400",
  UNAUTHORIZED: "401",
  FORBIDDEN: "403",
  NOT_FOUND: "404"
};