How to connect React + Node, Express, MongoDB and different approaches

React.js is Client(Browser) - Presentation/UI
JSON - JavaScript Object Notation
Server <--Database Queries--> Database Server (MongoDB - Persistent DB Storage)

Frontend (Client)
React SPA(Single Page Applications):

- Routes(with react-router-dom) - help us render different react components based on a path the user enters on the url part of browser
    Route Config + Page Componenets
- State Management( Hooks, Redux) - help us rerender parts of the screen. Hooks and redux for application level state
    Redux Logic, React Hooks, Custom hooks
-  Components + Styling (CSS)
    Utility/UI Componenets

Backend (Server)
Decoupled Ends - Backend == API(Application Programming Interface - REST API(Representational State Transfer), GraphQL API)

REST - uses different URLs + Http Verbs for different actions, API is stateless and decoupled from any frontend
    GET - get resource from the server
    POST - Post a resource to server (create or append)
    PUT -  Put a resource to server (create or append)
    FETCH - Update parts of an exisitng resource on the server
    DELETE - Delete the resource on the server
    OPTIONS - Browser decides
GraphQL - One URL + Http Verb that accepts query commands, query expression identifies a resource and action
    POST(POST/graphql) - with endpoints in graph query language

backend and frontend are the two folders usually maintained for understandability

- backend has server.js and run it using npm start 5000 port
- frontend has reactjs and run it using npm start 3000 port