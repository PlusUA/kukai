import { Injectable } from '@angular/core';
import { TzktService } from './tzkt/tzkt.service';
import { WalletObject } from '../wallet/wallet';
import { Asset } from '../token/token.service';

export interface Indexer {
  getContractAddresses(pkh: string): Promise<any>;
  accountInfo(address: string, knownTokenIds: string[], init: boolean): Promise<any>;
  getOperations(address: string, knownTokenIds: string[], wallet: WalletObject): Promise<any>;
}
@Injectable({
  providedIn: 'root'
})
export class IndexerService {
  constructor(public tzktService: TzktService) {}
  async isUsedAccount(address: string): Promise<boolean> {
    return this.tzktService.isUsedAccount(address);
  }
  async getContractAddresses(address: string): Promise<any> {
    return this.tzktService.getContractAddresses(address);
  }
  async accountInfo(address: string, knownTokenIds: string[] = []): Promise<any> {
    return this.tzktService.accountInfo(address, knownTokenIds);
  }
  async getOperations(address: string, knownTokenIds: string[], wallet: WalletObject): Promise<any> {
    return this.tzktService.getOperations(address, knownTokenIds, wallet);
  }
  async getTokenMetadata(contractAddress: string, id: string, skipTzkt = false): Promise<any> {
    return this.tzktService.getTokenMetadata(contractAddress, id, skipTzkt);
  }
}
