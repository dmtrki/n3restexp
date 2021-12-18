import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org/. */
  JSON: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  UUID: any;
};

export type Attribute = {
  __typename?: 'Attribute';
  attribute_group_id?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  pivot?: Maybe<ProductAttribute>;
  slug: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['UUID'];
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Scalars['Mixed']>;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  manufacturers: Array<Maybe<Manufacturer>>;
  order?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  country?: Maybe<Country>;
  country_code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  /** Relations */
  logo?: Maybe<Media>;
  products: Array<Maybe<Product>>;
  products_count?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  /** Methods */
  thumb?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uuid: Scalars['UUID'];
};

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['DateTime'];
  dimensions?: Maybe<Scalars['Mixed']>;
  fileName: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  path: Scalars['String'];
  properties?: Maybe<Scalars['Mixed']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
};


export type MediaUrlArgs = {
  conversion?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type Page = {
  __typename?: 'Page';
  extras?: Maybe<Scalars['Mixed']>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  attributes_list?: Maybe<Scalars['Mixed']>;
  category: ProductCategory;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  description_cutted?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['Mixed']>;
  id: Scalars['ID'];
  manufacturer?: Maybe<Manufacturer>;
  manufacturer_id?: Maybe<Scalars['Int']>;
  photos?: Maybe<Array<Maybe<Media>>>;
  price?: Maybe<Scalars['String']>;
  price_formatted?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  status_code?: Maybe<ProductStatus>;
  thumb?: Maybe<Scalars['String']>;
  thumb_with_dimensions?: Maybe<Scalars['Mixed']>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  uuid: Scalars['UUID'];
  views?: Maybe<Scalars['Int']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  value?: Maybe<Scalars['String']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  children?: Maybe<Array<Maybe<ProductCategory>>>;
  children_count?: Maybe<Scalars['Int']>;
  details?: Maybe<Array<Maybe<Scalars['Mixed']>>>;
  id: Scalars['Int'];
  /** Relations */
  parent?: Maybe<ProductCategory>;
  parent_id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Media>;
  products_count?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  /** Methods */
  thumb?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uuid: Scalars['UUID'];
};

/** A paginated list of Product items. */
export type ProductPaginator = {
  __typename?: 'ProductPaginator';
  /** A list of Product items. */
  data: Array<Product>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Product items. */
export type ProductSimplePaginator = {
  __typename?: 'ProductSimplePaginator';
  /** A list of Product items. */
  data: Array<Product>;
  /** Pagination information about the list of items. */
  paginatorInfo: SimplePaginatorInfo;
};

export enum ProductSortingColumn {
  Price = 'PRICE',
  Views = 'VIEWS'
}

export enum ProductStatus {
  Active = 'ACTIVE',
  Hidden = 'HIDDEN'
}

export type Query = {
  __typename?: 'Query';
  manufacturer?: Maybe<Manufacturer>;
  manufacturers: Array<Maybe<Manufacturer>>;
  manufacturersAbicaly?: Maybe<Scalars['Mixed']>;
  manufacturersCount: Scalars['Int'];
  manufacturersCountryly?: Maybe<Scalars['Mixed']>;
  media: Array<Media>;
  page?: Maybe<Page>;
  pages: Array<Page>;
  product: Product;
  productCategories: Array<Maybe<ProductCategory>>;
  productCategory?: Maybe<ProductCategory>;
  products?: Maybe<ProductPaginator>;
  productsAll: Array<Product>;
  productsCount: Scalars['Int'];
  productsLazy?: Maybe<ProductSimplePaginator>;
};


export type QueryManufacturerArgs = {
  slug?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['UUID']>;
};


export type QueryManufacturersArgs = {
  country_code?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  relatedCategory?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductArgs = {
  uuid?: InputMaybe<Scalars['UUID']>;
};


export type QueryProductCategoriesArgs = {
  hasChildren?: InputMaybe<QueryProductCategoriesHasChildrenWhereHasConditions>;
  hasParent?: InputMaybe<QueryProductCategoriesHasParentWhereHasConditions>;
  hasProducts?: InputMaybe<QueryProductCategoriesHasProductsWhereHasConditions>;
  parent_id?: InputMaybe<Scalars['Int']>;
};


export type QueryProductCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['UUID']>;
};


export type QueryProductsArgs = {
  category_id?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  hasManufacturer?: InputMaybe<QueryProductsHasManufacturerWhereHasConditions>;
  manufacturer_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  random?: InputMaybe<Scalars['Boolean']>;
  sorting?: InputMaybe<Array<QueryProductsSortingOrderByClause>>;
  uuids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};


export type QueryProductsAllArgs = {
  category_id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  manufacturer_id?: InputMaybe<Scalars['Int']>;
  random?: InputMaybe<Scalars['Boolean']>;
  sorting?: InputMaybe<Array<QueryProductsAllSortingOrderByClause>>;
  uuids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};


export type QueryProductsCountArgs = {
  category_id?: InputMaybe<Scalars['Int']>;
  manufacturer_id?: InputMaybe<Scalars['Int']>;
};


export type QueryProductsLazyArgs = {
  category_id?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  manufacturer_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  random?: InputMaybe<Scalars['Boolean']>;
  sorting?: InputMaybe<Array<QueryProductsLazySortingOrderByClause>>;
  uuids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

/** Allowed column names for the `hasChildren` argument on field `productCategories` on type `Query`. */
export enum QueryProductCategoriesHasChildrenColumn {
  ParentId = 'PARENT_ID'
}

/** Dynamic WHERE conditions for the `hasChildren` argument on the query `productCategories`. */
export type QueryProductCategoriesHasChildrenWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProductCategoriesHasChildrenWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryProductCategoriesHasChildrenWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProductCategoriesHasChildrenWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProductCategoriesHasChildrenColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasChildren` argument on the query `productCategories`. */
export type QueryProductCategoriesHasChildrenWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryProductCategoriesHasChildrenWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for the `hasParent` argument on field `productCategories` on type `Query`. */
export enum QueryProductCategoriesHasParentColumn {
  ParentId = 'PARENT_ID'
}

/** Dynamic WHERE conditions for the `hasParent` argument on the query `productCategories`. */
export type QueryProductCategoriesHasParentWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProductCategoriesHasParentWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryProductCategoriesHasParentWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProductCategoriesHasParentWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProductCategoriesHasParentColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasParent` argument on the query `productCategories`. */
export type QueryProductCategoriesHasParentWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryProductCategoriesHasParentWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for the `hasProducts` argument on field `productCategories` on type `Query`. */
export enum QueryProductCategoriesHasProductsColumn {
  CategoryId = 'CATEGORY_ID',
  ManufacturerId = 'MANUFACTURER_ID',
  StatusCode = 'STATUS_CODE'
}

/** Dynamic WHERE conditions for the `hasProducts` argument on the query `productCategories`. */
export type QueryProductCategoriesHasProductsWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProductCategoriesHasProductsWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryProductCategoriesHasProductsWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProductCategoriesHasProductsWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProductCategoriesHasProductsColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasProducts` argument on the query `productCategories`. */
export type QueryProductCategoriesHasProductsWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryProductCategoriesHasProductsWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Order by clause for the `sorting` argument on the query `productsAll`. */
export type QueryProductsAllSortingOrderByClause = {
  /** The column that is used for ordering. */
  column: ProductSortingColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for the `hasManufacturer` argument on field `products` on type `Query`. */
export enum QueryProductsHasManufacturerColumn {
  CountryCode = 'COUNTRY_CODE'
}

/** Dynamic WHERE conditions for the `hasManufacturer` argument on the query `products`. */
export type QueryProductsHasManufacturerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProductsHasManufacturerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryProductsHasManufacturerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProductsHasManufacturerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProductsHasManufacturerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasManufacturer` argument on the query `products`. */
export type QueryProductsHasManufacturerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryProductsHasManufacturerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Order by clause for the `sorting` argument on the query `productsLazy`. */
export type QueryProductsLazySortingOrderByClause = {
  /** The column that is used for ordering. */
  column: ProductSortingColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Order by clause for the `sorting` argument on the query `products`. */
export type QueryProductsSortingOrderByClause = {
  /** The column that is used for ordering. */
  column: ProductSortingColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Attribute",
        "fields": [
          {
            "name": "attribute_group_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "pivot",
            "type": {
              "kind": "OBJECT",
              "name": "ProductAttribute",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uuid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "values",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Country",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "manufacturers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Manufacturer",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "order",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Manufacturer",
        "fields": [
          {
            "name": "country",
            "type": {
              "kind": "OBJECT",
              "name": "Country",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "country_code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "OBJECT",
              "name": "Media",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "products",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Product",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "products_count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "thumb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uuid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Media",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "dimensions",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fileName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "path",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "properties",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": [
              {
                "name": "conversion",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "uuid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "fields": [
          {
            "name": "extras",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currentPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginatorInfo",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currentPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstItem",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasMorePages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "lastItem",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "perPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attribute",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "attributes_list",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductCategory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "category_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description_cutted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "manufacturer",
            "type": {
              "kind": "OBJECT",
              "name": "Manufacturer",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "manufacturer_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "photos",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "price_formatted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rating",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status_code",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thumb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thumb_with_dimensions",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "thumbnail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uuid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "views",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductAttribute",
        "fields": [
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductCategory",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attribute",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "children",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductCategory",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "children_count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "parent",
            "type": {
              "kind": "OBJECT",
              "name": "ProductCategory",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "parent_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "picture",
            "type": {
              "kind": "OBJECT",
              "name": "Media",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "products_count",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "thumb",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "uuid",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductPaginator",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "paginatorInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginatorInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductSimplePaginator",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "paginatorInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SimplePaginatorInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "manufacturer",
            "type": {
              "kind": "OBJECT",
              "name": "Manufacturer",
              "ofType": null
            },
            "args": [
              {
                "name": "slug",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "uuid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "manufacturers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Manufacturer",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "country_code",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "relatedCategory",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "manufacturersAbicaly",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "manufacturersCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "manufacturersCountryly",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "media",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Media",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "page",
            "type": {
              "kind": "OBJECT",
              "name": "Page",
              "ofType": null
            },
            "args": [
              {
                "name": "slug",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Page",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "uuid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productCategories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProductCategory",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "hasChildren",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "hasParent",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "hasProducts",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "parent_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productCategory",
            "type": {
              "kind": "OBJECT",
              "name": "ProductCategory",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "slug",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "uuid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "products",
            "type": {
              "kind": "OBJECT",
              "name": "ProductPaginator",
              "ofType": null
            },
            "args": [
              {
                "name": "category_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "hasManufacturer",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "manufacturer_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "random",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sorting",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "uuids",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "productsAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Product",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "category_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "manufacturer_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "random",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sorting",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "uuids",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "productsCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "category_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "manufacturer_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "productsLazy",
            "type": {
              "kind": "OBJECT",
              "name": "ProductSimplePaginator",
              "ofType": null
            },
            "args": [
              {
                "name": "category_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "manufacturer_id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "page",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "random",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sorting",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "uuids",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SimplePaginatorInfo",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currentPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "firstItem",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastItem",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "perPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;
export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Attribute?: (data: WithTypename<Attribute>) => null | string,
  Country?: (data: WithTypename<Country>) => null | string,
  Manufacturer?: (data: WithTypename<Manufacturer>) => null | string,
  Media?: (data: WithTypename<Media>) => null | string,
  Page?: (data: WithTypename<Page>) => null | string,
  PageInfo?: (data: WithTypename<PageInfo>) => null | string,
  PaginatorInfo?: (data: WithTypename<PaginatorInfo>) => null | string,
  Product?: (data: WithTypename<Product>) => null | string,
  ProductAttribute?: (data: WithTypename<ProductAttribute>) => null | string,
  ProductCategory?: (data: WithTypename<ProductCategory>) => null | string,
  ProductPaginator?: (data: WithTypename<ProductPaginator>) => null | string,
  ProductSimplePaginator?: (data: WithTypename<ProductSimplePaginator>) => null | string,
  SimplePaginatorInfo?: (data: WithTypename<SimplePaginatorInfo>) => null | string,
  User?: (data: WithTypename<User>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    manufacturer?: GraphCacheResolver<WithTypename<Query>, QueryManufacturerArgs, WithTypename<Manufacturer> | string>,
    manufacturers?: GraphCacheResolver<WithTypename<Query>, QueryManufacturersArgs, Array<WithTypename<Manufacturer> | string>>,
    manufacturersAbicaly?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Mixed'] | string>,
    manufacturersCount?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Int'] | string>,
    manufacturersCountryly?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Mixed'] | string>,
    media?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Media> | string>>,
    page?: GraphCacheResolver<WithTypename<Query>, QueryPageArgs, WithTypename<Page> | string>,
    pages?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Page> | string>>,
    product?: GraphCacheResolver<WithTypename<Query>, QueryProductArgs, WithTypename<Product> | string>,
    productCategories?: GraphCacheResolver<WithTypename<Query>, QueryProductCategoriesArgs, Array<WithTypename<ProductCategory> | string>>,
    productCategory?: GraphCacheResolver<WithTypename<Query>, QueryProductCategoryArgs, WithTypename<ProductCategory> | string>,
    products?: GraphCacheResolver<WithTypename<Query>, QueryProductsArgs, WithTypename<ProductPaginator> | string>,
    productsAll?: GraphCacheResolver<WithTypename<Query>, QueryProductsAllArgs, Array<WithTypename<Product> | string>>,
    productsCount?: GraphCacheResolver<WithTypename<Query>, QueryProductsCountArgs, Scalars['Int'] | string>,
    productsLazy?: GraphCacheResolver<WithTypename<Query>, QueryProductsLazyArgs, WithTypename<ProductSimplePaginator> | string>
  },
  Attribute?: {
    attribute_group_id?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['Int'] | string>,
    id?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['ID'] | string>,
    pivot?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, WithTypename<ProductAttribute> | string>,
    slug?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['String'] | string>,
    uuid?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['UUID'] | string>,
    value?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['String'] | string>,
    values?: GraphCacheResolver<WithTypename<Attribute>, Record<string, never>, Scalars['Mixed'] | string>
  },
  Country?: {
    code?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['Int'] | string>,
    manufacturers?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Array<WithTypename<Manufacturer> | string>>,
    order?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['Int'] | string>,
    slug?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Country>, Record<string, never>, Scalars['String'] | string>
  },
  Manufacturer?: {
    country?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, WithTypename<Country> | string>,
    country_code?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['String'] | string>,
    details?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['JSON'] | string>,
    id?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['Int'] | string>,
    logo?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, WithTypename<Media> | string>,
    products?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Array<WithTypename<Product> | string>>,
    products_count?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['Int'] | string>,
    slug?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['String'] | string>,
    thumb?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['String'] | string>,
    uuid?: GraphCacheResolver<WithTypename<Manufacturer>, Record<string, never>, Scalars['UUID'] | string>
  },
  Media?: {
    createdAt?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['DateTime'] | string>,
    dimensions?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['Mixed'] | string>,
    fileName?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['Int'] | string>,
    name?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['String'] | string>,
    path?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['String'] | string>,
    properties?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['Mixed'] | string>,
    type?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['String'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['DateTime'] | string>,
    url?: GraphCacheResolver<WithTypename<Media>, MediaUrlArgs, Scalars['String'] | string>,
    uuid?: GraphCacheResolver<WithTypename<Media>, Record<string, never>, Scalars['String'] | string>
  },
  Page?: {
    extras?: GraphCacheResolver<WithTypename<Page>, Record<string, never>, Scalars['Mixed'] | string>,
    id?: GraphCacheResolver<WithTypename<Page>, Record<string, never>, Scalars['ID'] | string>,
    slug?: GraphCacheResolver<WithTypename<Page>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Page>, Record<string, never>, Scalars['String'] | string>
  },
  PageInfo?: {
    count?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Int'] | string>,
    currentPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Int'] | string>,
    endCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['String'] | string>,
    hasNextPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    hasPreviousPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    lastPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Int'] | string>,
    startCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['String'] | string>,
    total?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Int'] | string>
  },
  PaginatorInfo?: {
    count?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    currentPage?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    firstItem?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    hasMorePages?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    lastItem?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    lastPage?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    perPage?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    total?: GraphCacheResolver<WithTypename<PaginatorInfo>, Record<string, never>, Scalars['Int'] | string>
  },
  Product?: {
    attributes?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Array<WithTypename<Attribute> | string>>,
    attributes_list?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Mixed'] | string>,
    category?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, WithTypename<ProductCategory> | string>,
    category_id?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Int'] | string>,
    created_at?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['DateTime'] | string>,
    description?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    description_cutted?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    details?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Mixed'] | string>,
    id?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['ID'] | string>,
    manufacturer?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, WithTypename<Manufacturer> | string>,
    manufacturer_id?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Int'] | string>,
    photos?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Array<WithTypename<Media> | string>>,
    price?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    price_formatted?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    rating?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    slug?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    status_code?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, ProductStatus | string>,
    thumb?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    thumb_with_dimensions?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Mixed'] | string>,
    thumbnail?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['String'] | string>,
    updated_at?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['DateTime'] | string>,
    uuid?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['UUID'] | string>,
    views?: GraphCacheResolver<WithTypename<Product>, Record<string, never>, Scalars['Int'] | string>
  },
  ProductAttribute?: {
    value?: GraphCacheResolver<WithTypename<ProductAttribute>, Record<string, never>, Scalars['String'] | string>
  },
  ProductCategory?: {
    attributes?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Array<WithTypename<Attribute> | string>>,
    children?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Array<WithTypename<ProductCategory> | string>>,
    children_count?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['Int'] | string>,
    details?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Array<Scalars['Mixed'] | string>>,
    id?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['Int'] | string>,
    parent?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, WithTypename<ProductCategory> | string>,
    parent_id?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['Int'] | string>,
    picture?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, WithTypename<Media> | string>,
    products_count?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['Int'] | string>,
    slug?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['String'] | string>,
    thumb?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['String'] | string>,
    uuid?: GraphCacheResolver<WithTypename<ProductCategory>, Record<string, never>, Scalars['UUID'] | string>
  },
  ProductPaginator?: {
    data?: GraphCacheResolver<WithTypename<ProductPaginator>, Record<string, never>, Array<WithTypename<Product> | string>>,
    paginatorInfo?: GraphCacheResolver<WithTypename<ProductPaginator>, Record<string, never>, WithTypename<PaginatorInfo> | string>
  },
  ProductSimplePaginator?: {
    data?: GraphCacheResolver<WithTypename<ProductSimplePaginator>, Record<string, never>, Array<WithTypename<Product> | string>>,
    paginatorInfo?: GraphCacheResolver<WithTypename<ProductSimplePaginator>, Record<string, never>, WithTypename<SimplePaginatorInfo> | string>
  },
  SimplePaginatorInfo?: {
    count?: GraphCacheResolver<WithTypename<SimplePaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    currentPage?: GraphCacheResolver<WithTypename<SimplePaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    firstItem?: GraphCacheResolver<WithTypename<SimplePaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    lastItem?: GraphCacheResolver<WithTypename<SimplePaginatorInfo>, Record<string, never>, Scalars['Int'] | string>,
    perPage?: GraphCacheResolver<WithTypename<SimplePaginatorInfo>, Record<string, never>, Scalars['Int'] | string>
  },
  User?: {
    created_at?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['DateTime'] | string>,
    email?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    updated_at?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['DateTime'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  {}
};

export type GraphCacheUpdaters = {
  Mutation?: {},
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};