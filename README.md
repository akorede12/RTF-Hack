# BookingBox-TX Project Documentation

<!-- Read the full tutorial here: **[>> How to build a Decentralized Game Platform with Next.js, TypeScript, Tailwind CSS, and Solidity](https://daltonic.github.io)** -->

![House Rental Marketplace](./screenshots/0.png)
The DappBnb project is a decentralized application built on the Ethereum blockchain. It is a rental marketplace where users can list, book, and review apartments. The project revolves around `DappBnb.sol`, a Solidity-written Ethereum smart contract. It leverages the OpenZeppelin library to ensure secure and standardized development of the contract.

![House Rental Marketplace](./screenshots/1.png)
The core of the contract is defined by three primary structures: `ApartmentStruct`, `BookingStruct`, and `ReviewStruct`, representing an apartment, a booking, and a review, respectively.

## Key Features

- `createAppartment`: Allows a user to create a new apartment listing.
- `updateAppartment`: Allows the apartment owner to update the details of an apartment.
- `deleteAppartment`: Allows the apartment owner to delete an apartment listing.
- `getApartments`: Allows a user to fetch all available apartments.
- `getApartment`: Allows a user to fetch the details of a specific apartment.
- `bookApartment`: Allows a user to book an apartment for specific dates.
- `checkInApartment`: Allows a tenant to check into an apartment and triggers the payment process.
- `claimFunds`: Allows the apartment owner to claim funds after a booking is completed.
- `refundBooking`: Allows a tenant to cancel a booking and get a refund.
- `getUnavailableDates`: Allows a user to fetch all booked dates for a specific apartment.
- `getBookings`: Allows a user to fetch all bookings for a specific apartment.
- `getBooking`: Allows a user to fetch the details of a specific booking.
- `addReview`: Allows a tenant to add a review for an apartment.
- `getReviews`: Allows a user to fetch all reviews for a specific apartment.

## Running the Application

Supply the following keys in your `.env` variable:

```sh
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_ALCHEMY_ID=<YOUR_ALCHEMY_PROJECT_ID>
NEXT_PUBLIC_PROJECT_ID=<WALLET_CONNECT_PROJECT_ID>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=somereallysecretsecret
```

`YOUR_ALCHEMY_PROJECT_ID`: [Get Key Here](https://dashboard.alchemy.com/)
`WALLET_CONNECT_PROJECT_ID`: [Get Key Here](https://cloud.walletconnect.com/sign-in)

Follow these steps to run the application:

1. Install the package modules by running the command: `yarn install`
2. Start the Hardhat server: `yarn blockchain`
3. Run the contract deployment script: `yarn deploy`
4. Run the contract seeding script: `yarn seed`
5. Spin up the Next.js development server: `yarn dev`

Now, your application should be up and running.

## 📚 Key Technologies

- 🌐 Next.js: A React framework for building server-side rendered and static websites.
- 📘 TypeScript: A statically typed superset of JavaScript.
- 📦 Hardhat: A development environment for Ethereum smart contracts.
- 🌐 EthersJs: A library for interacting with Ethereum and Ethereum-like blockchains.
- 📚 Redux-Toolkit: A library for managing application state.
- 🎨 Tailwind CSS: A utility-first CSS framework.


