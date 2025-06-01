iK20250601

- place old files (particularly sass) in v1 legacy directory

- upgraded every package, including for it to work on node v24

- Switching from sass to css

  - because bootstrap was giving error warnings on the terminal as their package have not upgraded their sass
    they still use @import, but sass now use @use
  - I unnested all css too
    - because css nesting does not work property when using next.js npm run dev (next dev --turbopack) webpack

- I change the tsparticles to move slower & all the same for all media queries

- fixed all bugs

- Place all urls within config files, so now I just need to change that from now on for the future

# Ilshaad portfolio site

###### Frontend / React-Typescript app using Next.js

##### Author: _ilshaad Kheerdali_

##### Live site: [Ilshaad portfolio site](https://www.ilshaad.com/)

##### Github: [ilshaad/portfolio-ik](https://github.com/ilshaad/portfolio-ik)

## What is the app about?

Portfolio site to inform and showcase some of my work.

## Main technologies I used in the app:

- React
- Typescript / Javascript
- Next.js
- Sass / Bootstrap / React-Bootstrap
- Netlify
- PWA
- Docker
- Etc...

## Some key points about the app:

- I created the site myself, meaning no template was bought except for the use of next.js setup.
- Mobile first approach, design ranging `320px-1600px`.
- Contact form setup
- Etc...

#### Feel free to contact me if you want to know more about me or the app. Thanks
