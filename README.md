# Symetra Store Server

## Table of Contents
- [Description](#description)
- [Live Link](#live-link)
- [Server Code](#server-code)
- [Instructions](#instructions)
- [Goals](#goals)
  - [Develop API resources](#develop-api-resources-to-enable)
  - [Stretch Goal](#stretch-goal)
- [Assumptions](#assumptions)
- [Deliverables](#deliverables)
- [Scripts](#scripts)
- [Notable Points](#notable-points)

## Description
Imagine an ecommerce store where the store owner gives out discounts to every nth transaction. Customers, as they login, get to see if they have discount and the appropriate discount code. Customers can then purchase items using the discount code if available. The store owner reviews at various times what the count of purchases that were made in the store as well as the total count of discounts that were given out.

## Live Link
https://symetra-store.vercel.app

## Server Code
https://github.com/sinsys/symetra-store-server  

## Instructions
- The app can be used online as both of the client and the server code are deployed. You can visit the live site here:
  - https://symetra-store.vercel.app
- To run the app locally:
  - Clone both of the server and client repositories to a directory on your machine
  - Run `npm i` within both project directories to install dependencies
  - Run `npm start` on the server code repository
  - Run `npm start` on the client code repository
  - The app will be running on `http://localhost:3000`
  - Tests are not available for the server code at this time due to time constraints. They will be added shortly
  - The client code can be tested by running `npm t`  

## Goals  
### Develop API resources  
- An admin to set the n, and the discount code. 
- Customers to check if there is a discount code and then make a purchase with or without the discount code
- Admin to see the report described above 

### Stretch Goal  
- Develop a simple UI with different pages for admin and customer 

## Assumptions  
- Server side state can be maintained all in memory, so no persistence layer is required
- No authentication or authorization required on API/UI
- Reports and any other data can be simple JSON – don’t worry about prettying it up  

## Deliverables  
- Publish your code on github and share the link
- Share documentation about how to run code
> Quality of code is what we are looking for so choose a language of your choice. Good luck!  

## Scripts  
- `npm i` - Installs necessary dependencies
- `npm start` - Runs the app locally
- `npm t` - Runs unit tests  

## Notable Points  
- Data is generated randomly to demonstrate scale and resilience
- Because we need no persistent data layer, data is stored on the server in a `mockData` module.
- You can toggle between the active user with the button in the top right. It is purely a random selection from all users to demonstrate that each coupon is only valid for the user that purchased the `nth` item
- Reports are downloaded via the buttons on the Admin page. A `json` file will be downloaded to your device for the selection you chose. All purchases are displayed in a table for demo purposes.
- Once a coupon is valid on a user, the user will get a "Use Coupon `couponCode`" button by the buy button. You can toggle this to either apply or remove the coupon for the purchase.
- It was unclear how the coupon interval should be handled when an Admin modifies the interval. Without additional context, I left the calculation compared to all available orders instead of resetting it to 0 on a change.