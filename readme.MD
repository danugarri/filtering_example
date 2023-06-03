# Start the dev server

- npm run dev

# Installed dependencies

"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0"
},
"devDependencies": {
"@types/react": "^18.0.37",
"@types/react-dom": "^18.0.11",
"@typescript-eslint/eslint-plugin": "^5.59.0",
"@typescript-eslint/parser": "^5.59.0",
"@vitejs/plugin-react": "^4.0.0",
"eslint": "^8.38.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.3.4",
"typescript": "^5.0.2",
"vite": "^4.3.9"
}

# Docker

1. Build the app image
   docker build -t my-app .
2. Run the container
   docker run -d -p 3000:3000 my-app

`Remember to initialise your docker and be logged in to docker`
