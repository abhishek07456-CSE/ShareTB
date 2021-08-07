import { AzureService } from './AzureService';
export interface IStorage {
    createContainer(container_name: string);
    uploadDocument();
    DeleteDocument();
}
export class Storage{
      public static service:any;
      public static init(){
        Storage.service = new AzureService();
        return Storage.service;
      }
}