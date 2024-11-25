import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
