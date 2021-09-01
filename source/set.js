'use strict';

/**
 * Функция, которая получает путь к вложенному свойству объекта и устанавливает значени в это свойство
 * @param object
 * @param key
 * @param data
 * @returns {*}
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
