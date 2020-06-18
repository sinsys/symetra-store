## Table of Contents
- [Description](#description)
- [Live Link](#live-link)
- [Goals](#goals)
  - [Develop API resources](#develop-api-resources-to-enable)
  - [Stretch Goal](#stretch-goal)
- [Assumptions](#assumptions)
- [Deliverables](#deliverables)
- [Scripts](#scripts)
- [Notable Points](#notable-points)

# Symetra Store

## Description
Imagine an ecommerce store where the store owner gives out discounts to every nth transaction. Customers, as they login, get to see if they have discount and the appropriate discount code. Customers can then purchase items using the discount code if available. The store owner reviews at various times what the count of purchases that were made in the store as well as the total count of discounts that were given out.

## Live Link
https://symetra-strore.vercel.app  

## Goals: 
### Develop API resources
- An admin to set the n, and the discount code. 
- Customers to check if there is a discount code and then make a purchase with or without the discount code
- Admin to see the report described above 

### Stretch Goal: 
- Develop a simple UI with different pages for admin and customer 

## Assumptions:
- Server side state can be maintained all in memory, so no persistence layer is required
- No authentication or authorization required on API/UI
- Reports and any other data can be simple JSON – don’t worry about prettying it up  

## Deliverables:
- Publish your code on github and share the link
- Share documentation about how to run code
> Quality of code is what we are looking for so choose a language of your choice. Good luck!  

## Scripts:
- `npm i` - Installs necessary dependencies
- `npm start` - Runs the app locally
- `npm t` - Runs unit tests  

## Notable Points:
- Data is generated randomly to demonstrate scale and resilience
  - You can set different amounts of products and users when they are initialized in `./src/App.tsx`. The default was set to 10.
- Because we need no persistent data layer, data is stored in React Context
  - `localStorage` or `sessionStorage` were considered, but Context made sense for demo purposes
- You can toggle between the active user with the button in the top right. It is purely a random selection from all users to demonstrate that the coupon is only valid for the user that purchased the `nth` item
- API Routes were written pretty open ended. Stubs were put in place for interacting with a real API and the functions were used, but for the purposes of a demo I kept it all self-contained in Context and spoofed expected responses. Comments are available on the `./src/services/ApiService.tsx` file.
  - For the purposes of demoing what the `POST` or `PATCH` body properties look like, I have `console.log(foo)` an example endpoint and the expected response.
- Reports are downloaded via the buttons on the Admin page. A `json` file will be downloaded to your device for the selection you chose. All purchases are displayed in a table for demo purposes.
- The data has no persistence. A manual page refresh or closing your window will remove any purchases/settings you've changed. All data will persist while the app is open.
- Once a coupon is valid on a user, the user will get a "Use Coupon `couponCode`" button by the buy button. You can toggle this to either apply or remove the coupon for the purchase.
- It was unclear how the coupon interval should be handled when an Admin modifies the interval. Without additional context, I left the calculation compared to all available orders instead of resetting it to 0 on a change.