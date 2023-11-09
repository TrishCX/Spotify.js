# Spotify JS

`@imax.i7/spotify.js` is a lightweight JavaScript library that allows you to fetch data from Spotify.

  <p>

<p>
  <a href="https://github.com/TrishCX/Spotify.js" target="_blank">
    <img src="https://img.shields.io/npm/v/@imax.i7/spotify.js.svg" alt="Build Status">
  </a>
  <a href="https://github.com/TrishCX/Spotify.js" target="_blank">
    <img src="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg" alt="Codecov" />
  </a>
  <a href="https://github.com/TrishCX/Spotify.js" target="_blank">
    <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@imax.i7/spotify.js.svg" target="_blank">
    <img src="https://img.shields.io/npm/dt/@imax.i7/spotify.js.svg" />
  </a>
  
</p>
<p>
  
</p>

## Prerequisites

- NodeJS v16+

## Installation

You can install `@imax.i7/spotify.js` using npm or yarn:

```bash
npm install @imax.i7/spotify.js
# or
yarn add @imax.i7/spotify.js
```

## Usage

```js
const Spotify = require("@imax.i7/spotify.js").default;
```

## Example

```js
const Spotify = require("@imax.i7/spotify.js").default;

Spotify.getTrack("2cGxRwrMyEAp8dEbuZaVv6").then((response) =>
  console.log(response)
);
```

## Todo list

- Add a search function.
- Add related tracks/artists/playlist function.
- Add get track canvas function.

# Links

- [Github](https://github.com/TrishCX/Spotify.js)

# License

ISC
