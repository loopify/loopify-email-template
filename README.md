Loopify Email Document
======================


### Setup

Install [Node](http://nodejs.org):

Example for mac OS X:
```bash
$ brew install node
```

Install [Yarn](https://github.com/yarnpkg/yarn):

Example for mac OS X:
```bash
$ brew install node
```

Install [Gulp](http://gulpjs.com):

```bash
$ yarn global add gulp
```

Set yarn scoped registry for Loopify packages:

```bash
$ yarn config set @loopify-jfrog-public:registry https://loopify.jfrog.io/artifactory/api/npm/npm-local-public/
```

Install node dependencies:

```bash
$ yarn install
```


---


### Documentation

Documentation on the Loopify document format can be found [here](http://docs.loopify.com/docs/loopify-document/index.html).


### Building

```bash
$ gulp
```

### Serve and watch files while developing
(Auto-build on file changes)

```bash
$ gulp serve
```

---

You can also preview your template in the editors inside the Loopify web app.
When running `gulp serve` you will get a random tunnel URL.
It might look like this: `https://lnapkgyckb.localtunnel.me`.

Go to [stage.loopify.com](https://stage.loopify.com) and log in to any of your accounts.

Load your local template into the template editor by entering this URL:
`https://stage.loopify.com/#/[ACCOUNT_ID]/e-mail/templates/local-template/edit?url=https://lnapkgyckb.localtunnel.me/document.json`

Load your local template into the campaign editor by entering this URL:
`https://stage.loopify.com/#/[ACCOUNT_ID]/e-mail/local-template/edit?url=https://lnapkgyckb.localtunnel.me/document.json`

If you are also serving the web app from localhost, you can speed things up by also loading the template from localhost:
`http://localhost:1337/#/[ACCOUNT_ID]/e-mail/local-template/edit?url=http://localhost:1338/document.json`