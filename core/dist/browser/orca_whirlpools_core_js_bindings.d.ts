/* tslint:disable */
/* eslint-disable */
/**
 * Get the first unoccupied position in a bundle
 *
 * # Arguments
 * * `bundle` - The bundle to check
 *
 * # Returns
 * * `u32` - The first unoccupied position (None if full)
 */
export function firstUnoccupiedPositionInBundle(bitmap: Uint8Array): number | undefined;
/**
 * Check whether a position bundle is full
 * A position bundle can contain 256 positions
 *
 * # Arguments
 * * `bundle` - The bundle to check
 *
 * # Returns
 * * `bool` - Whether the bundle is full
 */
export function isPositionBundleFull(bitmap: Uint8Array): boolean;
/**
 * Check whether a position bundle is empty
 *
 * # Arguments
 * * `bundle` - The bundle to check
 *
 * # Returns
 * * `bool` - Whether the bundle is empty
 */
export function isPositionBundleEmpty(bitmap: Uint8Array): boolean;
/**
 * Get the first tick index in the tick array that contains the specified tick index.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A i32 integer representing the first tick index in the tick array
 */
export function getTickArrayStartTickIndex(tick_index: number, tick_spacing: number): number;
/**
 * Derive the sqrt-price from a tick index. The precision of this method is only guarranted
 * if tick is within the bounds of {max, min} tick-index.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 *
 * # Returns
 * - `Ok`: A u128 Q32.64 representing the sqrt_price
 */
export function tickIndexToSqrtPrice(tick_index: number): bigint;
/**
 * Derive the tick index from a sqrt price. The precision of this method is only guarranted
 * if tick is within the bounds of {max, min} tick-index.
 *
 * # Parameters
 * - `sqrt_price` - A u128 integer representing the sqrt price
 *
 * # Returns
 * - `Ok`: A i32 integer representing the tick integer
 */
export function sqrtPriceToTickIndex(sqrt_price: bigint): number;
/**
 * Get the initializable tick index.
 * If the tick index is already initializable, it is returned as is.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 * - `tick_spacing` - A i32 integer representing the tick spacing
 * - `round_up` - A boolean value indicating if the supplied tick index should be rounded up. None will round to the nearest.
 *
 * # Returns
 * - A i32 integer representing the previous initializable tick index
 */
export function getInitializableTickIndex(tick_index: number, tick_spacing: number, round_up?: boolean): number;
/**
 * Get the previous initializable tick index.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A i32 integer representing the previous initializable tick index
 */
export function getPrevInitializableTickIndex(tick_index: number, tick_spacing: number): number;
/**
 * Get the next initializable tick index.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A i32 integer representing the next initializable tick index
 */
export function getNextInitializableTickIndex(tick_index: number, tick_spacing: number): number;
/**
 * Check if a tick is in-bounds.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 *
 * # Returns
 * - A boolean value indicating if the tick is in-bounds
 */
export function isTickIndexInBounds(tick_index: number): boolean;
/**
 * Check if a tick is initializable.
 * A tick is initializable if it is divisible by the tick spacing.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A boolean value indicating if the tick is initializable
 */
export function isTickInitializable(tick_index: number, tick_spacing: number): boolean;
/**
 * Get the tick index for the inverse of the price that this tick represents.
 * Eg: Consider tick i where Pb/Pa = 1.0001 ^ i
 * inverse of this, i.e. Pa/Pb = 1 / (1.0001 ^ i) = 1.0001^-i
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 *
 * # Returns
 * - A i32 integer representing the tick index for the inverse of the price
 */
export function invertTickIndex(tick_index: number): number;
/**
 * Get the sqrt price for the inverse of the price that this tick represents.
 * Because converting to a tick index and then back to a sqrt price is lossy,
 * this function is clamped to the nearest tick index.
 *
 * # Parameters
 * - `sqrt_price` - A u128 integer representing the sqrt price
 *
 * # Returns
 * - A u128 integer representing the sqrt price for the inverse of the price
 */
export function invertSqrtPrice(sqrt_price: bigint): bigint;
/**
 * Get the minimum and maximum tick index that can be initialized.
 *
 * # Parameters
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A TickRange struct containing the lower and upper tick index
 */
