const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,population,region";
//будет принимать имя страны
export const searchByCountry = (name) => BASE_URL + "name/" + name; // - name - тот name который придет в эту функцию

// будем получать некий набор кодов
export const filterByCode = (codes) => BASE_URL + "alpha?codes=" + codes.join(",");
