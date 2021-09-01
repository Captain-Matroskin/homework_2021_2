'use strict';

/**
 * Функция, которая получает путь к вложенному свойству объекта и устанавливает значени в это свойство
 * @param {object} object - объект, в котором хотим установить значение свойства
 * @param {string} key - сам путь свойства
 * @param {number|string|boolean|bigint} data - само значение
 * @returns {undefiend|*object} - возвращает объект с измененным знгчением или undefiend, если свойство не найдено
 */

const set = (object, key, data) => {
    if (typeof key !== 'string' || typeof object !== 'object') {
        return;
    }

    const arrKey = key.split('.');
    const lengthKey = arrKey.length;
    let nestingObject = object;

    arrKey.forEach ((item, index) => {
        if (!item.length) {
            return;
        }

        if ( !(item in nestingObject) ) {
            nestingObject[item] = {};
        }
        if (index < lengthKey - 1) {
            nestingObject = nestingObject[item];
        }
    });

    nestingObject[arrKey[lengthKey - 1]] = data;

    return object;
}
