# Libreria-digital
Aplicación web sencilla para la gestión de una librería digital utilizando TypeScript.

[![build](https://github.com/anggierz/Libreria-digital/actions/workflows/workflow.yml/badge.svg?branch=main)](https://github.com/anggierz/Libreria-digital/actions/workflows/workflow.yml)

## Organización del proyecto

- He decidido utilizar una metodología de trabajo MVC (modelo, vista, controlador) "a mi manera". Al no ser necesario desarrollar
componentes Frontend para esta actividad, la parte de "Vista" se omite.

- He implementado interfaces para definir los contratos que deben seguir los modelos. He decidido no implementar dichas interfaces en los métodos de los controladores porque lo veía excesivo para esta actividad. En un proyecto empresarial, sí que vería esto necesario.

- He intentado respetar principios de clean code y los principios SOLID en la medida de lo posible, ya que he leído sobre ellos
pero aún me faltan años de práctica para poder implementarlos completamente en cualquier código que escriba.

```sh
libreria-digital/
├── src/
│   ├── controllers/
│   │   └── bookController.ts   # Controlador para la gestión de libros
│   │   └── libraryController.ts # Controlador para la gestión de la librería digital
│   │   └── userController.ts  # Controlador para la gestión de usuarios
│   ├── models/
│   │   └── book.ts             # Modelo de libro
│   │   └── library.ts          # Modelo de librería
│   │   └── user.ts             # Modelo de usuario  
│   ├── utils/
│   │   └── decorators.ts       # Decoradores personalizados
│   ├── index.ts                # Punto de entrada para la ejecución de la aplicación
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias y scripts del proyecto
└── README.md                   # Documentación del proyecto

```

### Descripción de las Carpetas y Archivos

1. **`src/controllers/`**:
   - Contiene los controladores que manejan la lógica de negocio. Se encargan de realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre libros y usuarios.
     - **`bookController.ts`**: Gestiona todas las funciones relacionadas con los libros, como añadir, actualizar, obtener y eliminar libros.
     - **`userController.ts`**: Gestiona todas las funciones relacionadas con los usuarios, como registrar, eliminar y obtener usuarios.
     - **`libraryController.ts`**: Gestiona todas las funciones relacionadas con la gestión de la librería, como realizar préstamos de libros y devolverlos.

2. **`src/models/`**:
   - Contiene los modelos que definen las estructuras de datos de los libros y los usuarios.
     - **`book.ts`**: Define la interfaz y la clase `Book`, que contiene propiedades como `title`, `author`, `publicationYear`, `genre`, `copiesAvailable`.
     - **`library.ts`**: Define la interfaz y la clase `Library`, que contiene propiedades como `bookId`, `userId`, `loanDate`, `returnDate`.
     - **`user.ts`**: Define la interfaz y la clase `User`, que contiene propiedades como `name`, `email`, `birthDate`.


3. **`src/utils/`**:
   - Contiene utilidades generales y decoradores personalizados.
     - **`decorators.ts`**: Contiene el decorador `LogCreacion`, que se aplica para registrar el momento de creación de los objetos `User`, `Book` o `Library`.

4. **`src/index.ts`**:
   - Archivo principal de la aplicación donde se inicializan los controladores y se ejecutan pruebas para validar la lógica implementada. Aquí es donde deberías modificar a tu gusto para realizar las pruebas que consideres necesarias.

5. **`tsconfig.json`**:
   - Archivo de configuración de TypeScript que especifica las opciones de compilación y los directorios de entrada/salida para el proyecto.

6. **`package.json`**:
   - Contiene las dependencias del proyecto y los scripts utilizados para ejecutar el proyecto o realizar pruebas.

## Explicación de las funciones de las clases

### bookController.ts

```typescript
class BookController {
    private books: Book[] = []; // Array privado que contiene los libros

    public getBooks(): Book[]; // Método para obtener todos los libros
    public getBookById(id: number): Book | string; // Método para obtener un libro por su ID
    public addBook(book: Book): Book; // Método para agregar un nuevo libro
    public updateBook(id: number, bookToUpdate: Partial<Book>): Book | string; // Método para actualizar un libro
    public deleteBook(id: number): string; // Método para eliminar un libro

    // Métodos privados
    private findBookIndexById(id: number): number; // Método privado devolver el índice del libro que contenga el ID
}
```

### libraryController.ts

```typescript
class LibraryController {
    private loans: Library[] = []; // Array que contiene todos los préstamos registrados
    private bookController: BookController; // Instancia de BookController
    private userController: UserController; // Instancia de UserController

    public loanBook(bookId: number, userId: number): string; // Método para realizar un préstamo de libro
    public returnBook(bookId: number, userId: number): string; // Método para devolver un libro
}
```

### userController.ts

```typescript
class UserController {
  private users: User[] = []; // Array que almacena todos los usuarios

  public getUsers(): User[]; // Método para obtener todos los usuarios
  public getUserById(id: number): User | string; // Método para obtener un usuario por su ID
  public addUser(user: User): User | string; // Método para añadir un nuevo usuario
  public deleteUser(id: number): string; // Método para eliminar un usuario

  // Métodos privados
  private findUserIndexById(id: number): number; // Método privado devolver el índice del usuario que contenga el ID
  private IsEmailValidForCreation(email: string): boolean; //Método privado para validar que se puede proceder con la creación del usuario
  private IsEmailDuplicated(email: string) : boolean; //Método privado para comprobar que el email introducido no pertenece a otro usuario existente
  private IsEmailEmptyString(email: string) : boolean; //Método privado para comprobar que el email introducido no es un string vacío
}
```

## Instalación y Uso

> Note: Se ha añadido al .gitignore la carpeta node_modules y los archivos JS compilados, para que el usuario que clone el repositorio, pueda empezar desde cero siguiendo los pasos indicados a continuación.

1. Clona el repositorio

2. Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```sh
npm install
```

3. Transpila el proyecto TS a JS ejecutando:

```sh
tsc
```

4. Ejecuta el proyecto (asegurate de tener instalado NodeJS en tu ordenador):

```sh
cd dist
```

```sh
node index.js
```