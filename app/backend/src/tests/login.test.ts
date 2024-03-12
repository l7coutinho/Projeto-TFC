import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando login', async function () {
  it('Successful login', async function () {
    const data = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "secret_admin"
    });
    
    expect(data.status).to.equal(200);
    expect(data.body).to.haveOwnProperty('token');
  });

  it('Failed login', async function () {
    const data = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "wrong_password"
    });

    expect(data.status).to.equal(401);
    expect(data.body.message).to.be.eq('All fields must be filled');
  })
});