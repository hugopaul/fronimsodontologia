import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "@daypilot/daypilot-lite-angular";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  /*events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today().addHours(10),
      end: DayPilot.Date.today().addHours(12),
      text: "Event 1"
    }
  ];
*/
  constructor(private http : HttpClient){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/marcacoes/buscar?dtfim=${to.toString()}&dtinicio=${from.toString()}`);
  }

}
