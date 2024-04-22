const medicines = [
    {Агалгін: new Date("2022-05-01")},
    {Ношпа: new Date("2025-07-02")},
    {Альфахолін: new Date("2024-12-21")},
    {Аспірин: new Date("2022-08-15")},
    {Аспаркам: new Date("2024-04-18")},
]

// Отримання масиву лише з назвами препаратів
const medicineNames = medicines.map(medicine => Object.keys(medicine)[0]);
console.log("Масив лише з назвами препаратів:", medicineNames);

// Прибирання медикаментів, у яких строк зберігання вже пройшов
const currentDate = new Date();
const validMedicines = medicines.filter(medicine => Object.values(medicine)[0] > currentDate);
console.log("Медикаменти зі строком зберігання, які ще не минули:", validMedicines);

// Сортування медикаментів у хронологічному порядку
validMedicines.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);
console.log("Медикаменти у хронологічному порядку:", validMedicines);
