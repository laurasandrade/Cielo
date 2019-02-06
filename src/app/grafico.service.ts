// import * as myJson from 'src/app/lancamento-conta-legado.json';
// var json = require('src/app/lancamento-conta-legado.json');


// import { IEmployee } from './IEmployee';  
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class grafico-class{
  constructor(private http:Http){
    getGrafico() : Observable<GraficoComponent[]>{
      return.this.http.get('.app/grafico')
      .map{(resp: Response) => resp.json()};
    }
}  

