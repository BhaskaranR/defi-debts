/** New paying account.  This is null in the case of a deletion. */
export enum TransactionStatus {
  Executed = "EXECUTED",
  SoftFail = "SOFT_FAIL",
  HardFail = "HARD_FAIL",
  Delayed = "DELAYED",
  Expired = "EXPIRED",
  Unknown = "UNKNOWN"
}
/** Number of bytes now used by the `payer` account, after applying this RAM operation.To have a precise view of the RAM left on an account after this transaction wasapplied, go through all actions in execution order(`TransactionTrace.executedActions`) and use the last RAMOp for the given account. */
export enum RamOperation {
  CreateTable = "CREATE_TABLE",
  DeferredTrxAdd = "DEFERRED_TRX_ADD",
  DeferredTrxCancel = "DEFERRED_TRX_CANCEL",
  DeferredTrxPushed = "DEFERRED_TRX_PUSHED",
  DeferredTrxRemoved = "DEFERRED_TRX_REMOVED",
  Deleteauth = "DELETEAUTH",
  Linkauth = "LINKAUTH",
  Newaccount = "NEWACCOUNT",
  PrimaryIndexAdd = "PRIMARY_INDEX_ADD",
  PrimaryIndexRemove = "PRIMARY_INDEX_REMOVE",
  PrimaryIndexUpdate = "PRIMARY_INDEX_UPDATE",
  PrimaryIndexUpdateAddNewPayer = "PRIMARY_INDEX_UPDATE_ADD_NEW_PAYER",
  PrimaryIndexUpdateRemoveOldPayer = "PRIMARY_INDEX_UPDATE_REMOVE_OLD_PAYER",
  RemoveTable = "REMOVE_TABLE",
  SecondaryIndexAdd = "SECONDARY_INDEX_ADD",
  SecondaryIndexRemove = "SECONDARY_INDEX_REMOVE",
  SecondaryIndexUpdateAddNewPayer = "SECONDARY_INDEX_UPDATE_ADD_NEW_PAYER",
  SecondaryIndexUpdateRemoveOldPayer = "SECONDARY_INDEX_UPDATE_REMOVE_OLD_PAYER",
  Setabi = "SETABI",
  Setcode = "SETCODE",
  Unlinkauth = "UNLINKAUTH",
  UpdateauthCreate = "UPDATEAUTH_CREATE",
  UpdateauthUpdate = "UPDATEAUTH_UPDATE"
}
/** The deferred transaction payload itself. */
export enum DtrxOperation {
  PushCreate = "PUSH_CREATE",
  Create = "CREATE",
  ModifyCancel = "MODIFY_CANCEL",
  ModifyCreate = "MODIFY_CREATE",
  Cancel = "CANCEL"
}
/** Creation or deletion of a table */
export enum TableOperation {
  Ins = "INS",
  Rem = "REM"
}
/** New paying account.  This is null in the case of a deletion. */
export enum Uint64Encoding {
  Name = "NAME",
  Decimal = "DECIMAL",
  Hexadecimal = "HEXADECIMAL",
  Symbol = "SYMBOL",
  SymbolCode = "SYMBOL_CODE"
}
/** New paying account.  This is null in the case of a deletion. */
export enum DbOperation {
  Ins = "INS",
  Upd = "UPD",
  Rem = "REM"
}
/** Use this to rebuild the execution tree, using the `nodeos` dispatch algorithm ofnotifications, actions and context-free actions.This is similar to what you would have gotten in `nodeos` prior to version 1.8.0. */
export enum ActionSortOrder {
  Execution = "EXECUTION",
  Creation = "CREATION"
}

export enum Comparator {
  Gte = "GTE",
  Gt = "GT",
  Lte = "LTE",
  Lt = "LT",
  Eq = "EQ"
}

/** Block number in the chain */
export type Int64 = any;

/** Block number in the chain */
export type Uint32 = any;

/** Block number in the chain */
export type Time = any;

/** Block number in the chain */
export type Uint64 = any;

/** Block number in the chain */
export type Json = any;

// ====================================================
// Documents
// ====================================================

export namespace SearchTransactionsForward {
  export type Variables = {
    query: string;
  };

  export type Subscription = {
    __typename?: "Subscription";

    searchTransactionsForward: SearchTransactionsForward;
  };

  export type SearchTransactionsForward = {
    __typename?: "SearchTransactionForwardResponse";

    cursor: string;

    irreversibleBlockNum: Uint32;

    trace: Trace | null;
  };

  export type Trace = {
    __typename?: "TransactionTrace";

    matchingActions: MatchingActions[];
  };

  export type MatchingActions = {
    __typename?: "ActionTrace";

    receiver: string;

    account: string;

    name: string;

    json: Json | null;

    dbOps: DbOps[];
  };

  export type DbOps = {
    __typename?: "DBOp";

    operation: DbOperation;

    key: Key;

    newJSON: NewJson;

    oldData: string | null;

    newData: string | null;
  };

  export type Key = {
    __typename?: "DBOpKey";

    code: string;

    table: string;

    scope: string;
  };

  export type NewJson = {
    __typename?: "DecodedObject";

    object: Json | null;

    error: string | null;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class SearchTransactionsForwardGQL extends Apollo.Subscription<
  SearchTransactionsForward.Subscription,
  SearchTransactionsForward.Variables
> {
  document: any = gql`
    subscription searchTransactionsForward($query: String!) {
      searchTransactionsForward(query: $query, limit: 1) {
        cursor
        irreversibleBlockNum
        trace {
          matchingActions {
            receiver
            account
            name
            json
            dbOps {
              operation
              key {
                code
                table
                scope
              }
              newJSON {
                object
                error
              }
              oldData
              newData
            }
          }
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
