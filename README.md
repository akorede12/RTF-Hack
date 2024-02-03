# BookingBox-TX Project Documentation

BookingBox-TX is a homestay/hotel booking Decentralized Application which leverages the power of Blockchain Technology. The smart contract is deployed on Lightlink Pegasus Testnet and the complete application is being built using technologies like Solidity, NextJS, Redux Toolkit, Hardhat and Ethers.
The core of the contract is defined by three primary structures: `ApartmentStruct`, `BookingStruct`, and `ReviewStruct`, representing an apartment, a booking, and a review, respectively.

# Website: https://booking-box-tx.vercel.app/

# Need of a Decentralized Booking System:
Blockchain technology provides a better security to data in compare to traditional ways where everything is centralized and mutable. The transparency builds user's trust. The flaws which are being solved by this system are exploiting user data such as Contact Details and Legal Details, there is no middleman, the system is completely open-source and run by the community of same people such as users.

# Unique Elements compared to Traditonal Booking Services:
Using Blockchain Technology to facilitate bookings.
Payments in Cryptocurrency.
Simple & Sophisticated User Experience.
Gasless Transactions through Lightlink Enterprise Mode.
Community-driven & open-source.

# Why BookingBox-TX doesn't use NFTs and NFT based Marketplace?
NFT is a great tool when it comes to tokenizing Real-world assets but in case of BookingBox-TX, we wanted to create such an application which actually resembles a booking system instead of Marketplace & to make user have a feel of booking application instead of an NFT Marketplace.

## Reason Explained:
User Experience Focus:
Booking systems typically involve a straightforward process for users to reserve and confirm services or resources. The primary goal might be to offer a seamless and intuitive booking experience for users without introducing the complexities associated with NFTs and marketplace interactions.

Functional Requirements:
NFTs are often associated with unique digital or physical assets, and their implementation might not align with the core functionalities required for a booking system. Booking applications typically prioritize features like availability checks, reservations, payments, and confirmations.

Costs and Resource Allocation:
Developing and maintaining an NFT-based marketplace involves additional technical considerations and resources. The decision not to use NFTs may be influenced by a desire to allocate resources efficiently and focus on the specific needs of a booking application.

Market Demand and Expectations:
Users of booking systems may have certain expectations regarding the functionality and user interface. If the target audience is more accustomed to traditional booking experiences, integrating NFTs and a marketplace might not align with their preferences.

Avoidance of Overcomplication:
NFTs and blockchain-based marketplaces can introduce complexities in terms of understanding, managing, and using digital assets. The decision to keep the application focused on bookings may stem from a desire to avoid overcomplicating the user experience.

Regulatory Considerations:
NFTs and blockchain technologies may be subject to specific regulations in different jurisdictions. Choosing a more traditional booking system approach might help mitigate potential regulatory challenges associated with NFTs.

# BookingBox-TX Key Features

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


