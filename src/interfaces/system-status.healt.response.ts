import { HealthStatus } from "@/types/healt-status";
import { ServiceStatusType } from "@/types/service-status-type";

export interface SystemStatusHealtService {
  readonly updatedAt: string;
  readonly healthStatus: HealthStatus;
}

export interface SystemStatusHealtResponse {
  readonly services: Record<ServiceStatusType, SystemStatusHealtService>;
}
