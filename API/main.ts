let url = "https://simple-books-api.glitch.me/orders"
const getData = async () => {
    const orders = await fetch(url, {
        headers: {
            Autorization: `Bearer 471dab37f9fa13f8bbc57115dfc815eecfc9bb9d3ee044bb5ee149324d4b0f9b`
        }
    });

    const res = await orders.json()
    console.log(res);

}

getData()