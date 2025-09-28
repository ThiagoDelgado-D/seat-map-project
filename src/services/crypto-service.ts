import { UUID } from "@/types";

export interface CryptoService {
  generateUUID(): Promise<UUID>;
  generateRandomToken(): Promise<string>;
}
