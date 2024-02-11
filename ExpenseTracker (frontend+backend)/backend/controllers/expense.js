const Expense = require("../models/expense");

exports.postExpense = async (req, res, next) => {
  try {
    console.log(req.body);
    const expenseData = await Expense.create(req.body);
    console.log(expenseData);
    const responseData = {
        userId: expenseData.dataValues.userId,
        amount: expenseData.dataValues.amount,
        description: expenseData.dataValues.description,
        category: expenseData.dataValues.category,
      };
      res.status(201).json({
        message: "Expenses created sucessfull",
        responseData: responseData,
      });
  } catch (error) {
    console.log(error);
  }
};

exports.getExpense = async (req, res, next) => {
    try {
      const allExpenseData = await Expense.findAll();
      const responseData = allExpenseData.map((allExpenseData) => ({
        userId: allExpenseData.dataValues.userId,
        amount: allExpenseData.dataValues.amount,
        description: allExpenseData.dataValues.description,
        category: allExpenseData.dataValues.category,
      }));
      res.status(201).json({
        message: "successful fetching of expense data",
        responseData: responseData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  exports.deleteExpense = async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const deletedExpenseData = await Expense.destroy({
        where: {
          userId: userId,
        },
      });
      if (deletedExpenseData > 0) {
        console.log(`Expense with userId ${userId} deleted successfully`);
        // You can send a success response back to the client
        res.status(200).json({ message: "Expense deleted successfully" });
      } else {
        // If no booking was deleted, send a not found response
        res.status(404).json({ message: "Expense not found" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.editExpense = async (req, res, next) => {
    try{
      console.log("kjn");
      const userId = req.params.userId;
      const edit = await Expense.update(req.body,{where:{userId:userId}})
      // const editData = await Booking.findByPk(userId)
      console.log(edit);
      res.status("201").json({
        message: "updated successfully",
        edit:edit
      })
    }catch(error){
      console.log(error);
    }
  };
