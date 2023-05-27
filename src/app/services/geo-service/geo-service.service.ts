import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloQueryResult, InMemoryCache} from '@apollo/client/core';
import {Observable, switchMap, throwError} from 'rxjs';
import {CountriesNS} from '../../../graphql/namespace';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  constructor(readonly http: HttpClient, private apollo: Apollo) {
    if (!this.apollo.use('geography-class')) {
      const link = new HttpLink(http).create({
        uri: 'https://countries.trevorblades.com/graphql',
      });
      apollo.createNamed('geography-class', {
        cache: new InMemoryCache({
          typePolicies: {
            Continent: {
              keyFields: ["code"],
            },
            Query: {
              fields: {
                continents: {
                  merge(existing){
                    return existing
                  }
                }
              }
            }
          }
        }),
        link,
      });
    }
  }

  fetchContinents(): Observable<ApolloQueryResult<CountriesNS.ContinentsQueryQueryResult>> {
    return new CountriesNS.ContinentsQueryGQL(this.apollo).fetch();
  }
}
