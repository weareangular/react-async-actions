class Client {
  async getGeneralConfig() {
    const value = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value % 2 < 1) {
          resolve({
            avatar:
              "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
            name: "Redux",
          });
        } else {
          const error = new Error("Internal server error by random");
          reject(error);
        }
      }, 2000);
    });
  }
}

export const DBClient = new Client();
