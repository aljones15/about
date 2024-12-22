// contains types for the resume

interface Address {
  name: string;
  street: Array<string>;
  city: string;
  state: string;
  zipcode: string | number;
  country: string;
}

const address: Address = {
  name: 'Andrew Lyle Jones',
  street: [
    '2300 24th Rd South',
    'Apartment 125'
  ],
  city: 'Alrington',
  state: 'Virginia',
  zipcode: '22206',
  country: 'U.S.A'
};