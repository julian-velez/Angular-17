import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { productsService } from './api/product.service';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 private readonly productsSvc = inject(productsService)
 products$ = this.productsSvc.getAllproducts()
}
