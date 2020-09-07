<p align="center">
  <a href="" rel="noopener">
 <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/logo__large_plus.png" alt="Project logo"></a>
</p>

<h3 align="center">mercadolibre-frontend-backend</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Coding Challenge en React + Nodejs para Mercadolibre
    <br> 
</p>

## 📝 Contenidos

- [Sobre el Proyecto](#about)
- [Comenzando](#getting_started)
- [Deploy](#deployment)
- [Tecnologias](#built_using)
- [Authors](#authors)

## 🧐 Sobre el Proyecto <a name = "about"></a>

Este proyecto es una demo del buscador de MercadoLibre se hizo utilizando el siguiente stack:
* Para el Front:
  * ReactJS
  * React Router v5
  * React Bootstrap 
  * Axios
* Para el Back
  * NodeJS,
  * TypeScript
  * Express
  * Axios

## 🏁 Comenzando <a name = "getting_started"></a>

Estas son las instrucciones para correr el proyecto de manera local para propositos de desarrollo. ver [deployment](#deployment) Para referencias de como hacer para correrlo en modo producción

### Pre Requisitos

Correr `npm install` en ambos directorios

### Installing
En el Back:
Ejecutar **npm install** para instalar todas las dependencias
Ejecutar **npm run dev** para poder correr en modo entorno de desarrollo
En el Front:
Ejecutar **npm install** para instalar todas las dependencias
Ejecutar **npm run start** para poder correr en modo entorno de desarrollo
 
Ejemplo de Consulta a la api
```
GET localhost:3001/api/items?search=PS4
GET localhost:3001/api/items?search=PS4&take=20
GET localhost:3001/api/items/MLA877248014
```

## 🚀 Deployment <a name = "deployment"></a>

Para correr una version en un ambiente de produccion:
En el front:
  Correr **npm run build**
En el back:
  Correr **npm run prod**

## ⛏️ Tecnologias <a name = "built_using"></a>

- [ReactJS](https://es.reactjs.org/) - JavaScript Library
- [React Router](https://reactrouter.com/web/) - Collection of navigational components
- [React Bootstrap](https://react-bootstrap.github.io/) - React Ready Bootstrap
- [React i18n](https://react.i18next.com/) - Internationalization framework for React
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [TypeScript](https://nodejs.org/en/) - Programming Language (Javascript SuperSet)
- [Express](https://expressjs.com/) - Server Framework
- [Axios](https://nodejs.org/en/) - Promise based HTTP Client

## ✍️ Autor <a name = "authors"></a>

- [@lfelisiak](https://github.com/lfelisiak)
