export interface SystemStatusHealtService {
  updatedAt: string;
  healthStatus: string;
}

export interface SystemStatusHealtResponse {
  services: {
    registration: SystemStatusHealtService;
    transfer: SystemStatusHealtService;
    trx: SystemStatusHealtService;
    push: SystemStatusHealtService;
    login: SystemStatusHealtService;
    testService: SystemStatusHealtService;
  };
}
