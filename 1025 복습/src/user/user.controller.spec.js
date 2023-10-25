class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res, next) {
    try {
      const dto = req.body;
      const response = await this.service.createUser(dto);
    } catch (e) {}
  }
}
