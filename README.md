# Simple Notes

A note taking application built with an Express backend for API calls

Deployment - <https://ashleys-simple-notes.herokuapp.com/>

## Table of Contents

[Installation](#installation)

[Local Server](#local-server)

[API Documentation](#api-documentation)

[Examples](#examples)

[Credits](#credits)

## Installation

Clone the repo

```Shell
git clone https://github.com/minusInfinite/simple-notes.git
cd /simple-notes
```

This application uses the package manager Yarn - https://yarnpkg.com/
You may need to insure Yarn Classic is installed globally beforehand

```Shell
npm install -g yarn
yarn install
```

If there are any issues, you may need to just run `yarn install` again to setup the Plug and Play system correctly.

## Local Server

To start the local express server run one of the following scripts

```bash
yarn start //to start the server with node
yarn dev //to start the server with nodemon
```

## API Documentation

**METHOD**: GET

**ENDPOINF**: `/api/notes`

Get the current list of notes.

**METHOD**: POST

**ENDPOINF**: `/api/notes`

Post a new Note

**METHOD**: DELETE

**ENDPOINF**: `/api/notes/:note_id`

Delete a note via it's assigned ID.

## Examples

An example of the landing page
![The default landing page for the app](./mdassets/example2.png)

An example of the page Notes are written
![The default landing page for the app](./mdassets/example1.png)

## Credits

express - https://expressjs.com/
UUID - https://github.com/uuidjs/uuid
