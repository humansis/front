import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-settings',
  templateUrl: './dynamic-settings.component.html',
  styleUrls: ['./dynamic-settings.component.scss'],
})
export class DynamicSettingsComponent implements OnInit {
  selectedTitle: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.selectedTitle = params.title));
  }
}
