class PcarentesController {
  async createpcarentes(request, response) {
    return response.json({ create: true });
  }
  async getAllpcarentes(request, response) {
    return response.json({ getAll: true });
  }
  async updatepcarentes(request, response) {
    return response.json({ update: true });
  }
  async deletepcarentes(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = PcarentesController;
