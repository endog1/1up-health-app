# 1up-health-app
Web application that displays patient data from 1up health's API

# Setup
- Create a free 1up health account at https://1up.health/docs/start/quick-start-guide and follow the instructions to 
get your client_id and client_secret.
- Clone this git repository to your git workspace folder
- Create your env file by going to the root folder of this project and running the following command:
```$xslt
cp .env.example .env
```
- In the .env file enter in the values for CLIENT_ID and CLIENT_SECRET that you got when creating the 1up health account
- Install node modules. Make sure node is installed first.
```
npm install
```

# Run Application
```$xslt
npm start
```
Open your browser and go to http://localhost:8000/
