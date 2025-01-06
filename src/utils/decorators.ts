//Decorador que registra cada vez que se crea una instancia de una clase
function LogCreacion(target: Function) {
    const original = target;

    function construct(constructor: any, args: any[]) {
        const instance = new constructor(...args);
        console.log(`Instancia de ${constructor.name} creada con argumentos ${JSON.stringify(args)}`);
        return instance;
    }

    const f: any = function(...args: any[]) {
        return construct(original, args);
    }

    f.prototype = original.prototype;

    return f;
}

export { LogCreacion };