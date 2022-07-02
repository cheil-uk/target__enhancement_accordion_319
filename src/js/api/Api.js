let Api = (sku) => {


 async function getPaymentDetails() {

     let periodicValue

     let url = `https://p1-smn2-api.shop.samsung.com/tokocommercewebservices/v2/uk/products/${sku}/calculateInstallment?fields=DEFAULT`;

     fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
      })
      .then((responseJson) => {
        periodicValue = responseJson.values[0].values[1].periodicValue
      })
      .catch((error) => {
        console.log(error)
      });

      console.log(periodicValue)

      return periodicValue

 }

return getPaymentDetails()

}

export default Api