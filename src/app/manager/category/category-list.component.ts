import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  private apiURL: string = 'http://localhost:8080/api/manager/quizzes';
  public dataApi: any[] = [];

  public keyword: string = '';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.http.get(this.apiURL).subscribe((data) => {
      this.dataApi = data as any[];
    });
  }

  // public onSearch(): void {
  //   this.apiURL = `http://localhost:8080/api/manager/quizzes/search?keyword=${this.keyword}`
  //   this.getData();
  // }
}
