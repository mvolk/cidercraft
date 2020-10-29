/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPipsqueaks = /* GraphQL */ `
  query SyncPipsqueaks(
    $filter: ModelPipsqueakFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPipsqueaks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        arn
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPipsqueak = /* GraphQL */ `
  query GetPipsqueak($arn: String!) {
    getPipsqueak(arn: $arn) {
      arn
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPipsqueaks = /* GraphQL */ `
  query ListPipsqueaks(
    $arn: String
    $filter: ModelPipsqueakFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPipsqueaks(
      arn: $arn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        arn
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
