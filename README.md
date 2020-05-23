
<h1 align="center">Covid-19 Live Dashboard</h1>

## Check for dependencies

```sh
node -v
npm -v
```
#### Install ng

```sh
npm install -g @angular/cli
```


## Build the Angular project

```sh
npm install
```
Maybe

```sh
npm run serve
```

```sh
ng build
```


## Run the Angular Project

```sh
npm install
```

Maybe

```sh
npm run serve
```

```sh
ng serve
```

## Run the Node.js Project (open server folder)

Rename config.example.json to config.json and fill in the details

```
{
  "redis": {
    "host": "host",
    "password": "1234"
  },
  "keys": {
    "all": "coronastatistics:all",
    "countries": "coronastatistics:countries",
    "timeline": "coronastatistics:timeline",
    "timelineglobal": "coronastatistics:timelineglobal"
  },
  "interval": 600000
}
```

```sh
npm install
```

```sh
node server.js
```
Edit src/app/core/services/getdata.service.ts and replace with your own api url.

```
  private host = "https://api.covid19api.com/country/us/status/deaths"
```

# API Endpoints

* https://api.covid19api.com/all
* https://api.covid19api.com/countries
* https://api.covid19api.com/countries?sort={parameter}
* https://api.covid19api.com/countries/{country_name}
* https://api.covid19api.com/timeline
* https://api.covid19api.com/timeline/global
* https://api.covid19api.com/timeline/{country_name}
