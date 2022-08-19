class TransactionsController {
  async createtransactions(request, response) {
    return response.json({ create: true });
  }
  async getAlltransactions(request, response) {
    return response.json({ getAll: true });
  }
  async updatetransactions(request, response) {
    return response.json({ update: true });
  }
  async deletetransactions(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = TransactionsController;
