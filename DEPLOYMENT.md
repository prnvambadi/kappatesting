# WEB Deployment 

## Initial Step

Run the following command 
```
  sudo su
  cd kappa
```
run the following command if there is a cms folder
```
  cd web
```

## Cloning/Pulling code to EC2 VM

1. For first you want to clone the code to the repo or if it's the second time, run the second command
  ```
    git clone https://github.com/kappa-tv/web.git
  ```
  or
  ```
    cd web
    git pull
  ```
  authenticate with your GitHub username and classic token.
2. Go inside the folder
  ```
    cd web
  ```

## Building 

1. Run the following command to build
  ```
    npm run build
  ```
  above command will generate a production build output.

## Running the build file as background service

### Note!
Check if there are kappa-web already running as a background service, by using the following command:
```
  pm2 list
```
If first stop that service by using the following command:
```
  pm2 stop kappa-web
```
Then check whether the kappa-cms status is stopped or not by running the first command.
If stopped then run the below command:
```
  pm2 delete kappa-web
```

1. Run the following command to run the WEB as a background service
  ```
    pm2 start npx --name "kappa-web" -- serve@latest out
  ```
  this will create a background service to check whether it is running or not, run the following command:
  ```
    pm2 list
  ```
  for logs and errors, you can use the following command:
  ```
    pm2 monit
  ```
  then choose the service you want to see the logs for.
