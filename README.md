# https://www.narro.app

## narro-app

### Dev Server on port 8080

mevn serve

### Build Vue App:

npm run build

### Serve on port 5000 with firebase server

#### Must build first

firebase serve

### GitHub (Push Git)

git add . && git commit -m "commitMessageHere" && git push

### Deploy (from /narro-app/client)

firebase deploy

## How to deploy after update:

cd client
npm run build
firebase deploy
cd ../
git add . && git commit -m "commitMessageHere" && git push

```
# Original Instructions Below
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
