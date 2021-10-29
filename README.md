# E-commerce Back-end 

## Description
    
Handle the request to find, create, update and delete Products, Categories and Tags for an E-commerce. This code uses Mysql2, Express and Sequelize.  

This code is deployed in Heroku in the following link: [Heroku repo](https://jjrecombackend.herokuapp.com/api/products)

## Table of content
* [Description](#description)
* [Instalation](#installation)
* [Usage Information](#usage-information)
* [Questions](#questions)



## Installation

To run this project, install it locally using npm:
```
npm i
```
Then, create an ```.env``` file in the main folder. Fill it with the following Mysql information.
```
DB_USER= <Mysql user>
DB_PW= <Mysql password>
DB_NAME='ecommerce_db'
```
Now run in Mysql ```source db/schema.sql``` file.

To populate the database, run the seed in the terminal
```
node seeds/index.js
```

## Usage Information
    

Now you are ready to create request. You can use the (Heroku live app)[https://jjrecombackend.herokuapp.com/api/products] or using Insomnia to use locally.

Some helpful routes are:
```
/api/products/
/api/tags/
/api/categories/
```


## Questions
    
[Juan Jose Ramirez Github profile](https://github.com/JuanjoRamirez262)

email: juanjoramirezps@gmail.com

