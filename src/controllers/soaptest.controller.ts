// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';

import {
  SoapTestService,
  LoginParameters,
  LoginResponse,
} from '../services/soaptest.service';

export class SoapTestController {
  constructor(
    @inject('services.SoapTestService')
    protected soapTestService: SoapTestService,
  ) {}

  @get('/login/{user}/{password}')
  async login(
    @param.path.string('user') User: string,
    @param.path.string('password') Password: string,
  ): Promise<LoginResponse> {
    return this.soapTestService.login(<LoginParameters>{
      User,
      Password,
    });
  }
}
