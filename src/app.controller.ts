import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import axios from 'axios';
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

  @Post('/api/public/duvida/')
  async duvida(@Body() params: any) {
    const { data } = await axios.post(
      `http://165.227.182.73:8000/api/public/duvida/`,
      params,
    );
    return data;
  }
}
