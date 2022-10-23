const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.newLoan = async (req, res) => {

}
exports.getAllLoans = async (req, res) => {
    var { skip, take } = req.params
    skip = skip ? parseInt(skip) : 0
    take = take ? parseInt(take) : 10
    const loans = await prisma.Loan.findMany({
        skip: skip,
        take: take
    })
    res.json(loans)

}
exports.getLoan = async (req, res) => {

    const { id } = req.params
    const loan = await prisma.Loan.findUnique({
        where: {
            id: id,
        },
    })
    res.json(loan)
}
exports.updateLoan = async (req, res) => {
    const { id } = req.params

}
exports.deleteLoan = async (req, res) => {
    const { id } = req.params
    const loan = await prisma.Loan.delete({
        where: {
          id: id,
        },
      })
      res.json(loan)

}