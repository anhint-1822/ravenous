const apiKey = 's4bVY31BcYqEsN417rIxrc7IFPC5iCDTCpkOJuW7-YXo3dB99TBIxnVOMElh0lMh0DxeYCiUvr-yE1LkxY99TUdt5D7jzGwq-bUXIxZyeeSvw7E-TG1NM126l_fkXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      if (!jsonResponse || !jsonResponse.businesses) {
        return []; 
      }

      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageUrl: business.image_url,
          name: business.name,
          address: business.address,
          city: business.city,
          state: business.state,
          zipCode: business.zipCode,
          category: business.category,
          rating: business.rating,
          reviewCount: business.review_count,
        };
      });
    });
  }
};

export default Yelp;