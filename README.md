# J. Bradford Advisory

The original `create-next-app` documentation is included as `README.next.md`.
See the [`Next.js` documentation](https://nextjs.org/docs/getting-started) to learn more about `next`.

See the [`typescript` handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) for information about `typescript`.

## Setup

1. clone the repo
1. `yarn` to install packages
1. edit the meta properties
   - name, version, description, author, and deploy command in package.json
   - title and meta description in `src/components/meta/Head.tsx`
   - change the favicon in the `public`

## Running Locally

There are 2 ways to run the app locally:

- `yarn dev`
- `yarn build:serve`

`dev` uses a `development` next.js dev configuration. This is what should be used for regular development (defaults to port 3000).

`build:serve` runs the `build` command to create a production build of the app, then serves that build via a local server (defaults to port 3003). This should be used for things like lighthouse score, etc. You can modify the port used by modifying the value after the `-p` flag for the `build:serve` command in `package.json`.

## Development

Most of the things that could be covered here are probably covered by the `next` docs (linked above), but there are a few configuration things worth touching on:

1. This site uses [`Mantine`](https://mantine.dev/) as a base component library. See their documentation for available props, theme configuration, etc.
2. For additional styling / customization [`emotion/react`](https://emotion.sh/docs/introduction) and [`emotion/styled`](https://emotion.sh/docs/styled) are included. See the `emotion/styled` documentation for on its usage.
3. For testing, this repo inculdes [`jest`](https://jestjs.io/docs/getting-started) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/). Your test files should follow the `Component.test.tsx` naming pattern, which will allow `jest` to find them automatically. Use `yarn test` to run your tests.

## Deploying

Before deploying, run `yarn build` to make a production build of your app, then follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) to deploy on Vercel.

## TODOs

1. Investigate custom `deploy` command to automate more of the deployment process
