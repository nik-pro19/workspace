import { API_URL, VACANCY_URL, appData, pagination } from "../script.js";
import { getData } from "./getData.js";
import { renderVacancies } from "./renderVacancies.js";
import { renderError } from "./renderError.js";

export const vacancyControl = () => {
    const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);

    urlWithParams.searchParams.set('page', pagination.currentPage + 1);
    urlWithParams.searchParams.set('limit', window.innerWidth < 768 ? 6 : 12);

    getData(urlWithParams, renderVacancies, renderError).then(() => {
        appData.lastUrl = urlWithParams;
    });
};