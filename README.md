# Travis CI demo

This project is a very simple test suite intended to demonstrate use of the Travis CI continuous integration platform.
The `index.js` file contains a few functions and the `tests/unit.test.js` file contains a test suite for these functions.

<!-- START doctoc -->
<!-- END doctoc -->



## Requirements

* [Node.js][node] 10.x



## Usage

### Run the test suite locally

Fork this repository by clicking the **Fork** button:

![Fork](images/fork.png)

Clone the forked repository to your local machine
(replacing `JohnDoe` by your GitHub username):

```bash
$> cd /path/to/projects
$> git clone git@github.com:JohnDoe/travis-ci-demo.git
```

Go into the repository:

```bash
$> cd travis-ci-demo
```

Install dependencies:

```bash
$> npm ci
```

Make sure the test suite works:

```bash
$> npm test

  add
    ✓ should add two numbers

  subtract
    ✓ should subtract two numbers

  compute
    ✓ should apply the specified operation to two numbers

  3 passing (10ms)
```

### Enable your repository on Travis CI

Log in to [Travis CI][travis-ci] with your GitHub account
and authorize the requested permissions if asked.

Go to [your repositories][travis-ci-repos] and enable automated builds for your Travis CI demo repository.

> Press the "Sync account" button if you do not see the repository in the list.



[node]: https://nodejs.org
[travis-ci]: https://travis-ci.org
[tracis-ci-repos]: https://travis-ci.org/account/repositories
