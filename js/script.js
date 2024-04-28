import { filterToggle } from './modules/openFilter.js';
import { selectCityControl } from './modules/selectCityControl.js';
import { vacancyControl } from './modules/vacancyControl.js';
import { modalVacancyControl } from './modules/modalVacancyControl.js';
import { filterFormControl } from './modules/filterFormControl.js';

import { formControler } from './modules/formControler.js';
import { fileControler } from './modules/fileControler.js';
import { loadMoreVacacies } from './modules/loadMoreVacacies.js';

export const API_URL = "https://giddy-wood-narwhal.glitch.me/";
export const LOCATION_URL = "api/locations";
export const VACANCY_URL = "api/vacancy";

export const cardsList = document.querySelector('.cards__list');
export const filterForm = document.querySelector('.filter__form');
export const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
export const vacanciesFilter = document.querySelector('.vacancies__filter');

export let appData = {
    lastUrl: "",
};
export const pagination = {};


export const observer = new IntersectionObserver(
    (entries) => { 
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadMoreVacacies();
            }
        });
    },
    {
        rootMargin: '100px',
    }
);

const init = () => {
    try {

        filterToggle();
    
        selectCityControl();

        vacancyControl();

        modalVacancyControl();
    
        filterFormControl();
    
    } catch (error) {
        console.log("error: ", error);
        console.warn('Мы не на странице index.html');
    }    

    try {

        formControler();
        fileControler();

    } catch (error) {
        console.log("error: ", error);
        console.warn('Мы не на странице employer.html');
    }

};

init();