export function getFullRangeTickIndexes(tick_spacing: number): TickRange;
/**
 * Order tick indexes in ascending order.
 * If the lower tick index is greater than the upper tick index, the indexes are swapped.
 * This is useful for ensuring that the lower tick index is always less than the upper tick index.
 *
 * # Parameters
 * - `tick_index_1` - A i32 integer representing the first tick index
 * - `tick_index_2` - A i32 integer representing the second tick index
 *
 * # Returns
 * - A TickRange struct containing the lower and upper tick index
 */
export function orderTickIndexes(tick_index_1: number, tick_index_2: number): TickRange;
/**
 * Check if a whirlpool is a full-range only pool.
 *
 * # Parameters
 * - `tick_spacing` - A u16 integer representing the tick spacing
 *
 * # Returns
 * - A boolean value indicating if the whirlpool is a full-range only pool
 */
export function isFullRangeOnly(tick_spacing: number): boolean;
/**
 * Get the index of a tick in a tick array.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick index
 * - `tick_array_start_index` - A i32 integer representing the start tick index of the tick array
 * - `tick_spacing` - A u16 integer representing the tick spacing
 *
 * # Returns
 * - A u32 integer representing the tick index in the tick array
 */
export function getTickIndexInArray(tick_index: number, tick_array_start_index: number, tick_spacing: number): number;
export function _POSITION_BUNDLE_SIZE(): number;
export function _TICK_ARRAY_NOT_EVENLY_SPACED(): number;
export function _TICK_INDEX_OUT_OF_BOUNDS(): number;
export function _INVALID_TICK_INDEX(): number;
export function _ARITHMETIC_OVERFLOW(): number;
export function _AMOUNT_EXCEEDS_MAX_U64(): number;
export function _SQRT_PRICE_OUT_OF_BOUNDS(): number;
export function _TICK_SEQUENCE_EMPTY(): number;
export function _SQRT_PRICE_LIMIT_OUT_OF_BOUNDS(): number;
export function _INVALID_SQRT_PRICE_LIMIT_DIRECTION(): number;
export function _ZERO_TRADABLE_AMOUNT(): number;
export function _INVALID_TIMESTAMP(): number;
export function _INVALID_TRANSFER_FEE(): number;
export function _INVALID_SLIPPAGE_TOLERANCE(): number;
export function _TICK_INDEX_NOT_IN_ARRAY(): number;
export function _NUM_REWARDS(): number;
export function _FEE_RATE_DENOMINATOR(): number;
export function _TICK_ARRAY_SIZE(): number;
export function _FULL_RANGE_ONLY_TICK_SPACING_THRESHOLD(): number;
export function _MIN_TICK_INDEX(): number;
export function _MAX_TICK_INDEX(): number;
/**
 * Check if a position is in range.
 * When a position is in range it is earning fees and rewards
 *
 * # Parameters
 * - `sqrt_price` - A u128 integer representing the sqrt price of the pool
 * - `tick_index_1` - A i32 integer representing the first tick index of the position
 * - `tick_index_2` - A i32 integer representing the second tick index of the position
 *
 * # Returns
 * - A boolean value indicating if the position is in range
 */
export function isPositionInRange(current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number): boolean;
/**
 * Calculate the status of a position
 * The status can be one of three values:
 * - InRange: The position is in range
 * - BelowRange: The position is below the range
 * - AboveRange: The position is above the range
 *
 * # Parameters
 * - `sqrt_price` - A u128 integer representing the sqrt price of the pool
 * - `tick_index_1` - A i32 integer representing the first tick index of the position
 * - `tick_index_2` - A i32 integer representing the second tick index of the position
 *
 * # Returns
 * - A PositionStatus enum value indicating the status of the position
 */
export function positionStatus(current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number): PositionStatus;
/**
 * Calculate the token_a / token_b ratio of a (ficticious) position
 *
 * # Parameters
 * - `sqrt_price` - A u128 integer representing the sqrt price of the pool
 * - `tick_index_1` - A i32 integer representing the first tick index of the position
 * - `tick_index_2` - A i32 integer representing the second tick index of the position
 *
 * # Returns
 * - A PositionRatio struct containing the ratio of token_a and token_b
 */
