/** ordering options when selecting data from "geography_columns" */
export interface GeographyColumnsOrderBy {
  coord_dimension?: OrderBy | null;

  f_geography_column?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  f_table_name?: OrderBy | null;

  f_table_schema?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "geography_columns". All fields are combined with a logical 'AND'. */
export interface GeographyColumnsBoolExp {
  _and?: (GeographyColumnsBoolExp | null)[] | null;

  _not?: GeographyColumnsBoolExp | null;

  _or?: (GeographyColumnsBoolExp | null)[] | null;

  coord_dimension?: IntegerComparisonExp | null;

  f_geography_column?: NameComparisonExp | null;

  f_table_catalog?: NameComparisonExp | null;

  f_table_name?: NameComparisonExp | null;

  f_table_schema?: NameComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  type?: TextComparisonExp | null;
}
/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export interface IntegerComparisonExp {
  _eq?: number | null;

  _gt?: number | null;

  _gte?: number | null;

  _in?: (number | null)[] | null;

  _is_null?: boolean | null;

  _lt?: number | null;

  _lte?: number | null;

  _neq?: number | null;

  _nin?: (number | null)[] | null;
}
/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export interface NameComparisonExp {
  _eq?: Name | null;

  _gt?: Name | null;

  _gte?: Name | null;

  _in?: (Name | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Name | null;

  _lte?: Name | null;

  _neq?: Name | null;

  _nin?: (Name | null)[] | null;
}
/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export interface TextComparisonExp {
  _eq?: string | null;

  _gt?: string | null;

  _gte?: string | null;

  _ilike?: string | null;

  _in?: (string | null)[] | null;

  _is_null?: boolean | null;

  _like?: string | null;

  _lt?: string | null;

  _lte?: string | null;

  _neq?: string | null;

  _nilike?: string | null;

  _nin?: (string | null)[] | null;

  _nlike?: string | null;

  _nsimilar?: string | null;

  _similar?: string | null;
}
/** ordering options when selecting data from "geometry_columns" */
export interface GeometryColumnsOrderBy {
  coord_dimension?: OrderBy | null;

  f_geometry_column?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  f_table_name?: OrderBy | null;

  f_table_schema?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "geometry_columns". All fields are combined with a logical 'AND'. */
export interface GeometryColumnsBoolExp {
  _and?: (GeometryColumnsBoolExp | null)[] | null;

  _not?: GeometryColumnsBoolExp | null;

  _or?: (GeometryColumnsBoolExp | null)[] | null;

  coord_dimension?: IntegerComparisonExp | null;

  f_geometry_column?: NameComparisonExp | null;

  f_table_catalog?: VarcharComparisonExp | null;

  f_table_name?: NameComparisonExp | null;

  f_table_schema?: NameComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  type?: VarcharComparisonExp | null;
}
/** expression to compare columns of type varchar. All fields are combined with logical 'AND'. */
export interface VarcharComparisonExp {
  _eq?: string | null;

  _gt?: string | null;

  _gte?: string | null;

  _ilike?: string | null;

  _in?: (string | null)[] | null;

  _is_null?: boolean | null;

  _like?: string | null;

  _lt?: string | null;

  _lte?: string | null;

  _neq?: string | null;

  _nilike?: string | null;

  _nin?: (string | null)[] | null;

  _nlike?: string | null;

  _nsimilar?: string | null;

  _similar?: string | null;
}
/** ordering options when selecting data from "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal._block_number_txid". All fields are combined with a logical 'AND'. */
export interface KmealBlockNumberTxidBoolExp {
  _and?: (KmealBlockNumberTxidBoolExp | null)[] | null;

  _not?: KmealBlockNumberTxidBoolExp | null;

  _or?: (KmealBlockNumberTxidBoolExp | null)[] | null;

  block_number?: IntegerComparisonExp | null;

  txid?: BigintComparisonExp | null;
}
/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface BigintComparisonExp {
  _eq?: Bigint | null;

  _gt?: Bigint | null;

  _gte?: Bigint | null;

  _in?: (Bigint | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Bigint | null;

  _lte?: Bigint | null;

  _neq?: Bigint | null;

  _nin?: (Bigint | null)[] | null;
}
/** ordering options when selecting data from "kmeal._index_state" */
export interface KmealIndexStateOrderBy {
  block_hash?: OrderBy | null;

  block_number?: OrderBy | null;

  id?: OrderBy | null;

  is_replay?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal._index_state". All fields are combined with a logical 'AND'. */
export interface KmealIndexStateBoolExp {
  _and?: (KmealIndexStateBoolExp | null)[] | null;

  _not?: KmealIndexStateBoolExp | null;

  _or?: (KmealIndexStateBoolExp | null)[] | null;

  block_hash?: TextComparisonExp | null;

  block_number?: IntegerComparisonExp | null;

  id?: IntegerComparisonExp | null;

  is_replay?: BooleanComparisonExp | null;
}
/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: boolean | null;

  _gt?: boolean | null;

  _gte?: boolean | null;

  _in?: (boolean | null)[] | null;

  _is_null?: boolean | null;

  _lt?: boolean | null;

  _lte?: boolean | null;

  _neq?: boolean | null;

  _nin?: (boolean | null)[] | null;
}
/** ordering options when selecting data from "kmeal.account" */
export interface KmealAccountOrderBy {
  _dmx_created_at?: OrderBy | null;

  account_type?: OrderBy | null;

  balance?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dpordersBybuyer_aggregate?: KmealDporderAggregateOrderBy | null;

  ordersBybuyer_aggregate?: KmealOrderAggregateOrderBy | null;

  owner?: OrderBy | null;

  restaurantsByowner_aggregate?: KmealRestaurantAggregateOrderBy | null;
}
/** order by aggregate values of table "kmeal.dporder" */
export interface KmealDporderAggregateOrderBy {
  avg?: KmealDporderAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealDporderMaxOrderBy | null;

  min?: KmealDporderMinOrderBy | null;

  stddev?: KmealDporderStddevOrderBy | null;

  stddev_pop?: KmealDporderStddevPopOrderBy | null;

  stddev_samp?: KmealDporderStddevSampOrderBy | null;

  sum?: KmealDporderSumOrderBy | null;

  var_pop?: KmealDporderVarPopOrderBy | null;

  var_samp?: KmealDporderVarSampOrderBy | null;

  variance?: KmealDporderVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.dporder" */
export interface KmealDporderAvgOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.dporder" */
export interface KmealDporderMaxOrderBy {
  bid_price?: OrderBy | null;

  buyer?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dporder_id?: OrderBy | null;

  instructions?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.dporder" */
export interface KmealDporderMinOrderBy {
  bid_price?: OrderBy | null;

  buyer?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dporder_id?: OrderBy | null;

  instructions?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.dporder" */
export interface KmealDporderStddevOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.dporder" */
export interface KmealDporderStddevPopOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.dporder" */
export interface KmealDporderStddevSampOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.dporder" */
export interface KmealDporderSumOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.dporder" */
export interface KmealDporderVarPopOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.dporder" */
export interface KmealDporderVarSampOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.dporder" */
export interface KmealDporderVarianceOrderBy {
  created_block?: OrderBy | null;

  dporder_id?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.order" */
export interface KmealOrderAggregateOrderBy {
  avg?: KmealOrderAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealOrderMaxOrderBy | null;

  min?: KmealOrderMinOrderBy | null;

  stddev?: KmealOrderStddevOrderBy | null;

  stddev_pop?: KmealOrderStddevPopOrderBy | null;

  stddev_samp?: KmealOrderStddevSampOrderBy | null;

  sum?: KmealOrderSumOrderBy | null;

  var_pop?: KmealOrderVarPopOrderBy | null;

  var_samp?: KmealOrderVarSampOrderBy | null;

  variance?: KmealOrderVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.order" */
export interface KmealOrderAvgOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.order" */
export interface KmealOrderMaxOrderBy {
  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  instructions?: OrderBy | null;

  order_id?: OrderBy | null;

  price?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.order" */
export interface KmealOrderMinOrderBy {
  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  instructions?: OrderBy | null;

  order_id?: OrderBy | null;

  price?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.order" */
export interface KmealOrderStddevOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.order" */
export interface KmealOrderStddevPopOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.order" */
export interface KmealOrderStddevSampOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.order" */
export interface KmealOrderSumOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.order" */
export interface KmealOrderVarPopOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.order" */
export interface KmealOrderVarSampOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.order" */
export interface KmealOrderVarianceOrderBy {
  created_block?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.restaurant" */
export interface KmealRestaurantAggregateOrderBy {
  avg?: KmealRestaurantAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealRestaurantMaxOrderBy | null;

  min?: KmealRestaurantMinOrderBy | null;

  stddev?: KmealRestaurantStddevOrderBy | null;

  stddev_pop?: KmealRestaurantStddevPopOrderBy | null;

  stddev_samp?: KmealRestaurantStddevSampOrderBy | null;

  sum?: KmealRestaurantSumOrderBy | null;

  var_pop?: KmealRestaurantVarPopOrderBy | null;

  var_samp?: KmealRestaurantVarSampOrderBy | null;

  variance?: KmealRestaurantVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantAvgOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantMaxOrderBy {
  address?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  description?: OrderBy | null;

  latitude?: OrderBy | null;

  logo?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  phone?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  timeofoperation?: OrderBy | null;

  yelp_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantMinOrderBy {
  address?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  description?: OrderBy | null;

  latitude?: OrderBy | null;

  logo?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  phone?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  timeofoperation?: OrderBy | null;

  yelp_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantStddevOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantStddevPopOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantStddevSampOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantSumOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantVarPopOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantVarSampOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.restaurant" */
export interface KmealRestaurantVarianceOrderBy {
  created_block?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.account". All fields are combined with a logical 'AND'. */
export interface KmealAccountBoolExp {
  _and?: (KmealAccountBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealAccountBoolExp | null;

  _or?: (KmealAccountBoolExp | null)[] | null;

  account_type?: BpcharComparisonExp | null;

  balance?: NumericComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dpordersBybuyer?: KmealDporderBoolExp | null;

  ordersBybuyer?: KmealOrderBoolExp | null;

  owner?: BpcharComparisonExp | null;

  restaurantsByowner?: KmealRestaurantBoolExp | null;
}
/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export interface TimestampComparisonExp {
  _eq?: Timestamp | null;

  _gt?: Timestamp | null;

  _gte?: Timestamp | null;

  _in?: (Timestamp | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Timestamp | null;

  _lte?: Timestamp | null;

  _neq?: Timestamp | null;

  _nin?: (Timestamp | null)[] | null;
}
/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export interface BpcharComparisonExp {
  _eq?: Bpchar | null;

  _gt?: Bpchar | null;

  _gte?: Bpchar | null;

  _in?: (Bpchar | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Bpchar | null;

  _lte?: Bpchar | null;

  _neq?: Bpchar | null;

  _nin?: (Bpchar | null)[] | null;
}
/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: Numeric | null;

  _gt?: Numeric | null;

  _gte?: Numeric | null;

  _in?: (Numeric | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Numeric | null;

  _lte?: Numeric | null;

  _neq?: Numeric | null;

  _nin?: (Numeric | null)[] | null;
}
/** Boolean expression to filter rows from the table "kmeal.dporder". All fields are combined with a logical 'AND'. */
export interface KmealDporderBoolExp {
  _and?: (KmealDporderBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealDporderBoolExp | null;

  _or?: (KmealDporderBoolExp | null)[] | null;

  accountBybuyer?: KmealAccountBoolExp | null;

  bid_price?: TextComparisonExp | null;

  buyer?: TextComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dporder_id?: IntegerComparisonExp | null;

  instructions?: TextComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.listing". All fields are combined with a logical 'AND'. */
export interface KmealListingBoolExp {
  _and?: (KmealListingBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealListingBoolExp | null;

  _or?: (KmealListingBoolExp | null)[] | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dpordersBylistingId?: KmealDporderBoolExp | null;

  end_date?: DateComparisonExp | null;

  end_time?: VarcharComparisonExp | null;

  isactive?: BooleanComparisonExp | null;

  isrecurring?: BpcharComparisonExp | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  list_price?: NumericComparisonExp | null;

  list_type?: BpcharComparisonExp | null;

  listingItemSidessBylistingId?: KmealListingItemSidesBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  min_price?: NumericComparisonExp | null;

  orderDetailsBylistingId?: KmealOrderDetailBoolExp | null;

  quantity?: IntegerComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;

  sliding_rate?: NumericComparisonExp | null;

  start_date?: DateComparisonExp | null;

  start_time?: VarcharComparisonExp | null;
}
/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export interface DateComparisonExp {
  _eq?: Date | null;

  _gt?: Date | null;

  _gte?: Date | null;

  _in?: (Date | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Date | null;

  _lte?: Date | null;

  _neq?: Date | null;

  _nin?: (Date | null)[] | null;
}
/** Boolean expression to filter rows from the table "kmeal.item". All fields are combined with a logical 'AND'. */
export interface KmealItemBoolExp {
  _and?: (KmealItemBoolExp | null)[] | null;

  _not?: KmealItemBoolExp | null;

  _or?: (KmealItemBoolExp | null)[] | null;

  cooking_time?: IntegerComparisonExp | null;

  description?: TextComparisonExp | null;

  itemSectionsByitemId?: KmealItemSectionBoolExp | null;

  itemTypessByitemId?: KmealItemTypesBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  item_name?: VarcharComparisonExp | null;

  listingsByitemId?: KmealListingBoolExp | null;

  photo?: VarcharComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;

  sort_order?: IntegerComparisonExp | null;

  spicy_level?: IntegerComparisonExp | null;

  vegetarian?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.item_section". All fields are combined with a logical 'AND'. */
export interface KmealItemSectionBoolExp {
  _and?: (KmealItemSectionBoolExp | null)[] | null;

  _not?: KmealItemSectionBoolExp | null;

  _or?: (KmealItemSectionBoolExp | null)[] | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  menuBookSectionBysectionId?: KmealMenuBookSectionBoolExp | null;

  section_id?: IntegerComparisonExp | null;

  sort_order?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.menu_book_section". All fields are combined with a logical 'AND'. */
export interface KmealMenuBookSectionBoolExp {
  _and?: (KmealMenuBookSectionBoolExp | null)[] | null;

  _not?: KmealMenuBookSectionBoolExp | null;

  _or?: (KmealMenuBookSectionBoolExp | null)[] | null;

  itemSectionsBysectionId?: KmealItemSectionBoolExp | null;

  menuBookBymenuBookId?: KmealMenuBookBoolExp | null;

  menu_book_id?: IntegerComparisonExp | null;

  section_id?: IntegerComparisonExp | null;

  section_name?: VarcharComparisonExp | null;

  sort_order?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.menu_book". All fields are combined with a logical 'AND'. */
export interface KmealMenuBookBoolExp {
  _and?: (KmealMenuBookBoolExp | null)[] | null;

  _not?: KmealMenuBookBoolExp | null;

  _or?: (KmealMenuBookBoolExp | null)[] | null;

  menuBookSectionsBymenuBookId?: KmealMenuBookSectionBoolExp | null;

  menu_book?: VarcharComparisonExp | null;

  menu_book_id?: IntegerComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;

  sort_order?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantBoolExp {
  _and?: (KmealRestaurantBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealRestaurantBoolExp | null;

  _or?: (KmealRestaurantBoolExp | null)[] | null;

  accountByowner?: KmealAccountBoolExp | null;

  address?: TextComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: VarcharComparisonExp | null;

  created_trx?: VarcharComparisonExp | null;

  description?: TextComparisonExp | null;

  dpordersByrestaurantId?: KmealDporderBoolExp | null;

  isactive?: BooleanComparisonExp | null;

  itemsByrestaurantId?: KmealItemBoolExp | null;

  latitude?: Float8ComparisonExp | null;

  listingsByrestaurantId?: KmealListingBoolExp | null;

  location?: GeographyComparisonExp | null;

  logo?: TextComparisonExp | null;

  longitude?: Float8ComparisonExp | null;

  menuBooksByrestaurantId?: KmealMenuBookBoolExp | null;

  name?: TextComparisonExp | null;

  ordersByrestaurantId?: KmealOrderBoolExp | null;

  owner?: BpcharComparisonExp | null;

  phone?: VarcharComparisonExp | null;

  rating?: IntegerComparisonExp | null;

  restaurantCategoriessByrestaurantId?: KmealRestaurantCategoriesBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;

  restaurant_nearbies?: KmealRestaurantNearbyBoolExp | null;

  timeofoperation?: VarcharComparisonExp | null;

  yelp_id?: VarcharComparisonExp | null;
}
/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export interface Float8ComparisonExp {
  _eq?: Float8 | null;

  _gt?: Float8 | null;

  _gte?: Float8 | null;

  _in?: (Float8 | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Float8 | null;

  _lte?: Float8 | null;

  _neq?: Float8 | null;

  _nin?: (Float8 | null)[] | null;
}
/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export interface GeographyComparisonExp {
  _eq?: Geography | null;

  _gt?: Geography | null;

  _gte?: Geography | null;

  _in?: (Geography | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Geography | null;

  _lte?: Geography | null;

  _neq?: Geography | null;

  _nin?: (Geography | null)[] | null;
  /** is the column within a distance from a geography value */
  _st_d_within?: StDWithinGeographyInput | null;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Geography | null;
}

export interface StDWithinGeographyInput {
  distance: number;

  from: Geography;

  use_spheroid?: boolean | null;
}
/** Boolean expression to filter rows from the table "kmeal.order". All fields are combined with a logical 'AND'. */
export interface KmealOrderBoolExp {
  _and?: (KmealOrderBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealOrderBoolExp | null;

  _or?: (KmealOrderBoolExp | null)[] | null;

  accountBybuyer?: KmealAccountBoolExp | null;

  buyer?: BpcharComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dpordersByorderId?: KmealDporderBoolExp | null;

  instructions?: TextComparisonExp | null;

  orderDetailsByorderId?: KmealOrderDetailBoolExp | null;

  orderStatussByorderId?: KmealOrderStatusBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  paymentsByorderId?: KmealPaymentBoolExp | null;

  price?: TextComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.order_detail". All fields are combined with a logical 'AND'. */
export interface KmealOrderDetailBoolExp {
  _and?: (KmealOrderDetailBoolExp | null)[] | null;

  _not?: KmealOrderDetailBoolExp | null;

  _or?: (KmealOrderDetailBoolExp | null)[] | null;

  instructions?: TextComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  listing_type?: BpcharComparisonExp | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  ordered_price?: IntegerComparisonExp | null;

  qty?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.order_status". All fields are combined with a logical 'AND'. */
export interface KmealOrderStatusBoolExp {
  _and?: (KmealOrderStatusBoolExp | null)[] | null;

  _not?: KmealOrderStatusBoolExp | null;

  _or?: (KmealOrderStatusBoolExp | null)[] | null;

  created_at?: TimestampComparisonExp | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  order_status?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.payment". All fields are combined with a logical 'AND'. */
export interface KmealPaymentBoolExp {
  _and?: (KmealPaymentBoolExp | null)[] | null;

  _not?: KmealPaymentBoolExp | null;

  _or?: (KmealPaymentBoolExp | null)[] | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  payment_id?: IntegerComparisonExp | null;

  payment_status?: BpcharComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_categories".All fields are combined with a logical 'AND'. */
export interface KmealRestaurantCategoriesBoolExp {
  _and?: (KmealRestaurantCategoriesBoolExp | null)[] | null;

  _not?: KmealRestaurantCategoriesBoolExp | null;

  _or?: (KmealRestaurantCategoriesBoolExp | null)[] | null;

  category?: TextComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_nearby". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantNearbyBoolExp {
  _and?: (KmealRestaurantNearbyBoolExp | null)[] | null;

  _not?: KmealRestaurantNearbyBoolExp | null;

  _or?: (KmealRestaurantNearbyBoolExp | null)[] | null;

  distance?: NumericComparisonExp | null;

  restaurant?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.item_types". All fields are combined with a logical 'AND'. */
export interface KmealItemTypesBoolExp {
  _and?: (KmealItemTypesBoolExp | null)[] | null;

  _not?: KmealItemTypesBoolExp | null;

  _or?: (KmealItemTypesBoolExp | null)[] | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  item_type?: TextComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.listing_item_sides". All fields are combined with a logical 'AND'. */
export interface KmealListingItemSidesBoolExp {
  _and?: (KmealListingItemSidesBoolExp | null)[] | null;

  _not?: KmealListingItemSidesBoolExp | null;

  _or?: (KmealListingItemSidesBoolExp | null)[] | null;

  group?: VarcharComparisonExp | null;

  item_name?: VarcharComparisonExp | null;

  list_price?: NumericComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  max_selection?: IntegerComparisonExp | null;
}
/** ordering options when selecting data from "kmeal.dporder" */
export interface KmealDporderOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountBybuyer?: KmealAccountOrderBy | null;

  bid_price?: OrderBy | null;

  buyer?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dporder_id?: OrderBy | null;

  instructions?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.listing" */
export interface KmealListingOrderBy {
  _dmx_created_at?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dpordersBylistingId_aggregate?: KmealDporderAggregateOrderBy | null;

  end_date?: OrderBy | null;

  end_time?: OrderBy | null;

  isactive?: OrderBy | null;

  isrecurring?: OrderBy | null;

  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  list_type?: OrderBy | null;

  listingItemSidessBylistingId_aggregate?: KmealListingItemSidesAggregateOrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  orderDetailsBylistingId_aggregate?: KmealOrderDetailAggregateOrderBy | null;

  quantity?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;

  start_date?: OrderBy | null;

  start_time?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.item" */
export interface KmealItemOrderBy {
  cooking_time?: OrderBy | null;

  description?: OrderBy | null;

  itemSectionsByitemId_aggregate?: KmealItemSectionAggregateOrderBy | null;

  itemTypessByitemId_aggregate?: KmealItemTypesAggregateOrderBy | null;

  item_id?: OrderBy | null;

  item_name?: OrderBy | null;

  listingsByitemId_aggregate?: KmealListingAggregateOrderBy | null;

  photo?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.item_section" */
export interface KmealItemSectionAggregateOrderBy {
  avg?: KmealItemSectionAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealItemSectionMaxOrderBy | null;

  min?: KmealItemSectionMinOrderBy | null;

  stddev?: KmealItemSectionStddevOrderBy | null;

  stddev_pop?: KmealItemSectionStddevPopOrderBy | null;

  stddev_samp?: KmealItemSectionStddevSampOrderBy | null;

  sum?: KmealItemSectionSumOrderBy | null;

  var_pop?: KmealItemSectionVarPopOrderBy | null;

  var_samp?: KmealItemSectionVarSampOrderBy | null;

  variance?: KmealItemSectionVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.item_section" */
export interface KmealItemSectionAvgOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.item_section" */
export interface KmealItemSectionMaxOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.item_section" */
export interface KmealItemSectionMinOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.item_section" */
export interface KmealItemSectionStddevOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.item_section" */
export interface KmealItemSectionStddevPopOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.item_section" */
export interface KmealItemSectionStddevSampOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.item_section" */
export interface KmealItemSectionSumOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.item_section" */
export interface KmealItemSectionVarPopOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.item_section" */
export interface KmealItemSectionVarSampOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.item_section" */
export interface KmealItemSectionVarianceOrderBy {
  item_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.item_types" */
export interface KmealItemTypesAggregateOrderBy {
  avg?: KmealItemTypesAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealItemTypesMaxOrderBy | null;

  min?: KmealItemTypesMinOrderBy | null;

  stddev?: KmealItemTypesStddevOrderBy | null;

  stddev_pop?: KmealItemTypesStddevPopOrderBy | null;

  stddev_samp?: KmealItemTypesStddevSampOrderBy | null;

  sum?: KmealItemTypesSumOrderBy | null;

  var_pop?: KmealItemTypesVarPopOrderBy | null;

  var_samp?: KmealItemTypesVarSampOrderBy | null;

  variance?: KmealItemTypesVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.item_types" */
export interface KmealItemTypesAvgOrderBy {
  item_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.item_types" */
export interface KmealItemTypesMaxOrderBy {
  item_id?: OrderBy | null;

  item_type?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.item_types" */
export interface KmealItemTypesMinOrderBy {
  item_id?: OrderBy | null;

  item_type?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.item_types" */
export interface KmealItemTypesStddevOrderBy {
  item_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.item_types" */
export interface KmealItemTypesStddevPopOrderBy {
  item_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.item_types" */
export interface KmealItemTypesStddevSampOrderBy {
  item_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.item_types" */
export interface KmealItemTypesSumOrderBy {
  item_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.item_types" */
export interface KmealItemTypesVarPopOrderBy {
  item_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.item_types" */
export interface KmealItemTypesVarSampOrderBy {
  item_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.item_types" */
export interface KmealItemTypesVarianceOrderBy {
  item_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.listing" */
export interface KmealListingAggregateOrderBy {
  avg?: KmealListingAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealListingMaxOrderBy | null;

  min?: KmealListingMinOrderBy | null;

  stddev?: KmealListingStddevOrderBy | null;

  stddev_pop?: KmealListingStddevPopOrderBy | null;

  stddev_samp?: KmealListingStddevSampOrderBy | null;

  sum?: KmealListingSumOrderBy | null;

  var_pop?: KmealListingVarPopOrderBy | null;

  var_samp?: KmealListingVarSampOrderBy | null;

  variance?: KmealListingVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.listing" */
export interface KmealListingAvgOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.listing" */
export interface KmealListingMaxOrderBy {
  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  end_date?: OrderBy | null;

  end_time?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;

  start_date?: OrderBy | null;

  start_time?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.listing" */
export interface KmealListingMinOrderBy {
  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  end_date?: OrderBy | null;

  end_time?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;

  start_date?: OrderBy | null;

  start_time?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.listing" */
export interface KmealListingStddevOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.listing" */
export interface KmealListingStddevPopOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.listing" */
export interface KmealListingStddevSampOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.listing" */
export interface KmealListingSumOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.listing" */
export interface KmealListingVarPopOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.listing" */
export interface KmealListingVarSampOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.listing" */
export interface KmealListingVarianceOrderBy {
  created_block?: OrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sliding_rate?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant" */
export interface KmealRestaurantOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountByowner?: KmealAccountOrderBy | null;

  address?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  description?: OrderBy | null;

  dpordersByrestaurantId_aggregate?: KmealDporderAggregateOrderBy | null;

  isactive?: OrderBy | null;

  itemsByrestaurantId_aggregate?: KmealItemAggregateOrderBy | null;

  latitude?: OrderBy | null;

  listingsByrestaurantId_aggregate?: KmealListingAggregateOrderBy | null;

  location?: OrderBy | null;

  logo?: OrderBy | null;

  longitude?: OrderBy | null;

  menuBooksByrestaurantId_aggregate?: KmealMenuBookAggregateOrderBy | null;

  name?: OrderBy | null;

  ordersByrestaurantId_aggregate?: KmealOrderAggregateOrderBy | null;

  owner?: OrderBy | null;

  phone?: OrderBy | null;

  rating?: OrderBy | null;

  restaurantCategoriessByrestaurantId_aggregate?: KmealRestaurantCategoriesAggregateOrderBy | null;

  restaurant_id?: OrderBy | null;

  restaurant_nearbies_aggregate?: KmealRestaurantNearbyAggregateOrderBy | null;

  timeofoperation?: OrderBy | null;

  yelp_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.item" */
export interface KmealItemAggregateOrderBy {
  avg?: KmealItemAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealItemMaxOrderBy | null;

  min?: KmealItemMinOrderBy | null;

  stddev?: KmealItemStddevOrderBy | null;

  stddev_pop?: KmealItemStddevPopOrderBy | null;

  stddev_samp?: KmealItemStddevSampOrderBy | null;

  sum?: KmealItemSumOrderBy | null;

  var_pop?: KmealItemVarPopOrderBy | null;

  var_samp?: KmealItemVarSampOrderBy | null;

  variance?: KmealItemVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.item" */
export interface KmealItemAvgOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.item" */
export interface KmealItemMaxOrderBy {
  cooking_time?: OrderBy | null;

  description?: OrderBy | null;

  item_id?: OrderBy | null;

  item_name?: OrderBy | null;

  photo?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.item" */
export interface KmealItemMinOrderBy {
  cooking_time?: OrderBy | null;

  description?: OrderBy | null;

  item_id?: OrderBy | null;

  item_name?: OrderBy | null;

  photo?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.item" */
export interface KmealItemStddevOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.item" */
export interface KmealItemStddevPopOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.item" */
export interface KmealItemStddevSampOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.item" */
export interface KmealItemSumOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.item" */
export interface KmealItemVarPopOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.item" */
export interface KmealItemVarSampOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.item" */
export interface KmealItemVarianceOrderBy {
  cooking_time?: OrderBy | null;

  item_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;

  spicy_level?: OrderBy | null;

  vegetarian?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.menu_book" */
export interface KmealMenuBookAggregateOrderBy {
  avg?: KmealMenuBookAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealMenuBookMaxOrderBy | null;

  min?: KmealMenuBookMinOrderBy | null;

  stddev?: KmealMenuBookStddevOrderBy | null;

  stddev_pop?: KmealMenuBookStddevPopOrderBy | null;

  stddev_samp?: KmealMenuBookStddevSampOrderBy | null;

  sum?: KmealMenuBookSumOrderBy | null;

  var_pop?: KmealMenuBookVarPopOrderBy | null;

  var_samp?: KmealMenuBookVarSampOrderBy | null;

  variance?: KmealMenuBookVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookAvgOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookMaxOrderBy {
  menu_book?: OrderBy | null;

  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookMinOrderBy {
  menu_book?: OrderBy | null;

  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookStddevOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookStddevPopOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookStddevSampOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookSumOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookVarPopOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookVarSampOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.menu_book" */
export interface KmealMenuBookVarianceOrderBy {
  menu_book_id?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesAggregateOrderBy {
  avg?: KmealRestaurantCategoriesAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealRestaurantCategoriesMaxOrderBy | null;

  min?: KmealRestaurantCategoriesMinOrderBy | null;

  stddev?: KmealRestaurantCategoriesStddevOrderBy | null;

  stddev_pop?: KmealRestaurantCategoriesStddevPopOrderBy | null;

  stddev_samp?: KmealRestaurantCategoriesStddevSampOrderBy | null;

  sum?: KmealRestaurantCategoriesSumOrderBy | null;

  var_pop?: KmealRestaurantCategoriesVarPopOrderBy | null;

  var_samp?: KmealRestaurantCategoriesVarSampOrderBy | null;

  variance?: KmealRestaurantCategoriesVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesAvgOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesMaxOrderBy {
  category?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesMinOrderBy {
  category?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesStddevOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesStddevPopOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesStddevSampOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesSumOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesVarPopOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesVarSampOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesVarianceOrderBy {
  restaurant_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyAggregateOrderBy {
  avg?: KmealRestaurantNearbyAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealRestaurantNearbyMaxOrderBy | null;

  min?: KmealRestaurantNearbyMinOrderBy | null;

  stddev?: KmealRestaurantNearbyStddevOrderBy | null;

  stddev_pop?: KmealRestaurantNearbyStddevPopOrderBy | null;

  stddev_samp?: KmealRestaurantNearbyStddevSampOrderBy | null;

  sum?: KmealRestaurantNearbySumOrderBy | null;

  var_pop?: KmealRestaurantNearbyVarPopOrderBy | null;

  var_samp?: KmealRestaurantNearbyVarSampOrderBy | null;

  variance?: KmealRestaurantNearbyVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyAvgOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyMaxOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyMinOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyStddevOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyStddevPopOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyStddevSampOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbySumOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyVarPopOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyVarSampOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyVarianceOrderBy {
  distance?: OrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesAggregateOrderBy {
  avg?: KmealListingItemSidesAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealListingItemSidesMaxOrderBy | null;

  min?: KmealListingItemSidesMinOrderBy | null;

  stddev?: KmealListingItemSidesStddevOrderBy | null;

  stddev_pop?: KmealListingItemSidesStddevPopOrderBy | null;

  stddev_samp?: KmealListingItemSidesStddevSampOrderBy | null;

  sum?: KmealListingItemSidesSumOrderBy | null;

  var_pop?: KmealListingItemSidesVarPopOrderBy | null;

  var_samp?: KmealListingItemSidesVarSampOrderBy | null;

  variance?: KmealListingItemSidesVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesAvgOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesMaxOrderBy {
  group?: OrderBy | null;

  item_name?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesMinOrderBy {
  group?: OrderBy | null;

  item_name?: OrderBy | null;

  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesStddevOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesStddevPopOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesStddevSampOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesSumOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesVarPopOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesVarSampOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesVarianceOrderBy {
  list_price?: OrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.order_detail" */
export interface KmealOrderDetailAggregateOrderBy {
  avg?: KmealOrderDetailAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealOrderDetailMaxOrderBy | null;

  min?: KmealOrderDetailMinOrderBy | null;

  stddev?: KmealOrderDetailStddevOrderBy | null;

  stddev_pop?: KmealOrderDetailStddevPopOrderBy | null;

  stddev_samp?: KmealOrderDetailStddevSampOrderBy | null;

  sum?: KmealOrderDetailSumOrderBy | null;

  var_pop?: KmealOrderDetailVarPopOrderBy | null;

  var_samp?: KmealOrderDetailVarSampOrderBy | null;

  variance?: KmealOrderDetailVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailAvgOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailMaxOrderBy {
  instructions?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailMinOrderBy {
  instructions?: OrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailStddevOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailStddevPopOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailStddevSampOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailSumOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailVarPopOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailVarSampOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.order_detail" */
export interface KmealOrderDetailVarianceOrderBy {
  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order" */
export interface KmealOrderOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountBybuyer?: KmealAccountOrderBy | null;

  buyer?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dpordersByorderId_aggregate?: KmealDporderAggregateOrderBy | null;

  instructions?: OrderBy | null;

  orderDetailsByorderId_aggregate?: KmealOrderDetailAggregateOrderBy | null;

  orderStatussByorderId_aggregate?: KmealOrderStatusAggregateOrderBy | null;

  order_id?: OrderBy | null;

  paymentsByorderId_aggregate?: KmealPaymentAggregateOrderBy | null;

  price?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.order_status" */
export interface KmealOrderStatusAggregateOrderBy {
  avg?: KmealOrderStatusAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealOrderStatusMaxOrderBy | null;

  min?: KmealOrderStatusMinOrderBy | null;

  stddev?: KmealOrderStatusStddevOrderBy | null;

  stddev_pop?: KmealOrderStatusStddevPopOrderBy | null;

  stddev_samp?: KmealOrderStatusStddevSampOrderBy | null;

  sum?: KmealOrderStatusSumOrderBy | null;

  var_pop?: KmealOrderStatusVarPopOrderBy | null;

  var_samp?: KmealOrderStatusVarSampOrderBy | null;

  variance?: KmealOrderStatusVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusAvgOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusMaxOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusMinOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusStddevOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusStddevPopOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusStddevSampOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusSumOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusVarPopOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusVarSampOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.order_status" */
export interface KmealOrderStatusVarianceOrderBy {
  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.payment" */
export interface KmealPaymentAggregateOrderBy {
  avg?: KmealPaymentAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealPaymentMaxOrderBy | null;

  min?: KmealPaymentMinOrderBy | null;

  stddev?: KmealPaymentStddevOrderBy | null;

  stddev_pop?: KmealPaymentStddevPopOrderBy | null;

  stddev_samp?: KmealPaymentStddevSampOrderBy | null;

  sum?: KmealPaymentSumOrderBy | null;

  var_pop?: KmealPaymentVarPopOrderBy | null;

  var_samp?: KmealPaymentVarSampOrderBy | null;

  variance?: KmealPaymentVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.payment" */
export interface KmealPaymentAvgOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.payment" */
export interface KmealPaymentMaxOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.payment" */
export interface KmealPaymentMinOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.payment" */
export interface KmealPaymentStddevOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.payment" */
export interface KmealPaymentStddevPopOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.payment" */
export interface KmealPaymentStddevSampOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.payment" */
export interface KmealPaymentSumOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.payment" */
export interface KmealPaymentVarPopOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.payment" */
export interface KmealPaymentVarSampOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.payment" */
export interface KmealPaymentVarianceOrderBy {
  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.item_section" */
export interface KmealItemSectionOrderBy {
  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  menuBookSectionBysectionId?: KmealMenuBookSectionOrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.menu_book_section" */
export interface KmealMenuBookSectionOrderBy {
  itemSectionsBysectionId_aggregate?: KmealItemSectionAggregateOrderBy | null;

  menuBookBymenuBookId?: KmealMenuBookOrderBy | null;

  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  section_name?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.menu_book" */
export interface KmealMenuBookOrderBy {
  menuBookSectionsBymenuBookId_aggregate?: KmealMenuBookSectionAggregateOrderBy | null;

  menu_book?: OrderBy | null;

  menu_book_id?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by aggregate values of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionAggregateOrderBy {
  avg?: KmealMenuBookSectionAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealMenuBookSectionMaxOrderBy | null;

  min?: KmealMenuBookSectionMinOrderBy | null;

  stddev?: KmealMenuBookSectionStddevOrderBy | null;

  stddev_pop?: KmealMenuBookSectionStddevPopOrderBy | null;

  stddev_samp?: KmealMenuBookSectionStddevSampOrderBy | null;

  sum?: KmealMenuBookSectionSumOrderBy | null;

  var_pop?: KmealMenuBookSectionVarPopOrderBy | null;

  var_samp?: KmealMenuBookSectionVarSampOrderBy | null;

  variance?: KmealMenuBookSectionVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionAvgOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionMaxOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  section_name?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionMinOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  section_name?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionStddevOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionStddevPopOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionStddevSampOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionSumOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionVarPopOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionVarSampOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionVarianceOrderBy {
  menu_book_id?: OrderBy | null;

  section_id?: OrderBy | null;

  sort_order?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order_detail" */
export interface KmealOrderDetailOrderBy {
  instructions?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  listing_type?: OrderBy | null;

  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order_status" */
export interface KmealOrderStatusOrderBy {
  created_at?: OrderBy | null;

  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.payment" */
export interface KmealPaymentOrderBy {
  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;

  payment_status?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesOrderBy {
  category?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyOrderBy {
  distance?: OrderBy | null;

  restaurant?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.item_types" */
export interface KmealItemTypesOrderBy {
  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  item_type?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.listing_item_sides" */
export interface KmealListingItemSidesOrderBy {
  group?: OrderBy | null;

  item_name?: OrderBy | null;

  list_price?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  max_selection?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.categories" */
export interface KmealCategoriesOrderBy {
  alias?: OrderBy | null;

  title?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.categories". All fields are combined with a logical 'AND'. */
export interface KmealCategoriesBoolExp {
  _and?: (KmealCategoriesBoolExp | null)[] | null;

  _not?: KmealCategoriesBoolExp | null;

  _or?: (KmealCategoriesBoolExp | null)[] | null;

  alias?: VarcharComparisonExp | null;

  title?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "kmeal.credit_card_info" */
export interface KmealCreditCardInfoOrderBy {
  address_line_1?: OrderBy | null;

  address_line_2?: OrderBy | null;

  card_cvv?: OrderBy | null;

  card_holder?: OrderBy | null;

  card_num?: OrderBy | null;

  card_type?: OrderBy | null;

  city?: OrderBy | null;

  country?: OrderBy | null;

  exp_date?: OrderBy | null;

  postal_code?: OrderBy | null;

  username?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.credit_card_info". All fields are combined with a logical 'AND'. */
export interface KmealCreditCardInfoBoolExp {
  _and?: (KmealCreditCardInfoBoolExp | null)[] | null;

  _not?: KmealCreditCardInfoBoolExp | null;

  _or?: (KmealCreditCardInfoBoolExp | null)[] | null;

  address_line_1?: TextComparisonExp | null;

  address_line_2?: TextComparisonExp | null;

  card_cvv?: NumericComparisonExp | null;

  card_holder?: TextComparisonExp | null;

  card_num?: NumericComparisonExp | null;

  card_type?: TextComparisonExp | null;

  city?: TextComparisonExp | null;

  country?: TextComparisonExp | null;

  exp_date?: DateComparisonExp | null;

  postal_code?: NumericComparisonExp | null;

  username?: TextComparisonExp | null;
}

export interface KmealGetNearbyArgs {
  latitude: Float8;

  longitude: Float8;

  radius: number;
}
/** ordering options when selecting data from "kmeal.restaurant_location" */
export interface KmealRestaurantLocationOrderBy {
  address?: OrderBy | null;

  description?: OrderBy | null;

  distance?: OrderBy | null;

  location?: OrderBy | null;

  logo?: OrderBy | null;

  name?: OrderBy | null;

  owner?: OrderBy | null;

  phone?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_location". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantLocationBoolExp {
  _and?: (KmealRestaurantLocationBoolExp | null)[] | null;

  _not?: KmealRestaurantLocationBoolExp | null;

  _or?: (KmealRestaurantLocationBoolExp | null)[] | null;

  address?: TextComparisonExp | null;

  description?: TextComparisonExp | null;

  distance?: Float8ComparisonExp | null;

  location?: GeographyComparisonExp | null;

  logo?: TextComparisonExp | null;

  name?: TextComparisonExp | null;

  owner?: BpcharComparisonExp | null;

  phone?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "raster_columns" */
export interface RasterColumnsOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  extent?: OrderBy | null;

  nodata_values?: OrderBy | null;

  num_bands?: OrderBy | null;

  out_db?: OrderBy | null;

  pixel_types?: OrderBy | null;

  r_raster_column?: OrderBy | null;

  r_table_catalog?: OrderBy | null;

  r_table_name?: OrderBy | null;

  r_table_schema?: OrderBy | null;

  regular_blocking?: OrderBy | null;

  same_alignment?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  spatial_index?: OrderBy | null;

  srid?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "raster_columns". All fields are combined with a logical 'AND'. */
export interface RasterColumnsBoolExp {
  _and?: (RasterColumnsBoolExp | null)[] | null;

  _not?: RasterColumnsBoolExp | null;

  _or?: (RasterColumnsBoolExp | null)[] | null;

  blocksize_x?: IntegerComparisonExp | null;

  blocksize_y?: IntegerComparisonExp | null;

  extent?: GeometryComparisonExp | null;

  nodata_values?: _Float8ComparisonExp | null;

  num_bands?: IntegerComparisonExp | null;

  out_db?: _BoolComparisonExp | null;

  pixel_types?: _TextComparisonExp | null;

  r_raster_column?: NameComparisonExp | null;

  r_table_catalog?: NameComparisonExp | null;

  r_table_name?: NameComparisonExp | null;

  r_table_schema?: NameComparisonExp | null;

  regular_blocking?: BooleanComparisonExp | null;

  same_alignment?: BooleanComparisonExp | null;

  scale_x?: Float8ComparisonExp | null;

  scale_y?: Float8ComparisonExp | null;

  spatial_index?: BooleanComparisonExp | null;

  srid?: IntegerComparisonExp | null;
}
/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export interface GeometryComparisonExp {
  _eq?: Geometry | null;

  _gt?: Geometry | null;

  _gte?: Geometry | null;

  _in?: (Geometry | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Geometry | null;

  _lte?: Geometry | null;

  _neq?: Geometry | null;

  _nin?: (Geometry | null)[] | null;
  /** does the column contain the given geometry value */
  _st_contains?: Geometry | null;
  /** does the column crosses the given geometry value */
  _st_crosses?: Geometry | null;
  /** is the column within a distance from a geometry value */
  _st_d_within?: StDWithinInput | null;
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Geometry | null;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Geometry | null;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Geometry | null;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Geometry | null;
  /** is the column contained in the given geometry value */
  _st_within?: Geometry | null;
}

export interface StDWithinInput {
  distance: number;

  from: Geometry;
}
/** expression to compare columns of type _float8. All fields are combined with logical 'AND'. */
export interface _Float8ComparisonExp {
  _eq?: _Float8 | null;

  _gt?: _Float8 | null;

  _gte?: _Float8 | null;

  _in?: (_Float8 | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Float8 | null;

  _lte?: _Float8 | null;

  _neq?: _Float8 | null;

  _nin?: (_Float8 | null)[] | null;
}
/** expression to compare columns of type _bool. All fields are combined with logical 'AND'. */
export interface _BoolComparisonExp {
  _eq?: _Bool | null;

  _gt?: _Bool | null;

  _gte?: _Bool | null;

  _in?: (_Bool | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Bool | null;

  _lte?: _Bool | null;

  _neq?: _Bool | null;

  _nin?: (_Bool | null)[] | null;
}
/** expression to compare columns of type _text. All fields are combined with logical 'AND'. */
export interface _TextComparisonExp {
  _eq?: _Text | null;

  _gt?: _Text | null;

  _gte?: _Text | null;

  _in?: (_Text | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Text | null;

  _lte?: _Text | null;

  _neq?: _Text | null;

  _nin?: (_Text | null)[] | null;
}
/** ordering options when selecting data from "raster_overviews" */
export interface RasterOverviewsOrderBy {
  o_raster_column?: OrderBy | null;

  o_table_catalog?: OrderBy | null;

  o_table_name?: OrderBy | null;

  o_table_schema?: OrderBy | null;

  overview_factor?: OrderBy | null;

  r_raster_column?: OrderBy | null;

  r_table_catalog?: OrderBy | null;

  r_table_name?: OrderBy | null;

  r_table_schema?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "raster_overviews". All fields are combined with a logical 'AND'. */
export interface RasterOverviewsBoolExp {
  _and?: (RasterOverviewsBoolExp | null)[] | null;

  _not?: RasterOverviewsBoolExp | null;

  _or?: (RasterOverviewsBoolExp | null)[] | null;

  o_raster_column?: NameComparisonExp | null;

  o_table_catalog?: NameComparisonExp | null;

  o_table_name?: NameComparisonExp | null;

  o_table_schema?: NameComparisonExp | null;

  overview_factor?: IntegerComparisonExp | null;

  r_raster_column?: NameComparisonExp | null;

  r_table_catalog?: NameComparisonExp | null;

  r_table_name?: NameComparisonExp | null;

  r_table_schema?: NameComparisonExp | null;
}
/** ordering options when selecting data from "spatial_ref_sys" */
export interface SpatialRefSysOrderBy {
  auth_name?: OrderBy | null;

  auth_srid?: OrderBy | null;

  proj4text?: OrderBy | null;

  srid?: OrderBy | null;

  srtext?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "spatial_ref_sys". All fields are combined with a logical 'AND'. */
export interface SpatialRefSysBoolExp {
  _and?: (SpatialRefSysBoolExp | null)[] | null;

  _not?: SpatialRefSysBoolExp | null;

  _or?: (SpatialRefSysBoolExp | null)[] | null;

  auth_name?: VarcharComparisonExp | null;

  auth_srid?: IntegerComparisonExp | null;

  proj4text?: VarcharComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  srtext?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "topology.layer" */
export interface TopologyLayerOrderBy {
  child_id?: OrderBy | null;

  feature_column?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  schema_name?: OrderBy | null;

  table_name?: OrderBy | null;

  topologyBytopologyId?: TopologyTopologyOrderBy | null;

  topology_id?: OrderBy | null;
}
/** ordering options when selecting data from "topology.topology" */
export interface TopologyTopologyOrderBy {
  hasz?: OrderBy | null;

  id?: OrderBy | null;

  layersBytopologyId_aggregate?: TopologyLayerAggregateOrderBy | null;

  name?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by aggregate values of table "topology.layer" */
export interface TopologyLayerAggregateOrderBy {
  avg?: TopologyLayerAvgOrderBy | null;

  count?: OrderBy | null;

  max?: TopologyLayerMaxOrderBy | null;

  min?: TopologyLayerMinOrderBy | null;

  stddev?: TopologyLayerStddevOrderBy | null;

  stddev_pop?: TopologyLayerStddevPopOrderBy | null;

  stddev_samp?: TopologyLayerStddevSampOrderBy | null;

  sum?: TopologyLayerSumOrderBy | null;

  var_pop?: TopologyLayerVarPopOrderBy | null;

  var_samp?: TopologyLayerVarSampOrderBy | null;

  variance?: TopologyLayerVarianceOrderBy | null;
}
/** order by avg() on columns of table "topology.layer" */
export interface TopologyLayerAvgOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by max() on columns of table "topology.layer" */
export interface TopologyLayerMaxOrderBy {
  child_id?: OrderBy | null;

  feature_column?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  schema_name?: OrderBy | null;

  table_name?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by min() on columns of table "topology.layer" */
export interface TopologyLayerMinOrderBy {
  child_id?: OrderBy | null;

  feature_column?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  schema_name?: OrderBy | null;

  table_name?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by stddev() on columns of table "topology.layer" */
export interface TopologyLayerStddevOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "topology.layer" */
export interface TopologyLayerStddevPopOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "topology.layer" */
export interface TopologyLayerStddevSampOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by sum() on columns of table "topology.layer" */
export interface TopologyLayerSumOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by var_pop() on columns of table "topology.layer" */
export interface TopologyLayerVarPopOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by var_samp() on columns of table "topology.layer" */
export interface TopologyLayerVarSampOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** order by variance() on columns of table "topology.layer" */
export interface TopologyLayerVarianceOrderBy {
  child_id?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  topology_id?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "topology.layer". All fields are combined with a logical 'AND'. */
export interface TopologyLayerBoolExp {
  _and?: (TopologyLayerBoolExp | null)[] | null;

  _not?: TopologyLayerBoolExp | null;

  _or?: (TopologyLayerBoolExp | null)[] | null;

  child_id?: IntegerComparisonExp | null;

  feature_column?: VarcharComparisonExp | null;

  feature_type?: IntegerComparisonExp | null;

  layer_id?: IntegerComparisonExp | null;

  level?: IntegerComparisonExp | null;

  schema_name?: VarcharComparisonExp | null;

  table_name?: VarcharComparisonExp | null;

  topologyBytopologyId?: TopologyTopologyBoolExp | null;

  topology_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "topology.topology". All fields are combined with a logical 'AND'. */
export interface TopologyTopologyBoolExp {
  _and?: (TopologyTopologyBoolExp | null)[] | null;

  _not?: TopologyTopologyBoolExp | null;

  _or?: (TopologyTopologyBoolExp | null)[] | null;

  hasz?: BooleanComparisonExp | null;

  id?: IntegerComparisonExp | null;

  layersBytopologyId?: TopologyLayerBoolExp | null;

  name?: VarcharComparisonExp | null;

  precision?: Float8ComparisonExp | null;

  srid?: IntegerComparisonExp | null;
}
/** input type for inserting data into table "geometry_columns" */
export interface GeometryColumnsInsertInput {
  coord_dimension?: number | null;

  f_geometry_column?: Name | null;

  f_table_catalog?: string | null;

  f_table_name?: Name | null;

  f_table_schema?: Name | null;

  srid?: number | null;

  type?: string | null;
}
/** input type for inserting data into table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidInsertInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** on conflict condition type for table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidOnConflict {
  constraint: KmealBlockNumberTxidConstraint;

  update_columns: KmealBlockNumberTxidUpdateColumn[];
}
/** input type for inserting data into table "kmeal._index_state" */
export interface KmealIndexStateInsertInput {
  block_hash?: string | null;

  block_number?: number | null;

  id?: number | null;

  is_replay?: boolean | null;
}
/** on conflict condition type for table "kmeal._index_state" */
export interface KmealIndexStateOnConflict {
  constraint: KmealIndexStateConstraint;

  update_columns: KmealIndexStateUpdateColumn[];
}
/** input type for inserting data into table "kmeal.account" */
export interface KmealAccountInsertInput {
  _dmx_created_at?: Timestamp | null;

  account_type?: Bpchar | null;

  balance?: Numeric | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dpordersBybuyer?: KmealDporderArrRelInsertInput | null;

  ordersBybuyer?: KmealOrderArrRelInsertInput | null;

  owner?: Bpchar | null;

  restaurantsByowner?: KmealRestaurantArrRelInsertInput | null;
}
/** input type for inserting array relation for remote table "kmeal.dporder" */
export interface KmealDporderArrRelInsertInput {
  data: KmealDporderInsertInput[];

  on_conflict?: KmealDporderOnConflict | null;
}
/** input type for inserting data into table "kmeal.dporder" */
export interface KmealDporderInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountBybuyer?: KmealAccountObjRelInsertInput | null;

  bid_price?: string | null;

  buyer?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dporder_id?: number | null;

  instructions?: string | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.account" */
export interface KmealAccountObjRelInsertInput {
  data: KmealAccountInsertInput;

  on_conflict?: KmealAccountOnConflict | null;
}
/** on conflict condition type for table "kmeal.account" */
export interface KmealAccountOnConflict {
  constraint: KmealAccountConstraint;

  update_columns: KmealAccountUpdateColumn[];
}
/** input type for inserting object relation for remote table "kmeal.listing" */
export interface KmealListingObjRelInsertInput {
  data: KmealListingInsertInput;

  on_conflict?: KmealListingOnConflict | null;
}
/** input type for inserting data into table "kmeal.listing" */
export interface KmealListingInsertInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dpordersBylistingId?: KmealDporderArrRelInsertInput | null;

  end_date?: Date | null;

  end_time?: string | null;

  isactive?: boolean | null;

  isrecurring?: Bpchar | null;

  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  list_price?: Numeric | null;

  list_type?: Bpchar | null;

  listingItemSidessBylistingId?: KmealListingItemSidesArrRelInsertInput | null;

  listing_id?: number | null;

  min_price?: Numeric | null;

  orderDetailsBylistingId?: KmealOrderDetailArrRelInsertInput | null;

  quantity?: number | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;

  sliding_rate?: Numeric | null;

  start_date?: Date | null;

  start_time?: string | null;
}
/** input type for inserting object relation for remote table "kmeal.item" */
export interface KmealItemObjRelInsertInput {
  data: KmealItemInsertInput;

  on_conflict?: KmealItemOnConflict | null;
}
/** input type for inserting data into table "kmeal.item" */
export interface KmealItemInsertInput {
  cooking_time?: number | null;

  description?: string | null;

  itemSectionsByitemId?: KmealItemSectionArrRelInsertInput | null;

  itemTypessByitemId?: KmealItemTypesArrRelInsertInput | null;

  item_id?: number | null;

  item_name?: string | null;

  listingsByitemId?: KmealListingArrRelInsertInput | null;

  photo?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;

  sort_order?: number | null;

  spicy_level?: number | null;

  vegetarian?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.item_section" */
export interface KmealItemSectionArrRelInsertInput {
  data: KmealItemSectionInsertInput[];

  on_conflict?: KmealItemSectionOnConflict | null;
}
/** input type for inserting data into table "kmeal.item_section" */
export interface KmealItemSectionInsertInput {
  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  menuBookSectionBysectionId?: KmealMenuBookSectionObjRelInsertInput | null;

  section_id?: number | null;

  sort_order?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionObjRelInsertInput {
  data: KmealMenuBookSectionInsertInput;

  on_conflict?: KmealMenuBookSectionOnConflict | null;
}
/** input type for inserting data into table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionInsertInput {
  itemSectionsBysectionId?: KmealItemSectionArrRelInsertInput | null;

  menuBookBymenuBookId?: KmealMenuBookObjRelInsertInput | null;

  menu_book_id?: number | null;

  section_id?: number | null;

  section_name?: string | null;

  sort_order?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.menu_book" */
export interface KmealMenuBookObjRelInsertInput {
  data: KmealMenuBookInsertInput;

  on_conflict?: KmealMenuBookOnConflict | null;
}
/** input type for inserting data into table "kmeal.menu_book" */
export interface KmealMenuBookInsertInput {
  menuBookSectionsBymenuBookId?: KmealMenuBookSectionArrRelInsertInput | null;

  menu_book?: string | null;

  menu_book_id?: number | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;

  sort_order?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionArrRelInsertInput {
  data: KmealMenuBookSectionInsertInput[];

  on_conflict?: KmealMenuBookSectionOnConflict | null;
}
/** on conflict condition type for table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionOnConflict {
  constraint: KmealMenuBookSectionConstraint;

  update_columns: KmealMenuBookSectionUpdateColumn[];
}
/** input type for inserting object relation for remote table "kmeal.restaurant" */
export interface KmealRestaurantObjRelInsertInput {
  data: KmealRestaurantInsertInput;

  on_conflict?: KmealRestaurantOnConflict | null;
}
/** input type for inserting data into table "kmeal.restaurant" */
export interface KmealRestaurantInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountByowner?: KmealAccountObjRelInsertInput | null;

  address?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  dpordersByrestaurantId?: KmealDporderArrRelInsertInput | null;

  isactive?: boolean | null;

  itemsByrestaurantId?: KmealItemArrRelInsertInput | null;

  latitude?: Float8 | null;

  listingsByrestaurantId?: KmealListingArrRelInsertInput | null;

  location?: Geography | null;

  logo?: string | null;

  longitude?: Float8 | null;

  menuBooksByrestaurantId?: KmealMenuBookArrRelInsertInput | null;

  name?: string | null;

  ordersByrestaurantId?: KmealOrderArrRelInsertInput | null;

  owner?: Bpchar | null;

  phone?: string | null;

  rating?: number | null;

  restaurantCategoriessByrestaurantId?: KmealRestaurantCategoriesArrRelInsertInput | null;

  restaurant_id?: number | null;

  restaurant_nearbies?: KmealRestaurantNearbyArrRelInsertInput | null;

  timeofoperation?: string | null;

  yelp_id?: string | null;
}
/** input type for inserting array relation for remote table "kmeal.item" */
export interface KmealItemArrRelInsertInput {
  data: KmealItemInsertInput[];

  on_conflict?: KmealItemOnConflict | null;
}
/** on conflict condition type for table "kmeal.item" */
export interface KmealItemOnConflict {
  constraint: KmealItemConstraint;

  update_columns: KmealItemUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.listing" */
export interface KmealListingArrRelInsertInput {
  data: KmealListingInsertInput[];

  on_conflict?: KmealListingOnConflict | null;
}
/** on conflict condition type for table "kmeal.listing" */
export interface KmealListingOnConflict {
  constraint: KmealListingConstraint;

  update_columns: KmealListingUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.menu_book" */
export interface KmealMenuBookArrRelInsertInput {
  data: KmealMenuBookInsertInput[];

  on_conflict?: KmealMenuBookOnConflict | null;
}
/** on conflict condition type for table "kmeal.menu_book" */
export interface KmealMenuBookOnConflict {
  constraint: KmealMenuBookConstraint;

  update_columns: KmealMenuBookUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.order" */
export interface KmealOrderArrRelInsertInput {
  data: KmealOrderInsertInput[];

  on_conflict?: KmealOrderOnConflict | null;
}
/** input type for inserting data into table "kmeal.order" */
export interface KmealOrderInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountBybuyer?: KmealAccountObjRelInsertInput | null;

  buyer?: Bpchar | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dpordersByorderId?: KmealDporderArrRelInsertInput | null;

  instructions?: string | null;

  orderDetailsByorderId?: KmealOrderDetailArrRelInsertInput | null;

  orderStatussByorderId?: KmealOrderStatusArrRelInsertInput | null;

  order_id?: number | null;

  paymentsByorderId?: KmealPaymentArrRelInsertInput | null;

  price?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.order_detail" */
export interface KmealOrderDetailArrRelInsertInput {
  data: KmealOrderDetailInsertInput[];
}
/** input type for inserting data into table "kmeal.order_detail" */
export interface KmealOrderDetailInsertInput {
  instructions?: string | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  listing_type?: Bpchar | null;

  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.order" */
export interface KmealOrderObjRelInsertInput {
  data: KmealOrderInsertInput;

  on_conflict?: KmealOrderOnConflict | null;
}
/** on conflict condition type for table "kmeal.order" */
export interface KmealOrderOnConflict {
  constraint: KmealOrderConstraint;

  update_columns: KmealOrderUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.order_status" */
export interface KmealOrderStatusArrRelInsertInput {
  data: KmealOrderStatusInsertInput[];

  on_conflict?: KmealOrderStatusOnConflict | null;
}
/** input type for inserting data into table "kmeal.order_status" */
export interface KmealOrderStatusInsertInput {
  created_at?: Timestamp | null;

  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  order_status?: number | null;
}
/** on conflict condition type for table "kmeal.order_status" */
export interface KmealOrderStatusOnConflict {
  constraint: KmealOrderStatusConstraint;

  update_columns: KmealOrderStatusUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.payment" */
export interface KmealPaymentArrRelInsertInput {
  data: KmealPaymentInsertInput[];

  on_conflict?: KmealPaymentOnConflict | null;
}
/** input type for inserting data into table "kmeal.payment" */
export interface KmealPaymentInsertInput {
  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  payment_id?: number | null;

  payment_status?: Bpchar | null;
}
/** on conflict condition type for table "kmeal.payment" */
export interface KmealPaymentOnConflict {
  constraint: KmealPaymentConstraint;

  update_columns: KmealPaymentUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesArrRelInsertInput {
  data: KmealRestaurantCategoriesInsertInput[];
}
/** input type for inserting data into table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesInsertInput {
  category?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyArrRelInsertInput {
  data: KmealRestaurantNearbyInsertInput[];

  on_conflict?: KmealRestaurantNearbyOnConflict | null;
}
/** input type for inserting data into table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyInsertInput {
  distance?: Numeric | null;

  restaurant?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** on conflict condition type for table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyOnConflict {
  constraint: KmealRestaurantNearbyConstraint;

  update_columns: KmealRestaurantNearbyUpdateColumn[];
}
/** on conflict condition type for table "kmeal.restaurant" */
export interface KmealRestaurantOnConflict {
  constraint: KmealRestaurantConstraint;

  update_columns: KmealRestaurantUpdateColumn[];
}
/** on conflict condition type for table "kmeal.item_section" */
export interface KmealItemSectionOnConflict {
  constraint: KmealItemSectionConstraint;

  update_columns: KmealItemSectionUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.item_types" */
export interface KmealItemTypesArrRelInsertInput {
  data: KmealItemTypesInsertInput[];
}
/** input type for inserting data into table "kmeal.item_types" */
export interface KmealItemTypesInsertInput {
  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  item_type?: string | null;
}
/** input type for inserting array relation for remote table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesArrRelInsertInput {
  data: KmealListingItemSidesInsertInput[];
}
/** input type for inserting data into table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesInsertInput {
  group?: string | null;

  item_name?: string | null;

  list_price?: Numeric | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  max_selection?: number | null;
}
/** on conflict condition type for table "kmeal.dporder" */
export interface KmealDporderOnConflict {
  constraint: KmealDporderConstraint;

  update_columns: KmealDporderUpdateColumn[];
}
/** input type for inserting array relation for remote table "kmeal.restaurant" */
export interface KmealRestaurantArrRelInsertInput {
  data: KmealRestaurantInsertInput[];

  on_conflict?: KmealRestaurantOnConflict | null;
}
/** input type for inserting data into table "kmeal.categories" */
export interface KmealCategoriesInsertInput {
  alias?: string | null;

  title?: string | null;
}
/** on conflict condition type for table "kmeal.categories" */
export interface KmealCategoriesOnConflict {
  constraint: KmealCategoriesConstraint;

  update_columns: KmealCategoriesUpdateColumn[];
}
/** input type for inserting data into table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoInsertInput {
  address_line_1?: string | null;

  address_line_2?: string | null;

  card_cvv?: Numeric | null;

  card_holder?: string | null;

  card_num?: Numeric | null;

  card_type?: string | null;

  city?: string | null;

  country?: string | null;

  exp_date?: Date | null;

  postal_code?: Numeric | null;

  username?: string | null;
}
/** on conflict condition type for table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoOnConflict {
  constraint: KmealCreditCardInfoConstraint;

  update_columns: KmealCreditCardInfoUpdateColumn[];
}
/** input type for inserting data into table "spatial_ref_sys" */
export interface SpatialRefSysInsertInput {
  auth_name?: string | null;

  auth_srid?: number | null;

  proj4text?: string | null;

  srid?: number | null;

  srtext?: string | null;
}
/** on conflict condition type for table "spatial_ref_sys" */
export interface SpatialRefSysOnConflict {
  constraint: SpatialRefSysConstraint;

  update_columns: SpatialRefSysUpdateColumn[];
}
/** input type for inserting data into table "topology.layer" */
export interface TopologyLayerInsertInput {
  child_id?: number | null;

  feature_column?: string | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  schema_name?: string | null;

  table_name?: string | null;

  topologyBytopologyId?: TopologyTopologyObjRelInsertInput | null;

  topology_id?: number | null;
}
/** input type for inserting object relation for remote table "topology.topology" */
export interface TopologyTopologyObjRelInsertInput {
  data: TopologyTopologyInsertInput;

  on_conflict?: TopologyTopologyOnConflict | null;
}
/** input type for inserting data into table "topology.topology" */
export interface TopologyTopologyInsertInput {
  hasz?: boolean | null;

  id?: number | null;

  layersBytopologyId?: TopologyLayerArrRelInsertInput | null;

  name?: string | null;

  precision?: Float8 | null;

  srid?: number | null;
}
/** input type for inserting array relation for remote table "topology.layer" */
export interface TopologyLayerArrRelInsertInput {
  data: TopologyLayerInsertInput[];

  on_conflict?: TopologyLayerOnConflict | null;
}
/** on conflict condition type for table "topology.layer" */
export interface TopologyLayerOnConflict {
  constraint: TopologyLayerConstraint;

  update_columns: TopologyLayerUpdateColumn[];
}
/** on conflict condition type for table "topology.topology" */
export interface TopologyTopologyOnConflict {
  constraint: TopologyTopologyConstraint;

  update_columns: TopologyTopologyUpdateColumn[];
}
/** input type for incrementing integer columne in table "geometry_columns" */
export interface GeometryColumnsIncInput {
  coord_dimension?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "geometry_columns" */
export interface GeometryColumnsSetInput {
  coord_dimension?: number | null;

  f_geometry_column?: Name | null;

  f_table_catalog?: string | null;

  f_table_name?: Name | null;

  f_table_schema?: Name | null;

  srid?: number | null;

  type?: string | null;
}
/** input type for incrementing integer columne in table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidIncInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** input type for updating data in table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidSetInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** input type for incrementing integer columne in table "kmeal._index_state" */
export interface KmealIndexStateIncInput {
  block_number?: number | null;

  id?: number | null;
}
/** input type for updating data in table "kmeal._index_state" */
export interface KmealIndexStateSetInput {
  block_hash?: string | null;

  block_number?: number | null;

  id?: number | null;

  is_replay?: boolean | null;
}
/** input type for incrementing integer columne in table "kmeal.account" */
export interface KmealAccountIncInput {
  created_block?: Bigint | null;
}
/** input type for updating data in table "kmeal.account" */
export interface KmealAccountSetInput {
  _dmx_created_at?: Timestamp | null;

  account_type?: Bpchar | null;

  balance?: Numeric | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  owner?: Bpchar | null;
}
/** input type for updating data in table "kmeal.categories" */
export interface KmealCategoriesSetInput {
  alias?: string | null;

  title?: string | null;
}
/** input type for updating data in table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoSetInput {
  address_line_1?: string | null;

  address_line_2?: string | null;

  card_cvv?: Numeric | null;

  card_holder?: string | null;

  card_num?: Numeric | null;

  card_type?: string | null;

  city?: string | null;

  country?: string | null;

  exp_date?: Date | null;

  postal_code?: Numeric | null;

  username?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.dporder" */
export interface KmealDporderIncInput {
  created_block?: Bigint | null;

  dporder_id?: number | null;

  listing_id?: number | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.dporder" */
export interface KmealDporderSetInput {
  _dmx_created_at?: Timestamp | null;

  bid_price?: string | null;

  buyer?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dporder_id?: number | null;

  instructions?: string | null;

  listing_id?: number | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.item" */
export interface KmealItemIncInput {
  cooking_time?: number | null;

  item_id?: number | null;

  restaurant_id?: number | null;

  sort_order?: number | null;

  spicy_level?: number | null;

  vegetarian?: number | null;
}
/** input type for updating data in table "kmeal.item" */
export interface KmealItemSetInput {
  cooking_time?: number | null;

  description?: string | null;

  item_id?: number | null;

  item_name?: string | null;

  photo?: string | null;

  restaurant_id?: number | null;

  sort_order?: number | null;

  spicy_level?: number | null;

  vegetarian?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.item_section" */
export interface KmealItemSectionIncInput {
  item_id?: number | null;

  section_id?: number | null;

  sort_order?: number | null;
}
/** input type for updating data in table "kmeal.item_section" */
export interface KmealItemSectionSetInput {
  item_id?: number | null;

  section_id?: number | null;

  sort_order?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.item_types" */
export interface KmealItemTypesIncInput {
  item_id?: number | null;
}
/** input type for updating data in table "kmeal.item_types" */
export interface KmealItemTypesSetInput {
  item_id?: number | null;

  item_type?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.listing" */
export interface KmealListingIncInput {
  created_block?: Bigint | null;

  item_id?: number | null;

  listing_id?: number | null;

  quantity?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.listing" */
export interface KmealListingSetInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  end_date?: Date | null;

  end_time?: string | null;

  isactive?: boolean | null;

  isrecurring?: Bpchar | null;

  item_id?: number | null;

  list_price?: Numeric | null;

  list_type?: Bpchar | null;

  listing_id?: number | null;

  min_price?: Numeric | null;

  quantity?: number | null;

  restaurant_id?: number | null;

  sliding_rate?: Numeric | null;

  start_date?: Date | null;

  start_time?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesIncInput {
  listing_id?: number | null;

  max_selection?: number | null;
}
/** input type for updating data in table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesSetInput {
  group?: string | null;

  item_name?: string | null;

  list_price?: Numeric | null;

  listing_id?: number | null;

  max_selection?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.menu_book" */
export interface KmealMenuBookIncInput {
  menu_book_id?: number | null;

  restaurant_id?: number | null;

  sort_order?: number | null;
}
/** input type for updating data in table "kmeal.menu_book" */
export interface KmealMenuBookSetInput {
  menu_book?: string | null;

  menu_book_id?: number | null;

  restaurant_id?: number | null;

  sort_order?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionIncInput {
  menu_book_id?: number | null;

  section_id?: number | null;

  sort_order?: number | null;
}
/** input type for updating data in table "kmeal.menu_book_section" */
export interface KmealMenuBookSectionSetInput {
  menu_book_id?: number | null;

  section_id?: number | null;

  section_name?: string | null;

  sort_order?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order" */
export interface KmealOrderIncInput {
  created_block?: Bigint | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.order" */
export interface KmealOrderSetInput {
  _dmx_created_at?: Timestamp | null;

  buyer?: Bpchar | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  instructions?: string | null;

  order_id?: number | null;

  price?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order_detail" */
export interface KmealOrderDetailIncInput {
  listing_id?: number | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for updating data in table "kmeal.order_detail" */
export interface KmealOrderDetailSetInput {
  instructions?: string | null;

  listing_id?: number | null;

  listing_type?: Bpchar | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order_status" */
export interface KmealOrderStatusIncInput {
  order_id?: number | null;

  order_status?: number | null;
}
/** input type for updating data in table "kmeal.order_status" */
export interface KmealOrderStatusSetInput {
  created_at?: Timestamp | null;

  order_id?: number | null;

  order_status?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.payment" */
export interface KmealPaymentIncInput {
  order_id?: number | null;

  payment_id?: number | null;
}
/** input type for updating data in table "kmeal.payment" */
export interface KmealPaymentSetInput {
  order_id?: number | null;

  payment_id?: number | null;

  payment_status?: Bpchar | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant" */
export interface KmealRestaurantIncInput {
  created_block?: Bigint | null;

  rating?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant" */
export interface KmealRestaurantSetInput {
  _dmx_created_at?: Timestamp | null;

  address?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  isactive?: boolean | null;

  latitude?: Float8 | null;

  location?: Geography | null;

  logo?: string | null;

  longitude?: Float8 | null;

  name?: string | null;

  owner?: Bpchar | null;

  phone?: string | null;

  rating?: number | null;

  restaurant_id?: number | null;

  timeofoperation?: string | null;

  yelp_id?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesIncInput {
  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesSetInput {
  category?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyIncInput {
  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbySetInput {
  distance?: Numeric | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "spatial_ref_sys" */
export interface SpatialRefSysIncInput {
  auth_srid?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "spatial_ref_sys" */
export interface SpatialRefSysSetInput {
  auth_name?: string | null;

  auth_srid?: number | null;

  proj4text?: string | null;

  srid?: number | null;

  srtext?: string | null;
}
/** input type for incrementing integer columne in table "topology.layer" */
export interface TopologyLayerIncInput {
  child_id?: number | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  topology_id?: number | null;
}
/** input type for updating data in table "topology.layer" */
export interface TopologyLayerSetInput {
  child_id?: number | null;

  feature_column?: string | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  schema_name?: string | null;

  table_name?: string | null;

  topology_id?: number | null;
}
/** input type for incrementing integer columne in table "topology.topology" */
export interface TopologyTopologyIncInput {
  id?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "topology.topology" */
export interface TopologyTopologySetInput {
  hasz?: boolean | null;

  id?: number | null;

  name?: string | null;

  precision?: Float8 | null;

  srid?: number | null;
}
/** order by aggregate values of table "geography_columns" */
export interface GeographyColumnsAggregateOrderBy {
  avg?: GeographyColumnsAvgOrderBy | null;

  count?: OrderBy | null;

  max?: GeographyColumnsMaxOrderBy | null;

  min?: GeographyColumnsMinOrderBy | null;

  stddev?: GeographyColumnsStddevOrderBy | null;

  stddev_pop?: GeographyColumnsStddevPopOrderBy | null;

  stddev_samp?: GeographyColumnsStddevSampOrderBy | null;

  sum?: GeographyColumnsSumOrderBy | null;

  var_pop?: GeographyColumnsVarPopOrderBy | null;

  var_samp?: GeographyColumnsVarSampOrderBy | null;

  variance?: GeographyColumnsVarianceOrderBy | null;
}
/** order by avg() on columns of table "geography_columns" */
export interface GeographyColumnsAvgOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by max() on columns of table "geography_columns" */
export interface GeographyColumnsMaxOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** order by min() on columns of table "geography_columns" */
export interface GeographyColumnsMinOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** order by stddev() on columns of table "geography_columns" */
export interface GeographyColumnsStddevOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "geography_columns" */
export interface GeographyColumnsStddevPopOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "geography_columns" */
export interface GeographyColumnsStddevSampOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by sum() on columns of table "geography_columns" */
export interface GeographyColumnsSumOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_pop() on columns of table "geography_columns" */
export interface GeographyColumnsVarPopOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_samp() on columns of table "geography_columns" */
export interface GeographyColumnsVarSampOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by variance() on columns of table "geography_columns" */
export interface GeographyColumnsVarianceOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by aggregate values of table "geometry_columns" */
export interface GeometryColumnsAggregateOrderBy {
  avg?: GeometryColumnsAvgOrderBy | null;

  count?: OrderBy | null;

  max?: GeometryColumnsMaxOrderBy | null;

  min?: GeometryColumnsMinOrderBy | null;

  stddev?: GeometryColumnsStddevOrderBy | null;

  stddev_pop?: GeometryColumnsStddevPopOrderBy | null;

  stddev_samp?: GeometryColumnsStddevSampOrderBy | null;

  sum?: GeometryColumnsSumOrderBy | null;

  var_pop?: GeometryColumnsVarPopOrderBy | null;

  var_samp?: GeometryColumnsVarSampOrderBy | null;

  variance?: GeometryColumnsVarianceOrderBy | null;
}
/** order by avg() on columns of table "geometry_columns" */
export interface GeometryColumnsAvgOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by max() on columns of table "geometry_columns" */
export interface GeometryColumnsMaxOrderBy {
  coord_dimension?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** order by min() on columns of table "geometry_columns" */
export interface GeometryColumnsMinOrderBy {
  coord_dimension?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** order by stddev() on columns of table "geometry_columns" */
export interface GeometryColumnsStddevOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "geometry_columns" */
export interface GeometryColumnsStddevPopOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "geometry_columns" */
export interface GeometryColumnsStddevSampOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by sum() on columns of table "geometry_columns" */
export interface GeometryColumnsSumOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_pop() on columns of table "geometry_columns" */
export interface GeometryColumnsVarPopOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_samp() on columns of table "geometry_columns" */
export interface GeometryColumnsVarSampOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by variance() on columns of table "geometry_columns" */
export interface GeometryColumnsVarianceOrderBy {
  coord_dimension?: OrderBy | null;

  srid?: OrderBy | null;
}
/** input type for inserting array relation for remote table "geometry_columns" */
export interface GeometryColumnsArrRelInsertInput {
  data: GeometryColumnsInsertInput[];
}
/** input type for inserting object relation for remote table "geometry_columns" */
export interface GeometryColumnsObjRelInsertInput {
  data: GeometryColumnsInsertInput;
}
/** order by aggregate values of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidAggregateOrderBy {
  avg?: KmealBlockNumberTxidAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealBlockNumberTxidMaxOrderBy | null;

  min?: KmealBlockNumberTxidMinOrderBy | null;

  stddev?: KmealBlockNumberTxidStddevOrderBy | null;

  stddev_pop?: KmealBlockNumberTxidStddevPopOrderBy | null;

  stddev_samp?: KmealBlockNumberTxidStddevSampOrderBy | null;

  sum?: KmealBlockNumberTxidSumOrderBy | null;

  var_pop?: KmealBlockNumberTxidVarPopOrderBy | null;

  var_samp?: KmealBlockNumberTxidVarSampOrderBy | null;

  variance?: KmealBlockNumberTxidVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidAvgOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by max() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidMaxOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by min() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidMinOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidStddevOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidStddevPopOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidStddevSampOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidSumOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidVarPopOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidVarSampOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidVarianceOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** input type for inserting array relation for remote table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidArrRelInsertInput {
  data: KmealBlockNumberTxidInsertInput[];

  on_conflict?: KmealBlockNumberTxidOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidObjRelInsertInput {
  data: KmealBlockNumberTxidInsertInput;

  on_conflict?: KmealBlockNumberTxidOnConflict | null;
}
/** order by aggregate values of table "kmeal._index_state" */
export interface KmealIndexStateAggregateOrderBy {
  avg?: KmealIndexStateAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealIndexStateMaxOrderBy | null;

  min?: KmealIndexStateMinOrderBy | null;

  stddev?: KmealIndexStateStddevOrderBy | null;

  stddev_pop?: KmealIndexStateStddevPopOrderBy | null;

  stddev_samp?: KmealIndexStateStddevSampOrderBy | null;

  sum?: KmealIndexStateSumOrderBy | null;

  var_pop?: KmealIndexStateVarPopOrderBy | null;

  var_samp?: KmealIndexStateVarSampOrderBy | null;

  variance?: KmealIndexStateVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal._index_state" */
export interface KmealIndexStateAvgOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by max() on columns of table "kmeal._index_state" */
export interface KmealIndexStateMaxOrderBy {
  block_hash?: OrderBy | null;

  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by min() on columns of table "kmeal._index_state" */
export interface KmealIndexStateMinOrderBy {
  block_hash?: OrderBy | null;

  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal._index_state" */
export interface KmealIndexStateStddevOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal._index_state" */
export interface KmealIndexStateStddevPopOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal._index_state" */
export interface KmealIndexStateStddevSampOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal._index_state" */
export interface KmealIndexStateSumOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal._index_state" */
export interface KmealIndexStateVarPopOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal._index_state" */
export interface KmealIndexStateVarSampOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal._index_state" */
export interface KmealIndexStateVarianceOrderBy {
  block_number?: OrderBy | null;

  id?: OrderBy | null;
}
/** input type for inserting array relation for remote table "kmeal._index_state" */
export interface KmealIndexStateArrRelInsertInput {
  data: KmealIndexStateInsertInput[];

  on_conflict?: KmealIndexStateOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal._index_state" */
export interface KmealIndexStateObjRelInsertInput {
  data: KmealIndexStateInsertInput;

  on_conflict?: KmealIndexStateOnConflict | null;
}
/** order by aggregate values of table "kmeal.account" */
export interface KmealAccountAggregateOrderBy {
  avg?: KmealAccountAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealAccountMaxOrderBy | null;

  min?: KmealAccountMinOrderBy | null;

  stddev?: KmealAccountStddevOrderBy | null;

  stddev_pop?: KmealAccountStddevPopOrderBy | null;

  stddev_samp?: KmealAccountStddevSampOrderBy | null;

  sum?: KmealAccountSumOrderBy | null;

  var_pop?: KmealAccountVarPopOrderBy | null;

  var_samp?: KmealAccountVarSampOrderBy | null;

  variance?: KmealAccountVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.account" */
export interface KmealAccountAvgOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.account" */
export interface KmealAccountMaxOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.account" */
export interface KmealAccountMinOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.account" */
export interface KmealAccountStddevOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.account" */
export interface KmealAccountStddevPopOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.account" */
export interface KmealAccountStddevSampOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.account" */
export interface KmealAccountSumOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.account" */
export interface KmealAccountVarPopOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.account" */
export interface KmealAccountVarSampOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.account" */
export interface KmealAccountVarianceOrderBy {
  balance?: OrderBy | null;

  created_block?: OrderBy | null;
}
/** input type for inserting array relation for remote table "kmeal.account" */
export interface KmealAccountArrRelInsertInput {
  data: KmealAccountInsertInput[];

  on_conflict?: KmealAccountOnConflict | null;
}
/** order by aggregate values of table "kmeal.categories" */
export interface KmealCategoriesAggregateOrderBy {
  count?: OrderBy | null;

  max?: KmealCategoriesMaxOrderBy | null;

  min?: KmealCategoriesMinOrderBy | null;
}
/** order by max() on columns of table "kmeal.categories" */
export interface KmealCategoriesMaxOrderBy {
  alias?: OrderBy | null;

  title?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.categories" */
export interface KmealCategoriesMinOrderBy {
  alias?: OrderBy | null;

  title?: OrderBy | null;
}
/** input type for inserting array relation for remote table "kmeal.categories" */
export interface KmealCategoriesArrRelInsertInput {
  data: KmealCategoriesInsertInput[];

  on_conflict?: KmealCategoriesOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.categories" */
export interface KmealCategoriesObjRelInsertInput {
  data: KmealCategoriesInsertInput;

  on_conflict?: KmealCategoriesOnConflict | null;
}
/** order by aggregate values of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoAggregateOrderBy {
  avg?: KmealCreditCardInfoAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealCreditCardInfoMaxOrderBy | null;

  min?: KmealCreditCardInfoMinOrderBy | null;

  stddev?: KmealCreditCardInfoStddevOrderBy | null;

  stddev_pop?: KmealCreditCardInfoStddevPopOrderBy | null;

  stddev_samp?: KmealCreditCardInfoStddevSampOrderBy | null;

  sum?: KmealCreditCardInfoSumOrderBy | null;

  var_pop?: KmealCreditCardInfoVarPopOrderBy | null;

  var_samp?: KmealCreditCardInfoVarSampOrderBy | null;

  variance?: KmealCreditCardInfoVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoAvgOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoMaxOrderBy {
  address_line_1?: OrderBy | null;

  address_line_2?: OrderBy | null;

  card_cvv?: OrderBy | null;

  card_holder?: OrderBy | null;

  card_num?: OrderBy | null;

  card_type?: OrderBy | null;

  city?: OrderBy | null;

  country?: OrderBy | null;

  exp_date?: OrderBy | null;

  postal_code?: OrderBy | null;

  username?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoMinOrderBy {
  address_line_1?: OrderBy | null;

  address_line_2?: OrderBy | null;

  card_cvv?: OrderBy | null;

  card_holder?: OrderBy | null;

  card_num?: OrderBy | null;

  card_type?: OrderBy | null;

  city?: OrderBy | null;

  country?: OrderBy | null;

  exp_date?: OrderBy | null;

  postal_code?: OrderBy | null;

  username?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoStddevOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoStddevPopOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoStddevSampOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoSumOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoVarPopOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoVarSampOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoVarianceOrderBy {
  card_cvv?: OrderBy | null;

  card_num?: OrderBy | null;

  postal_code?: OrderBy | null;
}
/** input type for inserting array relation for remote table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoArrRelInsertInput {
  data: KmealCreditCardInfoInsertInput[];

  on_conflict?: KmealCreditCardInfoOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.credit_card_info" */
export interface KmealCreditCardInfoObjRelInsertInput {
  data: KmealCreditCardInfoInsertInput;

  on_conflict?: KmealCreditCardInfoOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.dporder" */
export interface KmealDporderObjRelInsertInput {
  data: KmealDporderInsertInput;

  on_conflict?: KmealDporderOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.item_section" */
export interface KmealItemSectionObjRelInsertInput {
  data: KmealItemSectionInsertInput;

  on_conflict?: KmealItemSectionOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.item_types" */
export interface KmealItemTypesObjRelInsertInput {
  data: KmealItemTypesInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesObjRelInsertInput {
  data: KmealListingItemSidesInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.order_detail" */
export interface KmealOrderDetailObjRelInsertInput {
  data: KmealOrderDetailInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.order_status" */
export interface KmealOrderStatusObjRelInsertInput {
  data: KmealOrderStatusInsertInput;

  on_conflict?: KmealOrderStatusOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.payment" */
export interface KmealPaymentObjRelInsertInput {
  data: KmealPaymentInsertInput;

  on_conflict?: KmealPaymentOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesObjRelInsertInput {
  data: KmealRestaurantCategoriesInsertInput;
}
/** order by aggregate values of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationAggregateOrderBy {
  avg?: KmealRestaurantLocationAvgOrderBy | null;

  count?: OrderBy | null;

  max?: KmealRestaurantLocationMaxOrderBy | null;

  min?: KmealRestaurantLocationMinOrderBy | null;

  stddev?: KmealRestaurantLocationStddevOrderBy | null;

  stddev_pop?: KmealRestaurantLocationStddevPopOrderBy | null;

  stddev_samp?: KmealRestaurantLocationStddevSampOrderBy | null;

  sum?: KmealRestaurantLocationSumOrderBy | null;

  var_pop?: KmealRestaurantLocationVarPopOrderBy | null;

  var_samp?: KmealRestaurantLocationVarSampOrderBy | null;

  variance?: KmealRestaurantLocationVarianceOrderBy | null;
}
/** order by avg() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationAvgOrderBy {
  distance?: OrderBy | null;
}
/** order by max() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationMaxOrderBy {
  address?: OrderBy | null;

  description?: OrderBy | null;

  distance?: OrderBy | null;

  logo?: OrderBy | null;

  name?: OrderBy | null;

  phone?: OrderBy | null;
}
/** order by min() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationMinOrderBy {
  address?: OrderBy | null;

  description?: OrderBy | null;

  distance?: OrderBy | null;

  logo?: OrderBy | null;

  name?: OrderBy | null;

  phone?: OrderBy | null;
}
/** order by stddev() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationStddevOrderBy {
  distance?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationStddevPopOrderBy {
  distance?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationStddevSampOrderBy {
  distance?: OrderBy | null;
}
/** order by sum() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationSumOrderBy {
  distance?: OrderBy | null;
}
/** order by var_pop() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationVarPopOrderBy {
  distance?: OrderBy | null;
}
/** order by var_samp() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationVarSampOrderBy {
  distance?: OrderBy | null;
}
/** order by variance() on columns of table "kmeal.restaurant_location" */
export interface KmealRestaurantLocationVarianceOrderBy {
  distance?: OrderBy | null;
}
/** input type for inserting object relation for remote table "kmeal.restaurant_nearby" */
export interface KmealRestaurantNearbyObjRelInsertInput {
  data: KmealRestaurantNearbyInsertInput;

  on_conflict?: KmealRestaurantNearbyOnConflict | null;
}
/** order by aggregate values of table "raster_columns" */
export interface RasterColumnsAggregateOrderBy {
  avg?: RasterColumnsAvgOrderBy | null;

  count?: OrderBy | null;

  max?: RasterColumnsMaxOrderBy | null;

  min?: RasterColumnsMinOrderBy | null;

  stddev?: RasterColumnsStddevOrderBy | null;

  stddev_pop?: RasterColumnsStddevPopOrderBy | null;

  stddev_samp?: RasterColumnsStddevSampOrderBy | null;

  sum?: RasterColumnsSumOrderBy | null;

  var_pop?: RasterColumnsVarPopOrderBy | null;

  var_samp?: RasterColumnsVarSampOrderBy | null;

  variance?: RasterColumnsVarianceOrderBy | null;
}
/** order by avg() on columns of table "raster_columns" */
export interface RasterColumnsAvgOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by max() on columns of table "raster_columns" */
export interface RasterColumnsMaxOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by min() on columns of table "raster_columns" */
export interface RasterColumnsMinOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev() on columns of table "raster_columns" */
export interface RasterColumnsStddevOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "raster_columns" */
export interface RasterColumnsStddevPopOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "raster_columns" */
export interface RasterColumnsStddevSampOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by sum() on columns of table "raster_columns" */
export interface RasterColumnsSumOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_pop() on columns of table "raster_columns" */
export interface RasterColumnsVarPopOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_samp() on columns of table "raster_columns" */
export interface RasterColumnsVarSampOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by variance() on columns of table "raster_columns" */
export interface RasterColumnsVarianceOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  num_bands?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by aggregate values of table "raster_overviews" */
export interface RasterOverviewsAggregateOrderBy {
  avg?: RasterOverviewsAvgOrderBy | null;

  count?: OrderBy | null;

  max?: RasterOverviewsMaxOrderBy | null;

  min?: RasterOverviewsMinOrderBy | null;

  stddev?: RasterOverviewsStddevOrderBy | null;

  stddev_pop?: RasterOverviewsStddevPopOrderBy | null;

  stddev_samp?: RasterOverviewsStddevSampOrderBy | null;

  sum?: RasterOverviewsSumOrderBy | null;

  var_pop?: RasterOverviewsVarPopOrderBy | null;

  var_samp?: RasterOverviewsVarSampOrderBy | null;

  variance?: RasterOverviewsVarianceOrderBy | null;
}
/** order by avg() on columns of table "raster_overviews" */
export interface RasterOverviewsAvgOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by max() on columns of table "raster_overviews" */
export interface RasterOverviewsMaxOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by min() on columns of table "raster_overviews" */
export interface RasterOverviewsMinOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by stddev() on columns of table "raster_overviews" */
export interface RasterOverviewsStddevOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "raster_overviews" */
export interface RasterOverviewsStddevPopOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "raster_overviews" */
export interface RasterOverviewsStddevSampOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by sum() on columns of table "raster_overviews" */
export interface RasterOverviewsSumOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by var_pop() on columns of table "raster_overviews" */
export interface RasterOverviewsVarPopOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by var_samp() on columns of table "raster_overviews" */
export interface RasterOverviewsVarSampOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by variance() on columns of table "raster_overviews" */
export interface RasterOverviewsVarianceOrderBy {
  overview_factor?: OrderBy | null;
}
/** order by aggregate values of table "spatial_ref_sys" */
export interface SpatialRefSysAggregateOrderBy {
  avg?: SpatialRefSysAvgOrderBy | null;

  count?: OrderBy | null;

  max?: SpatialRefSysMaxOrderBy | null;

  min?: SpatialRefSysMinOrderBy | null;

  stddev?: SpatialRefSysStddevOrderBy | null;

  stddev_pop?: SpatialRefSysStddevPopOrderBy | null;

  stddev_samp?: SpatialRefSysStddevSampOrderBy | null;

  sum?: SpatialRefSysSumOrderBy | null;

  var_pop?: SpatialRefSysVarPopOrderBy | null;

  var_samp?: SpatialRefSysVarSampOrderBy | null;

  variance?: SpatialRefSysVarianceOrderBy | null;
}
/** order by avg() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysAvgOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by max() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysMaxOrderBy {
  auth_name?: OrderBy | null;

  auth_srid?: OrderBy | null;

  proj4text?: OrderBy | null;

  srid?: OrderBy | null;

  srtext?: OrderBy | null;
}
/** order by min() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysMinOrderBy {
  auth_name?: OrderBy | null;

  auth_srid?: OrderBy | null;

  proj4text?: OrderBy | null;

  srid?: OrderBy | null;

  srtext?: OrderBy | null;
}
/** order by stddev() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysStddevOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysStddevPopOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysStddevSampOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by sum() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysSumOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_pop() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysVarPopOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_samp() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysVarSampOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by variance() on columns of table "spatial_ref_sys" */
export interface SpatialRefSysVarianceOrderBy {
  auth_srid?: OrderBy | null;

  srid?: OrderBy | null;
}
/** input type for inserting array relation for remote table "spatial_ref_sys" */
export interface SpatialRefSysArrRelInsertInput {
  data: SpatialRefSysInsertInput[];

  on_conflict?: SpatialRefSysOnConflict | null;
}
/** input type for inserting object relation for remote table "spatial_ref_sys" */
export interface SpatialRefSysObjRelInsertInput {
  data: SpatialRefSysInsertInput;

  on_conflict?: SpatialRefSysOnConflict | null;
}
/** input type for inserting object relation for remote table "topology.layer" */
export interface TopologyLayerObjRelInsertInput {
  data: TopologyLayerInsertInput;

  on_conflict?: TopologyLayerOnConflict | null;
}
/** order by aggregate values of table "topology.topology" */
export interface TopologyTopologyAggregateOrderBy {
  avg?: TopologyTopologyAvgOrderBy | null;

  count?: OrderBy | null;

  max?: TopologyTopologyMaxOrderBy | null;

  min?: TopologyTopologyMinOrderBy | null;

  stddev?: TopologyTopologyStddevOrderBy | null;

  stddev_pop?: TopologyTopologyStddevPopOrderBy | null;

  stddev_samp?: TopologyTopologyStddevSampOrderBy | null;

  sum?: TopologyTopologySumOrderBy | null;

  var_pop?: TopologyTopologyVarPopOrderBy | null;

  var_samp?: TopologyTopologyVarSampOrderBy | null;

  variance?: TopologyTopologyVarianceOrderBy | null;
}
/** order by avg() on columns of table "topology.topology" */
export interface TopologyTopologyAvgOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by max() on columns of table "topology.topology" */
export interface TopologyTopologyMaxOrderBy {
  id?: OrderBy | null;

  name?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by min() on columns of table "topology.topology" */
export interface TopologyTopologyMinOrderBy {
  id?: OrderBy | null;

  name?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev() on columns of table "topology.topology" */
export interface TopologyTopologyStddevOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_pop() on columns of table "topology.topology" */
export interface TopologyTopologyStddevPopOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by stddev_samp() on columns of table "topology.topology" */
export interface TopologyTopologyStddevSampOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by sum() on columns of table "topology.topology" */
export interface TopologyTopologySumOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_pop() on columns of table "topology.topology" */
export interface TopologyTopologyVarPopOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by var_samp() on columns of table "topology.topology" */
export interface TopologyTopologyVarSampOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** order by variance() on columns of table "topology.topology" */
export interface TopologyTopologyVarianceOrderBy {
  id?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** input type for inserting array relation for remote table "topology.topology" */
export interface TopologyTopologyArrRelInsertInput {
  data: TopologyTopologyInsertInput[];

  on_conflict?: TopologyTopologyOnConflict | null;
}

export enum Comparator {
  Eq = "EQ",
  Gt = "GT",
  Gte = "GTE",
  Lt = "LT",
  Lte = "LTE"
}
/** select columns of table "geography_columns" */
export enum GeographyColumnsSelectColumn {
  CoordDimension = "coord_dimension",
  FGeographyColumn = "f_geography_column",
  FTableCatalog = "f_table_catalog",
  FTableName = "f_table_name",
  FTableSchema = "f_table_schema",
  Srid = "srid",
  Type = "type"
}
/** column ordering options */
export enum OrderBy {
  Asc = "asc",
  AscNullsFirst = "asc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  Desc = "desc",
  DescNullsFirst = "desc_nulls_first",
  DescNullsLast = "desc_nulls_last"
}
/** select columns of table "geometry_columns" */
export enum GeometryColumnsSelectColumn {
  CoordDimension = "coord_dimension",
  FGeometryColumn = "f_geometry_column",
  FTableCatalog = "f_table_catalog",
  FTableName = "f_table_name",
  FTableSchema = "f_table_schema",
  Srid = "srid",
  Type = "type"
}
/** select columns of table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidSelectColumn {
  BlockNumber = "block_number",
  Txid = "txid"
}
/** select columns of table "kmeal._index_state" */
export enum KmealIndexStateSelectColumn {
  BlockHash = "block_hash",
  BlockNumber = "block_number",
  Id = "id",
  IsReplay = "is_replay"
}
/** select columns of table "kmeal.account" */
export enum KmealAccountSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  AccountType = "account_type",
  Balance = "balance",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Owner = "owner"
}
/** select columns of table "kmeal.dporder" */
export enum KmealDporderSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  BidPrice = "bid_price",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  DporderId = "dporder_id",
  Instructions = "instructions",
  ListingId = "listing_id",
  OrderId = "order_id",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.item_section" */
export enum KmealItemSectionSelectColumn {
  ItemId = "item_id",
  SectionId = "section_id",
  SortOrder = "sort_order"
}
/** select columns of table "kmeal.menu_book_section" */
export enum KmealMenuBookSectionSelectColumn {
  MenuBookId = "menu_book_id",
  SectionId = "section_id",
  SectionName = "section_name",
  SortOrder = "sort_order"
}
/** select columns of table "kmeal.item" */
export enum KmealItemSelectColumn {
  CookingTime = "cooking_time",
  Description = "description",
  ItemId = "item_id",
  ItemName = "item_name",
  Photo = "photo",
  RestaurantId = "restaurant_id",
  SortOrder = "sort_order",
  SpicyLevel = "spicy_level",
  Vegetarian = "vegetarian"
}
/** select columns of table "kmeal.listing" */
export enum KmealListingSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  EndDate = "end_date",
  EndTime = "end_time",
  Isactive = "isactive",
  Isrecurring = "isrecurring",
  ItemId = "item_id",
  ListPrice = "list_price",
  ListType = "list_type",
  ListingId = "listing_id",
  MinPrice = "min_price",
  Quantity = "quantity",
  RestaurantId = "restaurant_id",
  SlidingRate = "sliding_rate",
  StartDate = "start_date",
  StartTime = "start_time"
}
/** select columns of table "kmeal.menu_book" */
export enum KmealMenuBookSelectColumn {
  MenuBook = "menu_book",
  MenuBookId = "menu_book_id",
  RestaurantId = "restaurant_id",
  SortOrder = "sort_order"
}
/** select columns of table "kmeal.order" */
export enum KmealOrderSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Instructions = "instructions",
  OrderId = "order_id",
  Price = "price",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.order_detail" */
export enum KmealOrderDetailSelectColumn {
  Instructions = "instructions",
  ListingId = "listing_id",
  ListingType = "listing_type",
  OrderId = "order_id",
  OrderedPrice = "ordered_price",
  Qty = "qty"
}
/** select columns of table "kmeal.order_status" */
export enum KmealOrderStatusSelectColumn {
  CreatedAt = "created_at",
  OrderId = "order_id",
  OrderStatus = "order_status"
}
/** select columns of table "kmeal.payment" */
export enum KmealPaymentSelectColumn {
  OrderId = "order_id",
  PaymentId = "payment_id",
  PaymentStatus = "payment_status"
}
/** select columns of table "kmeal.restaurant_categories" */
export enum KmealRestaurantCategoriesSelectColumn {
  Category = "category",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.restaurant_nearby" */
export enum KmealRestaurantNearbySelectColumn {
  Distance = "distance",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.item_types" */
export enum KmealItemTypesSelectColumn {
  ItemId = "item_id",
  ItemType = "item_type"
}
/** select columns of table "kmeal.listing_item_sides" */
export enum KmealListingItemSidesSelectColumn {
  Group = "group",
  ItemName = "item_name",
  ListPrice = "list_price",
  ListingId = "listing_id",
  MaxSelection = "max_selection"
}
/** select columns of table "kmeal.restaurant" */
export enum KmealRestaurantSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Address = "address",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  Isactive = "isactive",
  Latitude = "latitude",
  Location = "location",
  Logo = "logo",
  Longitude = "longitude",
  Name = "name",
  Owner = "owner",
  Phone = "phone",
  Rating = "rating",
  RestaurantId = "restaurant_id",
  Timeofoperation = "timeofoperation",
  YelpId = "yelp_id"
}
/** select columns of table "kmeal.categories" */
export enum KmealCategoriesSelectColumn {
  Alias = "alias",
  Title = "title"
}
/** select columns of table "kmeal.credit_card_info" */
export enum KmealCreditCardInfoSelectColumn {
  AddressLine_1 = "address_line_1",
  AddressLine_2 = "address_line_2",
  CardCvv = "card_cvv",
  CardHolder = "card_holder",
  CardNum = "card_num",
  CardType = "card_type",
  City = "city",
  Country = "country",
  ExpDate = "exp_date",
  PostalCode = "postal_code",
  Username = "username"
}
/** select columns of table "kmeal.restaurant_location" */
export enum KmealRestaurantLocationSelectColumn {
  Address = "address",
  Description = "description",
  Distance = "distance",
  Location = "location",
  Logo = "logo",
  Name = "name",
  Owner = "owner",
  Phone = "phone"
}
/** select columns of table "raster_columns" */
export enum RasterColumnsSelectColumn {
  BlocksizeX = "blocksize_x",
  BlocksizeY = "blocksize_y",
  Extent = "extent",
  NodataValues = "nodata_values",
  NumBands = "num_bands",
  OutDb = "out_db",
  PixelTypes = "pixel_types",
  RRasterColumn = "r_raster_column",
  RTableCatalog = "r_table_catalog",
  RTableName = "r_table_name",
  RTableSchema = "r_table_schema",
  RegularBlocking = "regular_blocking",
  SameAlignment = "same_alignment",
  ScaleX = "scale_x",
  ScaleY = "scale_y",
  SpatialIndex = "spatial_index",
  Srid = "srid"
}
/** select columns of table "raster_overviews" */
export enum RasterOverviewsSelectColumn {
  ORasterColumn = "o_raster_column",
  OTableCatalog = "o_table_catalog",
  OTableName = "o_table_name",
  OTableSchema = "o_table_schema",
  OverviewFactor = "overview_factor",
  RRasterColumn = "r_raster_column",
  RTableCatalog = "r_table_catalog",
  RTableName = "r_table_name",
  RTableSchema = "r_table_schema"
}
/** Use this to rebuild the execution tree, using the `nodeos` dispatch algorithm ofnotifications, actions and context-free actions.This is similar to what you would have gotten in `nodeos` prior to version 1.8.0. */
export enum ActionSortOrder {
  Creation = "CREATION",
  Execution = "EXECUTION"
}
/** New paying account.  This is null in the case of a deletion. */
export enum Uint64Encoding {
  Decimal = "DECIMAL",
  Hexadecimal = "HEXADECIMAL",
  Name = "NAME",
  Symbol = "SYMBOL",
  SymbolCode = "SYMBOL_CODE"
}
/** New paying account.  This is null in the case of a deletion. */
export enum DbOperation {
  Ins = "INS",
  Rem = "REM",
  Upd = "UPD"
}
/** The deferred transaction payload itself. */
export enum DtrxOperation {
  Cancel = "CANCEL",
  Create = "CREATE",
  ModifyCancel = "MODIFY_CANCEL",
  ModifyCreate = "MODIFY_CREATE",
  PushCreate = "PUSH_CREATE"
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
/** Creation or deletion of a table */
export enum TableOperation {
  Ins = "INS",
  Rem = "REM"
}
/** New paying account.  This is null in the case of a deletion. */
export enum TransactionStatus {
  Delayed = "DELAYED",
  Executed = "EXECUTED",
  Expired = "EXPIRED",
  HardFail = "HARD_FAIL",
  SoftFail = "SOFT_FAIL",
  Unknown = "UNKNOWN"
}
/** select columns of table "spatial_ref_sys" */
export enum SpatialRefSysSelectColumn {
  AuthName = "auth_name",
  AuthSrid = "auth_srid",
  Proj4text = "proj4text",
  Srid = "srid",
  Srtext = "srtext"
}
/** select columns of table "topology.layer" */
export enum TopologyLayerSelectColumn {
  ChildId = "child_id",
  FeatureColumn = "feature_column",
  FeatureType = "feature_type",
  LayerId = "layer_id",
  Level = "level",
  SchemaName = "schema_name",
  TableName = "table_name",
  TopologyId = "topology_id"
}
/** select columns of table "topology.topology" */
export enum TopologyTopologySelectColumn {
  Hasz = "hasz",
  Id = "id",
  Name = "name",
  Precision = "precision",
  Srid = "srid"
}
/** unique or primary key constraints on table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidConstraint {
  _BlockNumberTxidPkey = "_block_number_txid_pkey"
}
/** update columns of table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidUpdateColumn {
  BlockNumber = "block_number",
  Txid = "txid"
}
/** unique or primary key constraints on table "kmeal._index_state" */
export enum KmealIndexStateConstraint {
  _IndexStatePkey = "_index_state_pkey"
}
/** update columns of table "kmeal._index_state" */
export enum KmealIndexStateUpdateColumn {
  BlockHash = "block_hash",
  BlockNumber = "block_number",
  Id = "id",
  IsReplay = "is_replay"
}
/** unique or primary key constraints on table "kmeal.account" */
export enum KmealAccountConstraint {
  AccountPkey = "account_pkey"
}
/** update columns of table "kmeal.account" */
export enum KmealAccountUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  AccountType = "account_type",
  Balance = "balance",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Owner = "owner"
}
/** unique or primary key constraints on table "kmeal.menu_book_section" */
export enum KmealMenuBookSectionConstraint {
  MenuBookSectionPkey = "menu_book_section_pkey"
}
/** update columns of table "kmeal.menu_book_section" */
export enum KmealMenuBookSectionUpdateColumn {
  MenuBookId = "menu_book_id",
  SectionId = "section_id",
  SectionName = "section_name",
  SortOrder = "sort_order"
}
/** unique or primary key constraints on table "kmeal.item" */
export enum KmealItemConstraint {
  ItemPkey = "item_pkey"
}
/** update columns of table "kmeal.item" */
export enum KmealItemUpdateColumn {
  CookingTime = "cooking_time",
  Description = "description",
  ItemId = "item_id",
  ItemName = "item_name",
  Photo = "photo",
  RestaurantId = "restaurant_id",
  SortOrder = "sort_order",
  SpicyLevel = "spicy_level",
  Vegetarian = "vegetarian"
}
/** unique or primary key constraints on table "kmeal.listing" */
export enum KmealListingConstraint {
  ListingPkey = "listing_pkey"
}
/** update columns of table "kmeal.listing" */
export enum KmealListingUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  EndDate = "end_date",
  EndTime = "end_time",
  Isactive = "isactive",
  Isrecurring = "isrecurring",
  ItemId = "item_id",
  ListPrice = "list_price",
  ListType = "list_type",
  ListingId = "listing_id",
  MinPrice = "min_price",
  Quantity = "quantity",
  RestaurantId = "restaurant_id",
  SlidingRate = "sliding_rate",
  StartDate = "start_date",
  StartTime = "start_time"
}
/** unique or primary key constraints on table "kmeal.menu_book" */
export enum KmealMenuBookConstraint {
  MenuBookPkey = "menu_book_pkey"
}
/** update columns of table "kmeal.menu_book" */
export enum KmealMenuBookUpdateColumn {
  MenuBook = "menu_book",
  MenuBookId = "menu_book_id",
  RestaurantId = "restaurant_id",
  SortOrder = "sort_order"
}
/** unique or primary key constraints on table "kmeal.order" */
export enum KmealOrderConstraint {
  OrderPkey = "order_pkey"
}
/** update columns of table "kmeal.order" */
export enum KmealOrderUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Instructions = "instructions",
  OrderId = "order_id",
  Price = "price",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.order_status" */
export enum KmealOrderStatusConstraint {
  OrderStatusPkey = "order_status_pkey"
}
/** update columns of table "kmeal.order_status" */
export enum KmealOrderStatusUpdateColumn {
  CreatedAt = "created_at",
  OrderId = "order_id",
  OrderStatus = "order_status"
}
/** unique or primary key constraints on table "kmeal.payment" */
export enum KmealPaymentConstraint {
  PaymentPkey = "payment_pkey"
}
/** update columns of table "kmeal.payment" */
export enum KmealPaymentUpdateColumn {
  OrderId = "order_id",
  PaymentId = "payment_id",
  PaymentStatus = "payment_status"
}
/** unique or primary key constraints on table "kmeal.restaurant_nearby" */
export enum KmealRestaurantNearbyConstraint {
  RestaurantNearbyPkey = "restaurant_nearby_pkey"
}
/** update columns of table "kmeal.restaurant_nearby" */
export enum KmealRestaurantNearbyUpdateColumn {
  Distance = "distance",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.restaurant" */
export enum KmealRestaurantConstraint {
  RestaurantPkey = "restaurant_pkey"
}
/** update columns of table "kmeal.restaurant" */
export enum KmealRestaurantUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Address = "address",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  Isactive = "isactive",
  Latitude = "latitude",
  Location = "location",
  Logo = "logo",
  Longitude = "longitude",
  Name = "name",
  Owner = "owner",
  Phone = "phone",
  Rating = "rating",
  RestaurantId = "restaurant_id",
  Timeofoperation = "timeofoperation",
  YelpId = "yelp_id"
}
/** unique or primary key constraints on table "kmeal.item_section" */
export enum KmealItemSectionConstraint {
  ItemSectionPkey = "item_section_pkey"
}
/** update columns of table "kmeal.item_section" */
export enum KmealItemSectionUpdateColumn {
  ItemId = "item_id",
  SectionId = "section_id",
  SortOrder = "sort_order"
}
/** unique or primary key constraints on table "kmeal.dporder" */
export enum KmealDporderConstraint {
  DporderPkey = "dporder_pkey"
}
/** update columns of table "kmeal.dporder" */
export enum KmealDporderUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  BidPrice = "bid_price",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  DporderId = "dporder_id",
  Instructions = "instructions",
  ListingId = "listing_id",
  OrderId = "order_id",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.categories" */
export enum KmealCategoriesConstraint {
  CategoriesPkey = "categories_pkey"
}
/** update columns of table "kmeal.categories" */
export enum KmealCategoriesUpdateColumn {
  Alias = "alias",
  Title = "title"
}
/** unique or primary key constraints on table "kmeal.credit_card_info" */
export enum KmealCreditCardInfoConstraint {
  CreditCardInfoPkey = "credit_card_info_pkey"
}
/** update columns of table "kmeal.credit_card_info" */
export enum KmealCreditCardInfoUpdateColumn {
  AddressLine_1 = "address_line_1",
  AddressLine_2 = "address_line_2",
  CardCvv = "card_cvv",
  CardHolder = "card_holder",
  CardNum = "card_num",
  CardType = "card_type",
  City = "city",
  Country = "country",
  ExpDate = "exp_date",
  PostalCode = "postal_code",
  Username = "username"
}
/** unique or primary key constraints on table "spatial_ref_sys" */
export enum SpatialRefSysConstraint {
  SpatialRefSysPkey = "spatial_ref_sys_pkey"
}
/** update columns of table "spatial_ref_sys" */
export enum SpatialRefSysUpdateColumn {
  AuthName = "auth_name",
  AuthSrid = "auth_srid",
  Proj4text = "proj4text",
  Srid = "srid",
  Srtext = "srtext"
}
/** unique or primary key constraints on table "topology.layer" */
export enum TopologyLayerConstraint {
  LayerPkey = "layer_pkey",
  LayerSchemaNameTableNameFeatureColumnKey = "layer_schema_name_table_name_feature_column_key"
}
/** update columns of table "topology.layer" */
export enum TopologyLayerUpdateColumn {
  ChildId = "child_id",
  FeatureColumn = "feature_column",
  FeatureType = "feature_type",
  LayerId = "layer_id",
  Level = "level",
  SchemaName = "schema_name",
  TableName = "table_name",
  TopologyId = "topology_id"
}
/** unique or primary key constraints on table "topology.topology" */
export enum TopologyTopologyConstraint {
  TopologyNameKey = "topology_name_key",
  TopologyPkey = "topology_pkey"
}
/** update columns of table "topology.topology" */
export enum TopologyTopologyUpdateColumn {
  Hasz = "hasz",
  Id = "id",
  Name = "name",
  Precision = "precision",
  Srid = "srid"
}
/** conflict action */
export enum ConflictAction {
  Ignore = "ignore",
  Update = "update"
}

/** Block number in the chain */
export type Time = any;

/** Block number in the chain */
export type Uint32 = any;

export type Name = any;

export type Bigint = any;

export type Timestamp = any;

export type Bpchar = any;

export type Numeric = any;

export type Date = any;

export type Float8 = any;

export type Geography = any;

export type Geometry = any;

export type _Float8 = any;

export type _Bool = any;

export type _Text = any;

/** Block number in the chain */
export type Int64 = any;

/** Block number in the chain */
export type Json = any;

/** Block number in the chain */
export type Uint64 = any;
