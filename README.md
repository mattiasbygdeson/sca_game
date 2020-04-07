# SCA GAME

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Adding new materials

1) Create a new folder under "products"

2) This folder should contain two subfolders - one for game images named "woodboards" and one for guide images called "guides". Add all the assets you need

3) Create a javascript file in the main folder. This javascript file should contain all the links to the different materials and text strings. Copy and use a previously made javascript file to get the correct structure

4) Import the new javascript file in App.vue

5) In the function called "setContent" there's a switch statement for different product types. Add your new product type to include it in the game

6) In Header.vue there's a drop down menu. Add your new product type there as well so it can be selected
