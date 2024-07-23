# react.ts-vehicle-management

Steps to create boiler plate code
1. npm init -y
2. git init
3. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
4. {
    "presets": ["@babel/preset-env","@babel/preset-react"]
}
5. npm i react react-dom
6. npm install --save-dev webpack webpack-cli webpack-dev-server
7. npm i --save-dev style-loader css-loader babel-loader
8. "scripts": {
    "start":"npx webpack-dev-server --mode development --open --hot",
    "build":"npx webpack --mode production",

  }
9. npm start
10. npm run build

