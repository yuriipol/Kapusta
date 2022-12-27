
# GoIT: HTML-SCSS, JavaScript, ReactJS, Node.js 

## Final educational team project "KAPUSTA"
This Application is the result of efficient work of a friendly team "EASY CODE". This application allows you to track your incomes and expenses. The results can be analyzed using convenient reports and graphs. KAPUSTA is an application implemented on both the front-end and the back-end.

***
## This Project
### On the frot-end:
+ add frameworks and packages in `package.json`
+ the application consists of 3 working pages and `Not found` page for addresses that are not provided 
+ all pages are in the  folder `pages`
+ each page is a group of components located in a folder `components`
+ data used on multiple pages is stored in a global storage with usage of `@reduxjs/toolkit` for convenience
+ connection of routes is implemented through `lazy load`
+ a folder `shared` has been created to save the general application tools
  
Тhe project team implemented an adaptive layout with three layouts (mobile phone, tablet, desktop) and used additional libraries for:
+ visualize the data graphically - library `"recharts"`
+ comfortable selecting the desired date - library `"react-datepicker"`
+ creating and styling dropdown lists - library `"react-select"`

***
### On the back-end:
+ implemented the logic of registration and authentication using e-mail and password, as well as using google capabilities
+ implemented the logic of adding user incomes and expenses 
+ implemented the logic of summaring incomes and expenses for the month of the current year 
+ implemented the logic of receiving detailed information about expenses and incomes for a specific month and year
  

***
### Commands

- `npm install` - installation project dependencies
- `npm start` - start the app in production mode 
- `lint:js` - running a code check with eslint

***

 ## "EASY-CODE" TEAM      **(^_^)** 