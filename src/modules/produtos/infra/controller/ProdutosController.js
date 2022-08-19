class ProdutosController {
  async createalimentos(request, response) {
    return response.json({ create: true });
  }
  async getAllalimentos(request, response) {
    return response.json({ getAll: true });
  }
  async updatealimentos(request, response) {
    return response.json({ update: true });
  }
  async deletealimentos(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = ProdutosController;
