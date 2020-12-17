# Shopping Tracker Project

This project was created as past of a frontend react assignment from the company Herolo. \
This is a simple shopping tracker to help keep track with your online purchases.\
The project is backed by frontend tests (written in cypress) with CICD to github actions. The app deploys to github pages on every push to master.\
The app is responsive both for smartphones and desktops.

Important to note, the project was created for presentation purposes, therefore it uses mock data, meaning the data is not persisted (the data you insert will not be saved in db, nor local storage). \
Local storage **is** used to save user preferences such as theme and currency.

## GitHub Pages Link

https://amirdebbie.github.io/Amir-Debbie-15-12-2020/

**This app is also a PWA (Progressive Web App), meaning you can download it.** \
To download the app:
- Open the link to GitHub pages.
- On the url bar, you should see a plus icon or an arrow icon - click on it and open the app.
- The app will open in PWA form and an icon will be added to your desktop.

**PWA Demo**

![Gif](readmeFiles/KXheg6Xqmx.gif)
## How To Run
1. Clone the repo to your machine

2. Go to the project directory

3. Run `cd shopping-tracker` and `npm install` to install frontend dependencies.

4. Run `npm start` to start react in development mode.

5. If you want, in a different terminal run `cd shopping-tracker` and `npx cypress open` to view and run the tests. Be sure that the app is running on port 3000 before starting the tests, otherwise they will fail.

## Main Technologies

- React
- Redux
- styled-components
- Testing (Cypress Library)

## Demo GIF

![Gif](readmeFiles/D4nIfprwFe.gif)

