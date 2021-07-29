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
import ncat from "@nationalfloodexperts/ncat";
```

Or if you're using CommonJS:

```js
const ncat = require("@nationalfloodexperts/ncat");
```

### Service Requests

You can make a service request by passing the parameters of that request to the name of the service that you're using (e.g. if you're making an SPC request, you'll call the SPC function like so: `ncat.SPC(parameters)`). The parameters are passed to the request as an object. The keys of the object correspond to the keys that are used in the query string. More information on each of the services, including what parameters are required for each kind of request and what kind of data they accept, can be found below organized by the service.

- [LLH Request](https://www.ngs.noaa.gov/web_services/ncat/lat-long-height-service.shtml)
- [SPC Request](https://www.ngs.noaa.gov/web_services/ncat/spc-service.shtml)
- [UTM Request](https://www.ngs.noaa.gov/web_services/ncat/utm-service.shtml)
- [XYZ Request](https://www.ngs.noaa.gov/web_services/ncat/xyz-service.shtml)
- [USNG Request](https://www.ngs.noaa.gov/web_services/ncat/usng-service.shtml)

#### Latitude-longitude-height Service Request

Perform an Latitude-longitude-height Service request.

```js
// Assuming you're in an async function
const response = await ncat.LLH({
  lat: 40.0,
  lon: -80.0,
  inDatum: "nad83(1986)",
  outDatum: "nad83(2011)",
});

console.log("LLH conversion");
console.log(response);
/*
Output:

{
  ID: '1627582660271',
  nadconVersion: '5.0',
  vertconVersion: '3.0',
  srcDatum: 'NAD83(1986)',
  destDatum: 'NAD83(2011)',
  srcVertDatum: 'N/A',
  destVertDatum: 'N/A',
  srcLat: '40.0000000000',
  srcLatDms: 'N400000.00000',
  destLat: '39.9999983008',
  destLatDms: 'N395959.99388',
  deltaLat: '-0.189',
  sigLat: '0.000263',
  sigLat_m: '0.0081',
  srcLon: '-80.0000000000',
  srcLonDms: 'W0800000.00000',
  destLon: '-79.9999976143',
  destLonDms: 'W0795959.99141',
  deltaLon: '0.204',
  sigLon: '0.000221',
  sigLon_m: '0.0052',
  srcEht: 'N/A',
  destEht: 'N/A',
  sigEht: 'N/A',
  srcOrthoht: 'N/A',
  destOrthoht: 'N/A',
  sigOrthoht: 'N/A',
  spcZone: 'PA S-3702',
  spcNorthing_m: '76,470.391',
  spcEasting_m: '407,886.681',
  spcNorthing_usft: '250,886.607',
  spcEasting_usft: '1,338,208.220',
  spcNorthing_ift: '250,887.109',
  spcEasting_ift: '1,338,210.896',
  spcConvergence: '-01 27 35.22',
  spcScaleFactor: '0.99999024',
  spcCombinedFactor: 'N/A',
  utmZone: 'UTM Zone 17',
  utmNorthing: '4,428,235.878',
  utmEasting: '585,360.668',
  utmConvergence: '00 38 34.18',
  utmScaleFactor: '0.99968970',
  utmCombinedFactor: 'N/A',
  x: 'N/A',
  y: 'N/A',
  z: 'N/A',
  usng: '17SNE8536028235'
}
*/
```

Override the default SPC Zone:

```js
const llhParameters = {
  lat: 40.0,
  lon: -80.0,
  inDatum: "nad83(1986)",
  outDatum: "nad83(2011)",
  spcZone: 3701,
};

ncat
  .LLH(llhParameters)
  .then((data) => {
    console.log("LLH response data w/ SPC Zone of 3701:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
```

#### SPC Service Request

Perform a SPC Service request:

```js
ncat
  .SPC({
    spcZone: 2402,
    inDatum: "nad83(2011)",
    outDatum: "nad83(NSRS2007)",
    northing: "173099.419",
    easting: "503626.812",
  })
  .then((data) => {
    console.log("SPC response data:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
```

#### UTM Service Request

Perform a UTM Service Request:

```js
ncat
  .UTM({
    inDatum: "NAD83(2011)",
    outDatum: "NAD83(NSRS2007)",
    utmZone: 15,
    northing: 4138641.144,
    easting: 547883.655,
  })
  .then((data) => {
    console.log("UTM response data:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
```

#### XYZ Service Request

Perform a XYZ Service Request:

```js
ncat
  .XYZ({
    inDatum: "NAD83(2011)",
    outDatum: "NAD83(NSRS2007)",
    x: -217687.279,
    y: -5069012.406,
    z: 3852223.048,
  })
  .then((data) => {
    console.log("XYZ response data:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
```

#### USNG Service Request

Perform a USNG Service Request:

```js
ncat
  .USNG({
    usng: "15SWB4788338641",
    inDatum: "NAD83(2011)",
    outDatum: "NAD83(NSRS2007)",
  })
  .then((data) => {
    console.log("USNG response data:");
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
```
