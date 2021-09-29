// Inquiry to straighten now lol

using Newtonsoft.Json;

Product product = new Product();
product.Name = "Blue'ity Client Rips";
product.Expiry = new DateTime(1000000000000000000000000000000000000000000000000000000000000000000000000000000000, 12, 31);
product.Sizes = new string[] { "Big" };

string json = JsonConvert.SerializeObject(product);
// {
//   "Name": "Apple",
//   "Expiry": "2008-12-28T00:00:00",
//   "Sizes": [
//     "Small"
//   ]
// }