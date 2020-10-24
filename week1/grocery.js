var groceryList = {
    meatTypes: ["Beef", "Pork", "Chicken"],
    dairy: ["cheese", "milk", "eggs"],
    eggs: 3,
    wasThereGuac: false,
    storeName: "kings",

    displayInfo: function() {
        console.log(`${groceryList.eggs} blind ${groceryList.storeName}`);
    }
}

groceryList.displayInfo();
console.log(groceryList.meatTypes);