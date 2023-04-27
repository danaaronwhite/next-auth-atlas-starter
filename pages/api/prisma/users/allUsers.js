const SibApiV3Sdk = require('sib-api-v3-sdk')
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

  const prisma = new PrismaClient()

  try {

    await prisma.$connect()
    const allUsers = await prisma.user.findMany()

    // Return only the product list
    res.status(200).json({ allUsers })
  } catch (e) {
    res.status(400).json({ error: e })
  }
}