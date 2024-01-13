const { RESTDataSource } = require("@apollo/datasource-rest");

class UserAPI extends RESTDataSource {
  baseURL = 'http://localhost:3000'

  findRole({ roles, roleId }) {
    const roleAfterFind = [...roles].find(role => role.id === roleId);
    return roleAfterFind;
  }

  async getUsers() {
    const users = await this.get('/users');
    const roles = await this.get('/roles');

    const usersMapped = [...users].map(user => {
      const role = this.findRole({ roles, roleId: user.role });
      return { ...user, role };
    })
    return usersMapped
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`);
    const role = await this.get(`/roles/${id}`);
    const userMapped = { ...user, role };
    return userMapped;
  }

  async addUser(body) {
    const users = await this.get('/users');
    body.id = users.length + 1;

    await this.post(`/users`, { body });

    const roles = await this.get('/roles');
    const userRole = this.findRole({ roles, roleId: body.role });
    return { ...body, role: userRole }
  }

  async updateUser(body) {
    const { id } = body;
    await this.put(`/users/${id}`, { body });

    const roles = await this.get('/roles');
    const userRole = this.findRole({ roles, roleId: body.role });
    return { ...body, role: userRole }
  }

  async deleteUser(id) {
    await this.delete(`/users/${id}`);
    return id;
  }
}

module.exports = UserAPI;