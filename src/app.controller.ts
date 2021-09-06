import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/public/aluno/')
  async getAluno(@Query() query: any) {
    const { data } = await axios.get(
      `http://165.227.182.73:8000/api/public/aluno/?dsc_matricula=${query.dsc_matricula}&format=json`,
    );
    console.log(data);
    return data;
  }

  @Get('/api/public/conteudo/')
  async conteudos(@Query() query: any) {
    const { data } = await axios.get(
      `http://165.227.182.73:8000/api/public/conteudo/?ano_letivo=2021&disciplina=${query.disciplina}`,
    );
    console.log(data);
    return data;
  }

  @Get('/api/public/questao/')
  async questoes(@Query() query: any) {
    const { data } = await axios.get(
      `http://165.227.182.73:8000/api/public/questao/?ano_letivo=2021&conteudo=${query.conteudo}`,
    );
    console.log(data);
    return data;
  }

  @Get('/api/public/disciplina/')
  async disciplinas() {
    const { data } = await axios.get(
      `http://165.227.182.73:8000/api/public/disciplina/?ano_letivo=2021`,
    );
    return data;
  }

  @Get('/api/public/cti/')
  async cti(@Query() query: any) {
    const { data } = await axios.get(
      `http://165.227.182.73:8000/api/public/cti/?dsc_cti=&dat_cti=${query.dat_cti}&criador=&ano_letivo=2021`,
    );
    return data;
  }

  @Post('/api/public/duvida/')
  async saveDuvida(@Body() params: any) {
    console.log(33333333);
    const { data } = await axios.post(
      `http://165.227.182.73:8000/api/public/duvida/`,
      params,
    );
    return data;
  }

  @Post('/api/public/cti/')
  async saveCti(@Body() params: any) {
    console.log(params);
    const { data } = await axios.post(
      `http://165.227.182.73:8000/api/public/cti/`,
      params,
    );
    return data;
  }

  @Post('/api/public/cti/remoto')
  async saveCtiRemoto(@Body() params: any) {
    try {
      const { data } = await axios.post(
        `http://165.227.182.73:8000/api/public/remoto/cti/`,
        params,
      );
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
