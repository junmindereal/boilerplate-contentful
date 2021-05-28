## Getting Started

### Dependencies

Check if additional dependencies are required/listed and updated. 

Here are the core additional dependencies for this project:

#### dependencies

- @contentful/rich-text-react-renderer
- contentful
- graphql
- graphql-request
- tinytime

#### devDependencies

- @tailwindcss/typography
- autoprefixer
- postcss
- tailwindcss

### Adding a dependency

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### Add to `devDependencies`

```bash
yarn add [package] --dev
```

### Upgrading a dependency

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### Removing a dependency
```bash
yarn remove [package]
```

### Installing all the dependencies of project
```bash
yarn
```

or

```bash
yarn install
```

## File Structure

```
├── components
│   └── blogDetail
│       ├── index.jsx
│       └── styles.js
│
├── pages
│   ├── _app.js
│   ├── index.js
│   └── about
│       └── index.jsx
│
├── public
│   ├── images
│   │   └── sample.jpg
│   └── fonts
│       └── inter-var-latin.woff2
│
└── utils
    └── queries.js
```

### Components

`index.jsx` contains code for our component like so:

```jsx
/* components/aboutDetail/index.jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from '@/components/card/index'
import { styles } from './styles'

export default function AboutDetail ({ about }) {
  const {
    article,
    title,
    content,
    aside
  } = styles

  return (
    <>
      <article className={article}>
        <section className={content}>
          <h1 className={title}>{about.title}</h1>
          <div>{documentToReactComponents(about.content.json)}</div>
        </section>
        <aside className={aside}>
          <Card data={about} />
        </aside>
      </article>
    </>
  )
}
```

`styles.js` contains all of our style in a specifc components like so:
```JavaScript
/* components/aboutDetail/styles.js */
export const styles = {
  article: `
    grid
    lg:grid-cols-3
    lg:gap-6
  `,
  content: `
    prose
    max-w-none
    lg:prose-lg
    lg:pr-8
    lg:col-span-2
    dark:prose-dark
  `,
  time: `
    text-sm
    text-gray-500
    dark:text-gray-400
  `,
  title: `
    bg-clip-text
    bg-gradient-to-r
    from-orange-400
    to-pink-600
  `,
  aside: `
    mt-12
    lg:mt-0
  `
}

```

## Configuration

### `jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "node_modules",
    "paths": {
      "@/*": [
        "../*"
      ]
    }
  }
}
```

We use this configuration to easily import modules in this manner:
```jsx
import Card from '@/components/card/index'
```
Where `@` is the root project directory for development

### `next.config.js`

```JavaScript
module.exports = {
  pageExtensions: ['jsx', 'js'],
  images: {
    domains: ['images.ctfassets.net']
  }
}
```

- `pageExtensions` let us work with other files like `jsx`
- `images` let us use the `Image` component from NextJS when the images are coming from a third party source

### tailwindcss



You can read in depth documentation for NextJS [here](https://tailwindcss.com/docs/guides/nextjs)


