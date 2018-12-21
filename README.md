# coopdevs.org

This is a jekyll page. 

Run `jekyll build` to build the site, this will generate a static page in the `_site` folder.

In your local environment, run `jekyll serve` in order to serve the generated site.

## Adding a blog post

Write your blog post as a Markdown file in [_posts](https://github.com/coopdevs/coopdevs.github.io/tree/master/_posts).

When adding images, please watch their size and weight. Compress them using something like [TinyPNG](https://tinypng.com/) and scale them to 2048px wide at most.

## Adding a job offer

We write job offers as we do with blog posts. Simply add the offer as a Markdown in [_jobs](https://github.com/coopdevs/coopdevs.github.io/tree/master/_jobs).

## Development

We use two branches: `master` holds only static files and serves the site through Github pages, while `develop` is the default branch. This one should be the target of all pull requests.

## Deployment

Once your pull request is approved, merge it. Then, from your local environment change the branch to `develop`, pull the changes and run `./deploy`. This will build and deploy `develop`'s contents to `master` making them live straight away.
