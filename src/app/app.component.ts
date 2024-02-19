import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IWebWorker } from 'src/model/iweb-worker';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insurance-shell';

  handleCounter() {
    const customEvent = new Event("controlMfeCounter");
    window.dispatchEvent(customEvent);
  }
}
