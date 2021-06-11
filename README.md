# Getting Started

## Installation
1. Get changes from the main branch https://github.com/GoraChitich/reg_form.git to the local folder
2. Installation. On the project directory you can run:
### npm install
## 3. Running. 
In the project directory, you can run:

## 4. Project setting:
- your server's address: change it in the file 
### /package.json
Set your site name in the parameter "homepage" :  "http(s)://you_domain_com",

### /src/settings.json
Set settings for https://www.emailjs.com
      "emailjs":{
        "service_id":"YOUR_SERVICE_ID",
        "user_id":"YOUR_USER_ID",
        "templateAdd_idru":"TEMPLATE_ID_FOR_ADDING_RUSSIAN",
        "templateUpdate_idde":"TEMPLATE_ID_FOR_UPDATE_RUSSIAN",
        "templateAdd_idru":"TEMPLATE_ID_FOR_ADDING_GERMAN",
        "templateUpdate_idde":"TEMPLATE_ID_FOR_UPDATE_GERMAN",
        "from_name": "SENDER_EMAIL"
    },
    "site": {
         "host": "YOUR_SERVER_ADDRESS"
    },
    "sheet":"GOOGLE_DOCS_ADDRESS"
}

## 5. Starting
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

6. Building 
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
