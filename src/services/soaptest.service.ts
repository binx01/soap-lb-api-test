import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {SoapTestDataSource} from '../datasources';

export interface LoginResponse {
  result: {
    result: {
      $value: string;
    };
  };
}

export interface LoginRequest {
  User: string;
  Password: string;
}

export interface SoapTestService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  login(args: LoginRequest): Promise<LoginResponse>;
}

export class SoapTestServiceProvider implements Provider<SoapTestService> {
  constructor(
    // soaptest must match the name property in the datasource json file
    @inject('datasources.soaptest')
    protected dataSource: SoapTestDataSource = new SoapTestDataSource(),
  ) {}

  value(): Promise<SoapTestService> {
    return getService(this.dataSource);
  }
}
