const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// declare subscription function that takes in a customer object
// if customer has subscription, apply 25% discount
// else, return 0

const subscription = (customer) => (customer.subscription) ? customer.refills * customer.pricePerRefill * .25 : 0;

// declare coupon function that takes in a customer object
// if customer has coupon, return 10
// else, return 0

const coupon = (customer) => (customer.coupon) ? 10 : 0;

// declare totalCost function
// calculate total cost
// return total cost - subscription discount - coupon discount

const totalCost = (customer) => `Your grand total is $${(customer.refills * customer.pricePerRefill - subscription(customer) - coupon(customer))}`;

console.log(totalCost(timmy));
console.log(totalCost(sarah));
console.log(totalCost(rocky));