# NODEJS MVC BOILERPLATE

## Getting started
make sure sequelize cli has installed in your device

```
$ npm install sequelize-cli --global
```

And then install packages

```
$ npm install
```
OR
```
$ yarn install
```

Running development mode
```
$ yarn run dev
```
OR
```
$ npm run dev
```
## Controller
You can find controller at directory controller

## Model
Folder directory at models
generate model run this command: 
```
$ sequelize model:create --name User
```

command line will generate file user in directory models and migration file in directory migrations

## MIGRATIONS
run migration with following command:
```
sequelize-cli db:migrate
```

Undo migration by command:
```
npx sequelize-cli db:migrate:undo
```

## SEEDER
create seeder file
```
npx sequelize-cli seed:generate --name demo-user
```

Run seeder
```
npx sequelize-cli db:seed:all
```
