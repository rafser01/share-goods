# re : share

Download Project:

```
  git clone https://github.com/white-rabbit-apps/re-share.git
  cd re-share
```

## Server :

### Tools

* Express [http://expressjs.com]
* GraphQL [http://graphql.org]
* MongoDB [https://www.mongodb.com]
* TypeScript [https://www.typescriptlang.org]

### Run

```
  npm install
  npm run start
```

**Check the Server:** http://localhost:3333/ping

```
  Result :
  pong
```

**Note:** MongoDB connection used from mlab.com. DB user : rakin, DB password: reshare123 ; Datebase Name: "reshare"

Possible Issues :

```
  ''ts-node'' is not recognized as an internal or external command,
  operable program or batch file.
```

Solution :

* Change 'ts-node' to ts-node in package.json file. Like : _ "start": "nodemon --watch 'src/\*\*/\*.ts' --ignore 'src/\*\*/\*.spec.ts' --exec ts-node src/server.ts dist/server.js" _

## Frontend

### Tools

* React [https://reactjs.org]
* Redux [https://redux.js.org]
* Semantic UI [https://semantic-ui.com]

### Run

Go to Root folder :

```
  cd re-share
```

Then install node modules & run project

```
  npm install
  npm run dev
```

**Check the Front-end** : http://localhost:3334/#/signUp

* Fill the form and Submit. If success, page redirect to Login page.
* Login with your email & password. If success, page redirect to dashboard.

# Contributing

## Branching

When working on an issue, please create a new branch with a name that follows this format:

'[issue_number]-[your_github_username]'

This should follow the convention of all other branches in the repository so follow those.

## Commenting

Please always comment your code as much as possible, including JSDoc [http://usejsdoc.org] style comments for functions and inline comments especially for code that may be confusing for someone else down the line.

## Committing

Please prefix all commit messages with the issue number so that the commit is attached to the issue in github. Use the following format:

```
#XXX - commit message
```

## Pull Requests

When you're done with the issue, please make a pull request to the master branch and I will evaluate, merge, and close the issue, or let you know what should be changed.
