import { API_URL, LOCATION_URL, filterForm } from "../script.js";
import { getData } from "./getData.js";

export const selectCityControl = () => {
    const citySelect = document.querySelector('#city');
    const cityChoices = new Choices(citySelect, {
        itemSelectText: '',
        position: 'bottom',
    });

    getData(
        `${API_URL}${LOCATION_URL}`, 
        (locationData) => {
            const locations = locationData.map((location) => ({
                value: location,
            }));
            cityChoices.setChoices(locations, 'value', 'label', true)

            filterForm.addEventListener('reset', (event) => {
                placeholderItem = cityChoices._getTemplate('placeholder', 'Выбрать город');
                cityChoices.itemList.append(placeholderItem)

                cityChoices.setChoices(locations, 'value', 'label', true)
            })
        }, 
        (err) => {
            console.log(err);
        },
    );
};