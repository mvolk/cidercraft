/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPipsqueak = /* GraphQL */ `
  mutation CreatePipsqueak(
    $input: CreatePipsqueakInput!
    $condition: ModelPipsqueakConditionInput
  ) {
    createPipsqueak(input: $input, condition: $condition) {
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
export const updatePipsqueak = /* GraphQL */ `
  mutation UpdatePipsqueak(
    $input: UpdatePipsqueakInput!
    $condition: ModelPipsqueakConditionInput
  ) {
    updatePipsqueak(input: $input, condition: $condition) {
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
export const deletePipsqueak = /* GraphQL */ `
  mutation DeletePipsqueak(
    $input: DeletePipsqueakInput!
    $condition: ModelPipsqueakConditionInput
  ) {
    deletePipsqueak(input: $input, condition: $condition) {
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
