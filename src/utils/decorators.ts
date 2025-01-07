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

function EmailValidator(target: Function) {
    const original = target;

    function construct(email: string, args: any[]) {
        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email address expression");
        }
    }

    const f: any = function(email: string, ...args: any[]) {
        return construct(email, args);
    }

    f.prototype = original.prototype;

    return f;
  
}
  
  

export { EmailValidator, LogCreacion };