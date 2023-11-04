export default {
    Dashboard: {
        icon: "icon",
        children: [
            {
                title: "Ecommerce",
                routeName: "ecommerce",
            },
            {
                title: "Analytics",
                routeName: "analytic",
            },
        ],
        routeName: "dashboard",
    },
    Ecommerce: {
        icon: "icon",
        children: [
            {
                title: "Products",
                routeName: "products",
            },
            {
                title: "Category",
                routeName: "category",
            },
        ],
        routeName: "ecommerce",
    },
    Invoice: {
        icon: "icon",
        children: [
            {
                title: "List",
                routeName: "list",
            },
            {
                title: "Order",
                routeName: "orders",
            },
        ],
        routeName: "invoice",
    },
};
