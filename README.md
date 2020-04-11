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
npm run build
git add . && git commit -m "commitMessageHere" && git push
firebase deploy
