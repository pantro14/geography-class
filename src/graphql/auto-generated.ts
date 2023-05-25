import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export interface Continent {
  __typename?: 'Continent';
  code?: Maybe<Scalars['String']['output']>;
  countries?: Maybe<Array<Maybe<Country>>>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Country {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Continent>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  emojiU?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Language>>>;
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  states?: Maybe<Array<Maybe<State>>>;
}

export interface Language {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
  rtl?: Maybe<Scalars['Int']['output']>;
}

export interface Query {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents?: Maybe<Array<Maybe<Continent>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Maybe<Language>>>;
}

export interface QueryContinentArgs {
  code?: InputMaybe<Scalars['String']['input']>;
}

export interface QueryCountryArgs {
  code?: InputMaybe<Scalars['String']['input']>;
}

export interface QueryLanguageArgs {
  code?: InputMaybe<Scalars['String']['input']>;
}

export interface State {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  name?: Maybe<Scalars['String']['output']>;
}

export type ContinentsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ContinentsQueryQueryResult = {
  __typename?: 'Query';
  continents?: Array<{
    __typename?: 'Continent';
    code?: string | null;
    name?: string | null;
  } | null> | null;
};

export const ContinentsQueryDocument = gql`
  query ContinentsQuery {
    continents {
      code
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ContinentsQueryGQL extends Apollo.Query<
  ContinentsQueryQueryResult,
  ContinentsQueryQueryVariables
> {
  override document = ContinentsQueryDocument;
  override client = 'countries';
  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
