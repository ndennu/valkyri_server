# Valkyri REST server powered by NodeJS and Express

## Web api for Valkyri powered by NodeJS and Express framework

## Status Test integration on master => [![build status](https://gitlab.com/nicolasEsgi/valkyri_server/badges/master/build.svg)](https://gitlab.com/nicolasEsgi/valkyri_server/commits/master)

## Status Test integration on develop => [![build status](https://gitlab.com/nicolasEsgi/valkyri_server/badges/develop/build.svg)](https://gitlab.com/nicolasEsgi/valkyri_server/commits/develop)

## Prerequisites

- Text editor (VS Code, Atom, Notepad ++, ...)
- NodeJS (minimum at version 6.10.0)
- MySQL Database (you can use wampserver, uwamp, ...)

## NPM Dependency

- express: `4.15.2`
- mysql: `2.13.0`
- sequelize: `3.30.2`
- body-parser: `1.17.1`
- crypto-js: `3.1.9-1`
- jsonwebtoken: `7.3.0`
- multer: `1.3.0` --> To send image to server

## Installation

1. Clone the repo with: `git clone https://gitlab.com/nicolasEsgi/valkyri_server.git`
2. Run `npm install` to install all project dependency
3. Run database creation with the supplied SQL File on your mysql database
4. Change database settings with your informations into `./settings/settings.json`

```json
{
    "db": {
        "sql": {
            "database": "valkyri",
            "dbUser": "username",
            "dbUserPassword": "password",
            "dbPort": "your port (default is 3306)",
            "sequelizeParamSetting": {
                "host": "hostname",
                "dialect": "mysql"
            }
        }
    }
}
```

5. Run it with `node` command !

## Usage

### Endpoints

#### Users

##### Route: `serverHostName/users`

HTTP Method | Route | Description | Need to be authenticated | Need to be admin
--- | --- | --- | --- | ---
[GET] | `/users` | Getting all users | No | No
[GET] | `/users/:id` | Getting one user by id | No | No
[GET] | `/users/role/:idRole` | Getting all users by role id | No | No
[POST] | `/users` | Create a user with information in the request body (JSON Format) | No | No
[POST] | `/users/image/:id` | Add user's profile image (Frontal face) for face recognition | No | No
[PUT] | `/users/:id` | Update a user with information in the request body (JSON Format) | Yes | No
[DELETE] | `/users/:id` | Delete a user by id | Yes | No

#### Faces

##### Route: `serverHostName/faces`

HTTP Method | Route | Description | Need to be authenticated | Need to be admin
--- | --- | --- | --- | ---
[GET] | `/faces` | Getting all users | No | No
[GET] | `/faces/:id` | Getting one user by id | No | No
[PUT] | `/faces/:id` | Update a face with information | Yes | No
[DELETE] | `/faces/:id` | Delete a face by id | Yes | No

#### Levels

##### Route: `serverHostName/levels`

HTTP Method | Route | Description | Need to be authenticated | Need to be admin
--- | --- | --- | --- | ---
[GET] | `/levels` | Getting all levels | No | No
[GET] | `/levels/:id` | Getting one levels by id | No | No
[PUT] | `/levels/:id` | Update a level with information in request body | Yes | No
[DELETE] | `/levels/:id` | Delete a level by id | Yes | No

#### Place

##### Route: `serverHostName/places`

HTTP Method | Route | Description | Need to be authenticated | Need to be admin
--- | --- | --- | --- | ---
[GET] | `/places` | Getting all places | No | No
[GET] | `/places/:id` | Getting one place by id | No | No
[PUT] | `/places/:id` | Update a place with information in request body | Yes | No
[DELETE] | `/places/:id` | Delete a level by id | Yes | No

#### Auth

##### Route: `serverHostName/auth`

HTTP Method | Route | Description | Need to be authenticated  | Need to be admin
--- | --- | --- | --- | ---
[POST] | `/login` | Authorize log the user in and return an authorization token with user credential in the request body (JSON Format) | No | No
[POST] | `/logout` | Logout the user and delete the token if unexpired | Yes | No
[POST] | `/logoutAllInstance` | Logout the user and delete ALL token if unexpired | Yes | No

#### History

##### Route: `serverHostName/history`

HTTP Method | Route | Description | Need to be authenticated | Need to be admin
--- | --- | --- | --- | ---
[GET] | `/history` | Getting all history | No | No
[GET] | `/history/:id` | Getting one history by id | No | No
[GET] | `/history/month/:month` | Getting all history by month | No | No
[POST] | `/history` | Create a history with information in the request body (JSON Format) | No | No
[PUT] | `/history/:id` | Update a history with information in the request body (JSON Format) | Yes | No

TO_UPDATE: (Not finished yet !!!)

## Technical documentation

### Middlewares

Name | Dependency | Description
--- | --- | ---
encryptUserPassword | crypto-js | Encrypt User Password into SHA512 string
isConnected | jsonwebtoken | Ensure user is authenticated

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

- v1.0.0

```
- Initial version
```

## Credits

 - Adam Geitgey (Face Recognition module --> https://github.com/ageitgey/face_recognition)
 - Davis E. King (Dlib modul --> https://github.com/davisking/dlib)

## License

TODO: Write license