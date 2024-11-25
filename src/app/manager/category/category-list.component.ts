import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  private apiURL = 'https://api.github.com/users';
  public data: any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.http.get(this.apiURL).subscribe((data) => {
      this.data = data as any[];
    });
  }
}
