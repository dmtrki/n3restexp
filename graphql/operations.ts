import { DocumentNode } from 'graphql';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type GetCommonDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommonDataQuery = { __typename?: 'Query', page?: { __typename?: 'Page', extras?: any | null | undefined } | null | undefined };

export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = { __typename?: 'Query', manufacturersCount: number, page?: { __typename?: 'Page', title: string, extras?: any | null | undefined } | null | undefined, manufacturers: Array<{ __typename?: 'Manufacturer', uuid: any, title: string, slug: string, thumb?: string | null | undefined } | null | undefined> };

export type GetProductCategoryQueryVariables = Exact<{
  parent_id?: InputMaybe<Scalars['Int']>;
}>;


export type GetProductCategoryQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', id: number, uuid: any, slug: string, title: string, parent_id?: number | null | undefined, thumb?: string | null | undefined, products_count?: number | null | undefined, children_count?: number | null | undefined } | null | undefined> };

export type GetRootProductCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRootProductCategoryQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', id: number, uuid: any, slug: string, title: string, thumb?: string | null | undefined, parent_id?: number | null | undefined } | null | undefined> };


export const GetCommonDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCommonData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"StringValue","value":"common","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extras"}}]}}]}}]} as unknown as DocumentNode;

export function useGetCommonDataQuery(options: Omit<Urql.UseQueryArgs<never, GetCommonDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCommonDataQuery>({ query: GetCommonDataDocument, ...options });
};
export const GetHomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHomepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"StringValue","value":"homepage","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"extras"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturersCount"}}]}}]} as unknown as DocumentNode;

export function useGetHomepageQuery(options: Omit<Urql.UseQueryArgs<never, GetHomepageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetHomepageQuery>({ query: GetHomepageDocument, ...options });
};
export const GetProductCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"parent_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"products_count"}},{"kind":"Field","name":{"kind":"Name","value":"children_count"}}]}}]}}]} as unknown as DocumentNode;

export function useGetProductCategoryQuery(options: Omit<Urql.UseQueryArgs<never, GetProductCategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetProductCategoryQuery>({ query: GetProductCategoryDocument, ...options });
};
export const GetRootProductCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRootProductCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"parent_id"},"value":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumb"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}}]}}]}}]} as unknown as DocumentNode;

export function useGetRootProductCategoryQuery(options: Omit<Urql.UseQueryArgs<never, GetRootProductCategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRootProductCategoryQuery>({ query: GetRootProductCategoryDocument, ...options });
};