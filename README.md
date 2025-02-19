# Listr

A dead simple rebuild of a dead simple list app.

See the original [here](https://github.com/jamesaspence/listr). It had a good run, but it was time for a change.

## Why

- CRA has been officially deprecated as of 2025, and had not been updated in years.
- The original code base was getting pretty old in general. I would likely have ended up scrapping most of the code anyways.
- I wanted a clean slate and a fresh start.
- I'm an adult and I can do what I want, so _why not?_

## Planned Features

Listr 2.0 will eventually have feature parity with 1.0. On top of that, 2.0 is planned to include:

- Multi-list support: create separate lists for separate things.
- Light/dark themes: Set your preferred theme and have it save to your browser
- Some ability to persist settings / state across devices, likely an export/import button for lists.

## Stack
- Vite
- React
- Redux
- CSS Modules

## Local Development

```shell
yarn;
yarn dev;
```

This will install your dependencies and start up the app locally using Vite.

## Builds

`yarn build` will generate a build artifact at `dist`, that you can use to run the app locally.

### Docker

If you'd prefer, you can build and run the app via docker. There is a provided `Dockerfile` under the `docker directory. As an example:
```shell
cd /path/to/listr;
docker build -f docker/Dockerfile -t listr:latest .;
docker run --rm -p 8080:80 listr:alpha; 
```

This will build a docker image that serves up the static assets via nginx.
