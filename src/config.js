const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES = BASE_URL + "all";

export const searchByCountry = (name) => BASE_URL + "/name/" + name;
