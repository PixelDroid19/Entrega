This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ¿Qué es Context API? 

Según React, Context “proporciona una forma de pasar datos mediante el árbol de componentes sin pasar props manualmente a todos los niveles”. Context es parte de React desde hace mucho tiempo, por eso Redux lo utiliza. Por ejemplo, en el componente Provider de la API antigua de Context.

### ¿Por qué utilizar Context API?

En React normalmente se pasan los datos de padre a componente hijo, mediante propiedades (props). Lo que pasa es que este método no funciona correctamente en todos los casos, o para todos los tipos de datos.

Context se diseñó con el objetivo de compartir datos considerados “globales” para un árbol de componentes de React.