/* 1. Which active users have "American Express" as their credit card issuer?
    Query Intent: Filtering based on status and creditCard.issuer.
    [
  {
    "name": "Devon Greer Nikolaus",
    "username": "Devon-Nikolaus",
    "creditCard": {
      "number": "6011-3842-0496-8285",
      "issuer": "american_express"
    },
    "status": "active"
  }
]
*/


/* 2. List the cities and countries of all users whose job area is "Integration".

Query Intent: Extraction based on job.area.

[
  {
    "city": "Port Leo",
    "country": "Cote d'Ivoire"
  }
]
 */


/* 3. Find users whose location coordinates fall in the Western Hemisphere.

Query Intent: Use longitude < 0 as the filter.

Sample Output:

[
  {
    "name": "Devon Greer Nikolaus",
    "longitude": "-80.8364"
  },
  {
    "name": "Loyce Phoenix Stiedemann",
    "longitude": "-98.0533"
  }
]
 */


/* 4. Group users by their status (active, disabled) and count how many are in each group.

Query Intent: Grouping + aggregation.

Sample Output:

{
  "active": 1,
  "disabled": 1
}
 */


/* 5. Extract all email addresses in a flat list (no user info).

Query Intent: Flatten nested arrays.

Sample Output:

[
  "Vella.Hansen40@gmail.com",
  "Thaddeus.Pouros@example.com",
  "Reece_Buckridge@gmail.com",
  "Marcel_Blanda61@gmail.com"
]
 */


/* 
6. Which users have job titles that include the word "Architect"?

Query Intent: Text search in nested fields.

Sample Output:

[
  {
    "name": "Devon Greer Nikolaus",
    "jobTitle": "Customer Mobility Architect"
  }
] */


 /*  7. Retrieve user info where the zip code contains a dash (-).

Query Intent: Regex/string filter.

Sample Output:

[
  {
    "name": "Loyce Phoenix Stiedemann",
    "zip": "78151-5714"
  }
] */