API Example: 

GET https://api.yelp.com/v3/businesses/search?term=pizza&location=newyork&sort_by=rating

Authorization: Bearer Your_API_Key

Response:

```json
{
    "businesses": [
        {
            "id": "v1DHGRNCH9247WLYoaoA9A",
            "alias": "l-industrie-pizzeria-brooklyn",
            "name": "L'industrie Pizzeria",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/SRL_RztRRUijgQwt67daGw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/l-industrie-pizzeria-brooklyn?adjust_creative=Gw6jo-it2Ef3Taj-O1kNTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Gw6jo-it2Ef3Taj-O1kNTg",
            "review_count": 418,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 40.71162,
                "longitude": -73.95783
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "254 S 2nd St",
                "address2": "",
                "address3": "",
                "city": "Brooklyn",
                "zip_code": "11211",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "254 S 2nd St",
                    "Brooklyn, NY 11211"
                ]
            },
            "phone": "+17185990002",
            "display_phone": "(718) 599-0002",
            "distance": 2452.947449366841
        }
        ...
    ]
}
```