export function positionRatio(current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number): PositionRatio;
/**
 * Convert a price into a sqrt priceX64
 * IMPORTANT: floating point operations can reduce the precision of the result.
 * Make sure to do these operations last and not to use the result for further calculations.
 *
 * # Parameters
 * * `price` - The price to convert
 * * `decimals_a` - The number of decimals of the base token
 * * `decimals_b` - The number of decimals of the quote token
 *
 * # Returns
 * * `u128` - The sqrt priceX64
 */
export function priceToSqrtPrice(price: number, decimals_a: number, decimals_b: number): bigint;
/**
 * Convert a sqrt priceX64 into a tick index
 * IMPORTANT: floating point operations can reduce the precision of the result.
 * Make sure to do these operations last and not to use the result for further calculations.
 *
 * # Parameters
 * * `sqrt_price` - The sqrt priceX64 to convert
 * * `decimals_a` - The number of decimals of the base token
 * * `decimals_b` - The number of decimals of the quote token
 *
 * # Returns
 * * `f64` - The decimal price
 */
export function sqrtPriceToPrice(sqrt_price: bigint, decimals_a: number, decimals_b: number): number;
/**
 * Invert a price
 * IMPORTANT: floating point operations can reduce the precision of the result.
 * Make sure to do these operations last and not to use the result for further calculations.
 *
 * # Parameters
 * * `price` - The price to invert
 * * `decimals_a` - The number of decimals of the base token
 * * `decimals_b` - The number of decimals of the quote token
 *
 * # Returns
 * * `f64` - The inverted price
 */
export function invertPrice(price: number, decimals_a: number, decimals_b: number): number;
/**
 * Convert a tick index into a price
 * IMPORTANT: floating point operations can reduce the precision of the result.
 * Make sure to do these operations last and not to use the result for further calculations.
 *
 * # Parameters
 * * `tick_index` - The tick index to convert
 * * `decimals_a` - The number of decimals of the base token
 * * `decimals_b` - The number of decimals of the quote token
 *
 * # Returns
 * * `f64` - The decimal price
 */
export function tickIndexToPrice(tick_index: number, decimals_a: number, decimals_b: number): number;
/**
 * Convert a price into a tick index
 * IMPORTANT: floating point operations can reduce the precision of the result.
 * Make sure to do these operations last and not to use the result for further calculations.
 *
 * # Parameters
 * * `price` - The price to convert
 * * `decimals_a` - The number of decimals of the base token
 * * `decimals_b` - The number of decimals of the quote token
 *
 * # Returns
 * * `i32` - The tick index
 */
export function priceToTickIndex(price: number, decimals_a: number, decimals_b: number): number;
/**
 * Calculate the amount A delta between two sqrt_prices
 *
 * # Parameters
 * - `sqrt_price_1`: The first square root price
 * - `sqrt_price_2`: The second square root price
 * - `liquidity`: The liquidity
 * - `round_up`: Whether to round up or not
 *
 * # Returns
 * - `u64`: The amount delta
 */
export function tryGetAmountDeltaA(sqrt_price_1: bigint, sqrt_price_2: bigint, liquidity: bigint, round_up: boolean): bigint;
/**
 * Calculate the amount B delta between two sqrt_prices
 *
 * # Parameters
 * - `sqrt_price_1`: The first square root price
 * - `sqrt_price_2`: The second square root price
 * - `liquidity`: The liquidity
 * - `round_up`: Whether to round up or not
 *
 * # Returns
 * - `u64`: The amount delta
 */
export function tryGetAmountDeltaB(sqrt_price_1: bigint, sqrt_price_2: bigint, liquidity: bigint, round_up: boolean): bigint;
/**
 * Calculate the next square root price
 *
 * # Parameters
 * - `current_sqrt_price`: The current square root price
 * - `current_liquidity`: The current liquidity
 * - `amount`: The amount
 * - `specified_input`: Whether the input is specified
 *
 * # Returns
 * - `u128`: The next square root price
 */
