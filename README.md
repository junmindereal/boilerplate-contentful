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
│   ├── img
│   │   └── sample.jpg
│   └── img
│       └── sample.jpg
│
└── utils
    └── queries.js
```

This is the folder structure of the project
