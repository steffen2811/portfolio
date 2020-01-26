import { Injectable } from '@angular/core';
import { Project } from '../_interface/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor() { }

getProjects(): Project[] {
  return [
    {
      Title: 'Portfolie side i Angular',
      Description: 'test123',
      Year: 1234
    },
    {
      Title: 'Tid fra SNTP og RTC på STM32',
      Description: 'test123',
      Year: 1234
    },
    {
      Title: 'Motionsfællesskab i NodeJs og swift',
      Description: 'test1234',
      Year: 12345
    },
    {
      Title: 'App til styring af PLC',
      Description: 'test1234',
      Year: 12345
    },
    {
      Title: 'Overførsel af data fra embedded controller til web api.',
      Description: 'test1234',
      Year: 12345
    },
    {
      Title: 'Kommunikationsplatform i ASP.NET Core og Angular',
      Description: 'test1234',
      Year: 12345
    }
  ];
}

}
