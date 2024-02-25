export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDate: { input: any; output: any; }
  AWSDateTime: { input: any; output: any; }
  AWSTime: { input: any; output: any; }
  AWSTimestamp: { input: any; output: any; }
};

export type Company = {
  __typename?: 'Company';
  approvalStatusUpdatedAt?: Maybe<Scalars['AWSDate']['output']>;
  companyId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['AWSDate']['output']>;
  document: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDate']['output']>;
};

export type CreateCompanyInput = {
  document: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type FetchCompanies = {
  __typename?: 'FetchCompanies';
  data?: Maybe<Array<Maybe<Company>>>;
  paginationToken?: Maybe<Scalars['String']['output']>;
};

export type FetchCompaniesInput = {
  endDate?: InputMaybe<Scalars['AWSDate']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  paginationToken?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['AWSDate']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type FetchCompany = {
  __typename?: 'FetchCompany';
  approvalStatusUpdatedAt?: Maybe<Scalars['AWSDate']['output']>;
  createdAt?: Maybe<Scalars['AWSDate']['output']>;
  document: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDate']['output']>;
};

export type FetchCompanyInput = {
  companyId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany?: Maybe<Company>;
  createUser?: Maybe<User>;
};


export type Mutation_CreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type Mutation_CreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  fetchCompanies?: Maybe<FetchCompanies>;
  fetchCompany?: Maybe<FetchCompany>;
};


export type Query_FetchCompaniesArgs = {
  input?: InputMaybe<FetchCompaniesInput>;
};


export type Query_FetchCompanyArgs = {
  input?: InputMaybe<FetchCompanyInput>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['AWSDate']['output'];
  deletedAt?: Maybe<Scalars['AWSDate']['output']>;
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  status: UserStatus;
  updatedAt: Scalars['AWSDate']['output'];
  userId: Scalars['ID']['output'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}
