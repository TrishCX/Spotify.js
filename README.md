# Spotify JS

`@imax.i7/spotify.js` is a lightweight JavaScript library that allows you to fetch data from Spotify.

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

- [Github](https://github.com/TrishCX/Youtube-Suggestion)

# License

ISC
