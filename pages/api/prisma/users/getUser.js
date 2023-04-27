const SibApiV3Sdk = require('sib-api-v3-sdk')
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

  const {
    id
  } = req.body

  const prisma = new PrismaClient()

  try {

    await prisma.$connect()
    const result = await prisma.user.findUnique({
      where: { id: id },
      select: {
        name: true
      },
    })

    // Return only the product list
    res.status(200).json({ user: result })
  } catch (e) {
    res.status(400).json({ error: e })
  }
}