export function tryGetNextSqrtPriceFromA(current_sqrt_price: bigint, current_liquidity: bigint, amount: bigint, specified_input: boolean): bigint;
/**
 * Calculate the next square root price
 *
 * # Parameters
 * - `current_sqrt_price`: The current square root price
 * - `current_liquidity`: The current liquidity
 * - `amount`: The amount
 * - `specified_input`: Whether the input is specified
 *
 * # Returns
 * - `u128`: The next square root price
 */
export function tryGetNextSqrtPriceFromB(current_sqrt_price: bigint, current_liquidity: bigint, amount: bigint, specified_input: boolean): bigint;
/**
 * Apply a transfer fee to an amount
 * e.g. You send 10000 amount with 100 fee rate. The fee amount will be 100.
 * So the amount after fee will be 9900.
 *
 * # Parameters
 * - `amount`: The amount to apply the fee to
 * - `transfer_fee`: The transfer fee to apply
 *
 * # Returns
 * - `u64`: The amount after the fee has been applied
 */
export function tryApplyTransferFee(amount: bigint, transfer_fee: TransferFee): bigint;
/**
 * Reverse the application of a transfer fee to an amount
 * e.g. You received 9900 amount with 100 fee rate. The fee amount will be 100.
 * So the amount before fee will be 10000.
 *
 * # Parameters
 * - `amount`: The amount to reverse the fee from
 * - `transfer_fee`: The transfer fee to reverse
 *
 * # Returns
 * - `u64`: The amount before the fee has been applied
 */
export function tryReverseApplyTransferFee(amount: bigint, transfer_fee: TransferFee): bigint;
/**
 * Get the maximum amount with a slippage tolerance
 * e.g. Your estimated amount you send is 10000 with 100 slippage tolerance. The max you send will be 10100.
 *
 * # Parameters
 * - `amount`: The amount to apply the fee to
 * - `slippage_tolerance_bps`: The slippage tolerance in bps (should be in range 0..BPS_DENOMINATOR)
 *
 * # Returns
 * - `u64`: The maximum amount
 */
export function tryGetMaxAmountWithSlippageTolerance(amount: bigint, slippage_tolerance_bps: number): bigint;
/**
 * Get the minimum amount with a slippage tolerance
 * e.g. Your estimated amount you receive is 10000 with 100 slippage tolerance. The min amount you receive will be 9900.
 *
 * # Parameters
 * - `amount`: The amount to apply the fee to
 * - `slippage_tolerance_bps`: The slippage tolerance in bps (should be in range 0..BPS_DENOMINATOR)
 *
 * # Returns
 * - `u64`: The minimum amount
 */
export function tryGetMinAmountWithSlippageTolerance(amount: bigint, slippage_tolerance_bps: number): bigint;
/**
 * Apply a swap fee to an amount
 * e.g. You send 10000 amount with 10000 fee rate. The fee amount will be 100.
 * So the amount after fee will be 9900.
 *
 * # Parameters
 * - `amount`: The amount to apply the fee to
 * - `fee_rate`: The fee rate to apply denominated in 1e6
 *
 * # Returns
 * - `u64`: The amount after the fee has been applied
 */
export function tryApplySwapFee(amount: bigint, fee_rate: number): bigint;
/**
 * Reverse the application of a swap fee to an amount
 * e.g. You received 9900 amount with 10000 fee rate. The fee amount will be 100.
 * So the amount before fee will be 10000.
 *
 * # Parameters
 * - `amount`: The amount to reverse the fee from
 * - `fee_rate`: The fee rate to reverse denominated in 1e6
 *
 * # Returns
 * - `u64`: The amount before the fee has been applied
 */
export function tryReverseApplySwapFee(amount: bigint, fee_rate: number): bigint;
/**
 * Computes the exact input or output amount for a swap transaction.
 *
 * # Arguments
 * - `token_in`: The input token amount.
 * - `specified_token_a`: If `true`, the input token is token A. Otherwise, it is token B.
 * - `slippage_tolerance`: The slippage tolerance in basis points.
 * - `whirlpool`: The whirlpool state.
 * - `tick_arrays`: The tick arrays needed for the swap.
 * - `transfer_fee_a`: The transfer fee for token A.
 * - `transfer_fee_b`: The transfer fee for token B.
 *
 * # Returns
 * The exact input or output amount for the swap transaction.
 */
