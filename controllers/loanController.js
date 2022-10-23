const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.newLoan = async (req, res) => {
    loan = {
        address: req.body.address,
        customerName: req.body.customerName,
        description: req.body.description,
        interest: parseInt(req.body.interest),
        loanAmount: parseInt(req.body.loanAmount),
        loanTermYears: parseInt(req.body.loanTermYears),
        loanType: req.body.loanType,
        phoneNumber: req.body.phoneNumber,
    }
    const newLoan = await prisma.Loan.create({
        data: loan,
    })
    return res.json(newLoan);


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
    try {
        const loan = await prisma.Loan.findUnique({
            where: {
                id: id,
            },
        })
        res.json(loan)
    }
    catch (error) {
        res.json({ error: `Loan with ID ${id} does not exist in the database` })
    }
}
exports.updateLoan = async (req, res) => {
    const { id } = req.params
    data = req.body
    delete data.id
    try {
        const updateLoan = await prisma.Loan.update({
            where: {
                id: id,
            },
            data: data,
        })
        res.json(updateLoan)
    }
    catch (error) {
        res.json({ error: `Loan with ID ${id} does not exist in the database` })
    }

}
exports.deleteLoan = async (req, res) => {
    const { id } = req.params
    try {
        const loan = await prisma.Loan.delete({
            where: {
                id: id,
            },
        })
        res.json(loan)
    }
    catch (error) {
        res.json({ error: `Loan with ID ${id} does not exist in the database` })
    }
}