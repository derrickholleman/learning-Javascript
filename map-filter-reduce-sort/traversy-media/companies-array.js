const companies = [
    {
        name: "IBM", 
        category: "Finance", 
        start: 1981, 
        end: 2004
    },
    {
        name: "Macy's", 
        category: "Retail", 
        start: 1992, 
        end: 2008
    },
    {
        name: "Ford", 
        category: "Auto", 
        start: 1999, 
        end: 2007
    },
    {
        name: "JCPenney", 
        category: "Retail", 
        start: 1989, 
        end: 2010
    },
    {
        name: "Apple", 
        category: "Technology", 
        start: 2009, 
        end: 2014
    },
    {
        name: "Bremer Bank", 
        category: "Finance", 
        start: 1987, 
        end: 2010
    },
    {
        name: "Cadillac", 
        category: "Auto", 
        start: 1986, 
        end: 1996
    },
    {
        name: "Uber", 
        category: "Technology", 
        start: 2011, 
        end: 2016
    },
    {
        name: "Gap", 
        category: "Retail", 
        start: 1981, 
        end: 1989
    }
  ];

// forEach - takes in an iterator and displays each matching result
companies.forEach(function(company) {
    console.log(company.name);
});

// Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies)

// Filter for companies that started in the 80s
const eightiesCompanies = companies.filter (company => company.start >= 1980 && company.start < 1990);

console.log(eightiesCompanies)

// Map company names and format in a specific way
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(companyNames)

// Using reduce, get total years for all companies
const totalCompanyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalCompanyYears)

// Sort, compares two values and returns 1 or -1 to move it up or down in the array.  sorting companies by alphabetical order.
const sortedCompanies = companies.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortedCompanies)
