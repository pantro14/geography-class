import { Injectable } from '@angular/core';
import {GeoService} from '../geo-service/geo-service.service';
import {CountriesNS} from '../../../graphql/namespace';
import {ComponentStore, tapResponse} from '@ngrx/component-store';
import {delay, pipe, switchMap, throwError} from 'rxjs';

interface GeographyState {
  continents: CountriesNS.Continent[]
}

const initialState: GeographyState = {
  continents: []
}

@Injectable({
  providedIn: 'root'
})
export class FacadeService extends ComponentStore<GeographyState>{
  constructor(
    private geoService: GeoService
  ) {
    super(initialState)
  }

  readonly continents$ = this.select(
    ({ continents }) => continents
  );

  readonly fetchContinents = this.effect<void>(
    pipe(
      switchMap(() => this.geoService.fetchContinents()
        .pipe(
          tapResponse((response) => this.patchState({
            continents: response.data.continents as CountriesNS.Continent[]
          }), console.error)
        )
      )
    )
  )

}
