import { UUID } from "@/types";
import { CryptoService } from "../crypto-service";
import crypto from "crypto";

export class CryptoServiceImp implements CryptoService {
  async generateUUID(): Promise<UUID> {
    return crypto.randomUUID();
  }
  async generateRandomToken(): Promise<string> {
    return crypto.randomBytes(32).toString("hex");
  }
}
