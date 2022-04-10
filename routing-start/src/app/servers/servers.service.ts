export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(serverToUpdate: { id: number, name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === serverToUpdate.id;
      }
    );
    if (server) {
      server.name = serverToUpdate.name;
      server.status = serverToUpdate.status;
    }
  }
}