export function swapQuoteByInputToken(token_in: bigint, specified_token_a: boolean, slippage_tolerance_bps: number, whirlpool: WhirlpoolFacade, tick_arrays: TickArrayFacade[], transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): ExactInSwapQuote;
/**
 * Computes the exact input or output amount for a swap transaction.
 *
 * # Arguments
 * - `token_out`: The output token amount.
 * - `specified_token_a`: If `true`, the output token is token A. Otherwise, it is token B.
 * - `slippage_tolerance`: The slippage tolerance in basis points.
 * - `whirlpool`: The whirlpool state.
 * - `tick_arrays`: The tick arrays needed for the swap.
 * - `transfer_fee_a`: The transfer fee for token A.
 * - `transfer_fee_b`: The transfer fee for token B.
 *
 * # Returns
 * The exact input or output amount for the swap transaction.
 */
export function swapQuoteByOutputToken(token_out: bigint, specified_token_a: boolean, slippage_tolerance_bps: number, whirlpool: WhirlpoolFacade, tick_arrays: TickArrayFacade[], transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): ExactOutSwapQuote;
/**
 * Calculate fees owed for a position
 *
 * # Paramters
 * - `whirlpool`: The whirlpool state
 * - `position`: The position state
 * - `tick_lower`: The lower tick state
 * - `tick_upper`: The upper tick state
 * - `transfer_fee_a`: The transfer fee for token A
 * - `transfer_fee_b`: The transfer fee for token B
 *
 * # Returns
 * - `CollectFeesQuote`: The fees owed for token A and token B
 */
export function collectFeesQuote(whirlpool: WhirlpoolFacade, position: PositionFacade, tick_lower: TickFacade, tick_upper: TickFacade, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): CollectFeesQuote;
/**
 * Calculate the quote for decreasing liquidity
 *
 * # Parameters
 * - `liquidity_delta` - The amount of liquidity to decrease
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - A DecreaseLiquidityQuote struct containing the estimated token amounts
 */
export function decreaseLiquidityQuote(liquidity_delta: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): DecreaseLiquidityQuote;
/**
 * Calculate the quote for decreasing liquidity given a token a amount
 *
 * # Parameters
 * - `token_amount_a` - The amount of token a to decrease
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - A DecreaseLiquidityQuote struct containing the estimated token amounts
 */
export function decreaseLiquidityQuoteA(token_amount_a: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): DecreaseLiquidityQuote;
/**
 * Calculate the quote for decreasing liquidity given a token b amount
 *
 * # Parameters
 * - `token_amount_b` - The amount of token b to decrease
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - A DecreaseLiquidityQuote struct containing the estimated token amounts
 */
export function decreaseLiquidityQuoteB(token_amount_b: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): DecreaseLiquidityQuote;
/**
 * Calculate the quote for increasing liquidity
 *
 * # Parameters
 * - `liquidity_delta` - The amount of liquidity to increase
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - An IncreaseLiquidityQuote struct containing the estimated token amounts
 */
export function increaseLiquidityQuote(liquidity_delta: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): IncreaseLiquidityQuote;
/**
 * Calculate the quote for increasing liquidity given a token a amount
 *
 * # Parameters
 * - `token_amount_a` - The amount of token a to increase
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - An IncreaseLiquidityQuote struct containing the estimated token amounts
 */
export function increaseLiquidityQuoteA(token_amount_a: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): IncreaseLiquidityQuote;
/**
 * Calculate the quote for increasing liquidity given a token b amount
 *
 * # Parameters
 * - `token_amount_b` - The amount of token b to increase
 * - `slippage_tolerance` - The slippage tolerance in bps
 * - `current_sqrt_price` - The current sqrt price of the pool
 * - `tick_index_1` - The first tick index of the position
 * - `tick_index_2` - The second tick index of the position
 * - `transfer_fee_a` - The transfer fee for token A in bps
 * - `transfer_fee_b` - The transfer fee for token B in bps
 *
 * # Returns
 * - An IncreaseLiquidityQuote struct containing the estimated token amounts
 */
