## Table of Contents
- [Description](#description)
- [Goals:](#goals)
  - [Develop API resources to enable:](#develop-api-resources-to-enable)
  - [Stretch Goal:](#stretch-goal)
- [Assumptions:](#assumptions)
- [Deliverables:](#deliverables)

# Symetra Store

## Description
Imagine an ecommerce store where the store owner gives out discounts to every nth transaction. Customers, as they login, get to see if they have discount and the appropriate discount code. Customers can then purchase items using the discount code if available. The store owner reviews at various times what the count of purchases that were made in the store as well as the total count of discounts that were given out.

## Goals: 
### Develop API resources to enable:
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

