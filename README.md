# React Start Kit

A minimum viable React app with [`Parcel Bundler`](https://parceljs.org)
Based on [`create-react-app`](https://github.com/facebook/create-react-app)

**What's inside?**

* `parcel-bundler`
* `react`
* `react-dom`
* `react-helmet`
* `react-router`
* `react-router-dom`
* `react-preloading-component`
* `node-sass`
* `hystory`
* `babel`
* `antd`
* `autoprefixer`
* `immutable`
* `moment`
* `lodash`

## Project structure

* `root folder`
    - `dist` compiled application distributive
    - `src` application
        * `actions` Redux actions folder
        * `components` React components
        * `entries` Application entry
        * `fonts`
        * `images`
        * `reducers` Redux reducers folder
        * `scss`
        * `utils` React utils

## Getting started

1. Clone `git clone http://gitlab.itua.com.ua/Tkachuk/react-start-kit.git`
2. Install `yarn` from [`here`](https://yarnpkg.com/) or `npm install yarn --global`
3. Install dependencies `yarn`
4. Start project `yarn start`

Then open `http://localhost:1234` and edit `index.js` and press save. Parcel
will automagically hot reload you files whenever you make changes.

## Building for Production

```
npm run build
```

This will compile your JS and copy your `index.html` to the `dist` folder which
you can deploy wherever as a good ol' webpage.

## CSS

[`Parcel uses PostCSS plugins to manage CSS assets`](https://parceljs.org/transforms.html#postcss).
I've included `autoprefixer` for vendor prefixing with the same setup as
`create-react-app`. You can find and modify the PostCSS setup in `package.json`.
If you'd rather keep your PostCSS setup in a dotfile, you can delete the
`postcss` key from `package.json`, and place its contents in a `.postcssrc` file
too.

## Folder structure and relative paths

Keeping everything in the root directory obviously won't scale past a point.
Parcel is very flexible about folder structure, but there are a few gotchas.

### Moving JS entry

When you do move index.js just make sure to update the `<script>` tag in
`index.html` so that it points to the correct relative path.

For example, if you want to move `index.js` to `src/index.js`, you would need
make the following change to `index.html`:

```
<   <script src="./index.js"></script>
---
>   <script src="./src/index.js"></script>
```

### Moving `index.html`

If you want to move `index.html`, you will need to update your npm scripts in
`package.json` with the new relative path.

## Deployment

Refer to the deployment guide in `create-react-app`, just note that you will
need to account for the fact that Parcel builds out to a `dist` directory, while
CRA builds to a `build` directory. You can make it identical by adding
`--out-dir build` to both `start` and `build` npm tasks in `package.json`.

# Tools

## Ant Design 

> UI Library for React 
[`Documentation`](https://ant.design/components/grid/)

### Features
+ An enterprise-class UI design language for web applications.
+ A set of high-quality React components out of the box.
+ Written in TypeScript with complete defined types.
+ The whole package of development and design resources and tools.

### Environment Support
+ Modern browsers and `Internet Explorer 9+` (with polyfills)
+ Server-side Rendering
+ [`Electron`](https://electronjs.org/)

## moment.js

> Parse, validate, manipulate, and display dates and times in JavaScript.
[`Documentation`](https://momentjs.com/docs/)

## Helmet

> Document head manager
[`Documentation`](https://github.com/nfl/react-helmet)

# Routing

In the current version is used for routing `react-router`.

> [`React routing documentation`](https://reacttraining.com/react-router/core/api/Router)

**Область роутинга** - Содержимое компонента `Content`:
```
<Switch>
    <Route exact path="/" component={Home} /> // Pages/Home
    <Route path="/catalog" component={Catalog} /> // Pages/Catalog
    <Route component={NotFound} /> // NotFound - объект, который выводится в случае ошибки 404.
</Switch>
```
**Роутинг** - Переключение компонентов в области роутинга. Например переход со страницы `Pages/PageA` на страницу `Pages/PageB`.
Конструкция роутинга выглядит следующим образом.
Как обёртка используется `Router`, 
который в свою очередь синхронизирован с [`history`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md) с помощью такой конструкции:
```
<Router history={history}>
    <LayoutMain />
</Router>
```
Дочерний компонент `LayoutMain` является стартовым для вывода основных UI-компонентов, которые мы импортируем из `antd Layout`:
* `Header`
* `Footer`
* `Sider`
* `Content`

Роутинг осуществляется компонентом `Link`:
```
<Link to={'/'}> Home </Link>
<Link to={'/catalog'}> Catalog </Link>
```
> **Важно!** Компоненты `Route`, `Switch` и `Link` должны находится в области видимости компонента `Router`!

# TODO:

1. Implement `helper-sidebar`
2. Implement `SEO requirements`
3. Implement `Redux`
4. Implement `DVA` solution from [`this documentation`](https://ant.design/docs/react/practical-projects) 

## Enjoy;)