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
        goLogin(method) {
            if (method == 1) {
                this.$router.replace({
                    name: "Login",
                });
            }
            else {
                this.$router.push({
                    name: "Login",
                });
            }
        },
        goRegister() {
            this.$router.push({
                name: "Register",
            });
        },
        goProduct(productID) {
            this.$router.push({
                name: "Product",
                params: {
                    productID
                }
            });
        },
        goPurchase(productID) {
            this.$router.push({
                name: "Purchase",
                params: {
                    productID
                }
            });
        },
        goHome() {
            this.$router.push({
                name: "Home",
            });
        },
        goDetail(orderID) {
            this.$router.push({
                name: "Detail",
                params: {
                    orderID
                }
            });
        },
        goWait(orderID){
            this.$router.push({
                name: "Wait",
                params: {
                    orderID
                }
            });
        },
        goBack() {
            this.$router.back();
        },
        goSearch() {
            this.$router.push({
                name: "Search",
            });
        },
        async isLogin() {
            await this.axios({
                method: 'get',
                url: "/user/status?token=" + window.localStorage.getItem("token"),
            }).then((response) => {
                if (response.data.status != 0) {
                    // 服务器异常错误
                    this.$toast.fail(response.data.data.message)
                    return true
                } else if (response.data.data == null) {
                    // 未登录
                    this.$toast.fail('请先登录!')
                    this.goLogin()
                    return false
                } else {
                    // 登录成功
                    this.$store.commit('userAbout/SET_UERNAME', response.data.data.name)
                    return true
                }
            }).catch((err) => {
                this.$toast.fail(err.message)
                return false
            })
        }
    },
}
export default minin;