export function increaseLiquidityQuoteB(token_amount_b: bigint, slippage_tolerance_bps: number, current_sqrt_price: bigint, tick_index_1: number, tick_index_2: number, transfer_fee_a?: TransferFee, transfer_fee_b?: TransferFee): IncreaseLiquidityQuote;
/**
 * Calculate rewards owed for a position
 *
 * # Paramters
 * - `whirlpool`: The whirlpool state
 * - `position`: The position state
 * - `tick_lower`: The lower tick state
 * - `tick_upper`: The upper tick state
 * - `current_timestamp`: The current timestamp
 * - `transfer_fee_1`: The transfer fee for token 1
 * - `transfer_fee_2`: The transfer fee for token 2
 * - `transfer_fee_3`: The transfer fee for token 3
 *
 * # Returns
 * - `CollectRewardsQuote`: The rewards owed for the 3 reward tokens.
 */
export function collectRewardsQuote(whirlpool: WhirlpoolFacade, position: PositionFacade, tick_lower: TickFacade, tick_upper: TickFacade, current_timestamp: bigint, transfer_fee_1?: TransferFee, transfer_fee_2?: TransferFee, transfer_fee_3?: TransferFee): CollectRewardsQuote;
export interface ExactOutSwapQuote {
    tokenOut: bigint;
    tokenEstIn: bigint;
    tokenMaxIn: bigint;
    tradeFee: bigint;
}

export interface ExactInSwapQuote {
    tokenIn: bigint;
    tokenEstOut: bigint;
    tokenMinOut: bigint;
    tradeFee: bigint;
}

export interface WhirlpoolRewardInfoFacade {
    emissionsPerSecondX64: bigint;
    growthGlobalX64: bigint;
}

export interface WhirlpoolFacade {
    tickSpacing: number;
    feeRate: number;
    protocolFeeRate: number;
    liquidity: bigint;
    sqrtPrice: bigint;
    tickCurrentIndex: number;
    feeGrowthGlobalA: bigint;
    feeGrowthGlobalB: bigint;
    rewardLastUpdatedTimestamp: bigint;
    rewardInfos: WhirlpoolRewardInfoFacade[];
}

export interface TransferFee {
    feeBps: number;
    maxFee: bigint;
}

export interface TickArrayFacade {
    startTickIndex: number;
    ticks: TickFacade[];
}

export interface TickFacade {
    initialized: boolean;
    liquidityNet: bigint;
    liquidityGross: bigint;
    feeGrowthOutsideA: bigint;
    feeGrowthOutsideB: bigint;
    rewardGrowthsOutside: bigint[];
}

export interface TickRange {
    tickLowerIndex: number;
    tickUpperIndex: number;
}

export interface CollectRewardQuote {
    rewardsOwed: bigint;
}

export interface CollectRewardsQuote {
    rewards: CollectRewardQuote[];
}

export interface PositionRewardInfoFacade {
    growthInsideCheckpoint: bigint;
    amountOwed: bigint;
}

export interface PositionFacade {
    liquidity: bigint;
    tickLowerIndex: number;
    tickUpperIndex: number;
    feeGrowthCheckpointA: bigint;
    feeOwedA: bigint;
    feeGrowthCheckpointB: bigint;
    feeOwedB: bigint;
    rewardInfos: PositionRewardInfoFacade[];
}

export type PositionStatus = "priceInRange" | "priceBelowRange" | "priceAboveRange" | "invalid";

export interface PositionRatio {
    ratioA: number;
    ratioB: number;
}

export interface IncreaseLiquidityQuote {
    liquidityDelta: bigint;
    tokenEstA: bigint;
    tokenEstB: bigint;
    tokenMaxA: bigint;
    tokenMaxB: bigint;
}

export interface DecreaseLiquidityQuote {
    liquidityDelta: bigint;
    tokenEstA: bigint;
    tokenEstB: bigint;
    tokenMinA: bigint;
    tokenMinB: bigint;
}

export interface CollectFeesQuote {
    feeOwedA: bigint;
    feeOwedB: bigint;
}

