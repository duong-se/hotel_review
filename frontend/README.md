# Hotel review apps
## Techstacks
1. React
1. React-Query
1. Material UI
1. Axios
1. Chart JS

## Available Scripts
### `yarn`
To install dependencies
### `yarn test`
For running test
### `yarn test:coverage`
For running test coverage
### `yarn build`

## Structure
### Components
The reusable component will put to this folder
### Pages
The pages of the app will put to this folder
### Hooks
Store reusable hooks entire the app
### Constants
Store all constants
### APIs
Store all api calls to backend services
### Typings
Store all types using in the app except Props of components
### Utils
All ultilities function will store to this folder

## Code coverage
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------
All files                     |   94.91 |    97.05 |   94.87 |   95.57 |
 src                          |      50 |      100 |      50 |      50 |
  App.tsx                     |   85.71 |      100 |   66.66 |     100 |
  index.tsx                   |       0 |      100 |     100 |       0 | 6-9
  setupProxy.js               |       0 |      100 |       0 |       0 | 1-3
 src/apis                     |     100 |      100 |     100 |     100 |
  axiosInstance.ts            |     100 |      100 |     100 |     100 |
  reviews.ts                  |     100 |      100 |     100 |     100 |
 src/components               |     100 |      100 |     100 |     100 |
  HotelReviewSummaryTable.tsx |     100 |      100 |     100 |     100 |
  HotelReviewTable.tsx        |     100 |      100 |     100 |     100 |
  ReviewCategorySelection.tsx |     100 |      100 |     100 |     100 |
  ReviewScoreSelection.tsx    |     100 |      100 |     100 |     100 |
  TypeSelection.tsx           |     100 |      100 |     100 |     100 |
 src/constants                |     100 |      100 |     100 |     100 |
  constants.ts                |     100 |      100 |     100 |     100 |
 src/hooks                    |     100 |      100 |     100 |     100 |
  useQueryParams.ts           |     100 |      100 |     100 |     100 |
  useReviews.ts               |     100 |      100 |     100 |     100 |
 src/pages                    |     100 |       95 |     100 |     100 |
  ReviewPage.tsx              |     100 |      100 |     100 |     100 |
  SummaryPage.tsx             |     100 |     87.5 |     100 |     100 | 66
 src/typings                  |       0 |        0 |       0 |       0 |
  types.ts                    |       0 |        0 |       0 |       0 |
 src/utils                    |     100 |      100 |     100 |     100 |
  utils.ts                    |     100 |      100 |     100 |     100 |
------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 13 passed, 13 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        6.726 s
Ran all test suites.
✨  Done in 8.23s.
