# EYEPAX NEWS MOBILE APPLICATION

## PROJECT STRUCTURE
-   assets  =>  Assets directory
-   src =>  Root directory of source code
    -   components  => Common components of the application
    -   contexts    => ContextAPI related codes
    -   enums   => enums
    -   features    => Features of the Application
        -   feature 
            -   components => Components related to specific feature
            -   screens => Screens related to specific feature
    -   infrastructure
        -   theme =>    Theme of the Application
        -   navigation => Navigation related codes
        -   network => Api End Point Configurations
    -   localization => Localization support files
    -   services => Services for accessing network resources
    -   utils  =>   Utility functions

## FEATURE LIST
    -   Google Social Login
    -   Top Headlines News List
    -   All News List Pagination
    -   Search News
    -   News Detail Page
    -   News Filteration
    -   See all Top Headlines


## KNOWN ISSUES
-   Since NewsAPI has request count limitation, Time to time it returns, 426, 429 errors. If something broken,please replace NEWS_API_KEY by using below key
    -   Path 'infrastructure => network => index.js => NEWS_API_KEY'
    -   Keys
        -   3d948e7f2232439e95658bf3b37e981a
        -   25ce86b8584040258c81a63fedadb10a
-   Build Flavours has not been configured

## PROJECT SETUP
    -   Get project from repository
    -   Install dependencies    -   `yarn install`
    -   Pod installation -   `npx pod-install ios`
    -   RUN ANDROID   -   `yarn android`
    -   RUN iOS -   `yarn ios`

## WORKABLE DEMO
Please Find the Workable Demos for both android and ios inside the workable-demo folder

