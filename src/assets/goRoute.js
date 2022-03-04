const minin = {
    methods: {
        goMarket(type) {
            this.$router.push({
                name: "Market",
                params: {
                    type: type,
                },
            });
        },
        goOrder() {
            this.$router.push({
                name: "Order",
            });
        },
        goLogin() {
            this.$router.push({
                name: "Login",
            });
        },
        goRegister() {
            this.$router.push({
                name: "Register",
            });
        },
        goProduct(productID){
            this.$router.push({
                name: "Product",
                params:{
                    productID
                }
            });
        },
        goHome(){
            this.$router.push({
                name: "Home",
            });
        },
        goDetail(orderID){
            this.$router.push({
                name: "Detail",
                params:{
                    orderID
                }
            });
        },
        goBack(){
            this.$router.back();
        }
    },
}
export default minin;