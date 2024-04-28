import { API_URL, VACANCY_URL, appData, cardsList, filterForm, observer } from "../script.js";
import { renderError } from "./renderError.js";
import { renderVacancies } from "./renderVacancies.js";

export const filterFormControl = () => {
    filterForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`);
    
        formData.forEach((value, key) => {
            urlWithParam.searchParams.append(key, value);
        });
    
        try {
            const response = await fetch(urlWithParam);
            const data = await response.json();
            
            if (data.vacancies.length === 0) {
                cardsList.innerHTML = `<p class="no-vacancies-message">Вакансий не найдено. Измените фильтр поиска</p>`;
            } else {
                renderVacancies(data);
                observer.observe(cardsList);
                appData.lastUrl = urlWithParam;
            }
        } catch (err) {
            renderError(err);
        }
    });
};