// Configuration classes for different environments
class Config {
    public isDevelopment = true;
    public connectionString = 'mongodb://localhost:27017/BankAccounts';
    public webPort = 4000;
  }
  
  class DevelopmentConfig extends Config {
    constructor() {
      super();
      this.isDevelopment = true;
      this.connectionString = 'mongodb://localhost:27017/BankAccounts';
      this.webPort = 4000;
    }
  }
  
  class ProductionConfig extends Config {
    constructor() {
      super();
      this.isDevelopment = false;
      this.connectionString = 'mongodb://localhost:27017/BankAccounts';
      this.webPort = 80;
    }
  }
  
  const config = new DevelopmentConfig();
  
  export default config;
  
  
  
