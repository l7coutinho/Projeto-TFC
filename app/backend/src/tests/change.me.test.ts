import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import { ALL_TEAMS_MOCK, ONE_TEAM_MOCK } from './teams.mock';
import TeamsModel from '../database/models/ModelTeam';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Testa se retorna todos os times', async function () {
    sinon.stub(TeamsModel, 'findAll').resolves(ALL_TEAMS_MOCK as any);
    const { status } = await chai.request(app).get('/teams').send(ALL_TEAMS_MOCK);

    expect(status).to.be.eq(200);
  });

  it('Testa se retorna um único time', async function () {
    expect(false).to.be.eq(true);
  });

  afterEach(() => {
    sinon.restore();
  });
});
