'use strict';

let set = (object, key, data) => {
    if (typeof key !== "string" || typeof object !== "object") {
        return undefined;
    }

    const arrKey = key.split('.');
    let lengthKey = arrKey.length;
    let nestingObject = object;

    arrKey.forEach ((item, length) => {
        if (!item.length) {
            return;
        }

       if ( !(item in nestingObject) ) {
           nestingObject[item] = {};
       }
       if (length < lengthKey - 1) {
           nestingObject = nestingObject[item];
       }
    });

    nestingObject[arrKey[lengthKey - 1]] = data;

    return object;
}
