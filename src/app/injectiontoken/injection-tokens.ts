import { InjectionToken } from "@angular/core";
import { ServiceA } from "../services/service-a";

export const GLOBAL_SERVICEA = new InjectionToken<ServiceA>('GLOBAL_SERVICEA');