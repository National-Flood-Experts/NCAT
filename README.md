# NCAT

<p align="center">
    <img src="https://img.shields.io/bundlephobia/min/@nationalfloodexperts/ncat" />
    <img src="https://img.shields.io/npm/v/@nationalfloodexperts/ncat" />
    <img src="https://img.shields.io/github/package-json/dependency-version/national-flood-experts/ncat/axios" />
    <img src="https://img.shields.io/npm/l/@nationalfloodexperts/ncat" />
</p>

A JavaScript wrapper for NGS’s Coordinate Conversion and Transformation Tool (NCAT) API. More information about the API is available [here.](https://www.ngs.noaa.gov/web_services/ncat/index.shtml)

## Features

- Validates parameters that are passed to make the NGS API calls
- Can make calls to all 5 NCAT services (LLH, SPC, UTM, XYZ, and USNG)
- Promise based API

## Installation

Using npm:

```
npm install @nationalfloodexperts/ncat
```

## Examples

Include the package in your project:

```js
const ncat = require('@nationalfloodexperts/ncat');
````

If you're using CommonJS:

```js
const ncat = require('@nationalfloodexperts/ncat').default;
````

### Service Requests

You can make a service request by passing the parameters of that request to the name of the service that you're using (e.g. if you're making an SPC request, you'll call the SPC function like so: ```ncat.SPC(parameters)```). The parameters are passed to the request as an object. The keys of the object correspond to the keys that are used in the query string. More information on each of the services, including what parameters are required for each kind of request and what kind of data they accept, can be found below organized by the service.

- [LLH Request](https://www.ngs.noaa.gov/web_services/ncat/lat-long-height-service.shtml)
- [SPC Request](https://www.ngs.noaa.gov/web_services/ncat/spc-service.shtml)
- [UTM Request](https://www.ngs.noaa.gov/web_services/ncat/utm-service.shtml)
- [XYZ Request](https://www.ngs.noaa.gov/web_services/ncat/xyz-service.shtml)
- [USNG Request](https://www.ngs.noaa.gov/web_services/ncat/usng-service.shtml)

#### Latitude-longitude-height Service Request

Perform an Latitude-longitude-height Service request.

```js
ncat
    .LLH({
        lat: 40.0,
        lon: -80.0,
        inDatum: 'nad83(1986)',
        outDatum: 'nad83(2011)'
    })
    .then(data => {
        console.log('LLH response data:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```

Override the default SPC Zone:
```js
const llhParameters = {
    lat: 40.0,
    lon: -80.0,
    inDatum: 'nad83(1986)',
    outDatum: 'nad83(2011)',
    spcZone: 3701
};

ncat
    .LLH(llhParameters)
    .then(data => {
        console.log('LLH response data w/ SPC Zone of 3701:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```

#### SPC Service Request

Perform a SPC Service request:

```js
ncat
    .SPC({
        spcZone: 2402,
        inDatum: 'nad83(2011)',
        outDatum: 'nad83(NSRS2007)',
        northing: '173099.419',
        easting: '503626.812'
    })
    .then(data => {
        console.log('SPC response data:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```

#### UTM Service Request

Perform a UTM Service Request:

```js
ncat
    .UTM({
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        utmZone: 15,
        northing: 4138641.144,
        easting: 547883.655
    })
    .then(data => {
        console.log('UTM response data:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```

#### XYZ Service Request

Perform a XYZ Service Request:

```js
ncat
    .XYZ({
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)',
        x: -217687.279,
        y: -5069012.406,
        z: 3852223.048
    })
    .then(data => {
        console.log('XYZ response data:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```

#### USNG Service Request

Perform a USNG Service Request:

```js
ncat
    .USNG({
        usng: '15SWB4788338641',
        inDatum: 'NAD83(2011)',
        outDatum: 'NAD83(NSRS2007)'
    })
    .then(data => {
        console.log('USNG response data:');
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    });
```
