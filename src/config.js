const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES = BASE_URL + "all";
//будет принимать имя страны
export const searchByCountry = (name) => BASE_URL + "name/" + name; // - name - тот name который придет в эту функцию
// сформирую конкретную ссылку, сделаю на нее запрос, получу одну конкретную страну, буду с ней работать

// будем получать некий набор кодов
export const filterByCode = (codes) => BASE_URL + "alpha?codes=" + codes.join();
