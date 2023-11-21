# Stan Coding Challenge
by Jeremiah Blanch (<jeremiahblanch@gmail.com>)

## Setup instructions

### Building and running

1. `npm install`
1. `npm run build`
1. Navigate to `/dist/` and open index.html in a web server. Note: you need an actual web server. you cannot just open `index.html` in a browser. I use the [LiveServer](<https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>) extension in VSCode.

### Running the Dev server (easier)

1. `npm install`
1. `npm run dev`

## Tests or other documentation you created as part of your solution.

### Jest tests

To run the jest tests, simply run `npm run test`.
There are only Jest tests for the functions within the `/utils/` folder: `sieve()`, `createFilterPredicate()` and `createSorter()`. I had some trouble getting my React tests to work nicely with the `BrowserRouter` and did not have the time to fix those problems, so I did not include them.

## How did you decide on the technical and architectural choices used as part of your solution?

### Fetching data at top level and providing it via `ApiDataProvider` context

The instructions specified to "fetch this JSON feed, *then* Display the first ... where ... sorted". So, I fetched all the data and then filtered and sorted it within the client. In a traditional application I would probably pass all these parameters (filter, sort, limit, page) to the server, so the client would not retrieve unnecessary data. However these instructions were explicit. Is this because a TV application does not need to refresh its list of shows very often?

Because I did not need to re-fetch the JSON feed, I placed the `ApiDataProvider` context high up on the page so that this data would be fetched on the root screen, before the user clicks either "Movies" or "Series".

### Separate context for sieving: `SieveProvider`

(I use "sieve" to refer to filtering/sorting/paginating). The `SieveProvider` handles filtering, sorting, and paginating the data passed from the `ApiDataProvider`. Even though the instructions do not specify user input for these values, I have built my solution so user input could be added in.

The `ShowsPage` has state variables for `filter`, `sortField`, `limit` etc and the `SieveProvider` receives these as props. A `QueryControls` component could be added to the `ShowsPage` which would be use to set these state variables. Those values would then get passed automatically to `SieveProvider` which would re-parse the data to display a new set of tiles. `filter` has been built as an array with support for different comparisons, so that filtering on multiple fields at once would be possible.

Within `SieveProvider` I used 3 separate `useEffect` hooks:

1. to do the actual sieving (filtering, sorting, paginating) - this will be triggered if the data, or sieving parameters change.
1. to create filter predicates - this will be triggered if the filter values change. It is a separate `useEffect` hook to the actual sieving hook so we do not unnecessarily recreate the filter predicates when we don't have to.
1. to create a sorter function - similar to the filter predicate `useEffect` hook, it is separate so we don't recreate the sorter function unnecessarily

## Are there any improvements you could make to your submission?

### Testing

#### Testing of The React Components

I was not able to get my Jest tests working with the `BrowserRouter` component. I was using `@testing-library/jest-dom` and `@testing-library/react`. If I had more time I would get these working.

#### More thorough unit tests

The unit tests I made were very basic. With more time I would have made more comprehensive unit tests, eg testing with empty arrays and null values etc.

### Images

#### Load smaller images

I only had access to the huge poster images. If this was a live application showing images at the size in the screen shots: approx 135x200, then we should have images of that size on the server.

#### Display tile size as a percentage of screen width

Rather than a fixed size, we could use breakpoints based on width to determine if we show 2/3/4/5/6/7 tiles across in a row. Then we size the tiles based on a percentage derived from this, thus the tile images always fill the screen.

## What would you do differently if you were allocated more time?

### Improve Tests

See above

### Use SVGs wherever possible

The Movies" and "Series" tiles on the home screen are JPGs, because the original screens provided were JPG. These are vector looking images and should be SVG.

### Pre-loading images

Since we know in advance what the default sieving parameters are before we render `ShowPage`, we could use this to derive the list of movies and series in advance of showing those pages and then load the images for those movies/series before we actually render the page.

### CSS pre-processing, use Rems

Use SASS for the CSS, write all dimensions in rems, but use a SASS function to convert pixels to rem so that the source code still has values in pixels.

Or, use scoped styling / styled components, depending on the larger architecture.
