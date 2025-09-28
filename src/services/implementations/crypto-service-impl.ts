import { UUID } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { CryptoService } from "../crypto-service";

export class CryptoServiceImp implements CryptoService {
  async generateUUID(): Promise<UUID> {
    return uuidv4() as UUID;
  }
  async generateRandomToken(): Promise<string> {
    return uuidv4();
  }
}