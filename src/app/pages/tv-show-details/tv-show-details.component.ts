import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css',
})
export class TvShowDetailsComponent {
  showName: string = ''; // Captura del parámetro dinámico
  showDetails: Show | undefined; // Detalles completos del programa

  constructor(
    private route: ActivatedRoute,
    private tvShowService: TvShowService
  ) {
    this.showName = this.route.snapshot.paramMap.get('name') || ''; // Capturamos el nombre desde la URL
    this.fetchShowDetails(); // Obtenemos los detalles del programa
  }

  fetchShowDetails(): void {
    // Buscamos los detalles en el servicio
    this.showDetails = this.tvShowService.shows.find(
      (show) => show.name === this.showName
    );
  }
}
