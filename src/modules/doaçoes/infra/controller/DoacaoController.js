class DoacaoController {
  async createdoacao(request, response) {
    return response.json({ create: true });
  }
  async getAlldoacao(request, response) {
    return response.json({ getAll: true });
  }
  async updatedoacao(request, response) {
    return response.json({ update: true });
  }
  async deletedoacao(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = DoacaoController;
