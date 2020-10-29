/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePipsqueakInput = {
  arn: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelPipsqueakConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPipsqueakConditionInput | null > | null,
  or?: Array< ModelPipsqueakConditionInput | null > | null,
  not?: ModelPipsqueakConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePipsqueakInput = {
  arn: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeletePipsqueakInput = {
  arn: string,
  _version?: number | null,
};

export type ModelPipsqueakFilterInput = {
  arn?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPipsqueakFilterInput | null > | null,
  or?: Array< ModelPipsqueakFilterInput | null > | null,
  not?: ModelPipsqueakFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePipsqueakMutationVariables = {
  input: CreatePipsqueakInput,
  condition?: ModelPipsqueakConditionInput | null,
};

export type CreatePipsqueakMutation = {
  createPipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePipsqueakMutationVariables = {
  input: UpdatePipsqueakInput,
  condition?: ModelPipsqueakConditionInput | null,
};

export type UpdatePipsqueakMutation = {
  updatePipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePipsqueakMutationVariables = {
  input: DeletePipsqueakInput,
  condition?: ModelPipsqueakConditionInput | null,
};

export type DeletePipsqueakMutation = {
  deletePipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncPipsqueaksQueryVariables = {
  filter?: ModelPipsqueakFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPipsqueaksQuery = {
  syncPipsqueaks:  {
    __typename: "ModelPipsqueakConnection",
    items:  Array< {
      __typename: "Pipsqueak",
      arn: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetPipsqueakQueryVariables = {
  arn: string,
};

export type GetPipsqueakQuery = {
  getPipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPipsqueaksQueryVariables = {
  arn?: string | null,
  filter?: ModelPipsqueakFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPipsqueaksQuery = {
  listPipsqueaks:  {
    __typename: "ModelPipsqueakConnection",
    items:  Array< {
      __typename: "Pipsqueak",
      arn: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreatePipsqueakSubscription = {
  onCreatePipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePipsqueakSubscription = {
  onUpdatePipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePipsqueakSubscription = {
  onDeletePipsqueak:  {
    __typename: "Pipsqueak",
    arn: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
