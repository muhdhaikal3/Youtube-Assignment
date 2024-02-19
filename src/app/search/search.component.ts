import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtubeservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router) {}

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/searchresult'], { queryParams: { q: this.searchQuery } });
    }
  }
  ngOnInit(): void {
  }

}
