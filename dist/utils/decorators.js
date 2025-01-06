"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreacion = LogCreacion;
//Decorador que registra cada vez que se crea una instancia de una clase
function LogCreacion(target) {
    const original = target;
    function construct(constructor, args) {
        const instance = new constructor(...args);
        console.log(`Instancia de ${constructor.name} creada con argumentos ${JSON.stringify(args)}`);
        return instance;
    }
    const f = function (...args) {
        return construct(original, args);
    };
    f.prototype = original.prototype;
    return f;
}
