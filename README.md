
<h1 align="center">Covid-19 Live Dashboard</h1>


## Build the Angular project

```sh
npm install
```

```sh
ng build
```


## Run the Angular Project

```sh
npm install
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
  private host = "https://api.coronastatistics.live"
```

# API Endpoints

* http://api.coronastatistics.live/all
* http://api.coronastatistics.live/countries
* http://api.coronastatistics.live/countries?sort={parameter}
* http://api.coronastatistics.live/countries/{country_name}
* http://api.coronastatistics.live/timeline
* http://api.coronastatistics.live/timeline/global
* http://api.coronastatistics.live/timeline/{country_name}
