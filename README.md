# store-page-app

## This is a simple frontend for a store page; it connects with [this API](https://github.com/FSolM/shopping-page-api) for its operations.

### Installation

This application was made using the `React.js` framework. To run it, first install the necessary `NODE` dependencies with `npm`:

```
$ npm i
```

To run the project, run the following command:

```
$ npm run start
```

It will start the application in the 3000 port.

### About

This is a simple frontend made in `React.js` that works as a online store. It allows to add products in a basket and keep track of all total of products in the cart, as well as the total price of them.

The page is as bare-bones as possible, I tried to capture the basic essence of a store page without going that overboard with all the components of it. I didn't wanted to add anything as fancy as a state manager like `Redux` to the page because I don't want for it to feel too complicated, though I understand the benefits (and this project could've certainty benefit from them).

All the connections to the API are made through `axios` (I find it easy to use and I like it).

The page contains some `.svg` files stored under `assets/images` and rendered as images.

All the `css` files are store under `assets/css`; I didn't organized them in sub-folders because I didn't find it necessary, though if the project is to grow, additional folders as well as a `css preprocessor` are **highly** recommended.

I tried to keep the *atomic design* in mind while creating the components, but going all in on it would've taken me more time than I could afford; regardless, I find the final general structure of the project more than flexible enough for any more implementations or changes.

### Notes

- The cart container won't update real time, to see the changes you must close and open it again (this is where `Redux` could've come in handy).
- Don't click the store icon in the nav, just don't click it.
