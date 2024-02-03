const { faker } = require('@faker-js/faker')
const { ethers } = require('hardhat')
const fs = require('fs')
const hotelImage1 = require("../public/hotelImage1.jpg");
const hotelImage2 = require("../public/hotelImage2.jpg");
const hotelImage3 = require("../public/hotelImage3.jpg");
const hotelImage4 = require("../public/hotelImage4.jpg");
const hotelImage5 = require("../public/hotelImage5.jpg");
const hotelImage6 = require("../public/hotelImage6.jpg");
const hotelImage7 = require("../public/hotelImage7.jpg");
const hotelImage8 = require("../public/hotelImage8.jpg");
const hotelImage9 = require("../public/hotelImage9.jpg");
const hotelImage10 = require("../public/hotelImage10.jpg");

const toWei = (num) => ethers.parseEther(num.toString())

const dataCount = 5
const maxPrice = 0.001
const imagesUrls = [
  hotelImage1,
  hotelImage2,
  hotelImage3,
  hotelImage4,
  hotelImage5,
  hotelImage6,
  hotelImage7,
  hotelImage8,
  hotelImage9,
  hotelImage10,
]

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const generateFakeApartment = (count) => {
  const apartments = []
  for (let i = 0; i < count; i++) {
    const id = i + 1
    const name = faker.word.words(5)
    const deleted = faker.datatype.boolean()
    const description = faker.lorem.paragraph()
    const location = faker.lorem.word()
    const price = 0.001
    const rooms = faker.number.int({ min: 2, max: 5 })
    const owner = faker.string.hexadecimal({
      length: { min: 42, max: 42 },
      prefix: '0x',
    })
    const timestamp = faker.date.past().getTime()
    const images = []

    for (let i = 0; i < 5; i++) {
      images.push(shuffleArray(imagesUrls)[0])
    }

    apartments.push({
      id,
      name,
      description,
      location,
      price: toWei(price),
      images: images.join(', '),
      rooms,
      owner,
      timestamp,
      deleted,
    })
  }

  return apartments
}

async function createApartments(contract, apartment) {
  const tx = await contract.createAppartment(
    apartment.name,
    apartment.description,
    apartment.location,
    apartment.images,
    apartment.rooms,
    apartment.price
  )
  await tx.wait()
}

async function bookApartments(contract, aid, dates) {
  const tx = await contract.bookApartment(aid, dates, { value: toWei(maxPrice * dates.length) })
  await tx.wait()
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function main() {
  let dappBnbContract

  try {
    const contractAddresses = fs.readFileSync('./contracts/contractAddress.json', 'utf8')
    const { dappBnbContract: dappBnbAddress } = JSON.parse(contractAddresses)

    dappBnbContract = await ethers.getContractAt('DappBnb', dappBnbAddress)
    const dates1 = [1678492800000, 1678579200000, 1678665600000]

    // Process #1
    await Promise.all(
      generateFakeApartment(dataCount).map(async (apartment) => {
        await createApartments(dappBnbContract, apartment)
      })
    )

    await delay(2500) // Wait for 2.5 seconds

    // Process #2
    await Promise.all(
      Array(dataCount)
        .fill()
        .map(async (_, i) => {
          await bookApartments(dappBnbContract, i + 1, dates1)
        })
    )

    console.log('Items dummy data seeded...')
  } catch (error) {
    console.error('Unhandled error:', error)
  }
}

main().catch((error) => {
  console.error('Unhandled error:', error)
  process.exitCode = 1
})
