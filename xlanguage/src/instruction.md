#1 babel change class into function
npx babel --presets @babel/preset-react App.js  -o app.js
npx babel --plugins @babel/plugin-transform-classes app.js -o app_function.js



npm install --save-dev @babel/plugin-transform-classes --force
npm install --save-dev @babel/core @babel/cli --force
npm install --save-dev @babel/preset-react --force


