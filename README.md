# coopdevs.org

This is a jekyll page. 

Run `jekyll build` to build the site, this will generate a static page in the `_site` folder.

In your local environment, run `jekyll serve` in order to serve the generated site.

## Adding a blog post

Write your blog post as a Markdown file in `_i18n/ca/_posts` and `_i18n/es/_posts`. Although we might not translate the content to both languages, we duplicate it to avoid 404 pages when switching languages.

When adding images, please watch their size and weight. Compress them using something like [TinyPNG](https://tinypng.com/) and scale them to 2048px wide at most.

## Adding a job offer

We write job offers as we do with blog posts. As we don't have any positions open at the moment we have the "jobs" section disabled. To enable it back you need to revert the changes applied in [2b9fd9bcea0952694f8a7bad5286cf432076ded3](https://github.com/coopdevs/coopdevs.github.io/pull/45/commits/2b9fd9bcea0952694f8a7bad5286cf432076ded3).

Then, simply add the offer as a Markdown in [_jobs](https://github.com/coopdevs/coopdevs.github.io/tree/master/_jobs).

## Development

### Requirements

* Ruby 2.6.3. We recommend you install it with [rbenv](https://github.com/rbenv/rbenv#installation)
* Bundler 1.17.2. You can install it with `gem install bundler -v 1.17.2`.
* Yarn 1.17.3. See installation [instructions](https://yarnpkg.com/en/docs/install#debian-stable)

After checking out the repo and having the listed requirements installed, run `bundle install` and then `yarn install` to all install dependencies.

We use two branches: `master` holds only static files and serves the site through Github pages, while `develop` is the default branch. This one should be the target of all pull requests.

### Dev mode

To run the site in development you need to start the Jekyll server by running

```
bundle exec jekyll serve
```

Note this server will watch the site files and reload accordingly.

### Live reload

To speed up development you can make use of live reloading: watch your browser reload your changes as you save them. This way it's much faster to implement a design as you don't even take your fingers out of the keyboard :tada:. Run it with the following command alongside your jekyll server

```
bundle exec guard
```

## Deployment

### Continous Deployment

This project implements Continuous Deployment with Circle CI in [.circleci/config.yml](https://github.com/coopdevs/coopdevs.github.io/blob/develop/.circleci/config.yml) which means that all pull requests merged into `develop` will end up deployed to production when passing all checks.

So far, for new pull requests we only check they build successfully using `bundle exec jekyll build` but this can be extended in the future to add extra checks like linting or automated tests.

It's when the PR merged into `develop` that the Circle CI workflow builds and pushes the site to GitHub pages.

### Manual Deployment

Note that with the process described above we shouldn't need to run any manual deploys. However, in the event of a failure it's worth having an alternative process.

Once your pull request is approved, merge it to `develop`. Then, from your local environment, change the branch to `develop`, pull the changes and run `./deploy`. This will build and deploy `develop`'s contents to `master` making them live straight away.

## Prueba

Probando github
