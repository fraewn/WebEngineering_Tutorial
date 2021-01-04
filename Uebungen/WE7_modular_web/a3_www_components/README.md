## Run 
* npm i 
* install lit element 
* install es-dev-server
````
npm i 
npm i lit-element
npm i -D es-dev-server
````

* add serve script to package.json
```
 {
   "scripts": {
     "serve": "es-dev-server --app-index index.html --node-resolve --watch --open"
   }
 }
```

* run via newly installed server: 
```
npm run serve
```