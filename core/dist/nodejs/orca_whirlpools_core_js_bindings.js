
let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_2.set(idx, obj);
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
 * Get the first unoccupied position in a bundle
 *
 * # Arguments
 * * `bundle` - The bundle to check
 *
 * # Returns
 * * `u32` - The first unoccupied position (None if full)
 */
module.exports.firstUnoccupiedPositionInBundle = function(bitmap) {
    const ptr0 = passArray8ToWasm0(bitmap, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.firstUnoccupiedPositionInBundle(ptr0, len0);
    return ret[0] === 0 ? undefined : ret[1] >>> 0;
};

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
module.exports.isPositionBundleFull = function(bitmap) {
    const ptr0 = passArray8ToWasm0(bitmap, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.isPositionBundleFull(ptr0, len0);
    return ret !== 0;
};

/**
 * Check whether a position bundle is empty
 *
 * # Arguments
 * * `bundle` - The bundle to check
 *
 * # Returns
 * * `bool` - Whether the bundle is empty
 */
module.exports.isPositionBundleEmpty = function(bitmap) {
    const ptr0 = passArray8ToWasm0(bitmap, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.isPositionBundleEmpty(ptr0, len0);
    return ret !== 0;
};

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
module.exports.getTickArrayStartTickIndex = function(tick_index, tick_spacing) {
    const ret = wasm.getTickArrayStartTickIndex(tick_index, tick_spacing);
    return ret;
};

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
module.exports.tickIndexToSqrtPrice = function(tick_index) {
    const ret = wasm.tickIndexToSqrtPrice(tick_index);
    return ret;
};

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
module.exports.sqrtPriceToTickIndex = function(sqrt_price) {
    const ret = wasm.sqrtPriceToTickIndex(sqrt_price);
    return ret;
};

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
module.exports.getInitializableTickIndex = function(tick_index, tick_spacing, round_up) {
    const ret = wasm.getInitializableTickIndex(tick_index, tick_spacing, isLikeNone(round_up) ? 0xFFFFFF : round_up ? 1 : 0);
    return ret;
};

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
module.exports.getPrevInitializableTickIndex = function(tick_index, tick_spacing) {
    const ret = wasm.getPrevInitializableTickIndex(tick_index, tick_spacing);
    return ret;
};

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
module.exports.getNextInitializableTickIndex = function(tick_index, tick_spacing) {
    const ret = wasm.getNextInitializableTickIndex(tick_index, tick_spacing);
    return ret;
};

/**
 * Check if a tick is in-bounds.
 *
 * # Parameters
 * - `tick_index` - A i32 integer representing the tick integer
 *
 * # Returns
 * - A boolean value indicating if the tick is in-bounds
 */
module.exports.isTickIndexInBounds = function(tick_index) {
    const ret = wasm.isTickIndexInBounds(tick_index);
    return ret !== 0;
};

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
module.exports.isTickInitializable = function(tick_index, tick_spacing) {
    const ret = wasm.isTickInitializable(tick_index, tick_spacing);
    return ret !== 0;
};

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
module.exports.invertTickIndex = function(tick_index) {
    const ret = wasm.invertTickIndex(tick_index);
    return ret;
};

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
module.exports.invertSqrtPrice = function(sqrt_price) {
    const ret = wasm.invertSqrtPrice(sqrt_price);
    return ret;
};

/**
 * Get the minimum and maximum tick index that can be initialized.
 *
 * # Parameters
 * - `tick_spacing` - A i32 integer representing the tick spacing
 *
 * # Returns
 * - A TickRange struct containing the lower and upper tick index
 */
module.exports.getFullRangeTickIndexes = function(tick_spacing) {
    const ret = wasm.getFullRangeTickIndexes(tick_spacing);
    return ret;
};

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
module.exports.orderTickIndexes = function(tick_index_1, tick_index_2) {
    const ret = wasm.orderTickIndexes(tick_index_1, tick_index_2);
    return ret;
};

/**
 * Check if a whirlpool is a full-range only pool.
 *
 * # Parameters
 * - `tick_spacing` - A u16 integer representing the tick spacing
 *
 * # Returns
 * - A boolean value indicating if the whirlpool is a full-range only pool
 */
module.exports.isFullRangeOnly = function(tick_spacing) {
    const ret = wasm.isFullRangeOnly(tick_spacing);
    return ret !== 0;
};

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_2.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
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
module.exports.getTickIndexInArray = function(tick_index, tick_array_start_index, tick_spacing) {
    const ret = wasm.getTickIndexInArray(tick_index, tick_array_start_index, tick_spacing);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] >>> 0;
};

module.exports._POSITION_BUNDLE_SIZE = function() {
    const ret = wasm._POSITION_BUNDLE_SIZE();
    return ret >>> 0;
};

module.exports._TICK_ARRAY_NOT_EVENLY_SPACED = function() {
    const ret = wasm._TICK_ARRAY_NOT_EVENLY_SPACED();
    return ret;
};

module.exports._TICK_INDEX_OUT_OF_BOUNDS = function() {
    const ret = wasm._TICK_INDEX_OUT_OF_BOUNDS();
    return ret;
};

module.exports._INVALID_TICK_INDEX = function() {
    const ret = wasm._INVALID_TICK_INDEX();
    return ret;
};

module.exports._ARITHMETIC_OVERFLOW = function() {
    const ret = wasm._ARITHMETIC_OVERFLOW();
    return ret;
};

module.exports._AMOUNT_EXCEEDS_MAX_U64 = function() {
    const ret = wasm._AMOUNT_EXCEEDS_MAX_U64();
    return ret;
};

module.exports._SQRT_PRICE_OUT_OF_BOUNDS = function() {
    const ret = wasm._SQRT_PRICE_OUT_OF_BOUNDS();
    return ret;
};

module.exports._TICK_SEQUENCE_EMPTY = function() {
    const ret = wasm._TICK_SEQUENCE_EMPTY();
    return ret;
};

module.exports._SQRT_PRICE_LIMIT_OUT_OF_BOUNDS = function() {
    const ret = wasm._SQRT_PRICE_LIMIT_OUT_OF_BOUNDS();
    return ret;
};

module.exports._INVALID_SQRT_PRICE_LIMIT_DIRECTION = function() {
    const ret = wasm._INVALID_SQRT_PRICE_LIMIT_DIRECTION();
    return ret;
};

module.exports._ZERO_TRADABLE_AMOUNT = function() {
    const ret = wasm._ZERO_TRADABLE_AMOUNT();
    return ret;
};

module.exports._INVALID_TIMESTAMP = function() {
    const ret = wasm._INVALID_TIMESTAMP();
    return ret;
};

module.exports._INVALID_TRANSFER_FEE = function() {
    const ret = wasm._INVALID_TRANSFER_FEE();
    return ret;
};

module.exports._INVALID_SLIPPAGE_TOLERANCE = function() {
    const ret = wasm._INVALID_SLIPPAGE_TOLERANCE();
    return ret;
};

module.exports._TICK_INDEX_NOT_IN_ARRAY = function() {
    const ret = wasm._TICK_INDEX_NOT_IN_ARRAY();
    return ret;
};

module.exports._NUM_REWARDS = function() {
    const ret = wasm._NUM_REWARDS();
    return ret >>> 0;
};

module.exports._FEE_RATE_DENOMINATOR = function() {
    const ret = wasm._FEE_RATE_DENOMINATOR();
    return ret >>> 0;
};

module.exports._TICK_ARRAY_SIZE = function() {
    const ret = wasm._TICK_ARRAY_SIZE();
    return ret >>> 0;
};

module.exports._FULL_RANGE_ONLY_TICK_SPACING_THRESHOLD = function() {
    const ret = wasm._FULL_RANGE_ONLY_TICK_SPACING_THRESHOLD();
    return ret;
};

module.exports._MIN_TICK_INDEX = function() {
    const ret = wasm._MIN_TICK_INDEX();
    return ret;
};

module.exports._MAX_TICK_INDEX = function() {
    const ret = wasm._MAX_TICK_INDEX();
    return ret;
};

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
module.exports.isPositionInRange = function(current_sqrt_price, tick_index_1, tick_index_2) {
    const ret = wasm.isPositionInRange(current_sqrt_price, tick_index_1, tick_index_2);
    return ret !== 0;
};

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
module.exports.positionStatus = function(current_sqrt_price, tick_index_1, tick_index_2) {
    const ret = wasm.positionStatus(current_sqrt_price, tick_index_1, tick_index_2);
    return ret;
};

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
module.exports.positionRatio = function(current_sqrt_price, tick_index_1, tick_index_2) {
    const ret = wasm.positionRatio(current_sqrt_price, tick_index_1, tick_index_2);
    return ret;
};

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
module.exports.priceToSqrtPrice = function(price, decimals_a, decimals_b) {
    const ret = wasm.priceToSqrtPrice(price, decimals_a, decimals_b);
    return ret;
};

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
module.exports.sqrtPriceToPrice = function(sqrt_price, decimals_a, decimals_b) {
    const ret = wasm.sqrtPriceToPrice(sqrt_price, decimals_a, decimals_b);
    return ret;
};

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
module.exports.invertPrice = function(price, decimals_a, decimals_b) {
    const ret = wasm.invertPrice(price, decimals_a, decimals_b);
    return ret;
};

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
module.exports.tickIndexToPrice = function(tick_index, decimals_a, decimals_b) {
    const ret = wasm.tickIndexToPrice(tick_index, decimals_a, decimals_b);
    return ret;
};

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
module.exports.priceToTickIndex = function(price, decimals_a, decimals_b) {
    const ret = wasm.priceToTickIndex(price, decimals_a, decimals_b);
    return ret;
};

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
module.exports.tryGetAmountDeltaA = function(sqrt_price_1, sqrt_price_2, liquidity, round_up) {
    const ret = wasm.tryGetAmountDeltaA(sqrt_price_1, sqrt_price_2, liquidity, round_up);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryGetAmountDeltaB = function(sqrt_price_1, sqrt_price_2, liquidity, round_up) {
    const ret = wasm.tryGetAmountDeltaB(sqrt_price_1, sqrt_price_2, liquidity, round_up);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryGetNextSqrtPriceFromA = function(current_sqrt_price, current_liquidity, amount, specified_input) {
    const ret = wasm.tryGetNextSqrtPriceFromA(current_sqrt_price, current_liquidity, amount, specified_input);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.tryGetNextSqrtPriceFromB = function(current_sqrt_price, current_liquidity, amount, specified_input) {
    const ret = wasm.tryGetNextSqrtPriceFromB(current_sqrt_price, current_liquidity, amount, specified_input);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.tryApplyTransferFee = function(amount, transfer_fee) {
    const ret = wasm.tryApplyTransferFee(amount, transfer_fee);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryReverseApplyTransferFee = function(amount, transfer_fee) {
    const ret = wasm.tryReverseApplyTransferFee(amount, transfer_fee);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryGetMaxAmountWithSlippageTolerance = function(amount, slippage_tolerance_bps) {
    const ret = wasm.tryGetMaxAmountWithSlippageTolerance(amount, slippage_tolerance_bps);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryGetMinAmountWithSlippageTolerance = function(amount, slippage_tolerance_bps) {
    const ret = wasm.tryGetMinAmountWithSlippageTolerance(amount, slippage_tolerance_bps);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryApplySwapFee = function(amount, fee_rate) {
    const ret = wasm.tryApplySwapFee(amount, fee_rate);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.tryReverseApplySwapFee = function(amount, fee_rate) {
    const ret = wasm.tryReverseApplySwapFee(amount, fee_rate);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return BigInt.asUintN(64, ret[0]);
};

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
module.exports.swapQuoteByInputToken = function(token_in, specified_token_a, slippage_tolerance_bps, whirlpool, tick_arrays, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.swapQuoteByInputToken(token_in, specified_token_a, slippage_tolerance_bps, whirlpool, tick_arrays, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.swapQuoteByOutputToken = function(token_out, specified_token_a, slippage_tolerance_bps, whirlpool, tick_arrays, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.swapQuoteByOutputToken(token_out, specified_token_a, slippage_tolerance_bps, whirlpool, tick_arrays, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.collectFeesQuote = function(whirlpool, position, tick_lower, tick_upper, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.collectFeesQuote(whirlpool, position, tick_lower, tick_upper, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.decreaseLiquidityQuote = function(liquidity_delta, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.decreaseLiquidityQuote(liquidity_delta, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.decreaseLiquidityQuoteA = function(token_amount_a, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.decreaseLiquidityQuoteA(token_amount_a, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.decreaseLiquidityQuoteB = function(token_amount_b, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.decreaseLiquidityQuoteB(token_amount_b, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.increaseLiquidityQuote = function(liquidity_delta, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.increaseLiquidityQuote(liquidity_delta, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.increaseLiquidityQuoteA = function(token_amount_a, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.increaseLiquidityQuoteA(token_amount_a, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.increaseLiquidityQuoteB = function(token_amount_b, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, transfer_fee_a, transfer_fee_b) {
    const ret = wasm.increaseLiquidityQuoteB(token_amount_b, slippage_tolerance_bps, current_sqrt_price, tick_index_1, tick_index_2, isLikeNone(transfer_fee_a) ? 0 : addToExternrefTable0(transfer_fee_a), isLikeNone(transfer_fee_b) ? 0 : addToExternrefTable0(transfer_fee_b));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

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
module.exports.collectRewardsQuote = function(whirlpool, position, tick_lower, tick_upper, current_timestamp, transfer_fee_1, transfer_fee_2, transfer_fee_3) {
    const ret = wasm.collectRewardsQuote(whirlpool, position, tick_lower, tick_upper, current_timestamp, isLikeNone(transfer_fee_1) ? 0 : addToExternrefTable0(transfer_fee_1), isLikeNone(transfer_fee_2) ? 0 : addToExternrefTable0(transfer_fee_2), isLikeNone(transfer_fee_3) ? 0 : addToExternrefTable0(transfer_fee_3));
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

module.exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

module.exports.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
    const v = arg1;
    const ret = typeof(v) === 'bigint' ? v : undefined;
    getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
};

module.exports.__wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return ret;
};

module.exports.__wbg_get_ef828680c64da212 = function() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
}, arguments) };

module.exports.__wbg_buffer_ccaed51a635d8a2d = function(arg0) {
    const ret = arg0.buffer;
    return ret;
};

module.exports.__wbg_get_5419cf6b954aa11d = function(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
};

module.exports.__wbg_length_f217bbbf7e8e4df4 = function(arg0) {
    const ret = arg0.length;
    return ret;
};

module.exports.__wbg_new_034f913e7636e987 = function() {
    const ret = new Array();
    return ret;
};

module.exports.__wbindgen_number_new = function(arg0) {
    const ret = arg0;
    return ret;
};

module.exports.__wbindgen_is_function = function(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
};

module.exports.__wbindgen_is_object = function(arg0) {
    const val = arg0;
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
};

module.exports.__wbg_next_13b477da1eaa3897 = function(arg0) {
    const ret = arg0.next;
    return ret;
};

module.exports.__wbg_next_b06e115d1b01e10b = function() { return handleError(function (arg0) {
    const ret = arg0.next();
    return ret;
}, arguments) };

module.exports.__wbg_done_983b5ffcaec8c583 = function(arg0) {
    const ret = arg0.done;
    return ret;
};

module.exports.__wbg_value_2ab8a198c834c26a = function(arg0) {
    const ret = arg0.value;
    return ret;
};

module.exports.__wbg_iterator_695d699a44d6234c = function() {
    const ret = Symbol.iterator;
    return ret;
};

module.exports.__wbg_call_a9ef466721e824f2 = function() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments) };

module.exports.__wbg_new_e69b5f66fda8f13c = function() {
    const ret = new Object();
    return ret;
};

module.exports.__wbindgen_number_get = function(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
};

module.exports.__wbindgen_is_undefined = function(arg0) {
    const ret = arg0 === undefined;
    return ret;
};

module.exports.__wbg_set_425e70f7c64ac962 = function(arg0, arg1, arg2) {
    arg0[arg1 >>> 0] = arg2;
};

module.exports.__wbg_isArray_6f3b47f09adb61b5 = function(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
};

module.exports.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = function(arg0) {
    let result;
    try {
        result = arg0 instanceof ArrayBuffer;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

module.exports.__wbg_isSafeInteger_b9dff570f01a9100 = function(arg0) {
    const ret = Number.isSafeInteger(arg0);
    return ret;
};

module.exports.__wbg_new_fec2611eb9180f95 = function(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
};

module.exports.__wbg_set_ec2fcf81bc573fd9 = function(arg0, arg1, arg2) {
    arg0.set(arg1, arg2 >>> 0);
};

module.exports.__wbg_length_9254c4bd3b9f23c4 = function(arg0) {
    const ret = arg0.length;
    return ret;
};

module.exports.__wbg_instanceof_Uint8Array_df0761410414ef36 = function(arg0) {
    let result;
    try {
        result = arg0 instanceof Uint8Array;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

module.exports.__wbindgen_bigint_from_u64 = function(arg0) {
    const ret = BigInt.asUintN(64, arg0);
    return ret;
};

module.exports.__wbindgen_shr = function(arg0, arg1) {
    const ret = arg0 >> arg1;
    return ret;
};

module.exports.__wbindgen_bigint_from_i64 = function(arg0) {
    const ret = arg0;
    return ret;
};

module.exports.__wbindgen_jsval_eq = function(arg0, arg1) {
    const ret = arg0 === arg1;
    return ret;
};

module.exports.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
    const ret = arg0 == arg1;
    return ret;
};

module.exports.__wbindgen_boolean_get = function(arg0) {
    const v = arg0;
    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

module.exports.__wbg_String_88810dfeb4021902 = function(arg0, arg1) {
    const ret = String(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

module.exports.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return ret;
};

module.exports.__wbindgen_bigint_from_u128 = function(arg0, arg1) {
    const ret = BigInt.asUintN(64, arg0) << BigInt(64) | BigInt.asUintN(64, arg1);
    return ret;
};

module.exports.__wbg_getwithrefkey_5e6d9547403deab8 = function(arg0, arg1) {
    const ret = arg0[arg1];
    return ret;
};

module.exports.__wbg_set_841ac57cff3d672b = function(arg0, arg1, arg2) {
    arg0[arg1] = arg2;
};

module.exports.__wbindgen_as_number = function(arg0) {
    const ret = +arg0;
    return ret;
};

module.exports.__wbg_getwithrefkey_edc2c8960f0f1191 = function(arg0, arg1) {
    const ret = arg0[arg1];
    return ret;
};

module.exports.__wbindgen_in = function(arg0, arg1) {
    const ret = arg0 in arg1;
    return ret;
};

module.exports.__wbindgen_is_bigint = function(arg0) {
    const ret = typeof(arg0) === 'bigint';
    return ret;
};

module.exports.__wbindgen_is_array = function(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
};

module.exports.__wbindgen_init_externref_table = function() {
    const table = wasm.__wbindgen_export_2;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

const path = require('path').join(__dirname, 'orca_whirlpools_core_js_bindings_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

wasm.__wbindgen_start();

